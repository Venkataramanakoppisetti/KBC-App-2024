// src/components/QuestionScreen/index.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import questionData from '../../data/questions.json';
import './index.css'; // Import the CSS file for styling

const QuestionScreen = ({ players, setPlayers, currentQuestionIndex, setCurrentQuestionIndex, setIsGameStarted }) => {
  const navigate = useNavigate(); // Initialize navigate
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const currentQuestion = questionData[currentQuestionIndex];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!currentQuestion) {
      return;
    }

    const correctAnswer = currentQuestion.answer.charAt(0); 
    if (selectedAnswer === correctAnswer) {
      setPlayers((prevPlayers) =>
        prevPlayers.map((player, index) =>
          index === 0 ? { ...player, score: player.score + 1 } : player 
        )
      );

      setFeedback("Correct Answer!");
    } else {
      setFeedback("Incorrect Answer. Try again!");
    }

    setTimeout(() => {
      if (currentQuestionIndex < questionData.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1); 
        setSelectedAnswer('');
        setFeedback('');
      } else {
        // Navigate to the Feedback component with players data
        navigate('/feedback', { state: { players } });
        setIsGameStarted(false);
      }
    }, 1000); 
  };

  // Check if question data is valid
  if (!currentQuestion) {
    return <div>Loading...</div>; // Handle case where questionData is undefined
  }  

  return (
    <div className="question-screen">
      <h2 className="question-text">{currentQuestion.question}</h2>
      <form onSubmit={handleSubmit} className="options-form">
        {currentQuestion.options.map((option) => (
          <div key={option} className="option-container">
            <label className="option-label">
              <input
                type="radio"
                value={option.charAt(0)} // Use the first character as the answer identifier (A, B, C, D)
                checked={selectedAnswer === option.charAt(0)}
                onChange={(e) => setSelectedAnswer(e.target.value)} // Update selected answer on change
                className="option-input"
              />
              {option}
            </label>
          </div>
        ))}
        <button type="submit" className="submit-button">Submit Answer</button>
      </form>
      {feedback && <p className={`feedback-message ${feedback.includes("Correct") ? "correct" : "incorrect"}`}>{feedback}</p>} {/* Show feedback */}
    </div>
  );
};

export default QuestionScreen;
