import os, uuid
from typing import Dict
from datetime import datetime
from sqlalchemy import extract
from flask_sqlalchemy import orm
from flask_restful import Resource, request
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    get_jti,
    get_raw_jwt,
    get_jwt_identity,
    fresh_jwt_required,
    jwt_refresh_token_required,
    jwt_required
)
from services.models.UserModel import Users
from services.models.JobModel import Jobs
from services.models.ConfirmationModel import Confirmation
from services.schemas.UserSchema import UserSchema
from services.schemas.RegisterSchema import RegisterSchema
from services.schemas.UpdatePasswordSchema import UpdatePasswordSchema
from services.schemas.ChangeAvatarSchema import ChangeAvatarSchema
from services.libs.MailSmtp import MailSmtpException
from services.serve import revoked_store
from marshmallow import ValidationError

_ACCESS_EXPIRES = 15 * 60  # 15 minute
_REFRESH_EXPIRES = 30 * 86400  # 30 days

class RegisterUser(Resource):
    def post(self):
        register_schema = RegisterSchema()
        data = request.get_json()
        args = register_schema.load(data)
        if args['password'] != args['confirm_password']:
            raise ValidationError({'password':['Your password and confirmation password do not match.']})

        errors = RegisterUser.validation_user(args)
        if errors: return errors, 400
        user = Users(args['username'],args['email'],args['password'])
        user.save_to_db()
        try:
            confirmation = Confirmation(user.id)
            confirmation.save_to_db()
            confirmation.send_email_confirm()
        except MailSmtpException as err:
            user.delete_from_db()
            return {"error":str(err)}, 500

        return {"message":"Check your email to activated user."}, 201

    @staticmethod
    def validation_user(args: Dict[str,str]) -> Dict[str,str]:
        errors = dict()
        if Users.query.filter_by(username=args['username']).first():
            errors['username'] = ['Username already use.']
        if Users.query.filter_by(email=args['email']).first():
            errors['email'] = ['Email already use.']
        return errors

class ConfirmUser(Resource):
    def get(self,token: str):
        confirmation = Confirmation.query.filter_by(id=token).first_or_404(description='Token not found')
        if confirmation.activated:
            return {"message":"Your account already activated."}, 200

        if not confirmation.token_is_expired:
            confirmation.activated = True
            confirmation.save_to_db()
            return {"message":f"Your email {confirmation.user.email} has been activated"},200
        return {"message":"Upps token expired, you can resend email confirm again"}, 400

class ResendEmail(Resource):
    def post(self):
        _user_schema = UserSchema(only=("email",))
        data = request.get_json()
        args = _user_schema.load(data)
        user = Users.query.filter_by(email=args['email']).first_or_404(description='Email not found.')
        if user.confirmation.activated:
            return {"message":"Your account already activated."}, 200

        if user.confirmation.resend_expired is None or user.confirmation.resend_is_expired:
            try:
                user.confirmation.send_email_confirm()
                user.confirmation.change_expired()
                user.confirmation.generate_resend_expired()
                user.confirmation.save_to_db()
                return {"message":"Email confirmation has send"}, 200
            except MailSmtpException as err:
                return {"error":str(err)}, 500
        return {"error":"You can try 5 minute later"}, 400

class LoginUser(Resource):
    def post(self):
        _user_schema = UserSchema(only=("email","password",))
        data = request.get_json()
        args = _user_schema.load(data)
        user = Users.query.filter_by(email=args['email']).first()
        if user and user.check_pass(args['password']):
            if user.confirmation.activated:
                access_token = create_access_token(identity=user.id,fresh=True)
                refresh_token = create_refresh_token(identity=user.id)
                # encode jti token to store database redis
                access_jti = get_jti(encoded_token=access_token)
                refresh_jti = get_jti(encoded_token=refresh_token)
                # store to database redis
                revoked_store.set(access_jti, 'false', _ACCESS_EXPIRES)
                revoked_store.set(refresh_jti, 'false', _REFRESH_EXPIRES)
                return {"access_token": access_token,"refresh_token": refresh_token,"username": user.username}, 200
            return {"message":"Check your email to activated user."}, 400
        return {"message":"Invalid credential"}, 400

class RefreshToken(Resource):
    @jwt_refresh_token_required
    def post(self):
        user_id = get_jwt_identity()
        new_token = create_access_token(identity=user_id,fresh=False)
        access_jti = get_jti(new_token)
        revoked_store.set(access_jti, 'false', _ACCESS_EXPIRES)
        return {"access_token": new_token}, 200

class LogoutUser(Resource):
    @jwt_required
    def delete(self):
        jti = get_raw_jwt()['jti']
        revoked_store.set(jti, 'true', _ACCESS_EXPIRES)
        return {"message":"Successfully logged out."}, 200

class UpdatePassword(Resource):
    @fresh_jwt_required
    def put(self):
        user = Users.query.get(get_jwt_identity())
        update_schema = UpdatePasswordSchema()
        data = request.get_json()
        args = update_schema.load(data)
        if args['new_password'] != args['confirm_password']:
            raise ValidationError({'new_password':['Your new password and confirmation password do not match.']})

        if not user.check_pass(args['password']):
            raise ValidationError({'password':['Your password incorrect.']})

        user.hash_password(args['new_password'])
        user.change_update_time()
        user.save_to_db()
        return {"message":"Password has been updated."}, 200

