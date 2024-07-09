import React, { useState } from 'react';
import './auth.css';
import Login from './login';
import Register from './register';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="auth-container">
            <div className="auth-header">
                <button 
                    className={isLogin ? 'active' : ''} 
                    onClick={() => setIsLogin(true)}>
                    Sign In
                </button>
                <button 
                    className={!isLogin ? 'active' : ''} 
                    onClick={() => setIsLogin(false)}>
                    Sign Up
                </button>
            </div>
            {isLogin ? (
                <Login 
                    username={username}
                    password={password}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    setIsLoggedIn={setIsLoggedIn}
                    setUserUsername={setUserUsername}
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
    );
};

export default Authentication;
