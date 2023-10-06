from app import app, db
from models import User, DogHouse, Review

app.app_context().push()

# Create the database tables
db.create_all()

# Create sample user
user1 = User(username='Lawi Mwaura', password='12345678')

# Create sample dog houses
doghouse1 = DogHouse(name='Cozy Cottage', location='New York', breed='Labrador', image_url='https://example.com/doghouse1.jpg', owner=user1)
doghouse2 = DogHouse(name='Comfy Cabin', location='Los Angeles', breed='Golden Retriever', image_url='https://example.com/doghouse2.jpg', owner=user1)
doghouse3 = DogHouse(name='Comfy Cabin', location='Los Angeles', breed='Golden Retriever', image_url='https://example.com/doghouse2.jpg', owner=user1)
doghouse4 = DogHouse(name='Comfy Cabin', location='Los Angeles', breed='Golden Retriever', image_url='https://example.com/doghouse2.jpg', owner=user1)
doghouse5 = DogHouse(name='Comfy Cabin', location='Los Angeles', breed='Golden Retriever', image_url='https://example.com/doghouse2.jpg', owner=user1)
doghouse6 = DogHouse(name='Comfy Cabin', location='Los Angeles', breed='Golden Retriever', image_url='https://example.com/doghouse2.jpg', owner=user1)
doghouse7 = DogHouse(name='Comfy Cabin', location='Los Angeles', breed='Golden Retriever', image_url='https://example.com/doghouse2.jpg', owner=user1)
doghouse8 = DogHouse(name='Comfy Cabin', location='Los Angeles', breed='Golden Retriever', image_url='https://example.com/doghouse2.jpg', owner=user1)

# Create sample reviews
review1 = Review(rating=5, comment='Excellent place!', user=user1, doghouse=doghouse1)
review2 = Review(rating=4, comment='Nice but small.', user=user1, doghouse=doghouse2)
review3 = Review(rating=4, comment='Nice but small.', user=user1, doghouse=doghouse3)
review4 = Review(rating=4, comment='Nice but small.', user=user1, doghouse=doghouse4)
review5 = Review(rating=4, comment='Nice but small.', user=user1, doghouse=doghouse5)
review6 = Review(rating=4, comment='Nice but small.', user=user1, doghouse=doghouse6)
review7 = Review(rating=4, comment='Nice but small.', user=user1, doghouse=doghouse7)
review8 = Review(rating=4, comment='Nice but small.', user=user1, doghouse=doghouse8)

# Add and commit the objects to the database
db.session.add(user1)

db.session.add(doghouse1)
db.session.add(doghouse2)
db.session.add(doghouse3)
db.session.add(doghouse4)
db.session.add(doghouse5)
db.session.add(doghouse6)
db.session.add(doghouse7)
db.session.add(doghouse8)

db.session.add(review1)
db.session.add(review2)
db.session.add(review3)
db.session.add(review4)
db.session.add(review5)
db.session.add(review6)
db.session.add(review7)
db.session.add(review8)

db.session.commit()
