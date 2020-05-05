from marshmallow import Schema, fields, validate

class OverallScoreSchema(Schema):
    id = fields.Int(dump_only=True)
    score_experience = fields.Int(required=True,validate=validate.Range(min=1,max=100))
    score_current_position = fields.Int(required=True,validate=validate.Range(min=1,max=100))
    score_skill = fields.Int(required=True,validate=validate.Range(min=1,max=100))
    score_honor = fields.Int(required=True,validate=validate.Range(min=1,max=100))
    score_license = fields.Int(required=True,validate=validate.Range(min=1,max=100))
    score_education = fields.Int(required=True,validate=validate.Range(min=1,max=100))
    priority_univ = fields.Str(required=True)

    job = fields.Nested("JobSchema",only=("id","title_job",))
