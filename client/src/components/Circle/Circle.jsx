import React from 'react';
import Img from 'react-image';
import VisibilitySensor from 'react-visibility-sensor';

import { Circle } from './Circle.module.css';

export default ({ name, imageUrl }) => {
  const fallBackElement = <div className={Circle}>{name}</div>;
  return (
    <VisibilitySensor>
      <Img
        className={Circle}
        src={imageUrl}
        loader={fallBackElement}
        unloader={fallBackElement}
      />
    </VisibilitySensor>
  );
}
