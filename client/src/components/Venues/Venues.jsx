import React from 'react';

import { Venue } from './Venues.module.css';
import Dropdown from '../../elements/Dropdown/Dropdown';

export default ({ venues }) => {
  return(
    <Dropdown id="venues" options={venues.map(({ name }) => name)}/>
  );
}
