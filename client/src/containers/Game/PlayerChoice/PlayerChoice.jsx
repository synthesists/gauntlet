import React from 'react';
import Option from '../../../components/Option';
import Title from '../../../elements/Title';
import { view } from '../containers.module.css';

export default ({ player, currentRound, numberOfRounds, options, onChoice }) => {
  console.log('options', options);
  return (
    <div className={view} style={{background: player.colour}}>
      <Title title={`Round ${currentRound+1} of ${numberOfRounds}`}/>
      <h2>{`${player.name}, choose one:`}</h2>
      {options.map((option, i) => (
        <Option
          key={`${option.displayName}${i}`}
          onClick={() => onChoice(i)}
          name={option.displayName}
        />
      ))}
    </div>
  )

};
