// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './components/general/general.css';
import Input from './components/general/Input.js';
import SelectInput from './components/general/SelectInput.js';
import Button from './components/general/Button.js';
import SearchBar from './components/general/SearchBar';
import Dashboard from './components/Dashboard';
import Authentication from './routes/auth/Authentication';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userUsername, setUserUsername] = useState("");

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            axios.post('/api/auth/', {}, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            .then(response => {
                setIsLoggedIn(true);
                setUserUsername(response.data.username);
            })
            .catch(error => {
                console.error('Authentication failed:', error);
                setIsLoggedIn(false);
            });
        }
    }, []);

    if (isLoggedIn) {
        return <Dashboard username={userUsername} />;
    } else {
        return <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />;
    }
};

export default App;
