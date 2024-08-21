# Portfolio Website

Welcome to my personal portfolio website! This project showcases my skills, experience, education, and certifications. The website is built using React.js for the frontend and Django for the backend, and it fetches data from a JSON file.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview

This portfolio website is designed to display personal information, including skills, experience, education, and certifications. It features a single-page layout with sections for each area of interest. The data is managed in a JSON file, making it easy to update and maintain.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Django
- **Data Management**: JSON
- **Deployment**: (Specify if deployed on any platform like AWS, Heroku, etc.)

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository**

   git clone https://github.com/kaykenho/portfolio.git
   cd portfolio

**Set Up the Backend**

Navigate to the backend directory (if separate) and set up a virtual environment:

cd backend
python -m venv env
source env/bin/activate  # On Windows use `env\Scripts\activate`

**Install the required packages:**

pip install -r requirements.txt

**Run the Backend**

Start the Django server:

python manage.py runserver

**Set Up the Frontend**

Navigate to the frontend directory:

cd ../frontend

**Install the required packages:**

npm install

**Run the Frontend**

Start the React development server:

npm start
The website should now be running on http://localhost:3000.

## Usage
Homepage: Displays your name and a brief summary.
About Me: Provides detailed information about yourself.
Skills: Lists your skills and expertise.
Experience: Shows your work experience and roles.
Education: Lists your educational background and relevant information.
Certifications: Details your certifications and specializations.
Contact: Provides your contact information and links.

## API Endpoints
Here are the API endpoints used by the React frontend to fetch data:

Summary: GET /api/summary/
About: GET /api/about/
Skills: GET /api/skills/
Experience: GET /api/experience/
Education: GET /api/education/
Certifications: GET /api/certifications/
Contact: GET /api/contact/

## Contributing
If you’d like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.

## Contact
For any questions or feedback, please contact me at:

Email: kaykymatosf@gmail.com

LinkedIn: linkedin.com/in/kayky-matos

GitHub: github.com/kaykenho

Thank you for checking out my portfolio website!
