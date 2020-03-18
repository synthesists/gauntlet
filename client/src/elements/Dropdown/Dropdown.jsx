import React from 'react'

import { DropdownWrapper } from './Dropdown.module.css'

export default ({ id, name, options, label, onChange }) => (
  <div className={DropdownWrapper}>
    <label>{label}</label>
    <select onChange={onChange} id={id} label="label" name={name}>
      {options.map(option => <option value={option}>{option}</option>)}
    </select>
  </div>
);
