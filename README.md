# 🍽️ Recipe CRUD API

A simple RESTful API for managing recipes built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)**. The application follows the **MVC architecture** and includes full CRUD functionality.

## 📌 Features

- Create a new recipe
- Get all recipes
- Get a specific recipe by ID
- Update a recipe by ID
- Delete a recipe by ID

## 🧱 Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- ECMAScript Modules (ESM)
- Postman (for API testing)

## 🏗️ Project Structure

recipe-crud-app/
├── controllers/
├── models/
├── routes/
├── config/
├── app.js
├── server.js
├── .env
├── package.json
└── README.md

📮 API Endpoints

| Method |           Endpoint               | Description           |
| ------ | -------------------------------- | --------------------- |
| POST   | '/api/createRecipe'              | Create a new recipe   |
| GET    | '/api/getrecipee'                | Get all recipes       |
| GET    | '/api/getrecipeebyid/:id'        | Get a recipe by ID    |
| PUT    | `/api/updateredipe/:id'          | Update a recipe by ID |
| DELETE | '/api/deleterecipe/:id'          | Delete a recipe by ID |

