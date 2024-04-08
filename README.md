# Contact Page Project

This project is a simple web application that allows users to fill out a contact form with their details. The information submitted by the users is stored in a MongoDB database. Additionally, upon form submission, an email is sent to the user using Nodemailer.

## Features

- User-friendly contact form for users to fill out their details.
- Backend built with Node.js using Express for handling HTTP requests.
- Frontend developed with React.js for an interactive user experience.
- MongoDB database to store user contact information securely.
- Nodemailer integration for sending confirmation emails to users upon form submission.

## Installation

1. Clone this repository to your local machine:
  - git clone https://github.com/your-username/contact-page.git

2. Navigate to the project directory:

cd contact-page

3. Install dependencies for both frontend and backend:

- cd frontend
- npm install
- cd ../backend
- npm install


## Configuration

1. MongoDB Configuration:
   - Make sure you have MongoDB installed and running on your local machine.
   - Update the MongoDB connection URI in `backend/config/db.js`.

2. Email Configuration:
   - Provide your email service details such as host, port, username, and password in `backend/config/email.js`.

## Usage

1. Start the backend server:

- cd backend
- npm start


2. Start the frontend server:

- cd ../frontend
- npm start


3. Visit `http://localhost:3000` in your web browser to access the application.

## Dependencies

### Backend

- express: Web framework for Node.js
- mongoose: MongoDB object modeling tool
- nodemailer: Email sending library for Node.js

### Frontend

- react: JavaScript library for building user interfaces
- axios: Promise-based HTTP client for the browser and Node.js
- react-router-dom: DOM bindings for React Router

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any problems or have suggestions for improvements.

## License

This project is licensed under the [MIT License](LICENSE).


