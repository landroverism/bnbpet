from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)

    doghouses = db.relationship('DogHouse', backref='owner', lazy=True)
    reviews = db.relationship('Review', backref='user', lazy=True)

class DogHouse(db.Model):
    __tablename__ = 'doghouses'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    location = db.Column(db.String(255), nullable=False)
    breed = db.Column(db.String(255), nullable=False)
    image_url = db.Column(db.String(255), nullable=False)
    
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    reviews = db.relationship('Review', backref='doghouse', lazy=True)

class Review(db.Model):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    doghouse_id = db.Column(db.Integer, db.ForeignKey('doghouses.id'), nullable=False)