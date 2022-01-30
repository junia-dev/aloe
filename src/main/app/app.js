import React from 'react';
import Card from '../../components/card/card';
import './app.css';

import imageA from '../../images/a.jpg';
import imageL from '../../images/l.jpg';
import imageO from '../../images/o.jpg';
import imageE from '../../images/e.jpg';

const cards = [
  {
    letter: 'A',
    background: imageA,
  },
  {
    letter: 'L',
    background: imageL,
  },
  {
    letter: 'O',
    background: imageO,
  },
  {
    letter: 'E',
    background: imageE,
  },
];

const App = () => {
  return (
    <div className="main-app">
      {cards.map((card, index) => (
        <div key={index}>
          <Card
            key={index}
            text={card.letter}
            number={index + 1}
            background={card.background}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
