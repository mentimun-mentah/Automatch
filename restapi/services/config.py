import os

_basedir = os.path.dirname(__file__)

class Config:
    DEBUG = False
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY')
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(_basedir,'data.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_ACCESS_TOKEN_EXPIRES = 15 * 60  # 15 minute
    JWT_REFRESH_TOKEN_EXPIRES = 30 * 86400  # 30 days
    JWT_BLACKLIST_ENABLED = True
    JWT_BLACKLIST_TOKEN_CHECKS = ['access', 'refresh']

class Development(Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:123@localhost:5432/Automatch'

class Production(Config):
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = 'postgresql://automatch:123@postgres/automatch'
