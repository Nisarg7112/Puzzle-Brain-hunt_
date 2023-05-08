import React,{ useState} from 'react';

import Level1 from '../../gamelevels/level1';
import Level2 from '../../gamelevels/level2';
import Level3 from '../../gamelevels/level3';
import Level4 from '../../gamelevels/level4';
import Level5 from '../../gamelevels/level5';
import Levelends from '../../gamelevels/levelend';

const Game = () => {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [current, setCurrent] = useState(0);
    const [hints, setHints] = useState(0);

  const handleLevelComplete = () => {
    setCurrentLevel(currentLevel + 1);
    setCurrent(current + 1)
  };

  const handlelevelfailed = () => {
    setCurrentLevel(6);
  };

  const handlehintused = () => {
    setHints(hints + 1);
  }

  // console.log(hints);
  return (
    <div className="game-container">
      {currentLevel === 1 && <Level1 onLevelComplete={handleLevelComplete}  onlevelfailed = {handlelevelfailed}  onhintused = {handlehintused}/>}
      {currentLevel === 2 && <Level2 onLevelComplete={handleLevelComplete}  onlevelfailed = {handlelevelfailed}  onhintused = {handlehintused}/>}
      {currentLevel === 3 && <Level3 onLevelComplete={handleLevelComplete}  onlevelfailed = {handlelevelfailed}  onhintused = {handlehintused}/>}
      {currentLevel === 4 && <Level4 onLevelComplete={handleLevelComplete}  onlevelfailed = {handlelevelfailed}  onhintused = {handlehintused}/>}
      {currentLevel === 5 && <Level5 onLevelComplete={handleLevelComplete}  onlevelfailed = {handlelevelfailed}  onhintused = {handlehintused}/>}
      {currentLevel === 6 && <Levelends level={current} hints= {hints}/>}
    </div>
  );

  }

export default Game;