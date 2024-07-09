import React from 'react';
import './navigation.css';

const Header = ({ userUsername, setIsLoggedIn }) => {
    const logout = () => {
        localStorage.removeItem('accessToken');
        setIsLoggedIn(false);
    };

    return (
        <nav>
            <div>
                <img src="https://picsum.photos/100/100" alt="User Avatar" width="30" height="30" />
                <p>Welcome, {userUsername}</p>
            </div>
            <div className="logout" onClick={logout}>
                <span>Logout</span>
            </div>
        </nav>
    );
};

export default Header;
