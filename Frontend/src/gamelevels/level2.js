import React, { useState } from 'react';
import Button from '../shared/components/FormElements/Button';
import Card from '../shared/components/UIElements/Card';
import './level.css'

const Level2 = ({ onLevelComplete ,onlevelfailed ,onhintused}) => {
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
    document.getElementById("ans1").innerHTML = "<p> CHUP CHUP KE</p>";
    if(used === 0){
      onhintused();
      setused(used+1);
    }
  }

  return (
    <React.Fragment>
        <div className="center">
        <div> 
           <h3> LEVEL 2 </h3>
           <h1>Identify the Movie Name from the reel</h1>
           <Card>
           <a href="https://www.instagram.com/reel/CrlCK8jgvqw/?igshid=NTc4MTIwNjQ2YQ==" target='_blank'>Click here</a>
           </Card>
           <p>  </p>
        </div>
        </div>
        <div className="center">
            <Button danger onClick={handleButtonClick}>CHUP CHUP KE</Button>
            <Button danger onClick={handleButtonsClick}>DHOL</Button>
            <Button danger onClick={handleButtonsClick}>KHATA MEETHA</Button>
            <Button danger onClick={handleButtonsClick}>DE DHANA DHAN</Button>
            <Button danger onClick={handleButtonsClick}>PHIR HERA PHERI</Button>
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

export default Level2;
