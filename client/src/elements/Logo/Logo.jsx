import React from 'react'

import { Logo, Dark, Light } from './Logo.module.css';

export default ({ colorScheme, clicked }) => {
  const logoWithColorScheme = [
    Logo,
    colorScheme === 'light' ? Light : Dark,
  ];
  return(
    <h1 className={logoWithColorScheme.join(' ')} onClick={clicked}>
      Gauntlet
    </h1>
  );
}
