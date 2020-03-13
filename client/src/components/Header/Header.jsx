import React from 'react';

import { Header } from './Header.module.css';
import Logo from '../../elements/Logo';

export default () => {
  return(
    <header className={Header}>
      <Logo colorScheme={'light'} />
    </header>
  ); 
}
