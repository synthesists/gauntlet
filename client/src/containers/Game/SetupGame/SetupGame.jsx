import React, { useState } from 'react';

import Dropdown from '../../../elements/Dropdown/Dropdown';
import InputField from '../../../elements/InputField/InputField';
import Button from '../../../elements/Button/Button';
import classes from './SetupGame.module.css'

const PLAYER_COLOURS = [
  'lightSkyBlue',
  'lightCoral',
  'cadetBlue',
  'plum',
  'khaki',
];
let playerNames = [""];
let numberOfRounds = 1;

const fillPlayerNames = (numberOfPlayers) => {
  while (playerNames.length < numberOfPlayers) {
    playerNames.push("");
  }
  while (playerNames.length > numberOfPlayers) {
    playerNames.pop();
  }
};

export default ({ onStart }) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);

  fillPlayerNames(numberOfPlayers);

  const onChangeNumRounds = (e) => {
    numberOfRounds = e.target.value;
  }

  const onChangeNumPlayers = (e) => {
    setNumberOfPlayers(e.target.value);
  }

  const onChangePlayerName = (e, i) => {
    playerNames[i] = e.target.value;
  }

  const onClickStart = () => {
    const players = playerNames.map((name, i) => ({
      name,
      colour: PLAYER_COLOURS[i],
      nodesVisited: ['start'],
    }));
    onStart(players, numberOfRounds);
  }

  const playerRow = (i) => (
    <InputField 
      key={i}
      handleChange={(e) => onChangePlayerName(e, i)}
      label={`Player ${i+1}: `}
    />
  )
  
  const playerRows = playerNames.map((_, i) => playerRow(i));

  return(
    <main className={classes.Main}>
      <Dropdown
        id="rounds"
        onChange={onChangeNumRounds}
        label="Number of rounds: "
        options={[1, 3, 5, 7, 9]}
      />
      <Dropdown
        id="players"
        onChange={onChangeNumPlayers}
        label="Number of Players: "
        options={[1, 2, 3, 4, 5]}
      />
      {playerRows}
      <Button
        onClick={onClickStart}
        name="submit">
        <h1>Submit</h1>
      </Button>
    </main>
  );
}
