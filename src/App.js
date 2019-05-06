import React from 'react';

import PlayingCard from './components/blocks/PlayingCard';
import { CARD_RANKS, CARD_COLORS } from './components/blocks/PlayingCard/constants';
import Range from './components/blocks/Range';

function App() {
  return (
    <div className="App">
      <PlayingCard
        rank={CARD_RANKS.find(elem => elem === 'ace')}
        color={CARD_COLORS.find(elem => elem === 'hearts')}
      />
      <Range
        min={1}
        max={50}
      />
    </div>
  );
}

export default App;
