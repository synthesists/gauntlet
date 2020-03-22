import React from 'react';

// import Setup from './containers/Setup/Setup';
import Header from './components/Header';
import Game from './containers/Game/Game';

export default () => {
  return (
    <div>
      <Header />
      <main>
        <Game venue={{ id: 670 }} />
      </main>
    </div>
  );
}
