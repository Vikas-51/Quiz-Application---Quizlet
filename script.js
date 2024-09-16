import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuizApp() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const apiEndpoint = 'https://api.openai.com/v1/completions';
    const apiKey = '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';
    const prompt = 'Generate a question about the history of the United States.';

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    };

    const data = {
      'model': 'text-davinci-003',
      'prompt': prompt,
      'max_tokens': 2048,
    };

    axios.post(apiEndpoint, data, { headers })
      .then(response => {
        const questionData = JSON.parse(response.data.choices[0].text);
        setQuestions([questionData]);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    } else {
      // Handle the case where the user selects an incorrect answer
      console.log("Incorrect answer");
    }
  
    setSelectedAnswer(answer);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      {questions.length > 0 ? (
        <div>
          {currentQuestion < questions.length ? (
            <div>
              <h1>Quizlet</h1>
              <p>Question {currentQuestion + 1}: {questions[currentQuestion].question}</p>
              <ul>
                {questions[currentQuestion].options.map((option, index) => (
                  <li key={index}>
                    <input
                      type="radio"
                      name="answer"
                      value={option}
                      checked={option === selectedAnswer}
                      onChange={() => handleAnswer(option)}
                    />
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <h1>Quiz Complete!</h1>
              <p>Your final score is: {score}</p>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}