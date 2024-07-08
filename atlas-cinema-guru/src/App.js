import React, { useState } from 'react';
import './components/general/general.css';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';

const App = () => {
    const [username, setUsername] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [searchTitle, setSearchTitle] = useState('');

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    const handleButtonClick = () => {
        console.log('Button clicked');
    };

    return (
        <div className="App">
            <div className="inputdiv">
                <div className="inputheader">
                    <img src="image.png" width="30px" height="30px" alt="User Icon" />
                    <h1>Username</h1>
                </div>
                <Input
                    label="Username"
                    type="text"
                    className="my-input"
                    value={username}
                    setValue={setUsername}
                />
            </div>

            <div className="select-input-wrapper">
                <SelectInput
                    label="Select Option"
                    options={options}
                    className="my-select-input"
                    value={selectedOption}
                    setValue={setSelectedOption}
                />
            </div>

            <div className="button-container">
                <Button
                    label="Load More..."
                    className="my-button"
                    onClick={handleButtonClick}
                />
            </div>

            <div className="search-bar-container">
                <SearchBar
                    title={searchTitle}
                    setTitle={setSearchTitle}
                />
            </div>
        </div>
    );
};

export default App;
