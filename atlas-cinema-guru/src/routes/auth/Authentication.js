import React, { useState } from 'react';
import './auth.css';
import Login from './login';
import Register from './register';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
    const [switchState, setSwitchState] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simulate a successful authentication process
        const accessToken = 'fakeAccessToken';
        localStorage.setItem('accessToken', accessToken);
        setUserUsername(username || 'User');
        setIsLoggedIn(true);
    };

    return (
        <div className="auth-container">
            <div className="auth-header">
                <button
                    className={`auth-header-button ${switchState ? 'active' : ''}`}
                    onClick={() => setSwitchState(true)}
                >
                    Sign In
                </button>
                <button
                    className={`auth-header-button ${!switchState ? 'active' : ''}`}
                    onClick={() => setSwitchState(false)}
                >
                    Sign Up
                </button>
            </div>
            <form className="auth-form" onSubmit={handleSubmit}>
                {switchState ? (
                    <Login
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                    />
                ) : (
                    <Register
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                    />
                )}
            </form>
        </div>
    );
};

export default Authentication;
