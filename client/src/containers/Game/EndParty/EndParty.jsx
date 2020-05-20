import React from 'react';
import { ScrollSync } from 'react-scroll-sync';
// import Button from '../../../elements/Button/Button';
import Title from '../../../elements/Title';
import EndPlayerRow from '../../../components/EndPlayerRow';
import { view } from '../containers.module.css';

export default ({ players, tree, numberOfRounds }) => {
  const title = <Title title={`Gauntlet Complete`}/>;
  const playerRows = (
    <ScrollSync>
      <div>
        {players.map(
          (player, i) => (<EndPlayerRow key={i} player={player} tree={tree}/>)
        )}
      </div>
    </ScrollSync>
  );
  // const viewTreeButton = (
  //   <Button
  //     onClick={}
  //     name="submit">
  //     <h2>View Tree</h2>
  //   </Button>
  // );

  return (
    <div className={view}>
      {title}
      <h2>{`${numberOfRounds} rounds`}</h2>
      {playerRows}
      {/* {viewTreeButton} */}
    </div>
  );

};
