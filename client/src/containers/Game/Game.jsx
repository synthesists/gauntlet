import React, { useState, useEffect } from 'react';
import SetupGame from './SetupGame';
import PlayerChoice from './PlayerChoice';
import { getTree } from '../../utils/apiRequests';

const GAME_STATES = {
  SETUP: 'SETUP',
  PLAYER_CHOICE: 'PLAYER_CHOICE',
  PARTY: 'PARTY',
  TREE: 'TREE',
  END: 'END',
}

const Game = ({ venue }) => {
  const [gameState, setGameState] = useState(GAME_STATES.SETUP);
  const [tree, setTree] = useState();
  const [numberOfRounds, setNumberOfRounds] = useState(1);
  const [players, setPlayers] = useState([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);

  const getTreeFromServer = async () => {
    const { data } = await getTree(numberOfRounds, venue.id);
    console.log(data)
    setTree(data)
  }
    
  const onStart = async(chosenPlayers, chosenNumberOfRounds) => {
    await getTreeFromServer();
    setPlayers(chosenPlayers);
    setNumberOfRounds(chosenNumberOfRounds);
    setGameState(GAME_STATES.PLAYER_CHOICE);
  };

  const onChoice = (player, option) => {
    if (currentPlayerIndex === players.length - 1) {
      setCurrentPlayerIndex(0);
      setCurrentRound(currentRound + 1);
    } else {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
    }
  }
  
  if (currentRound >= numberOfRounds && gameState !== GAME_STATES.END) {
    setGameState(GAME_STATES.END);
  }
  
  switch (gameState) {
    case GAME_STATES.SETUP:
      return <SetupGame onStart={onStart}/>  
    case GAME_STATES.PLAYER_CHOICE:
      const currentPlayer = players[currentPlayerIndex];
      const currentNode = currentPlayer.nodesVisited[currentPlayer.nodesVisited.length - 1];
      const options = tree[currentNode].children.map(child => tree[child]);
      return <PlayerChoice
        player={currentPlayer}
        currentRound={currentRound}
        numberOfRounds={numberOfRounds}
        options={options}
        onChoice={onChoice}
      />
    case GAME_STATES.END:
      return (<h1>FINISHED</h1>  )
    default:
      break;
  }

  return null;
}

export default Game;
