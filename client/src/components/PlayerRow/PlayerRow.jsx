import React from 'react';

import {
  PlayerRow,
  PlayerRowItem,
} from './PlayerRow.module.css';

const sum = (array) => array.reduce((a, b) => a + b, 0);

export default ({ player, tree }) => {
  const { nodesVisited } = player;
  const drinkNodesVisited = nodesVisited.slice(1);
  const previousDrinks = drinkNodesVisited.map(node => tree[node].drink);
  const previousDrinkNames = previousDrinks.map(
    (drink, i) => <div key={i} className={PlayerRowItem}>{drink.displayName}</div>
  );

  const totalCost = sum(previousDrinks.map(drink => drink.priceValue)).toFixed(2);

  return(
    <div
      className={PlayerRow}
      style={{ background: player.colour }}
    >
    <div className={PlayerRowItem}>{player.name}</div>
    {previousDrinkNames}
    <div className={PlayerRowItem}>{`£${totalCost}`}</div>
    </div>
  );
}
