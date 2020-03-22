import React from 'react';
import Button from '../../../elements/Button/Button';
import PlayerRow from '../../../components/PlayerRow';
import {
  view,
} from './Party.module.css';

export default ({ players, tree, currentRound, numberOfRounds, onFinishRound }) => {
  const playerRows = players.map((player, i) => <PlayerRow key={i} player={player} tree={tree}/>);
  const nextRoundButton = (
    <Button
      onClick={onFinishRound}
      name="submit">
      <h2>Finish Round</h2>
    </Button>
  );

  return (
    <div>
      <h1 className={view}>{`Round ${currentRound+1} of ${numberOfRounds}`}</h1>
      <h2 className={view}>{'Time'}</h2>
      {playerRows}
      {nextRoundButton}
    </div>
  );

};
