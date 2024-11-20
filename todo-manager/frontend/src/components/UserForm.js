import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserForm = ({onUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('USER');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    // Handle user creation
    const handleUserCreation = () => {
        // Log the user data to check if it's correct

        // Make a POST request to the backend to create the user
        axios.post('api/register', { username, password, role })
            .then((response) => {
                if (response.status === 201) {
                    console.log('User created:', response);
                    navigate('/login');
                }
            })
            .catch((error) => {
                console.error('Error occurred:', error);
                // Handle errors (like user already exists)
                if (error.response && error.response.status === 400) {
                    setError('User already exists.');
                } else {
                    setError('An error happened. Please try again.');
                }
                setSuccess('');
            });
    };

    return (
        <div>
            <h2>Create New User</h2>

            {/* Display success message */}
            {success && <p style={{ color: 'green' }}>{success}</p>}

            {/* Display error message */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Username input field */}
            <div>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            {/* Password input field */}
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            {/* Role selection */}
            <div>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="USER">User</option>
                    {/* You can add more roles here if needed */}
                </select>
            </div>

            {/* Create user button */}
            <button onClick={handleUserCreation}>Create User</button>
        </div>
    );
};

export default UserForm;
