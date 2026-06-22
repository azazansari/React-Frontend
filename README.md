# Product Managment React-Frontend
Overview

This project is a React frontend application developed for the Product Management System. It connects to the backend REST API built using Node.js, Express.js, and MongoDB.

The application allows users to:

View all products
Add new products
Delete products
View product details
Navigate using React Router
Technologies Used
React.js
Axios
React Router DOM
Node.js Backend API
MongoDB Atlas
Installation
Clone the Repository
git clone <repository-url>
cd frontend
Install Dependencies
npm install
Start the Application
npm start

The application will run on:

http://localhost:3000
Features
Product Listing

Displays all products retrieved from the backend API.

Add Product

Users can add new products using a form.

Delete Product

Users can remove products from the database.

Product Details

Users can view detailed information about a specific product.

Routing

React Router is used for navigation between pages.

Project Structure
src/
├── components/
│   ├── AddProduct.js
│   ├── ProductList.js
│   ├── ProductDetail.js
│   └── Navbar.js
│
├── services/
│   └── api.js
│
├── App.js
└── index.js
