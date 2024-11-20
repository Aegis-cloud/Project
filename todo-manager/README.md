Todo Manager Application:

A web application to manage projects and their todos. Users can create, view, update, and delete projects and todos, as well as mark todos as complete or pending. The application also supports exporting project summaries.

Features
1.Create, View, and Edit Projects
2.Add, Update, Remove, and Toggle Todos

Prerequisites:
Before running the project, ensure you have the following installed:

*********************TOOLS USED**************************
*     Java Development Kit (JDK) 17                     *
*     Node.js and npm (for the frontend)                *
*     Oracle 21c Database                               *
*     Gradle (for the backend)                          *
*     Oracle JDBC driver (ojdbc11.jar)                  *
*     React Development Tools (optional for debugging)  *
*********************************************************

Setup Instructions:

(BACKEND)
cd todo-manager/backend
./gradlew bootRun
The backend will be available at http://localhost:8080.

(FRONTEND)
cd todo-manager/frontend
npm install
npm start
The frontend will be available at http://localhost:3000.

Project Directory Structure Overview:
todo-manager/
│
├── backend/                      # Backend application (Spring Boot)
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com.todo.manager/
│   │   │   │       │   
│   │   │   │       ├── config/
│   │   │   │       │   ├── CorsConfig.java
│   │   │   │       │   ├── DataInitializer.java
│   │   │   │       │   ├── DataSourceConfig.java
│   │   │   │       │   └── SecurityConfig.java
│   │   │   │       ├── controller/
│   │   │   │       │   ├── DatabaseTestController.java
│   │   │   │       │   ├── UserController.java
│   │   │   │       │   ├── ProjectController.java
│   │   │   │       │   └── TodoController.java
│   │   │   │       ├── model/
│   │   │   │       │   ├── Project.java
│   │   │   │       │   ├── User.java
│   │   │   │       │   └── Todo.java
│   │   │   │       ├── repository/
│   │   │   │       │   ├── ProjectRepository.java
│   │   │   │       │   ├── UserRepository.java
│   │   │   │       │   └── TodoRepository.java
│   │   │   │       ├── service/
│   │   │   │       │   ├── ProjectService.java
│   │   │   │       │   ├── UserService.java
│   │   │   │       │   └── TodoService.java
│   │   │   │       └── TodoManagerApplication.java   # Main entry point
│   │   │   └── resources/
│   │   │       ├── application.properties           # Backend configuration
│   │   └── test/
│   │       └── java/
│   │           └── com.todo.manager/
│   │               ├── ProjectControllerTests.java
│   │               └── TodoControllerTests.java
│   ├── build.gradle                                 # Gradle build file
│   ├── libs/                                        # Contains ojdbc11.jar (Oracle JDBC driver
│
├── frontend/                    # Frontend application (React)
│   ├── public/
│   │   └── index.html           # Entry point for the React app
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── Login.js
│   │   │   ├── ProjectForm.js
│   │   │   ├── ProjectList.js
│   │   │   ├── ProjectDetail.js
│   │   │   ├── UserForm.js
│   │   │   ├── UserContext.js
│   │   │   ├── TodoList.js
│   │   │   └── TodoForm.js
│   │   ├── App.js               # Main app component
│   │   └── index.js             # ReactDOM render
│   ├── package.json             # Frontend dependencies
│
├── README.md                    # Overall project documentation

Running the Project
Ensure the backend and frontend are both running:

Backend: http://localhost:8080
Frontend: http://localhost:3000
Open the frontend in your browser at http://localhost:3000.

Use the interface to:

Create and view projects.
Add, edit, and delete todos within a project.
Toggle todos as complete or pending.




