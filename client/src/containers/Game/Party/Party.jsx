import React from 'react';
import Button from '../../../elements/Button/Button';
import PlayerRow from '../../../components/PlayerRow';
import {
  view,
} from './Party.module.css';

export default ({ players, tree, currentRound, numberOfRounds, onFinishRound }) => {
  const currentRoundTitle = (
    <h1>{`Round ${currentRound+1} of ${numberOfRounds}`}</h1>
  );
  const playerRows = (
    <div>
      {players.map(
        (player, i) => (<PlayerRow key={i} player={player} tree={tree}/>)
      )}
    </div>
  );
  const nextRoundButton = (
    <Button
      onClick={onFinishRound}
      name="submit">
      <h2>Finish Round</h2>
    </Button>
  );

  return (
    <div className={view}>
      {currentRoundTitle}
      {playerRows}
      {nextRoundButton}
    </div>
  );

};
