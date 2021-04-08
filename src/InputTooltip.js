import React, { useState } from 'react';
import validationMap from './PasswordInput';

const Requirement = ({ children, type, value }) => {
  const predicate = validationMap[type];
  const isValid = predicate(value);

  return (
    <li className="requirement">
      <span>{isValid ? "✔︎" : ""}</span>
      {children}
    </li>
  );
}

const InputTooltip = () => {
  const [value, setValue] = useState("");

  return (
    <ul>
      <div>Choose a secure password</div>
      <Requirement value={value} type="length">
        8 characters
      </Requirement>
      <Requirement value={value} type="uppercase">
        1 uppercase letter
      </Requirement>
      <Requirement value={value} type="lowercase">
        1 lowercase letter
      </Requirement>
      <Requirement value={value} type="special">
        1 special character
      </Requirement>
      <Requirement value={value} type="numeric">
        1 number
      </Requirement>
    </ul>
  );
};

export default InputTooltip;