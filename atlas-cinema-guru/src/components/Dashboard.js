import React from 'react';
import './dashboard.css';
import Header from '../components/navigation/header';
import SideBar from '../components/navigation/sidebar';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
    return (
        <div className="dashboard">
            <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
            <div className="dashboard-content">
                <SideBar />
                {/* Add your main content here */}
            </div>
        </div>
    );
};

export default Dashboard;
