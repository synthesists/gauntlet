import React, { useState, useEffect } from 'react';
import Option from '../../../components/Option/Option';
import { view } from './PlayerChoice.module.css';

export default ({ player, currentRound, numberOfRounds, options, onChoice }) => {

  console.log('options', options);
  return (
    <div className={view} style={{background: player.colour}}>
      <h1>{`Round: ${currentRound+1} / ${numberOfRounds}`}</h1>
      <h1>{`${player.name}'s turn`}</h1>
      <h1>{`Options: `}</h1>
      
      {options.map((option, i) => (
          <Option
            key={option.drink.displayName}
            onClick={() => onChoice(player, i)}
            name={option.drink.displayName}
          />)
        )
      }
    </div>
  )

};
