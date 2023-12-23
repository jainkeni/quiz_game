// index.js
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Loader from './Loader';
import './index.css';
import QuizApp from './Quiz';

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (replace with your actual data loading logic)
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second loading time

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <React.StrictMode>
      {loading ? <Loader /> : <App />}
      <QuizApp/>
    </React.StrictMode>
  );
};

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
