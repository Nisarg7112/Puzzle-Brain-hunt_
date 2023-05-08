import React, { useState } from 'react';
import Button from '../shared/components/FormElements/Button';
import './level.css'

const Level5 = ({ onLevelComplete ,onlevelfailed ,onhintused}) => {
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
    document.getElementById("ans1").innerHTML = "<p> 10  </p>";
    if(used === 0){
      onhintused();
      setused(used+1);
    }
  }

  return (
    <React.Fragment>
        <div className="center">
        <div> 
           <h3> LEVEL 5 </h3>
           <h1>SPOT THE DIFFERENCES</h1>
                <img src="https://img.jagranjosh.com/images/2022/November/9112022/spot%20the%20difference-min.jpg" alt="level5" style={{width: '1000px', height: '500px'}}></img>
        </div>
        </div>
        <div className="center">
            <Button danger onClick={handleButtonsClick}>7</Button>
            <Button danger onClick={handleButtonsClick}>11</Button>
            <Button danger onClick={handleButtonClick}>10</Button>
            <Button danger onClick={handleButtonsClick}>6</Button>
            <Button danger onClick={handleButtonsClick}>9</Button>
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

export default Level5;