class ChangeAvatar(Resource):
    @jwt_required
    def put(self):
        _diravatar = os.path.join(os.path.dirname(__file__),'../static/avatars/')
        avatar_schema = ChangeAvatarSchema()
        avatar = avatar_schema.load(request.files)
        user = Users.query.get(get_jwt_identity())
        if user.avatar != 'default.png':
            os.remove(os.path.join(_diravatar,user.avatar))

        image = avatar['avatar']
        ext = image.filename.split('.')[-1]
        filename = uuid.uuid4().hex + '.' + ext
        # save image to directory avatar
        image.save(os.path.join(_diravatar,filename))
        image.close()
        # save filename to database
        user.avatar = filename
        user.change_update_time()
        user.save_to_db()
        return {"message":"Image profile has updated."}, 200

class UpdateProfile(Resource):
    @jwt_required
    def put(self):
        user = Users.query.get(get_jwt_identity())
        user_schema = UserSchema(only=("username","company_name","company_site","position",))
        data = request.get_json()
        args = user_schema.load(data)
        user.update_profile(**args)
        user.change_update_time()
        user.save_to_db()
        return {"message":"Profile successfully updated."}, 200

class GetUser(Resource):
    @jwt_required
    def get(self):
        _user_schema = UserSchema(exclude=("password",))
        user = Users.query.options(orm.joinedload('jobs')).get(get_jwt_identity())
        return _user_schema.dump(user), 200

class DashboardUser(Resource):
    @jwt_required
    def get(self):
        jobs = Jobs.query.options(orm.joinedload('applicants'),
            orm.joinedload('applicants.experiences')).filter_by(user_id=get_jwt_identity()).all()
        # for header dashboard
        total_applicant = 0
        published_job = len(jobs)
        qualify_applicant = 0
        disqualify_applicant = 0

        for job in jobs:
            total_applicant += len(job.applicants)
            for applicant in job.applicants:
                if applicant.qualify:
                    qualify_applicant += 1
                else:
                    disqualify_applicant += 1

        # for chart dashboard 1 month
        jobs_one_month = Jobs.query.filter(
            Jobs.user_id == get_jwt_identity(),
            extract('month',Jobs.created_at) == datetime.now().month).all()

        job_summary = list()
        applicant_summary = list()
        applicant_work = list()

        for job in jobs_one_month:
            # chart dashboard
            job_summary.append(job.title_job)
            applicant_summary.append(len(job.applicants))
            for applicant in job.applicants:
                # get applicant experience
                length_work = list()
                for exp in applicant.experiences:
                    length_work.append(exp.date_employed)
                # calculate length work
                try:
                    start_work = int(length_work[-1].split(' ')[0])
                except Exception:
                    start_work = int(length_work[-1].split(' ')[1])
                total_work = int(datetime.now().strftime('%Y')) - start_work
                applicant_work.append(total_work)

        result = dict(
            total_applicant = total_applicant,
            published_job = published_job,
            qualify_applicant = qualify_applicant,
            disqualify_applicant = disqualify_applicant,
            job_summary = dict(zip(job_summary,applicant_summary)),
            length_of_work = {
                '< 1 years': len([x for x in applicant_work if x == 0]),
                '1 - 3 years': len([x for x in applicant_work if x >= 1 and x <= 3]),
                '3 - 5 years': len([x for x in applicant_work if x >= 3 and x <= 5]),
                '> 5 years': len([x for x in applicant_work if x > 5])
            }

        )

        return result, 200

class DashboardJobs(Resource):
    @jwt_required
    def get(self):
        per_page = 5
        page_args  = request.args.get('page',default=None,type=int)
        q_args = request.args.get('q',default=None,type=str)
        if page_args: page = page_args
        else: page = 1

        if q_args:
            jobs = Jobs.query.options(orm.joinedload('applicants')).filter(
                Jobs.title_job.like('%' + q_args + '%'),
                Jobs.user_id == get_jwt_identity()).order_by(Jobs.id.desc()).paginate(page,per_page,error_out=False)
        else:
            jobs = Jobs.query.options(orm.joinedload('applicants')).filter_by(user_id=get_jwt_identity()).order_by(
                Jobs.id.desc()).paginate(page,per_page,error_out=False)

        job_id = [x.id for x in jobs.items]
        title_jobs = [x.title_job for x in jobs.items]
        created_at = [x.created_at.strftime("%-d %B %Y ~ %H.%M") for x in jobs.items]
        total_candidate = [len(x.applicants) for x in jobs.items]

        qualify_applicant = list()
        for job in jobs.items:
            qualify = 0
            for applicant in job.applicants:
                if applicant and applicant.qualify:
                    qualify += 1
            qualify_applicant.append(qualify)

        data = list()
        for job_id,title,date,total,qualify in zip(job_id,title_jobs,created_at,total_candidate,qualify_applicant):
            raw = {
                'id': job_id,
                'title_jobs': title,
                'created_at': date,
                'total_candidate': total,
                'qualify_applicant': qualify
            }
            data.append(raw)

        result = dict(
            data = data,
            next_num = jobs.next_num,
            prev_num = jobs.prev_num,
            page = jobs.page,
            iter_pages = [x for x in jobs.iter_pages()]
        )

        return result, 200
