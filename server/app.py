from flask import Flask, request, session, jsonify
from flask_restful import Resource, Api
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, Length, NumberRange
from models import User, DogHouse, Review
from models import db
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///dogsbnb.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
api = Api(app)

migrate = Migrate(app, db)

# Define your form classes (SignupForm, LoginForm, DogHouseForm, ReviewForm) here
class SignupForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(min=3, max=255)])
    password = PasswordField('Password', validators=[DataRequired(), Length(min=6, max=255)])

class LoginForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(min=3, max=255)])
    password = PasswordField('Password', validators=[DataRequired(), Length(min=6, max=255)])

class DogHouseForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired(), Length(min=3, max=255)])
    location = StringField('Location', validators=[DataRequired(), Length(min=3, max=255)])

class ReviewForm(FlaskForm):
    rating = IntegerField('Rating', validators=[DataRequired(), NumberRange(min=1, max=5)])
    comment = TextAreaField('Comment', validators=[DataRequired(), Length(min=10)])

class UserResource(Resource):
    def get(self, user_id):
        user = User.query.get(user_id)
        if user:
            return jsonify({
                'id': user.id,
                'username': user.username,
            }), 200
        return {'error': 'User not found'}, 404

class DogHouseResource(Resource):
    def get(self, doghouse_id):
        doghouse = DogHouse.query.get(doghouse_id)
        if doghouse:
            return jsonify({
                'id': doghouse.id,
                'name': doghouse.name,
                'location': doghouse.location,
            }), 200
        return {'error': 'Dog House not found'}, 404

class ReviewResource(Resource):
    def post(self):
        form = ReviewForm()
        if form.validate_on_submit():
            user_id = session.get('user_id')
            if user_id:
                rating = form.rating.data
                comment = form.comment.data

                # Add logic to create a new review
                new_review = Review(
                    rating=rating,
                    comment=comment,
                    user_id=user_id,
                    
                )
                db.session.add(new_review)
                db.session.commit()

                return {'message': 'Review created successfully'}, 201
            return {'error': 'Unauthorized'}, 401
        return {'error': 'Validation failed', 'errors': form.errors}, 422

    def get(self, doghouse_id):
        reviews = Review.query.filter_by(doghouse_id=doghouse_id).all()
        review_data = []
        for review in reviews:
            review_data.append({
                'id': review.id,
                'user_id': review.user_id,
                'rating': review.rating,
                'comment': review.comment,
                'created_at': review.created_at
            })
        return jsonify(review_data), 200

api.add_resource(UserResource, '/user/<int:user_id>', endpoint='user')
api.add_resource(DogHouseResource, '/doghouse/<int:doghouse_id>', endpoint='doghouse')
api.add_resource(ReviewResource, '/review', endpoint='review')

@app.route('/signup', methods=['POST'])
def signup():
    form = SignupForm()
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data

        # Add logic to create a new user
        new_user = User(username=username, password=password)
        db.session.add(new_user)
        db.session.commit()

        return {'message': 'User created successfully'}, 201
    return {'error': 'Validation failed', 'errors': form.errors}, 422

@app.route('/login', methods=['POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data

        # Add logic to handle user login (e.g., check username and password)
        user = User.query.filter_by(username=username, password=password).first()

        if user:
            session['user_id'] = user.id
            return {'message': 'Login successful'}, 200
        return {'error': 'Login failed'}, 401

@app.route('/logout', methods=['POST'])
def logout():
    session.pop('user_id', None)
    return '', 204

if __name__ == '__main__':
    app.run(port=5555, debug=True)
