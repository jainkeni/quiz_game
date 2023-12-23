// App.jsx
import React from 'react';
import HomePage from './Homepage';
import './App.css'; // Import your CSS file for styling


const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul className="navbar">
            <li className='quiz-app'>Quiz Web Application</li>
            <div className='inner-nav'>
            <li><a href="#home">Home</a></li>
            <li><a href="#quiz">Quiz</a></li>
            </div>
          </ul>
        </nav>
      </header>

      <div className="content-section">
        <HomePage />
      </div>
    </div>
  );
};

export default App;
