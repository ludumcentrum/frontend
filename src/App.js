import React from 'react';

import PlayingCard from './components/blocks/PlayingCard';
import { CARD_RANKS, CARD_COLORS } from './components/blocks/PlayingCard/constants';

function App() {
  return (
    <div className="App">
      <PlayingCard
        rank={CARD_RANKS.find(elem => elem === 'ace')}
        color={CARD_COLORS.find(elem => elem === 'hearts')}
      />
    </div>
  );
}

export default App;
