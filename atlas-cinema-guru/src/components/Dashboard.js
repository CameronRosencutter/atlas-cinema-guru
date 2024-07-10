import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './dashboard.css';
import Header from '../components/navigation/header';
import SideBar from '../components/navigation/sidebar';
import HomePage from '../routes/home'; // Placeholder for the HomePage component
import Favorites from '../routes/favorites'; // Placeholder for the Favorites component
import WatchLater from '../routes/watchlater'; // Placeholder for the WatchLater component

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
    return (
        <div className="dashboard">
            <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
            <div className="dashboard-content">
                <SideBar />
                <div className="main-content">
                    <Routes>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/watchlater" element={<WatchLater />} />
                        <Route path="*" element={<Navigate to="/home" />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;