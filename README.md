# To-Do Application

This is a full-stack To-Do List application built with **React.js** for the frontend and **Node.js (Express)** for the backend. The application allows users to perform CRUD operations on tasks, which are stored in a **PostgreSQL** database. The frontend communicates with the backend through API endpoints.

---

## Backend Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/todo-application.git
cd todo-application
```
2. Backend Setup
Navigate to the todo-backend folder:
```bash

cd todo-backend
```
Install dependencies:
```bash

npm install
```
Configure the environment:
Create a .env file in the todo-backend folder with the following content:

DATABASE_URL=your_postgres_connection_string
JWT_SECRET=your_jwt_secret_key
Run the backend locally:
For development mode (with auto-reload):

```bash
npm run dev
```
For production:

```bash
npm start
```
Your backend should now be running at http://localhost:5000.

Frontend Setup
1. Clone the Repository (if not already done)
If you haven't cloned the repository yet, do it now:

```bash
git clone https://github.com/yourusername/todo-application.git
cd todo-application
```
Navigate to the todoFrontend folder:
```bash

cd todoFrontend
```
Install dependencies:
```bash

npm install
```
Configure the environment:
Create a .env file in the todoFrontend folder with the following content:
```bash
REACT_APP_API_URL=http://localhost:5000/api
```
Run the frontend locally:
```bash
npm start
```
Your frontend should now be running at http://localhost:3000.

Technologies Used
Frontend:
React.js: A JavaScript library for building user interfaces.
Axios: A promise-based HTTP client used to make requests to the backend API.
React Router DOM: For handling routing in the React application.
React Scripts: For bundling and running the React development environment.
Backend:
Node.js: A JavaScript runtime for the server-side.
Express.js: A web framework for building APIs in Node.js.
Sequelize: A promise-based Node.js ORM for SQL databases, used to interact with the PostgreSQL database.
PostgreSQL: A relational database for storing task data.
JWT (JSON Web Token): For user authentication and securing API routes.
dotenv: For managing environment variables.
```bash
Project Structure
todoApplication/
├── todo-backend/           # Backend API with Node.js and Express
│   ├── src/                # Backend source code
│   │   ├── controllers/    # API route handlers
│   │   ├── models/         # Sequelize models for database
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Custom middleware
│   │   ├── config/         # Database configuration
│   │   ├── index.js        # Server entry point
├── todoFrontend/           # Frontend application with React.js
│   ├── public/             # Static files (index.html, etc.)
│   ├── src/                # Frontend source code
│   │   ├── components/     # Reusable React components (TaskItem, AddTask, etc.)
│   │   ├── pages/          # React pages (Home, NotFound)
│   │   ├── services/       # API service functions (CRUD)
│   │   ├── App.js          # Main App component
│   │   ├── index.js        # React entry point
│   └── .env                # Environment variables for API URL
```
Installation and Setup
Running Both Frontend and Backend Locally
To run both the frontend and backend locally, follow these steps:

Start the backend:
```bash

cd todo-backend
npm run dev
```
Start the frontend:
```bash
cd todoFrontend
npm start
```
Open your browser and visit http://localhost:3000. The frontend will interact with the backend API running on http://localhost:5000/api.
Deployment
Deploying on Vercel
You can deploy both the frontend and backend on Vercel using the following steps:

Install the Vercel CLI globally:

```bash
npm install -g vercel
```
Login to Vercel:
```bash
vercel login
```
Initialize the Vercel project from the root folder:

```bash
vercel
```
Follow the prompts to deploy the project. Vercel will automatically detect the frontend (React) and backend (Node.js) and set them up as serverless functions.

Once deployed, your project will be live on a Vercel URL, and you can access both the frontend and backend through this domain.

Challenges and Decisions
Choosing Sequelize ORM: We decided to use Sequelize as an ORM to interact with PostgreSQL due to its ease of use, robust features, and ability to handle database migrations efficiently.

JWT Authentication: We implemented JWT for secure user authentication and API access. This allows for token-based authentication and easier management of user sessions.

API and Frontend Integration: Axios was chosen to handle asynchronous HTTP requests between the frontend and the backend. This makes it easy to communicate with the API and handle responses effectively.

React Router for Navigation: React Router was used to handle navigation between different pages (e.g., task list, add task, etc.) in the frontend application, providing smooth client-side routing.

Environment Variables: We used dotenv to manage sensitive environment variables such as the PostgreSQL connection string and JWT secret, ensuring that they are not hard-coded into the source code.

Vercel Deployment: We decided to deploy the project on Vercel, as it simplifies the deployment process for both frontend (React) and backend (Node.js API). Vercel provides seamless integration and scaling capabilities, especially for serverless functions.

