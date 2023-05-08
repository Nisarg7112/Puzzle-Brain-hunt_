import React from 'react';
import { useState } from 'react';

// import background from './background.jpg'
import './Main.css';

const Main = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="App">
      <header className={`App-header ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1>  Welcome to BRAIN HUNT  </h1>
      </header>
    </div>
  );
};

export default Main;
