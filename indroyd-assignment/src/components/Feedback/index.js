import React from 'react';
import './index.css';

const Feedback = ({ players }) => {
  return (
    <div className="feedback-container">
      <h2 className="feedback-title">Game Over!</h2>
      <h3 className="feedback-subtitle">
        Final Scores: 
        {players.map((player, index) => (
          <span key={player.name} className="player-score-summary">
            {index > 0 && ", "}
            {player.score}/5
          </span>
        ))}
      </h3>
      <ul className="score-list">
        {players.map((player) => (
          <li key={player.name} className="score-item">
            <span className="player-name">{player.name}</span>: <span className="player-score">{player.score}/5</span>
          </li>
        ))}
      </ul>
      <h1>Thanks for participating...</h1>
    </div>
  );
};

export default Feedback;
