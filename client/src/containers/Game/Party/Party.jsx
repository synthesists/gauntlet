import React from 'react';
import Button from '../../../elements/Button/Button';

export default ({ players, currentRound, numberOfRounds, onNextRound }) => {
  return (
    <div >
      <h1>{`Round: ${currentRound+1} / ${numberOfRounds}`}</h1>
      <h1>{'Time'}</h1>
      {players.map((player, i) => (
          <h1>{player.name}</h1>
        )
      )}
      <Button
        onClick={onNextRound}
        name="submit">
        <h1>Next Round</h1>
      </Button>
    </div>
  )

};
