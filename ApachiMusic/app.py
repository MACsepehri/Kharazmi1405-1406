from flask import Flask, render_template, redirect, session, request
from dotenv import load_dotenv
from config import db
import os
from urllib.parse import quote_plus

load_dotenv()
env = os.environ

app = Flask(__name__)
app.secret_key = env['SECRET_KEY']

db_user = "flask_user"
db_password = quote_plus("jzx144")
db_host = "localhost"
db_name = "my_database"

app.config["SQLALCHEMY_DATABASE_URI"] = f"mysql+pymysql://{db_user}:{db_password}@{db_host}/{db_name}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

with app.app_context():
    db.create_all()

@app.route('/')
def route():
    return redirect('/home')

@app.route('/home')
def home():
    return render_template('page/home.html')

if __name__ == '__main__':
    app.run(debug=True)