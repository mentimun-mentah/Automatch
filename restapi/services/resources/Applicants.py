from flask_restful import Resource, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_sqlalchemy import orm
from services.schemas.ScrapeUrlSchema import ScrapeUrlSchema
from services.schemas.ApplicantSchema import ApplicantSchema
from services.schemas.SearchApplicantSchema import SearchApplicantSchema
from services.libs.ScrapingProfile import ProfileLinkedin
from services.libs.MatchCalculation import MatchCalculation
from services.models.JobModel import Jobs
from services.models.ApplicantModel import Applicants
from services.models.ExperienceModel import Experiences
from services.models.EducationModel import Educations
from services.models.DetailScoreModel import DetailScore

_scrape_schema = ScrapeUrlSchema(only=("url_applicants",))

class ScrapeApplicants(Resource):
    @jwt_required
    def post(self,job_id: int):
        job = Jobs.query.options(orm.joinedload('user')).filter_by(id=job_id).first_or_404('Upps job not found')
        if job.user_id != get_jwt_identity():
            return {"message":"You can't access this job!"}, 400

        data = request.get_json()
        args = _scrape_schema.load(data)
        max_url_profile = job.user.url_profile
        if (len(job.applicants) + len(args['url_applicants'])) > max_url_profile:
            return {"message":f"Upss you can't scrape applicant greater than {max_url_profile}, please upgrade your account."}, 400

        applicants = ProfileLinkedin(args['url_applicants'])
        if not applicants.valid_url:
            return {"message":"Upss only profile LinkedIn you can provide."}, 400
        if not applicants.valid_scrape_url:
            return {"message":"Upps invalid url profile LinkedIn."}, 400

        data = applicants.get_content()
        # save to db
        for raw in data:
            raw_applicants = dict()
            raw_experiences = dict()
            raw_educations = dict()
            for key,value in raw.items():
                if key != "experiences" and key != "educations":
                    raw_applicants[key] = value
                if key == "experiences":
                    raw_experiences = value.values()
                if key == "educations":
                    raw_educations = value.values()

            raw_applicants['languages'] = ','.join(raw_applicants['languages'])
            raw_applicants['licenses'] = ','.join(raw_applicants['licenses'])
            raw_applicants['skills'] = ','.join(raw_applicants['skills'])
            raw_applicants['honors'] = ','.join(raw_applicants['honors'])

            # save applicants
            applicant = Applicants(**raw_applicants,job_id=job.id)
            applicant.save_to_db()
            for exp in raw_experiences:
                # save experiences
                experience = Experiences(**exp,applicant_id=applicant.id)
                experience.save_to_db()
            for edu in raw_educations:
                # save educations
                education = Educations(**edu,applicant_id=applicant.id)
                education.save_to_db()

        return {"message":"Applicants successfully added."}, 201

class GetApplicant(Resource):
    @jwt_required
    def get(self,id: int):
        applicant = Applicants.query.options(orm.joinedload('job'),
            orm.joinedload('educations'),
            orm.joinedload('experiences')).filter_by(id=id).first_or_404("Upps applicant not found")
        if applicant.job.user.id != get_jwt_identity():
            return {"message":"You can't access this applicant!"}, 400

        schema_applicant = ApplicantSchema()
        return schema_applicant.dump(applicant), 200

    @jwt_required
    def delete(self,id: int):
        applicant = Applicants.query.options(orm.joinedload('job')).filter_by(id=id).first_or_404("Upps applicant not found")
        if applicant.job.user.id != get_jwt_identity():
            return {"message":"You can't access this applicant!"}, 400

        applicant.delete_from_db()
        return {"message":"Applicant success deleted."}, 200

