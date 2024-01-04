# Chat Application

## Introduction

This chat application is a modern, full-stack web application built using Node.js, Apollo Server, GraphQL, and Prisma. It interfaces with a MySQL database hosted on Azure. The backend is structured to handle user authentication, message creation, and retrieval, with future plans to develop a React-based user interface.

## Features

- User authentication (signup and signin)
- Secure password handling with bcrypt
- JWT-based session management
- CRUD operations for messages
- Real-time chat functionality (planned)

## Technologies

- **Backend**: Node.js, Apollo Server, GraphQL
- **Database**: Prisma with MySQL (Azure)
- **Authentication**: bcrypt, JWT
- **Frontend**: React (planned)

## Getting Started

### Prerequisites

- Node.js
- MySQL Database (Azure setup)
- Git

### Installation

1. Clone the repository:
   ```sh
   git clone [repository-link]
2. Install NPM packages:   
  ```sh
  npm install
3. Set up your environment variables in a .env file:
  JWT_SECRET=your_jwt_secret
  DATABASE_URL=your_database_url

### Running the application
1. Start the server:
  npm start
2. Navigate to http://localhost:4000 in your browser to interact with the GraphQL playground.
3. Deployment (Azure)
  Instructions for deploying this application to Azure will be provided soon.

License
Distributed under the MIT License. See LICENSE for more information.
