import React from 'react'

export default ({ id, options }) => (
  <select id={id} name={id}>
    {options.map(option =>  <option value={option}>{option}</option>)}
  </select> 
);
