import React from 'react';
import Option from '../../../components/Option/Option';
import { view } from './PlayerChoice.module.css';

export default ({ player, currentRound, numberOfRounds, options, onChoice }) => {

  console.log('options', options);
  return (
    <div className={view} style={{background: player.colour}}>
      <h1>{`Round ${currentRound+1} of ${numberOfRounds}`}</h1>
      <h2>{`${player.name}'s turn`}</h2>
      <h2>{`Options: `}</h2>

      {options.map((option, i) => (
          <Option
            key={`${option.displayName}${i}`}
            onClick={() => onChoice(i)}
            name={option.displayName}
          />)
        )
      }
    </div>
  )

};
