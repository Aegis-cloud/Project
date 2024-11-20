# Todo Manager Application

A web application to manage projects and their todos. Users can create, view, update, and delete projects and todos, as well as mark todos as complete or pending. The application also supports exporting project summaries.

## Features

1. Create, View, and Edit Projects
2. Add, Update, Remove, and Toggle Todos

---

## Prerequisites

Before running the project, ensure you have the following installed:

### **Tools Used**

- Java Development Kit (JDK) 17
- Node.js and npm (for the frontend)
- Oracle 21c Database
- Gradle (for the backend)
- Oracle JDBC driver (ojdbc11.jar)
- React Development Tools (optional for debugging)

---

## Setup Instructions

### **Backend**

1. Navigate to the backend directory:
    ```bash
    cd todo-manager/backend
    ```
2. Run the backend:
    ```bash
    ./gradlew bootRun
    ```
3. The backend will be available at `http://localhost:8080`.

### **Frontend**

1. Navigate to the frontend directory:
    ```bash
    cd todo-manager/frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the frontend:
    ```bash
    npm start
    ```
4. The frontend will be available at `http://localhost:3000`.

---

## Running the Project

Ensure the backend and frontend are both running:

- **Backend**: `http://localhost:8080`
- **Frontend**: `http://localhost:3000`

Open the frontend in your browser at `http://localhost:3000`.

Use the interface to:

- Create and view projects.
- Add, edit, and delete todos within a project.
- Toggle todos as complete or pending.