class QualifyApplicant(Resource):
    @jwt_required
    def put(self,id: int):
        applicant = Applicants.query.options(orm.joinedload('job')).filter_by(id=id).first_or_404("Upps applicant not found")
        if applicant.job.user.id != get_jwt_identity():
            return {"message":"You can't access this applicant!"}, 400

        if not applicant.qualify:
            applicant.qualify = True
            message = "Applicant updated to qualify"
        else:
            applicant.qualify = False
            message = "Applicant updated to not qualify"
        applicant.save_to_db()
        return {"message": message}, 200

class SearchApplicant(Resource):
    @jwt_required
    def get(self):
        data = request.args
        schema_search = SearchApplicantSchema()
        schema_search.load(data)
        result = Applicants.query.options(orm.joinedload('educations'),
            orm.joinedload('experiences'),
            orm.joinedload('detail_score')).join(Jobs).filter(
            Applicants.name.like("%" + data.get('s') + "%"),
            Applicants.job_id == data.get('job_id'),
            Jobs.user_id == get_jwt_identity()).all()
        schema_applicant = ApplicantSchema(many=True)
        return schema_applicant.dump(result), 200

class GetScoreApplicant(Resource):
    @jwt_required
    def get(self,job_id: int):
        job = Jobs.query.filter_by(id=job_id).first_or_404("Upps job not found!")
        if job.user_id != get_jwt_identity():
            return {"message":"You can't access this job!"}, 400
        if not job.keywords and not job.concepts:
            return {"message":"Job doesn't have keywords and concepts!"}, 400

        applicants = Applicants.query.options(orm.joinedload('educations'),orm.joinedload('experiences')).filter_by(job_id=job.id).all()
        if len(applicants) == 0:
            return {"message":"Upss this job does not have an applicant"}, 400

        overall_score = job.overall_score
        for applicant in applicants:
            # check if applicant not have score yet.
            if not applicant.score:
                current_job = applicant.current_job
                license = applicant.licenses
                skill = applicant.skills
                honor = applicant.honors
                educations = []
                experiences = []
                for education in applicant.educations:
                    if education.study:
                        educations.append(education.study)
                for experience in applicant.experiences:
                    if experience.job:
                        experiences.append(experience.job)

                # calculation current position
                if current_job:
                    raw_current_job = MatchCalculation.calculation(current_job,job.title_job)
                    calc_current_job = (raw_current_job * overall_score.score_current_position) / 100
                else:
                    calc_current_job = 0
                # calculation experience
                if experiences:
                    experiences = ','.join(experiences)
                    raw_experience = MatchCalculation.calculation(experiences,job.concepts,num_100=True)
                    calc_experience = (raw_experience * overall_score.score_experience) / 100
                else:
                    calc_experience = 0
                # calculation skill
                if skill:
                    raw_skill = MatchCalculation.calculation(skill,job.keywords,num_100=True)
                    calc_skill = (raw_skill * overall_score.score_skill) / 100
                else:
                    calc_skill = 0
                # calculation education
                if educations:
                    educations = ','.join(educations)
                    raw_education = MatchCalculation.calculation(educations,job.concepts,num_100=True)
                    calc_education = (raw_education * overall_score.score_education) / 100
                else:
                    calc_education = 0
                # calculation license
                if license:
                    raw_license = MatchCalculation.calculation(license,job.concepts,num_100=True)
                    calc_license = (raw_license * overall_score.score_license) / 100
                else:
                    calc_license = 0
                # calculation honor
                if honor:
                    score_honor = overall_score.score_honor
                    length = len(honor.split(','))
                    if length >= 13: calc_honor = score_honor / 1
                    elif length >= 8: calc_honor = score_honor / 2
                    elif length >= 3: calc_honor = score_honor / 3
                else:
                    calc_honor = 0

                hasil = calc_current_job + calc_experience + calc_skill + calc_education + calc_license + calc_honor
                applicant.score = round(hasil,2)
                applicant.save_to_db()
                detail_score = DetailScore(calc_experience,calc_current_job,calc_skill,calc_education,calc_license,calc_honor,applicant.id)
                detail_score.save_to_db()

        return {"message":"All applicant has been scored"}, 200
