# Node.js Backend with Authentication and Data Management

This is a Node.js backend application that implements authentication with JWT, CRUD operations, and data management using MongoDB. It follows MVC architecture and provides several API endpoints for user management and dynamic data handling.

## Features

- User Authentication (Signup & Login)
- CRUD Operations for Users and Data
- JWT Authentication for Protected Routes
- Error Handling for consistent responses

## Prerequisites

- Node.js (version 14 or above)
- MongoDB (or MongoDB Atlas)
- Postman (for testing the API)

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ABIDMAQBOOL123/sathi-task.git
   ```

2. **Install dependencies: Navigate into the project folder and install required packages**:
   cd node-backend-task
   npm install

3. **Create a .env file: In the project root, create a .env file and add the following environment**;

PORT=5000
MONGO_URI=mongodb://localhost:27017/userData
JWT_SECRET=abid@123

4. **Start the server: Run the following command to start the server**:

nodemon server.js

**API Endpoints
Authentication Endpoints**:
POST /api/auth/signup

Request Body:
json

{
"name": "John Doe",
"email": "john@example.com",
"password": "abid123"
}
Response:
json

{
"message": "User created successfully",
"userId": "67519263088ad864d30d64b4"
}
POST /api/auth/login

Request Body:

{
"email": "john@example.com",
"password": "abid123"
}
Response:

{
"message": "Login successful",
"token": "JWT_TOKEN"
}
User Management Endpoints
GET /api/users

Response:

[
{
"id": "1263773882376367",
"name": "John Doe",
"email": "john@example.com"
}
]
