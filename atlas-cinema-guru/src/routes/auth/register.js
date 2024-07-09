import React from 'react';
import './auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const Register = ({ username, password, setUsername, setPassword }) => {
    const handleRegister = (e) => {
        e.preventDefault();
        // Implement your register logic here
    };

    return (
        <form className="auth-form" onSubmit={handleRegister}>
            <h2>Create your account</h2>
            <div className="input-group">
                <FontAwesomeIcon icon={faUser} className="input-icon" />
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="input-group">
                <FontAwesomeIcon icon={faLock} className="input-icon" />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">
                <FontAwesomeIcon icon={faLock} /> Register
            </button>
        </form>
    );
};

export default Register;
