import React, { useState, useEffect } from 'react';
import './components/general/general.css';
import Authentication from './routes/auth/Authentication';
import Dashboard from './components/Dashboard';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userUsername, setUserUsername] = useState('');

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            setIsLoggedIn(true);
            setUserUsername('User');
        }
    }, []);

    return (
        <div className="App">
            {isLoggedIn ? (
                <Dashboard
                    userUsername={userUsername}
                    setIsLoggedIn={setIsLoggedIn}
                />
            ) : (
                <Authentication
                    setIsLoggedIn={setIsLoggedIn}
                    setUserUsername={setUserUsername}
                />
            )}
        </div>
    );
};

export default App;
