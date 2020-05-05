from services.serve import db

class Educations(db.Model):
    __tablename__ = 'educations'

    id = db.Column(db.Integer,primary_key=True)
    school_name = db.Column(db.String(100),nullable=False)
    date = db.Column(db.String(100),nullable=True)
    study = db.Column(db.String(100),nullable=True)

    applicant_id = db.Column(db.Integer,db.ForeignKey('applicants.id'),nullable=False)

    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()
