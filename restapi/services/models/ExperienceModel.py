from services.serve import db

class Experiences(db.Model):
    __tablename__ = 'experiences'

    id = db.Column(db.Integer,primary_key=True)
    job = db.Column(db.String(100),nullable=False)
    company_name = db.Column(db.String(100),nullable=False)
    date_employed = db.Column(db.String(100),nullable=True)
    detail = db.Column(db.Text,nullable=True)

    applicant_id = db.Column(db.Integer,db.ForeignKey('applicants.id'),nullable=False)

    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()
