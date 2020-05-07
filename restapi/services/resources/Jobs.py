from flask_sqlalchemy import orm
from flask_restful import Resource, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from services.models.JobModel import Jobs
from services.models.UserModel import Users
from services.models.OverallScoreModel import OverallScore
from services.libs.ScrapingJobs import ScrapingJobs
from services.libs.IBM_NLP import IBM_NLP
from services.schemas.ScrapeUrlSchema import ScrapeUrlSchema
from services.schemas.JobSchema import JobSchema
from services.schemas.OverallScoreSchema import OverallScoreSchema

_scrape_schema = ScrapeUrlSchema(only=("url_job",))

class ScrapeJob(Resource):
    @jwt_required
    def post(self):
        data = request.get_json()
        args = _scrape_schema.load(data)
        job = ScrapingJobs(args['url_job'])
        if not job.valid_url:
            return {"message":"Upss job portal not registerd yet."}, 400
        if not job.valid_scrape_url:
            return {"message":"Upps invalid url job portal."}, 400

        user = Users.query.options(orm.joinedload('jobs')).get(get_jwt_identity())
        if len(user.jobs) >= user.url_job:
            return {"message":f"Upss you can't scrape job greater than {user.url_job}, please upgrade your account."}, 400

        data = job.get_content()
        jobs = Jobs(**data,user_id=user.id,url=args['url_job'])
        jobs.save_to_db()
        score = OverallScore(job_id=jobs.id)
        score.save_to_db()

        return {"message":"Job successfully added."}, 201

class DeleteJob(Resource):
    @jwt_required
    def delete(self,id: int):
        job = Jobs.query.filter_by(id=id).first_or_404('Upps job not found')
        if job.user_id != get_jwt_identity():
            return {"message":"You can't delete this job!"}, 400

        job.delete_from_db()
        return {"message":"Job successfully delete."}, 200

class GetConceptKeyword(Resource):
    @jwt_required
    def get(self,id: int):
        job = Jobs.query.filter_by(id=id).first_or_404('Upps job not found')
        if job.user_id != get_jwt_identity():
            return {"message":"You can't access this job!"}, 400

        if job.concepts and job.keywords:
            return {"message":"Job already have concepts and keywords."}, 400

        nlp = IBM_NLP(job.contents_text)
        nlp.check_english_content()
        if not nlp.detector_en:
            nlp.translate_content()

        data = nlp.get_concept_keyword
        job.concepts = ",".join(data['concepts'])
        job.keywords = ",".join(data['keywords'])
        job.save_to_db()

        return {"message":"Keywords and Concepts success added."}, 200

class GetJob(Resource):
    @jwt_required
    def get(self,id: int):
        schema_job = JobSchema(exclude=("user",))
        job = Jobs.query.options(orm.joinedload('applicants.educations'),
            orm.joinedload('applicants.experiences'),
            orm.joinedload('applicants.detail_score')).filter_by(id=id).first_or_404('Upps job not found')
        if job.user_id != get_jwt_identity():
            return {"message":"You can't access this job!"}, 400

        return schema_job.dump(job), 200

class UpdateScore(Resource):
    @jwt_required
    def put(self,job_id: int):
        score = OverallScore.query.options(orm.joinedload('job')).filter_by(job_id=job_id).first_or_404("Upps score not found")
        if score.job.user_id != get_jwt_identity():
            return {"message":"You can't access this score!"}, 400

        schema_score = OverallScoreSchema()
        data = request.get_json()
        args = schema_score.load(data)
        count = sum([x for x in args.values() if type(x) != str])
        if count != 100:
            return {"message":"The calculation results must all be 100%"}, 400
        score.update_score(**args)
        score.save_to_db()
        return {"message":"Overall score has been update."}, 200
