import React from 'react';
import './general.css';

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`input-wrapper ${className}`}>
      {label && <label>{label}</label>}
      {icon && <span className="input-icon">{icon}</span>}
      <input
        type={type}
        value={value}
        onChange={handleInput}
        {...inputAttributes}
      />
    </div>
  );
};

export default Input;
