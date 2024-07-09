import React from 'react';
import './auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const Login = ({ username, password, setUsername, setPassword, setIsLoggedIn, setUserUsername }) => {
    const handleLogin = (e) => {
        e.preventDefault();
        // Implement your login logic here
        // If successful, setIsLoggedIn(true) and setUserUsername(username)
    };

    return (
        <form className="auth-form" onSubmit={handleLogin}>
            <h2>Sign in with your account</h2>
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
                <FontAwesomeIcon icon={faLock} /> Sign In
            </button>
        </form>
    );
};

export default Login;
