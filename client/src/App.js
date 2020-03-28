import React from 'react';

// import Setup from './containers/Setup/Setup';
import Game from './containers/Game/Game';

export default () => {
  return (
    <div>
      <main>
        <Game venue={{ id: 670 }} />
      </main>
    </div>
  );
}
