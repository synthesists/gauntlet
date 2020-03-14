import React, { useState, useEffect } from 'react';
import Button from '../../elements/Button/Button';
import { getTree } from '../../utils/apiRequests';

const playersData = [];

export default ({ playerNames, numberOfRounds }) => {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [round, setRound] = useState(0);
  const [tree, setTree] = useState();
  
  useEffect(() => {
    playerNames.forEach(name => {
      playersData.push({ name, currentNode: 'start', nodeHistory: [], drinkHistory: [] });
    });
    const foo = async () => {
      const { data } = await getTree(parseInt(numberOfRounds));
      setTree(data)
    }
    foo();
  }, [numberOfRounds]);

  const handleClick = () => {
    if (currentPlayer === playersData.length - 1) {
      setCurrentPlayer(0);
      setRound(round + 1);
    } else {
      setCurrentPlayer(currentPlayer + 1);
    }
  }

  if (round >= numberOfRounds) return <h1>FINISHED</h1>
  console.log(tree);
  
  return (
    <div>
      <h1>{`Round: ${round+1} / ${numberOfRounds}`}</h1>
      <h1>{`${playerNames[currentPlayer]}'s turn`}</h1>
      <h1>{`Options: `}</h1>
      { tree ? tree[playersData[currentPlayer].currentNode].children.join('\n') : null}
      <Button label="Done" clicked={handleClick} />
    </div>
  )

};