import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Venues from './components/Venues';
import { getVenues } from './utils/apiRequests';

export default () => {
  const [venues, setVenues] = useState([]);
  useEffect(() => {
    const callVenues = async () => {
      const { data } = await getVenues();
      setVenues(data.venues);
    }
    callVenues();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Venues venues={venues} />
      </header>
    </div>
  );
};
