# Task Manager Application

A Full Stack Task Management Application built using React, Node.js, Express, and MongoDB.
This project was created as part of a Full Stack Developer technical assignment.

The application allows users to securely register, log in, and manage their personal tasks.

---

# Live Application

Frontend
https://task-manager-qapb.vercel.app

Backend API
https://task-manager-9dod.onrender.com

GitHub Repository
https://github.com/karampudijanardhan/task-manager

---

# Tech Stack

Frontend

* React.js
* Vite
* Axios
* Tailwind CSS

Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt password hashing

Database

* MongoDB Atlas

Deployment

* Frontend: Vercel
* Backend: Render

---

# Features

User Authentication

* User registration
* User login
* JWT-based authentication
* Password hashing with bcrypt
* Secure cookie handling

Task Management

* Create tasks
* View tasks
* Delete tasks
* Each user can only access their own tasks

Security

* Protected API routes
* Environment variables for sensitive data
* HTTP-only cookies for authentication

---

# Project Structure

task-manager

backend

* models
* routes
* middleware
* server.js

frontend

* src
* components
* pages
* api.js
* App.js

---

# API Endpoints

Authentication

Register
POST /api/auth/register

Login
POST /api/auth/login

Tasks

Get Tasks
GET /api/tasks

Create Task
POST /api/tasks

Delete Task
DELETE /api/tasks/:id

---

# Environment Variables

Create a `.env` file inside the backend folder.

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

---

# Running the Project Locally

Backend

cd backend
npm install
npm start

Frontend

cd frontend
npm install
npm run dev

---

# Author

Janardhan
Aspiring Full Stack Developer
