import React from 'react';

import {
  PlayerRow,
  PlayerRowItem,
} from './PlayerRow.module.css';

const sum = (array) => array.reduce((a, b) => a + b, 0);

export default ({ player, tree }) => {
  console.log('player')
  console.log(player)
  const { nodesVisited } = player;
  console.log('nodesVisited')
  console.log(nodesVisited)
  const drinkNodesVisited = nodesVisited.slice(1);
  console.log('drinkNodesVisited')
  console.log(drinkNodesVisited)
  const previousDrinks = drinkNodesVisited.map(node => tree[node].drink);
  console.log("previousDrinks")
  console.log(previousDrinks)
  const previousDrinkNames = previousDrinks.map(
    drink => <div className={PlayerRowItem}>{drink.displayName}</div>
  );

  const totalCost = sum(previousDrinks.map(drink => drink.priceValue)).toFixed(2);

  
  return(
    <div 
      className={PlayerRow}
      style={{ background: player.colour }}
    >
    <div className={PlayerRowItem}>{player.name}</div>
    <div>{previousDrinkNames}</div>
    <div className={PlayerRowItem}>{`£${totalCost}`}</div>
    </div>
  ); 
}
