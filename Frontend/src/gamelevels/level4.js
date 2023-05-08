import React, { useState } from 'react';
import Button from '../shared/components/FormElements/Button';
import './level.css'

const Level4 = ({ onLevelComplete ,onlevelfailed ,onhintused}) => {
  const [trys, settrys] = useState(0);
  const [used,setused]= useState(0);
  
  const handleButtonClick = () => {
      onLevelComplete();
  };

  const handleButtonsClick = () => {
    settrys(trys + 1);
    if(trys === 1){
        onlevelfailed();
    }
    else{
      alert("Incorrect!! Try again");
    }
  }

  const handlebuttonhint = () =>{
    document.getElementById("ans1").innerHTML = "<p>  5  </p>";
    if(used === 0){
      onhintused();
      setused(used+1);
    }
  }

  return (
    <React.Fragment>
        <div className="center">
        <div> 
           <h3> LEVEL 1 </h3>
           <h1> Solve the Equation </h1>
           <h3> <h1> 8 + 3 - 3X6+ 2(2X3) </h1></h3>
        </div>
        </div>
        <div className="center">
            <Button danger onClick={handleButtonsClick}>300</Button>
            <Button danger onClick={handleButtonClick}>5</Button>
            <Button danger onClick={handleButtonsClick}>60</Button>
            <Button danger onClick={handleButtonsClick}>20</Button>
        </div>
        <div className="center">
            <h4>You Only Have {2-trys} tries left</h4>
        </div>
        <div className="center">
          <Button inverse onClick={handlebuttonhint}>Hint</Button>
          <h4 id="ans1"></h4>
        </div>
    </React.Fragment>
  );
};

export default Level4;

