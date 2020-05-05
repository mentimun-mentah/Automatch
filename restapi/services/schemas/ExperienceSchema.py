from marshmallow import Schema, fields

class ExperienceSchema(Schema):
    id = fields.Int(dump_only=True)
    job = fields.Str()
    company_name = fields.Str()
    date_employed = fields.Str()
    detail = fields.Str()

    applicant = fields.Nested("ApplicantSchema",only=("id",))
