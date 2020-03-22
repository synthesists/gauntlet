import React from 'react';

import { Option } from './Option.module.css';
import Card from '../../elements/Card';

export default ({ name, onClick }) => (
  <div onClick={onClick} className={Option}>
    <Card>
      <h2>{name}</h2>
    </Card>
  </div>
);
