import React from 'react';
import { ScrollSyncPane } from 'react-scroll-sync';

import PlayerName from '../../elements/PlayerName';
import Circle from '../Circle';
import {
  PlayerRow,
  DrinksRow,
} from './EndPlayerRow.module.css';

export default ({ player, tree }) => {
  const playerName = <PlayerName name={player.name}/>;

  const { nodesVisited } = player;
  const drinkNodesVisited = nodesVisited.slice(1);
  const drinks = drinkNodesVisited.map(node => tree[node].drink);
  const drinkLables = (
    <div className={DrinksRow}>
      {drinks.map(
        (drink, i) => (<Circle key={i} content={drink}/>)
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
