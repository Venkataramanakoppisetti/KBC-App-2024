// src/components/Feedback/index.js
import React from 'react';
import './index.css'; // Import the CSS file for styling

const Feedback = ({ players }) => {
  return (
    <div className="feedback-container">
      <h2 className="feedback-title">Game Over!</h2>
      <h3 className="feedback-subtitle">Final Scores:</h3>
      <ul className="score-list">
        {players.map((player) => (
          <li key={player.name} className="score-item">
            <span className="player-name">{player.name}</span>: <span className="player-score">{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;
