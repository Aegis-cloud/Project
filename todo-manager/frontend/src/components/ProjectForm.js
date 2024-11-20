import React, { useState } from 'react';
import axios from 'axios';


const ProjectForm = ({ onProjectCreated }) => {
    const [title, setTitle] = useState('');
    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('DATA',title);
        axios.post('/api/projects', { title })
            .then(response => {
                if (response.status === 201) {
                    console.log('User created:', response);
                }
                onProjectCreated(response.data);
                setTitle('');

            })
            .catch(error => console.error("There was an error creating the project:", error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Project Title"
            />
            <button type="submit">Create Project</button>
        </form>
    );
};

export default ProjectForm;
