import React from 'react';
import './dashboard.css';
import Header from './navigation/header';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
    return (
        <div className="dashboard">
            <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
            {/* Add other dashboard elements here */}
        </div>
    );
};

export default Dashboard;
