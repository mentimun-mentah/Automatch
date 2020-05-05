from marshmallow import Schema, fields, validate, validates, ValidationError
from services.schemas.JobSchema import JobSchema

class UserSchema(Schema):
    id = fields.Int(dump_only=True)
    username = fields.Str(required=True)
    email = fields.Email(required=True)
    password = fields.Str(required=True,validate=validate.Length(min=6))
    avatar = fields.Str()
    member = fields.Str()
    url_job = fields.Int()
    url_profile = fields.Int()
    company_name = fields.Str(required=True)
    company_site = fields.Url(required=True)
    position = fields.Str(required=True)
    created_at = fields.DateTime()
    updated_at = fields.DateTime()

    jobs = fields.List(fields.Nested("JobSchema",exclude=("user","applicants","overall_score",)))

    @validates('username')
    def validate_username(self,value):
        if not value: raise ValidationError('Missing data for required field.')

    @validates('company_name')
    def validate_company_name(self,value):
        if not value: raise ValidationError('Missing data for required field.')

    @validates('position')
    def validate_position(self,value):
        if not value: raise ValidationError('Missing data for required field.')
