import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css'

const quizQuestions = [
  { question: "Hum first time kb mile?", options: ["24 June", "25 June", "26 June"], answer: "26 June" },
  { question: "second time kb mile?", options: ["15 July", "10 July", "8 July"], answer: "10 July" },
  { question: "mera fav food?", options: ["pizza", "momo", "golgappe"], answer: "momo" },
  { question: "muje ap m sbse jda kya psnd h?", options: ["your hands", "your voice", "your hairs"], answer: "your hands" },
  { question: "muje konsi place psnd h? ", options: ["mountains", "beaches", "plains"], answer: "mountains" },
  { question: "muje sbse jda kya psnd h?", options: ["insta chalana", "sona", "ghumna"], answer: "sona" },
  { question: "m kitne momos kha skti hu ek br m..max? ", options: ["5", "6", "7"], answer: "7" },
];

function Quiz() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (option) => {
    if (option === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="quiz">
      <h2>Itni tarif k bd ....Chlo thoda test kia jaye apko..😗</h2>
      <img src='https://i.pinimg.com/736x/61/e0/ce/61e0cee3a7ee6affe4d396e5937e0817.jpg' alt="Test Image" className="quiz-image" />
      {currentQuestion < quizQuestions.length ? (
        <div>
          <p>{quizQuestions[currentQuestion].question}</p>
          {quizQuestions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
              </button>
          ))}
        </div>
      ) : (
        <>
          <p>You scored {score} out of {quizQuestions.length}!</p>
          <button className="next-button" onClick={() => navigate('/last-page')}>Okay Click for Last One</button>
        </>
      )}
    </div>
  );
}

export default Quiz;
