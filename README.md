# Food Delivery Web Application

This is a simple web application for food delivery. It consists of a front-end part (built with React) and a back-end part (built with Node.js, Express, and MySQL).

## Front-end

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository:

git clone https://github.com/your-username/food-delivery-app.git

2. Navigate to the project directory:

cd food-delivery-app

3. Install the dependencies:

npm install

### Usage

1. Start the development server:

npm start

2. Open your browser and visit [http://localhost:3000](http://localhost:3000) to access the application.

## Back-end

### Prerequisites

- Node.js installed on your machine
- MySQL server running with a database set up

### Installation

1. Clone the repository:

git clone https://github.com/your-username/food-delivery-api.git

2. Navigate to the project directory:

cd food-delivery-api

3. Install the dependencies:

npm install

4. Set up your MySQL database and update the database configuration in `server.js`:

const db = mysql.createConnection({
host: 'localhost',
user: 'your_mysql_username',
password: 'your_mysql_password',
database: 'food_delivery',
});
Usage
Start the server:
node server.js
The back-end API will be running at http://localhost:3001.
Contributing
Feel free to contribute to this project by opening issues or submitting pull requests.
