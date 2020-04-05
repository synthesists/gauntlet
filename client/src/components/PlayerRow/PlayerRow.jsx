import React, { useRef, useEffect } from 'react';
import { ScrollSyncPane } from 'react-scroll-sync';

import { scrollToRef } from '../../utils/scroll.util';
import PlayerName from '../../elements/PlayerName';
import Circle from '../Circle';
import {
  PlayerRow,
  DrinkSummary,
  DrinkInfo,
  DrinksRow
} from './PlayerRow.module.css';

export default ({ player, tree }) => {
  const drinksRowEndRef = useRef(null);
  useEffect(() => scrollToRef(drinksRowEndRef), [player]);

  const playerName = <PlayerName name={player.name}/>;

  const { nodesVisited } = player;
  const drinkNodesVisited = nodesVisited.slice(1);
  const drinks = drinkNodesVisited.map(node => tree[node].drink);
  const currentDrink = drinks[drinks.length - 1];
  const currentDrinkLabel = (<Circle name={currentDrink.displayName} imageUrl={currentDrink.imageUrl}/>);
  const currentDrinkInfo = (
    <div className={DrinkInfo}>
      <b>{currentDrink.displayName}</b>
      <div>{currentDrink.displayPrice}</div>
    </div>
  );
  const currentDrinkSummary = (key) => (
    <div key={key} ref={drinksRowEndRef} className={DrinkSummary}>
      {currentDrinkLabel}
      {currentDrinkInfo}
    </div>
  );
  const drinkLables = (
    <div className={DrinksRow}>
      {drinks.map(
        (drink, i) => {
          if (i < drinkNodesVisited.length - 1) {
            return <Circle key={i} name={drink.name} imageUrl={drink.imageUrl}/>
          }
          return currentDrinkSummary(i);
        }
      )}
    </div>
  );
  const scrollBar = (
    <ScrollSyncPane group="playerRowScrollBar">
     {drinkLables}
    </ScrollSyncPane>
  );

  return(
    <div
      className={PlayerRow}
      style={{ background: player.colour }}
    >
      {playerName}
      {scrollBar}
    </div>
  );
}
