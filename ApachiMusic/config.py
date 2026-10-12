from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Artists(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    musics = db.Column(db.JSON, nullable=False, default=list)