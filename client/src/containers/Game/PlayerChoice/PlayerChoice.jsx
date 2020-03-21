import React, { useState, useEffect } from 'react';
import Option from '../../../components/Option/Option';

export default ({ player, currentRound, numberOfRounds, options, onChoice }) => {

  console.log('options', options);
  return (
    <div style={{color: player.colour}}>
      <h1>{`Round: ${currentRound+1} / ${numberOfRounds}`}</h1>
      <h1>{`${player.name}'s turn`}</h1>
      <h1>{`Options: `}</h1>
      
      {options.map(option => (
          <Option
            key={option.drink.displayName}
            onClick={() => onChoice(player, option)}
            name={option.drink.displayName}
          />)
        )
      }
    </div>
  )

};
