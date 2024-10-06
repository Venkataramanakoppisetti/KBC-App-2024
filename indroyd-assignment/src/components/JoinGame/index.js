// src/components/JoinGame/index.js
import React, { useState } from 'react';

const JoinGame = ({ players, setPlayers, setIsGameStarted }) => {
  const [name, setName] = useState('');

  const handleJoinGame = () => {
    if (name.trim()) {
      setPlayers((prev) => [...prev, { name, score: 0 }]);
      setIsGameStarted(true);
    }
  };

  return (
    <div>
      <h3>Join the Game</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleJoinGame}>Join Game</button>
    </div>
  );
};

export default JoinGame;
