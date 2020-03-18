import React from 'react'

import { ButtonWrapper } from './Button.module.css';

export default ({ type, name, onClick, children }) => {
  return(
    <div className={ButtonWrapper}>
      <button 
        type={type} 
        name={name}
        onClick={onClick}>{children}</button>
    </div>
  );
}