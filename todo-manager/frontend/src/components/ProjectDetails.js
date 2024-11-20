import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import TodoList from './TodoList';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${projectId}`)
            .then((response) => response.json())
            .then((data) => setProject(data))
            .catch((err) => setError('Failed to load project details.'));
    }, [projectId]);

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    if (!project) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Project Details</h2>
            <p><strong>Name:</strong> {project.name}</p>
            <p><strong>Description:</strong> {project.description}</p>

            <Link to={`/projects/edit/${projectId}`}>
                <button>Edit Project</button>
            </Link>

            <TodoList projectId={projectId} />
            
        </div>
    );
};

export default ProjectDetails;
