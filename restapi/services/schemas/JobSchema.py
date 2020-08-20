from marshmallow import Schema, fields
from services.schemas.ApplicantSchema import ApplicantSchema
from services.schemas.OverallScoreSchema import OverallScoreSchema

class JobSchema(Schema):
    id = fields.Int(dump_only=True)
    url = fields.Url()
    image = fields.Url()
    title_job = fields.Str()
    company = fields.Str()
    location = fields.Str()
    posted = fields.Str()
    contents = fields.Str()
    contents_text = fields.Str()

    concepts = fields.Str()
    keywords = fields.Str()
    created_at = fields.DateTime()

    applicants = fields.List(fields.Nested("ApplicantSchema",exclude=("job",)))
    overall_score = fields.Nested("OverallScoreSchema",exclude=("job",))
    user = fields.Nested("UserSchema",only=("id","email"))
