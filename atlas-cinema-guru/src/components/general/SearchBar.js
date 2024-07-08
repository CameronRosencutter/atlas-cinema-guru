import React from 'react';
import './general.css';

const SearchBar = ({ title, setTitle }) => {
    const handleInput = (event) => {
        setTitle(event.target.value);
    };

    return (
        <div className="search-bar">
            <img src="./icons8-magnifying-glass-250.png" alt="Search Icon" className="search-icon" />
            <input 
                type="text" 
                value={title} 
                onChange={handleInput} 
                placeholder="Search Movies..." 
            />
        </div>
    );
};

export default SearchBar;
