from services.serve import db
from datetime import datetime

class Jobs(db.Model):
    __tablename__ = 'jobs'

    id = db.Column(db.Integer,primary_key=True)
    url = db.Column(db.Text,nullable=False)
    image = db.Column(db.Text,nullable=False)
    title_job = db.Column(db.String(100),nullable=False)
    company = db.Column(db.String(100),nullable=False)
    location = db.Column(db.String(100),nullable=False)
    posted = db.Column(db.String(64),nullable=False)
    contents = db.Column(db.Text,nullable=False)
    contents_text = db.Column(db.Text,nullable=False)
    concepts = db.Column(db.Text,nullable=True)
    keywords = db.Column(db.Text,nullable=True)
    created_at = db.Column(db.DateTime,default=datetime.now)

    applicants = db.relationship('Applicants',backref='job',cascade='all,delete-orphan')
    overall_score = db.relationship('OverallScore',backref='job',uselist=False,cascade='all,delete-orphan')
    user_id = db.Column(db.Integer,db.ForeignKey('users.id'),nullable=False)

    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()
