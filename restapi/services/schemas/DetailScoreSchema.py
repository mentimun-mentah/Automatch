from marshmallow import Schema, fields

class DetailScoreSchema(Schema):
    id = fields.Int(dump_only=True)
    experience = fields.Float()
    current_position = fields.Float()
    skill = fields.Float()
    education = fields.Float()
    license = fields.Float()
    honor = fields.Float()

    applicant = fields.Nested("ApplicantSchema",only=("id","name",))
