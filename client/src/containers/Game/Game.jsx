import React, { useState, useEffect } from 'react';
import Button from '../../elements/Button/Button';

const playersData = [];

export default ({ playerNames, numberOfRounds }) => {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [round, setRound] = useState(0);
  useEffect(() => {
    playerNames.forEach(name => {
      playersData.push({ name, currentNode: '', nodeHistory: [], drinkHistory: [] });
    });
  }, [])

  const handleClick = () => {
    if (currentPlayer === playersData.length - 1) {
      setCurrentPlayer(0);
      setRound(round + 1);
    } else {
      setCurrentPlayer(currentPlayer + 1);
    }
  }

  if (round >= numberOfRounds) return <h1>FINISHED</h1>

  return (
    <div>
      <h1>{`Round: ${round+1} / ${numberOfRounds}`}</h1>
      <h1>{`${playerNames[currentPlayer]}'s turn`}</h1>
      <h1>{`Options: `}</h1>
      <Button label="Done" clicked={handleClick} />
    </div>
  )

};