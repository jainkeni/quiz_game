// ResultPage.jsx
import React from 'react';
import './ResultPage.css';

const ResultPage = ({ correctAnswers }) => {
  const percentage = (correctAnswers / 10) * 100; // Assuming there are 10 questions

  let resultText = '';
  let resultClass = 'result-text';

  if (percentage > 60) {
    resultText = 'Great job! You did exceptionally well!';
  } else {
    resultText = 'Keep going! You can improve with more practice!';
    resultClass += ' motivation';
  }

  return (
    <div className='result-container'>
      <h2 className='h2'>Quiz Results</h2>
      <p className='p'>You answered {correctAnswers} questions correctly!</p>
      <p className={resultClass}>{resultText}</p>
    </div>
  );
};

export default ResultPage;
