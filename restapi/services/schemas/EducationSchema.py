from marshmallow import Schema, fields

class EducationSchema(Schema):
    id = fields.Int(dump_only=True)
    school_name = fields.Str()
    date = fields.Str()
    study = fields.Str()

    applicant = fields.Nested("ApplicantSchema",only=("id",))
