from marshmallow import Schema, fields, validate

class UpdatePasswordSchema(Schema):
    password = fields.Str(required=True,validate=validate.Length(min=6))
    new_password = fields.Str(required=True,validate=validate.Length(min=6))
    confirm_password = fields.Str(required=True,validate=validate.Length(min=6))
