from services.serve import db

class OverallScore(db.Model):
    __tablename__ = 'overall_score'

    id = db.Column(db.Integer,primary_key=True)
    score_experience = db.Column(db.Integer,default=25)
    score_current_position = db.Column(db.Integer,default=20)
    score_skill = db.Column(db.Integer,default=20)
    score_honor = db.Column(db.Integer,default=10)
    score_license = db.Column(db.Integer,default=10)
    score_education = db.Column(db.Integer,default=15)
    priority_univ = db.Column(db.String(100),nullable=True)

    job_id = db.Column(db.Integer,db.ForeignKey('jobs.id'),nullable=False)

    def update_score(self,**args) -> "OverallScore":
        self.score_experience = args['score_experience']
        self.score_current_position = args['score_current_position']
        self.score_skill = args['score_skill']
        self.score_honor = args['score_honor']
        self.score_license = args['score_license']
        self.score_education = args['score_education']
        self.priority_univ = args['priority_univ']

    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()
