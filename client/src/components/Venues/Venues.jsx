import React, { useState } from 'react';

import Dropdown from '../../elements/Dropdown/Dropdown';
import InputField from '../../elements/InputField/InputField';
import Button from '../../elements/Button/Button';
import classes from './Venues.module.css'
import { useEffect } from 'react';

let playerNames = [""];
let venueName;
let numberOfRounds = 1;

export default ({ venues, handlePress: handleSubmit }) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);
  useEffect(() => {
    if (venues.length > 0) {
      venueName = venues[0].name;
    }
  }, [venues.length]);

  if (playerNames.length !== numberOfPlayers) {
    while (playerNames.length < numberOfPlayers) {
      playerNames.push("");
    }
    while (playerNames.length > numberOfPlayers) {
      playerNames.pop();
    }
  }

  const handleVenueChange = (e) => {
    venueName = e.target.value;
  }
  const handleRoundsChange = (e) => {
    numberOfRounds = e.target.value;
  }

  const handlePlayersChange = (e) => {
    setNumberOfPlayers(e.target.value);
  }

  const handlePlayerNameChange = (e, n) => {
    playerNames[n] = e.target.value
  }

  const handlePress = () => {
    handleSubmit(playerNames, numberOfRounds);
  }

  return(
    <main className={classes.Main}>
      <Dropdown id="venues" onChange={handleVenueChange} label="Choose Venue: " options={venues.map(({ name }) => name).sort()}/>
      <Dropdown id="rounds" onChange={handleRoundsChange} label="Number of rounds: " options={[1, 3, 5, 7, 9]}/>
      <Dropdown id="players" onChange={handlePlayersChange} label="Number of Players: " options={[1, 2, 3, 4, 5]}/>
      {playerNames.map((_, i) => <InputField key={i} handleChange={(e) => handlePlayerNameChange(e, i)}label={`Player ${i+1}: `}/>)}
      <Button label="Submit" clicked={handlePress} />
    </main>
  );
}
