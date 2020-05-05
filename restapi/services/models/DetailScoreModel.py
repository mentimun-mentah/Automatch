from services.serve import db

class DetailScore(db.Model):
    __tablename__ = 'detail_score'

    id = db.Column(db.Integer,primary_key=True)
    experience = db.Column(db.Float,nullable=False)
    current_position = db.Column(db.Float,nullable=False)
    skill = db.Column(db.Float,nullable=False)
    education = db.Column(db.Float,nullable=False)
    license = db.Column(db.Float,nullable=False)
    honor = db.Column(db.Float,nullable=False)

    applicant_id = db.Column(db.Integer,db.ForeignKey('applicants.id'),nullable=False)

    def __init__(self,experience: float,
            current_position: float,
            skill: float,
            education: float,
            license: float,
            honor: float,
            applicant_id: int):

        self.experience = round(experience,2)
        self.current_position = round(current_position,2)
        self.skill = round(skill,2)
        self.education = round(education,2)
        self.license = round(license,2)
        self.honor = round(honor,2)
        self.applicant_id = applicant_id

    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()
