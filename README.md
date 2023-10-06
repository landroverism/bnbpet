## AirBNB for Dogs
DogHouse Reviews is an application that allows users to find and review dog houses in their area. This README provides an overview of the project, including user stories, models, and relationships.

## User Story
Many pet owners face the challenge of finding suitable and safe accommodations for their beloved dogs when they need to be away from home. They often seek reliable and trustworthy sources of information to discover dog-friendly houses, ensuring that their pets will be well taken care of. On the other hand, individuals who own properties suitable for accommodating dogs may struggle to connect with potential customers looking for dog-friendly accommodations

As a user, I can:

1. Sign up for an account.
2. Log in to the site and remain logged in.
3. Log out.
4. View a list of all available dog houses in my area and their respective reviews.
5. Create a review for one specific dog house.
6. Modify or delete a review that I left.
7. Create a new dog house listing.


## Models and Relationships

To represent the user stories effectively, we have identified the following models and their relationships:

1. **User**: Represents registered users of the application.
   - Attributes: Username, email, password, profile information, etc.

2. **Dog House**: Represents listings of available dog houses.
   - Attributes: Name, location, description, owner, etc.
   - Relationships: Belongs to a user (owner), has many reviews.

3. **Review**: Represents user reviews for a specific dog house.
   - Attributes: Rating, comment, date, etc.
   - Relationships: Belongs to a user (reviewer) and a dog

## Tech stack used
- Frontend: React, Redux
- Backend: Flask (Python)
- Database: PostgreSQL
- Styling: CSS, Bootstrap

## Prerequisites

Before starting, make sure you have the following installed:

- Node.js and npm
- React
- Python 3
- Sqlite3

## Getting Started

1. Clone the repository.
2. Install dependencies for the client and server.
3. Set up your PostgreSQL database.
4. Configure environment variables.
5. Start the development server for the frontend and backend.

## Pip requirements

alembic==1.12.0
aniso8601==9.0.1
asttokens==2.2.1
backcall==0.2.0
blinker==1.6.2
certifi==2023.7.22
charset-normalizer==3.2.0
click==8.1.7
colorama==0.4.6
DateTime==5.2
decorator==5.1.1
distlib==0.3.7
executing==1.2.0
Faker==19.6.1
filelock==3.12.2
Flask==2.3.3
Flask-Cors==4.0.0
flask-marshmallow==0.15.0
Flask-Migrate==4.0.5
Flask-RESTful==0.3.10
Flask-Script==2.0.6
Flask-SQLAlchemy==3.1.1
Flask-WTF==1.2.1
greenlet==2.0.2
idna==3.4
iniconfig==2.0.0
ipdb==0.13.13
ipython==8.14.0
itsdangerous==2.1.2
jedi==0.19.0
Jinja2==3.1.2
Mako==1.2.4
MarkupSafe==2.1.3
marshmallow==3.20.1
matplotlib-inline==0.1.6
packaging==23.1
parso==0.8.3
pickleshare==0.7.5
pipenv==2023.9.8
platformdirs==3.10.0
pluggy==1.2.0
prompt-toolkit==3.0.39
pure-eval==0.2.2
Pygments==2.16.1
pytest==7.4.0
python-dateutil==2.8.2
pytz==2023.3.post1
requests==2.31.0
six==1.16.0
SQLAlchemy==2.0.20
SQLAlchemy-serializer==1.4.1
stack-data==0.6.2
traitlets==5.9.0
typing_extensions==4.7.1
urllib3==2.0.5
virtualenv==20.24.3
virtualenv-clone==0.5.7
wcwidth==0.2.6
Werkzeug==2.3.7
WTForms==3.0.1
zope.interface==6.0

## License 
This project is licensed under the GNU General Public (https://www.gnu.org/licenses/gpl-3.0.en.html) License.

## Contributors
Collaborators include Stephan, Ham, Lawi, Steve and Ian