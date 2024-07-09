// src/routes/auth/Register.js
import React from 'react';
import './auth.css';

const Register = ({ username, password, setUsername, setPassword }) => {
    const handleRegister = (event) => {
        event.preventDefault();
        // Add your register logic here
    };

    return (
        <form onSubmit={handleRegister}>
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
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
