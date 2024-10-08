import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Game from './components/Game';
import Feedback from './components/Feedback'; 
import './App.css';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [isGameStarted, setIsGameStarted] = useState(false); 

  return (
    <Router>
      <div className="quiz-game-container"> 
        <h1 className='game-head'>Welcome to the Quiz Game!</h1>
        <div className="game-container">
          <Routes>
            <Route 
              path="/" 
              element={
                <Game 
                  players={players} 
                  setPlayers={setPlayers} 
                  isGameStarted={isGameStarted} 
                  setIsGameStarted={setIsGameStarted} 
                />
              } 
            />
            <Route 
              path="/feedback" 
              element={<Feedback players={players} />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
