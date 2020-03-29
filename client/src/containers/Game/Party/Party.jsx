import React from 'react';
import { ScrollSync } from 'react-scroll-sync';
import Button from '../../../elements/Button';
import Title from '../../../elements/Title';
import PlayerRow from '../../../components/PlayerRow';
import { view } from '../containers.module.css';

export default ({ players, tree, currentRound, numberOfRounds, onFinishRound }) => {
  const currentRoundTitle = (
    <Title title={`Round ${currentRound+1} of ${numberOfRounds}`}/>
  );
  const playerRows = (
    <ScrollSync>
      <div>
        {players.map(
          (player, i) => (<PlayerRow key={i} player={player} tree={tree}/>)
        )}
      </div>
    </ScrollSync>
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
