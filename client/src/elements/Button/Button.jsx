import React from 'react'

import { ButtonWrapper, FormButtonWrapper } from './Button.module.css';

export default ({ position, type, name, clicked, label }) => {
  const buttonClasses = [
    ButtonWrapper,
    (position === 'onForm') ? FormButtonWrapper : null
  ];
  
  return (
    <button 
      type={"type"} 
      name={"name"}
      onClick={clicked}>{label}</button>
  );
}
