// Loader.jsx
import React from 'react';
import './Loader.css'; // Create a corresponding CSS file for styling

const Loader = () => {
  return (
    <div className='loader-container'>
      <img src='/Loader.gif' alt='Loading...' />
    </div>
  );
};

export default Loader;
