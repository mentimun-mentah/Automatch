from marshmallow import Schema, fields, validates, ValidationError

class ScrapeUrlSchema(Schema):
    url_job = fields.Url(required=True)
    url_applicants = fields.List(fields.Url(),required=True)

    @validates('url_applicants')
    def validate_url_applicants(self,value):
        if not value: raise ValidationError('Url applicants cannot blank!')
