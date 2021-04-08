import React, { useState } from 'react';

const PasswordInput = (props) => {
  const [value, setValue] = useState("");

  const validationMap = {
    lowercase: value => /[a-z]/.test(value),
    uppercase: value => /[A-Z]/.test(value),
    special: value => /[\!\@\#\$\%\^\&\*\+\_\-\~]/.test(value),
    numeric: value => /[0-9]/.test(value),
    length: value => value.length >= 8
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Choose a password..."
        value={value}
        onChange={evt => setValue(evt.target.value)}
        onFocus={() => props.setActive(true)}
        onBlur={() => props.setActive(false)}
      />
    </div>
  );
};

export default PasswordInput