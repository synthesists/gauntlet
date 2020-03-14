import React from 'react'

import { Card } from './Card.module.css';

const card = ({ children }) => (
  <div className={Card}>
    {children}
  </div>
);

export default card;