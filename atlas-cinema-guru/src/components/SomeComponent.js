// src/components/SomeComponent.js

import React, { useState } from 'react';
import Input from './general/Input';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const SomeComponent = () => {
  const [username, setUsername] = useState('');
  const [minDate, setMinDate] = useState('');

  return (
    <div>
      <Input
        label="Username"
        type="text"
        className="username-input"
        value={username}
        setValue={setUsername}
        icon={faUser}
      />
      <Input
        label="Minimum Date"
        type="date"
        className="date-input"
        value={minDate}
        setValue={setMinDate}
      />
    </div>
  );
};

export default SomeComponent;
