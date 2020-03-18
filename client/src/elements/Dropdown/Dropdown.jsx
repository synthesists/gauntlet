import React from 'react'

export default ({ id, options, label, onChange }) => (
  <div>
    <label htmlFor="cars">{label}</label>
    <select onChange={onChange} id={id} label="label" name={id}>
      {options.map(option => <option value={option}>{option}</option>)}
    </select>
  </div>
);
