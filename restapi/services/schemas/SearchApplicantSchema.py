from marshmallow import Schema, fields, validates, ValidationError

class SearchApplicantSchema(Schema):
    s = fields.Str(required=True)
    job_id = fields.Int(required=True)

    @validates('s')
    def validate_s(self,value):
        if not value: raise ValidationError('Missing data for required field.')
