Personal Finance App

Overview
The Personal Finance App is a web-based application designed to help users manage their finances effectively. It allows users to track their expenses, categorize transactions, and view a detailed breakdown of their financial data. The app features a modern, responsive design with professional styling and a robust backend for data management.

Features

Frontend
Dashboard:
Displays Total Expenses, Category Breakdown, and Recent Transactions.
Table-based layout with responsive design.
Scrollable sections for large datasets.
Transaction List:
View all transactions in a tabular format.
Edit or delete transactions with ease.
Styled with alternating row colors and hover effects.

Add Transaction:
Add new transactions with fields for amount, date, description, and category.
Real-time form validation for accurate data entry.
Responsive Design:
Fully responsive layout for desktop, tablet, and mobile devices.
Custom scrollbars for better user experience.
Backend
API Endpoints:
CRUD operations for managing transactions.
Fetch total expenses, category breakdown, and recent transactions.
Database:
MongoDB for persistent data storage.
Server:
Node.js and Express.js for handling API requests and business logic.
Technologies Used
Frontend
React.js
CSS (with modern styling techniques like gradients, shadows, and hover effects)
Responsive design with media queries
Backend
Node.js
Express.js
MongoDB (via Mongoose)
Installation
Prerequisites
Node.js installed on your system
npm or yarn package manager
MongoDB installed and running locally or on a cloud service (e.g., MongoDB Atlas)
Steps
1. Clone the Repository
2. Navigate to the Project Directory
3. Install Dependencies
Frontend
Backend
4. Set Up Environment Variables
Create a .env file in the backend directory and add the following:

5. Start the Application
Backend
Frontend
Open a new terminal and run:

6. Open the App
Visit the app in your browser:

Folder Structure
Frontend
Backend
API Endpoints
Transactions
Method	Endpoint	Description
GET	/api/transactions	Fetch all transactions
POST	/api/transactions	Add a new transaction
PUT	/api/transactions/:id	Update a transaction by ID
DELETE	/api/transactions/:id	Delete a transaction by ID



