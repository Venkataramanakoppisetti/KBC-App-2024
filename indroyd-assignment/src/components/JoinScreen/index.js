import React, { useState } from 'react';

const JoinScreen = ({ handleJoin }) => {
  const [name, setName] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim()) {
      handleJoin(name);
      setName('');
    } else {
      alert("Please enter a name!");
    }
  };

  return (
    <div>
      <h1>Join the Game</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default JoinScreen;
