import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import ProjectForm from './components/ProjectForm';
import Login from './components/Login';
import UserForm from './components/UserForm';


const App = () => {
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication

    const handleProjectSelected = (projectId) => {
        setSelectedProjectId(projectId);
    };

    const handleLogin = () => {
        setIsAuthenticated(true); // User logged in successfully
    };

    const handleLogout = () => {
        setIsAuthenticated(false); // User logged out
    };

    return (
        <Router>
            <div>
            <h1>Todo Manager</h1>

                <Routes>
                    {/* Public Routes */}
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="/register" element={<UserForm />} />
                    
                    {/* Protected Routes (Require authentication) */}
                    <Route
                        path="/"
                        element={isAuthenticated ? <ProjectList onProjectSelected={handleProjectSelected} /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/projects/details"
                        element={isAuthenticated ? <ProjectDetails projectId={selectedProjectId} /> : <Navigate to="/login" />}
                    />
                    <Route path="/projects/new" element={isAuthenticated ? <ProjectForm /> : <Navigate to="/login" />} />
                    <Route
                        path="/projects/edit/:projectId"
                        element={isAuthenticated ? <ProjectForm projectId={selectedProjectId} /> : <Navigate to="/login" />}
                    />
                    
                </Routes>
                <div>
    <nav>
        {/* Other navigation links */}
        {isAuthenticated && (
            <button onClick={handleLogout}>Logout</button>
        )}
    </nav>
</div>

            </div>
            
        </Router>
    );
};

export default App;
