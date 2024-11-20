import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleLogin = () => {
        // Make an API call to verify user credentials
        axios.post('api/auth/login', { username, password })
            .then((response) => {
                if (response.status === 200) {
                    onLogin(); // User logged in successfully
                    navigate('/projects/new', {state: { username: username}
                      });
                }
            })
            .catch((error) => {
                setError('Invalid credentials.');
            });
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleLogin}>Login</button>

            {/* Create Account Link */}
            <div>
                <p>Don't have an account?</p>
                <Link to="/register">
                    <button>Create Account</button>
                </Link>
                
            </div>
            
        </div>
    );
};

export default Login;
