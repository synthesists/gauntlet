import React from 'react';
import Button from '../../../elements/Button/Button';
import PlayerRow from '../../../components/PlayerRow';

export default ({ players, tree, currentRound, numberOfRounds, onFinishRound }) => {
  const playerRows = players.map((player, i) => <PlayerRow player={player} tree={tree}/>);
  const nextRoundButton = (
    <Button
      onClick={onFinishRound}
      name="submit">
      <h1>Finish Round</h1>
    </Button>
  );
  
  return (
    <div >
      <h1>{`Round: ${currentRound+1} / ${numberOfRounds}`}</h1>
      <h1>{'Time'}</h1>
      {playerRows}
      {nextRoundButton}
    </div>
  );

};
