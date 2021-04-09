import React from 'react';

const PasswordInput = (props) => {

  return (
    <div>
      <input
        type="password"
        placeholder="Choose a password..."
        value={props.value}
        onChange={evt => props.setValue(evt.target.value)}
        onFocus={() => props.setActive(true)}
        onBlur={() => props.setActive(false)}
      />
    </div>
  );
};

export default PasswordInput