from marshmallow import Schema, fields
from services.schemas.ExperienceSchema import ExperienceSchema
from services.schemas.EducationSchema import EducationSchema
from services.schemas.DetailScoreSchema import DetailScoreSchema

class ApplicantSchema(Schema):
    id = fields.Int(dump_only=True)
    url = fields.Url()
    image = fields.Url()
    name = fields.Str()
    current_job = fields.Str()
    address = fields.Str()
    languages = fields.Str()
    licenses = fields.Str()
    skills = fields.Str()
    honors = fields.Str()
    qualify = fields.Boolean()
    score = fields.Float()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()

    experiences = fields.List(fields.Nested("ExperienceSchema",exclude=("applicant",)))
    educations = fields.List(fields.Nested("EducationSchema",exclude=("applicant",)))
    detail_score = fields.Nested("DetailScoreSchema",exclude=("applicant",))
    job = fields.Nested("JobSchema",only=("id","title_job",))
