// src/routes/auth/Authentication.js
import React, { useState } from 'react';
import './auth.css';
import Login from './login';
import Register from './register';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="auth-container">
            <div className="auth-header">
                <button onClick={() => setIsLogin(true)}>Sign In</button>
                <button onClick={() => setIsLogin(false)}>Sign Up</button>
            </div>
            <div className="auth-form">
                {isLogin ? (
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
            </div>
        </div>
    );
};

export default Authentication;
