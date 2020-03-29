import React from 'react';

import { Circle } from './Circle.module.css';

export default ({ content }) => {
  return (
    <div className={Circle}>{content.displayName}</div>
  );
}
