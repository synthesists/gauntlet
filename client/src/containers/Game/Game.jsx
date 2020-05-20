import React, { useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import SetupGame from './SetupGame';
import PlayerChoice from './PlayerChoice';
import Party from './Party';
import EndParty from './EndParty';
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

  const getTreeFromServer = async (numRounds) => {
    const { data } = await getTree(numRounds, venue.id);
    console.log('[getTreeFromServer] data')
    console.log(data)
    setTree(data)
  }

  const onStart = async(chosenPlayers, chosenNumberOfRounds) => {
    await getTreeFromServer(chosenNumberOfRounds);
    setPlayers(chosenPlayers);
    setNumberOfRounds(chosenNumberOfRounds);
    setGameState(GAME_STATES.PLAYER_CHOICE);
  };

  if (currentRound >= numberOfRounds && gameState !== GAME_STATES.END) {
    setGameState(GAME_STATES.END);
  }

  const onFinishRound = () => {
    setCurrentPlayerIndex(0);
    setCurrentRound(currentRound + 1);
    if (currentRound >= numberOfRounds) {
      setGameState(GAME_STATES.END);
    } else {
      setGameState(GAME_STATES.PLAYER_CHOICE);
    }
  };

  switch (gameState) {
    case GAME_STATES.SETUP:
      return <SetupGame onStart={onStart}/>
    case GAME_STATES.PLAYER_CHOICE:
      const currentPlayer = players[currentPlayerIndex];
      const currentNode = currentPlayer.nodesVisited[currentPlayer.nodesVisited.length - 1];
      const currentChildren = tree[currentNode].children;
      const options = currentChildren.map(child => tree[child].drink);

      const onPlayerChoice = (indexOfChosenOption) => {
        const nodeVisited = currentChildren[indexOfChosenOption];
        const newPlayers = cloneDeep(players);
        const newPlayer = newPlayers[currentPlayerIndex];
        newPlayer.nodesVisited.push(nodeVisited);
        setPlayers(newPlayers);
        if (currentPlayerIndex === players.length - 1) {
          setGameState(GAME_STATES.PARTY)
        } else {
          setCurrentPlayerIndex(currentPlayerIndex + 1);
        }
      };

      return <PlayerChoice
        player={currentPlayer}
        currentRound={currentRound}
        numberOfRounds={numberOfRounds}
        options={options}
        onChoice={onPlayerChoice}
      />
    case GAME_STATES.PARTY:
      return <Party
        players={players}
        tree={tree}
        currentRound={currentRound}
        numberOfRounds={numberOfRounds}
        onFinishRound={onFinishRound}
      />;
    case GAME_STATES.END:
      return <EndParty
        players={players}
        tree={tree}
        numberOfRounds={numberOfRounds}
      />;
    default:
      break;
  }

  return null;
}

export default Game;
