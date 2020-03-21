import React, { useState } from 'react';
// import './App.css';
import classes from './App.module.css';

// import Setup from './containers/Setup/Setup';
import Header from './components/Header';
import Game from './containers/Game/Game';

export default () => {
  return (
    <div className={classes.AppWrapper}>
      <Header />
      <main className={classes.AppMain}>
        <Game venue={{ id: 670 }} />
      </main>
    </div>
  );
}
