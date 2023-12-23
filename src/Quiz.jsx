// Quiz.jsx
import React, { useState, useEffect } from 'react';
import './Quiz.css';
import ResultPage from './ResultPage';

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const mockQuestions = [
        {
          id: 1,
          question: 'Q1. What is the capital of France?',
          options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
          correctAnswer: 'Paris',
          selectedAnswer: null,
        },
        {
          id: 2,
          question: 'Q2. Which planet is known as the Red Planet?',
          options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
          correctAnswer: 'Mars',
          selectedAnswer: null,
        },
        {
          id: 3,
          question: 'Q3. What is the largest mammal?',
          options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
          correctAnswer: 'Blue Whale',
          selectedAnswer: null,
        },
        {
          id: 4,
          question: 'Q4. Which country is known as the Land of the Rising Sun?',
          options: ['China', 'Japan', 'South Korea', 'Vietnam'],
          correctAnswer: 'Japan',
          selectedAnswer: null,
        },
        {
          id: 5,
          question: 'Q5. What is the currency of Brazil?',
          options: ['Peso', 'Euro', 'Real', 'Yen'],
          correctAnswer: 'Real',
          selectedAnswer: null,
        },
        {
          id: 6,
          question: 'Q6. In which year did the Titanic sink?',
          options: ['1905', '1912', '1920', '1931'],
          correctAnswer: '1912',
          selectedAnswer: null,
        },
        {
          id: 7,
          question: 'Q7. Who wrote "Romeo and Juliet"?',
          options: ['Charles Dickens', 'Jane Austen', 'William Shakespeare', 'Leo Tolstoy'],
          correctAnswer: 'William Shakespeare',
          selectedAnswer: null,
        },
        {
          id: 8,
          question: 'Q8. What is the largest planet in our solar system?',
          options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
          correctAnswer: 'Jupiter',
          selectedAnswer: null,
        },
        {
          id: 9,
          question: 'Q9. Which is the smallest prime number?',
          options: ['1', '2', '3', '4'],
          correctAnswer: '2',
          selectedAnswer: null,
        },
        {
          id: 10,
          question: 'Q10. What is the capital of Australia?',
          options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
          correctAnswer: 'Canberra',
          selectedAnswer: null,
        }
      ];

      setQuestions(mockQuestions.map((question) => ({
        ...question,
        options: shuffle(question.options),
      })));

      // No setLoading(false) here because we removed the loading logic
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleAnswerClick = (questionId, selectedOption) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) => {
        if (question.id === questionId) {
          return {
            ...question,
            selectedAnswer: selectedOption,
          };
        }
        return question;
      })
    );
  };

  const isOptionCorrect = (question, option) => {
    return (
      question.selectedAnswer !== null &&
      question.selectedAnswer === option &&
      question.selectedAnswer === question.correctAnswer
    );
  };

  const isCorrectAnswer = (question, option) => {
    return question.correctAnswer === option;
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      const numberOfCorrectAnswers = questions.reduce(
        (count, question) =>
          isOptionCorrect(question, question.selectedAnswer) ? count + 1 : count,
        0
      );
      setCorrectAnswers(numberOfCorrectAnswers);
      setCurrentQuestionIndex(questions.length);
    }
  };

  if (currentQuestionIndex === questions.length) {
    return <ResultPage correctAnswers={correctAnswers} />;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className='headclass'>
      <div className='quiz-container'>
        <div className='questions' key={currentQuestion.id}>
          <p>{currentQuestion.question}</p>
          {currentQuestion.options.map((option) => (
            <button
              className='answer-button'
              key={option}
              onClick={() => handleAnswerClick(currentQuestion.id, option)}
              style={{
                backgroundColor:
                  currentQuestion.selectedAnswer !== null
                    ? isOptionCorrect(currentQuestion, option)
                      ? 'green'
                      : isCorrectAnswer(currentQuestion, option)
                      ? 'green'
                      : 'red'
                    : 'white',
              }}
            >
              {option}
            </button>
          ))}
        </div>
        <button className='next-button' onClick={handleNextQuestion}>
          Next Question
        </button>
      </div>
    </div>
  );
};

// Function to shuffle array elements
function shuffle(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default QuizApp;
