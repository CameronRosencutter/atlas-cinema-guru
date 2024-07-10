import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Activity from '../activity';
import './navigation.css';

const SideBar = () => {
    const [selected, setSelected] = useState('home');
    const [small, setSmall] = useState(true);
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(true); // Set to true to show activities by default
    const navigate = useNavigate();

    const setPage = (pageName) => {
        setSelected(pageName);
        navigate(`/${pageName}`);
    };

    const toggleSidebar = () => {
        setSmall(!small);
    };

    useEffect(() => {
        axios.get('/api/activity')
            .then(response => {
                setActivities(response.data);
            })
            .catch(error => {
                console.error('Error fetching activities:', error);
            });
    }, []);

    return (
        <nav className={`sidebar ${small ? '' : 'expanded'}`}>
            <button className="toggle-button" onClick={toggleSidebar}>
                {small ? '➡️' : '⬅️'}
            </button>
            <ul>
                <li className={selected === 'home' ? 'active' : ''} onClick={() => setPage('home')}>
                    <span className="icon">🏠</span>
                    {!small && 'Home'}
                </li>
                <li className={selected === 'favorites' ? 'active' : ''} onClick={() => setPage('favorites')}>
                    <span className="icon">⭐</span>
                    {!small && 'Favorites'}
                </li>
                <li className={selected === 'watchlater' ? 'active' : ''} onClick={() => setPage('watchlater')}>
                    <span className="icon">⏰</span>
                    {!small && 'Watch Later'}
                </li>
            </ul>
            {showActivities && (
                <div className="latest-activities">
                    <h3>Latest Activities</h3>
                    <ul>
                        {activities.slice(0, 10).map((activity, index) => (
                            <Activity key={index} activity={activity} />
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default SideBar;
