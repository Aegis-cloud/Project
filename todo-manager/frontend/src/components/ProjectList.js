import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProjectList = ({ onProjectSelected }) => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null); // For handling errors

    useEffect(() => {
        // Fetch projects from the backend
        console.log('We reached ProjectList:');
        axios.get('/api/projects')
            .then((response) => {
                // Check if response data is an array before updating the state
                if (Array.isArray(response.data)) {
                    setProjects(response.data);
                } else {
                    setError('Failed to load projects.');
                }
            })
            .catch((error) => {
                console.error('Error fetching projects:', error);
                setError('Error fetching projects.');
            });
    }, []);

    const handleSelectProject = (projectId) => {
        onProjectSelected(projectId); // Pass projectId to the parent (App.js)
    };

    return (
        <div>
            <h2>Project List</h2>
            {error && <p>{error}</p>} {/* Show error message if exists */}
            {projects.length > 0 ? (
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>
                            <Link 
                                to={`/projects/${project.id}`} 
                                onClick={() => handleSelectProject(project.id)}
                            >
                                {project.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No projects found. Add a new project to get started!</p>
            )}

            <Link to="/projects/new">
                <button>Add New Project</button>
            </Link>
        </div>
    );
};

export default ProjectList;
