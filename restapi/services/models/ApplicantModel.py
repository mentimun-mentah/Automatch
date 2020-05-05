from services.serve import db
from datetime import datetime

class Applicants(db.Model):
    __tablename__ = 'applicants'

    id = db.Column(db.Integer,primary_key=True)
    url = db.Column(db.String(100),nullable=False)
    image = db.Column(db.Text,nullable=True)
    name = db.Column(db.String(100),nullable=False)
    current_job = db.Column(db.Text,nullable=False)
    address = db.Column(db.String(100),nullable=True)
    languages = db.Column(db.String(100),nullable=True)
    licenses = db.Column(db.Text,nullable=True)
    skills = db.Column(db.Text,nullable=True)
    honors = db.Column(db.Text,nullable=True)
    qualify = db.Column(db.Boolean,default=False)
    score = db.Column(db.Float,default=0)
    created_at = db.Column(db.DateTime,default=datetime.now)
    updated_at = db.Column(db.DateTime,default=datetime.now)

    experiences = db.relationship('Experiences',backref='applicant',cascade='all,delete-orphan')
    educations = db.relationship('Educations',backref='applicant',cascade='all,delete-orphan')
    detail_score = db.relationship('DetailScore',backref='applicant',uselist=False,cascade='all,delete-orphan')
    job_id = db.Column(db.Integer,db.ForeignKey('jobs.id'),nullable=False)

    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()
