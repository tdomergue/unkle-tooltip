import React from 'react';

const validationMap = {
  lowercase: value => /[a-z]/.test(value),
  uppercase: value => /[A-Z]/.test(value),
  special: value => /[!@#$%^&*+_\-~]/.test(value),
  numeric: value => /[0-9]/.test(value),
  length: value => value.length >= 8
};

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

const InputTooltip = (props) => {

  return (
    <ul className="input-tooltip">
      <h4>Choose a secure password</h4>
      <Requirement value={props.value} type="length">
        8 characters
      </Requirement>
      <Requirement value={props.value} type="uppercase">
        1 uppercase letter
      </Requirement>
      <Requirement value={props.value} type="lowercase">
        1 lowercase letter
      </Requirement>
      <Requirement value={props.value} type="special">
        1 special character
      </Requirement>
      <Requirement value={props.value} type="numeric">
        1 number
      </Requirement>
    </ul>
  );
};

export default InputTooltip;