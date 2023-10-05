from app import app, db
from models import User, DogHouse, Review
from faker import Faker
import requests
import random

# Initialize Faker for generating random data
fake = Faker()

# Create an application context
with app.app_context():
    # Create the database tables
    db.create_all()

    # Function to fetch a random dog image URL by breed
    def get_dog_image_url(breed):
        response = requests.get(f"https://dog.ceo/api/breed/{breed}/images/random")
        if response.status_code == 200:
            data = response.json()
            return data.get("message")
        return None

    # Generate a small amount of random data
    num_users = 5
    num_doghouses = 5
    num_reviews = 10

    users = []
    doghouses = []
    reviews = []

    # Create random users
    for _ in range(num_users):
        user = User(
            username=fake.user_name(),
            password=fake.password()
        )
        users.append(user)

    # Create random doghouses and associate them with random owners
    for _ in range(num_doghouses):
        breed = fake.random_element(elements=('husky', 'beagle', 'poodle', 'bulldog', 'labrador'))
        image_url = get_dog_image_url(breed)
        doghouse = DogHouse(
            name=fake.company(),
            location=fake.city(),
            owner=random.choice(users),
            breed=breed,
            image_url=image_url
        )
        doghouses.append(doghouse)

    # Create random reviews and associate them with random users and doghouses
    for _ in range(num_reviews):
        review = Review(
            rating=random.randint(1, 5),
            comment=fake.paragraph(),
            user=random.choice(users),
            doghouse=random.choice(doghouses)
        )
        reviews.append(review)

    # Add the data to the session and commit
    db.session.add_all(users)
    db.session.add_all(doghouses)
    db.session.add_all(reviews)
    db.session.commit()

# The database session will be automatically closed when the app context exits
