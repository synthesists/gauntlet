import React from 'react';

import { Option } from './Option.module.css';
import Card from '../../elements/Card';

export default ({ name, handlePress}) => (
  <div onClick={handlePress} className={Option}>
    <Card>
      <h1>{name}</h1>
    </Card>
  </div>
); 
