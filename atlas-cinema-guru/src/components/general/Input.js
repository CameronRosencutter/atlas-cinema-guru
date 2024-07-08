import React from 'react';
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {
    const handleInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="inputdiv">
            <div className="inputheader">
                {icon && <FontAwesomeIcon icon={icon} width="30px" height="30px" />}
                <h1>{label}</h1>
            </div>
            <div>
                <input
                    type={type}
                    className={className}
                    value={value}
                    onChange={handleInput}
                    {...inputAttributes}
                />
            </div>
        </div>
    );
};

export default Input;
