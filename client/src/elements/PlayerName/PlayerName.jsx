import React from 'react'

import { PlayerName } from './PlayerName.module.css';

export default ({ name }) => {
  return (
    <h2 className={PlayerName}>{name}</h2>
  );
}
