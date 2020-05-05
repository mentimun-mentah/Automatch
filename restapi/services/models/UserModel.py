from datetime import datetime
from services.serve import db, bcrypt

class Users(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String(100),unique=True,index=True,nullable=False)
    email = db.Column(db.String(100),unique=True,index=True,nullable=False)
    password = db.Column(db.String(100),nullable=False)
    avatar = db.Column(db.String(100),default='default.png')
    member = db.Column(db.String(64),default='free')
    url_job = db.Column(db.Integer,default=2)
    url_profile = db.Column(db.Integer,default=5)
    company_name = db.Column(db.String(100),nullable=True)
    company_site = db.Column(db.String(100),nullable=True)
    position = db.Column(db.String(100),nullable=True)
    created_at = db.Column(db.DateTime,default=datetime.now)
    updated_at = db.Column(db.DateTime,default=datetime.now)

    confirmation = db.relationship('Confirmation',backref='user',uselist=False,cascade='all,delete-orphan')
    jobs = db.relationship('Jobs',backref='user',cascade='all,delete-orphan')

    def __init__(self,username: str, email: str, password: str):
        self.username = username
        self.email = email
        self.password = bcrypt.generate_password_hash(password).decode("utf-8")

    def check_pass(self,password: str) -> bool:
        return bcrypt.check_password_hash(self.password,password)

    def hash_password(self,password: str) -> "Users":
        self.password = bcrypt.generate_password_hash(password).decode("utf-8")

    def change_update_time(self) -> "Users":
        self.updated_at = datetime.now()

    def update_profile(self,username: str,company_name: str,company_site: str,position: str) -> "Users":
        self.username = username
        self.company_name = company_name
        self.company_site = company_site
        self.position = position

    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()
