import React from 'react';
import logo from './logo.svg';
import './App.css';

import Venues from './components/Venues';
import { getVenues } from './utils/apiRequests';

export default () => {
  const foo = async () => {
    const response = await getVenues();
    console.log((response));
  }
  foo();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Venues venues={[{ name: 'Craig' }, { name: 'Matt' }]} />
      </header>
    </div>
  );
};
