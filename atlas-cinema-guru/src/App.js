import React, { useState, useEffect } from 'react';
import './components/general/general.css';
import Authentication from './routes/auth/Authentication';
import Dashboard from './components/Dashboard'; // Assuming you have a Dashboard component

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userUsername, setUserUsername] = useState('');

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            fetch('/api/auth/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setIsLoggedIn(true);
                    setUserUsername(data.username);
                }
            });
        }
    }, []);

    return (
        <div className="App">
            {isLoggedIn ? (
                <Dashboard username={userUsername} />
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
