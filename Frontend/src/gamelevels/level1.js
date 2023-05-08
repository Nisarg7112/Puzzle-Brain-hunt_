import React, { useState } from 'react';
import Button from '../shared/components/FormElements/Button';
import './level.css'

const Level1 = ({ onLevelComplete ,onlevelfailed ,onhintused}) => {
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
    document.getElementById("ans1").innerHTML = "<p>MS DHONI</p>";
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
            <h1>Whose Cartoon is Portrayed Here ? </h1>
            <img src="https://cdn.shopify.com/s/files/1/0454/3551/9132/products/MS_Dhoni_Bobblehead4_1024x1024@2x.jpg?v=1597426229" alt="level3" style={{width: '400px', height: '300px'}}></img>
        </div>
        </div>
        <div className="center">
            <Button danger onClick={handleButtonsClick}>Virat Kohli</Button>
            <Button danger onClick={handleButtonsClick}>Rohit Sharma</Button>
            <Button danger onClick={handleButtonsClick}>Kl Rahul</Button>
            <Button danger onClick={handleButtonClick}>MS Dhoni</Button>
            <Button danger onClick={handleButtonsClick}>Suresh Raina</Button>
        </div>
        <div className="center">
            <h4>You Only Have {2-trys} tries left</h4>
        </div>
        <div className="center">
          <Button inverse onClick={handlebuttonhint}>Hint</Button>
          <h4 id="ans1"></h4>
        </div>
        {/* <div className="center">
          <h4 id="ans1"></h4>
        </div> */}
    </React.Fragment>
  );
};

export default Level1;
