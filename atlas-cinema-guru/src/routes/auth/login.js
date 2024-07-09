// src/routes/auth/Login.js
import React from 'react';
import './auth.css';

const Login = ({ username, password, setUsername, setPassword }) => {
    const handleLogin = (event) => {
        event.preventDefault();
        // Add your login logic here
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
