// src/components/Game/index.js
import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react'; 
import QuestionScreen from '../QuestionScreen';
import JoinGame from '../JoinGame'; 
import questionData from '../../data/questions.json';
import './index.css'; 

const Game = ({ players, setPlayers, isGameStarted, setIsGameStarted }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  console.log('Players:', players);
  const gameURL = `${window.location.origin}/game?players=${JSON.stringify(players)}`;

  return (
    <div className="game-main-container">
      <h2 className="game-room-title">Game Room</h2>
      <div className="qr-code-container">
        <QRCodeCanvas value={gameURL}  size={256} />
        <p className="qr-code-description">Scan the QR code to join the game!</p>
      </div>

      {!isGameStarted && (
        <JoinGame players={players} setPlayers={setPlayers} setIsGameStarted={setIsGameStarted} />
      )}

      {isGameStarted && (
        <QuestionScreen
          questionData={questionData[currentQuestionIndex]}
          players={players}
          setPlayers={setPlayers}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          setIsGameStarted={setIsGameStarted}
        />
      )}
    </div>
  );
};

export default Game;
