import React from 'react'

import { Title } from './Title.module.css';

export default ({ title }) => {
  return (
    <h1 className={Title}>{title}</h1>
  );
}
