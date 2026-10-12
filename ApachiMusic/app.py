from flask import Flask, render_template, redirect, session, request
from dotenv import load_dotenv
import os

load_dotenv()
env = os.environ

app = Flask(__name__)
app.secret_key = env['SECRET_KEY']

@app.route('/')
def route():
    return redirect('/home')

@app.route('/home')
def home():
    return render_template('page/home.html')

if __name__ == '__main__':
    app.run(debug=True)