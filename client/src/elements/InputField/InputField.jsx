import React from 'react'

import classes from './InputField.module.css';

export default ({ type, label, name, placeholder, value, handleChange, error }) => {
  return (
    <div className={classes.InputFieldWrapper}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required />
    </div>
  );
};
