# Library API

This is a dummy project to help me learn TypeScript by building a simple RESTful API with Node.js, Express, Sequelize, and PostgreSQL. Additionally, I'm adopting OpenAPI standards for API documentation.

## Features

- **Node.js** with **Express** for creating a RESTful API.
- **Sequelize** as the ORM for interacting with a **PostgreSQL** database.
- **TypeScript** for static type-checking and improved developer experience.
- **OpenAPI** (Swagger) for documenting the API endpoints.

## Project Setup

### Prerequisites

- Node.js
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/library-api.git
   cd library-api
   ```
2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Create a .env file in the root directory and add your database configuration:
   ```bash
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=yourusername
   DB_PASSWORD=yourpassword
   DB_NAME=yourdatabase
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

### Project Structure
   ```bash
   .
   ├── src
   │   ├── config
   │   │   └── database.ts
   │   ├── controllers
   │   │   └── bookController.ts
   │   ├── models
   │   │   └── book.ts
   │   ├── routes
   │   │   └── bookRoutes.ts
   │   ├── index.ts
   │   └── swagger.ts
   ├── .env
   ├── package.json
   ├── tsconfig.json
   └── README.md
   ```

## Example Endpoints

### Get Books
   ```bash
   GET /books
   ```
   -  Response
      ```json
      {
      "id": 1,
      "title": "Sampling",
      "authorId": 1
      }
      ```
### Create Book
   ```bash
   POST /books
   ```
   -  Request Body:
      ```json
      {
      "title": "Sampling",
      "authorId": 1
      }

      ```
   -  Response
      ```json
      {
      "id": 1,
      "title": "Sampling",
      "authorId": 1
      }

      ```

## Swagger Documentation
The API documentation is generated using Swagger. After starting the server, you can access the documentation at:
```bash
http://localhost:3000/api-docs
```
### Learning Goals
-  Improve proficiency in TypeScript.
-  Learn to integrate and use Sequelize with TypeScript.
-  Understand and implement OpenAPI standards for API documentation.

## Contributing
Feel free to submit issues or pull requests if you find any bugs or have suggestions for improvements.

### License
This project is licensed under the MIT License.
```bash
You can copy this content directly into your `README.md` file. Make sure to adjust the repository URL and any other placeholders as needed.
```