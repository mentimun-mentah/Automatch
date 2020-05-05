from marshmallow import Schema, fields, validate, validates, ValidationError

class RegisterSchema(Schema):
    username = fields.Str(required=True)
    email = fields.Email(required=True)
    password = fields.Str(required=True,validate=validate.Length(min=6))
    confirm_password = fields.Str(required=True,validate=validate.Length(min=6))

    @validates('username')
    def validate_username(self,value):
        if not value: raise ValidationError('Missing data for required field.')
