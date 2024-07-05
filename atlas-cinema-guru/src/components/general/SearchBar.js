import React from 'react';
import './general.css';

const SearchBar = ({ title, setTitle }) => {
  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={title}
        onChange={handleInput}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
