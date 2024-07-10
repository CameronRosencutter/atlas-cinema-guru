import React from 'react';
import './components.css';

const Activity = ({ activity }) => {
    return (
        <li className="activity-item">
            <p>{activity.username} added {activity.title} to {activity.action} - {activity.date}</p>
        </li>
    );
};

export default Activity;
