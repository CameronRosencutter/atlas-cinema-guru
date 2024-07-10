import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './components/general/general.css';
import Authentication from './routes/auth/Authentication';
import Dashboard from '../src/components/Dashboard.js';
import Home from './routes/home';
import Favorites from './routes/favorites';
import WatchLater from './routes/watchlater';

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
        <Router>
            <div className="App">
                {isLoggedIn ? (
                    <Routes>
                        <Route path="/" element={<Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />}>
                            <Route path="home" element={<Home />} />
                            <Route path="favorites" element={<Favorites />} />
                            <Route path="watchlater" element={<WatchLater />} />
                        </Route>
                    </Routes>
                ) : (
                    <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />
                )}
            </div>
        </Router>
    );
};

export default App;
