Personal Finance App - Backend
Overview
The backend of the Personal Finance App is built using Node.js and Express.js. It provides a RESTful API for managing transactions, including CRUD operations, and integrates with MongoDB for persistent data storage.

Features
API Endpoints:
Create, Read, Update, and Delete (CRUD) transactions.
Fetch total expenses, category breakdown, and recent transactions.
Database:
MongoDB for storing transaction data.
Environment Configuration:
.env file for managing sensitive information like database connection strings and server ports.
Technologies Used
Node.js: JavaScript runtime for building the server.
Express.js: Web framework for creating RESTful APIs.
MongoDB: NoSQL database for storing transaction data.
Mongoose: ODM library for MongoDB.
Installation
Prerequisites
Node.js installed on your system.
npm or yarn package manager.
MongoDB installed and running locally or on a cloud service (e.g., MongoDB Atlas).
Steps
1. Clone the Repository
2. Navigate to the Backend Directory
3. Install Dependencies
4. Set Up Environment Variables
Create a .env file in the backend directory and add the following:

5. Start the Server
The server will start on http://localhost:5000.

Folder Structure
API Endpoints
Transactions
Method	Endpoint	Description
GET	/api/transactions	Fetch all transactions
POST	/api/transactions	Add a new transaction
PUT	/api/transactions/:id	Update a transaction by ID
DELETE	/api/transactions/:id	Delete a transaction by ID
Example API Requests
1. Fetch All Transactions
Request:

Response:

2. Add a New Transaction
Request:

Response:

3. Update a Transaction
Request:

Response:

4. Delete a Transaction
Request:

Response:

Customization
Database:
Update the MONGO_URI in the .env file to connect to your MongoDB instance.
Port:
Change the PORT in the .env file to run the server on a different port.




