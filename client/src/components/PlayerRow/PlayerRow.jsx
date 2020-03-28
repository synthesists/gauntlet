import React from 'react';

import {
  PlayerName,
  PlayerRow,
  DrinkSummary,
  DrinkInfo,
  Circle,
} from './PlayerRow.module.css';

export default ({ player, tree }) => {
  const { nodesVisited } = player;
  const lastNodeVisited = nodesVisited[nodesVisited.length - 1];
  const currentDrink = tree[lastNodeVisited].drink;
  const playerName = (<h2 className={PlayerName}>{player.name}</h2>);
  const currentDrinkLabel = (<div className={Circle}>{currentDrink.displayName}</div>);
  const currentDrinkName = (<b>{currentDrink.displayName}</b>);
  const currentDrinkType = (<div>{currentDrink.displayPrice}</div>);
  const currentDrinkInfo = (
    <div className={DrinkInfo}>
      {currentDrinkName}
      {currentDrinkType}
    </div>
  );
  const currentDrinkSummary = (
    <div className={DrinkSummary}>
      {currentDrinkLabel}
      {currentDrinkInfo}
    </div>
  );

  return(
    <div
      className={PlayerRow}
      style={{ background: player.colour }}
    >
      {playerName}
      {currentDrinkSummary}
    </div>
  );
}
