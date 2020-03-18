import React, { useState } from 'react';
// import './App.css';
import classes from './App.module.css';

import Setup from './containers/Setup/Setup';
import Header from './components/Header';
import Game from './containers/Game/Game';

export default () => {
  const [playerNames, setPlayerNames] = useState([]);
  const [numberOfRounds, setNumberOfRounds] = useState(0);
  const handlePress = (names, rounds) => {
    setPlayerNames(names);
    setNumberOfRounds(rounds);
  }
  return (
    <div className={classes.AppWrapper}>
      <Header />

      <main className={classes.AppMain}>
        {playerNames.length === 0 ? <Setup handlePress={handlePress} /> : null}
        {playerNames.length > 0 ? <Game playerNames={playerNames} numberOfRounds={numberOfRounds} /> : null}
      </main>
    </div>
  );
}
