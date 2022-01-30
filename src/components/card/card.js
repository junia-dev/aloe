import React from 'react';
import './card.css';

const Card = (props) => {
  const { text = 'A', number = 0, background = '' } = props;

  return (
    <div className="card">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className="card-content">
        <p className="card-text">{text}</p>
        <p className="card-number">0{number}</p>
      </div>
    </div>
  );
};

export default Card;
