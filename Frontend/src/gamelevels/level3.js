import React, { useState } from 'react';
import Button from '../shared/components/FormElements/Button';
import './level.css'

const Level3 = ({ onLevelComplete,onhintused}) => {
  const [text, setText] = useState("");
  const [used,setused]= useState(0);
  
  const handleChange = (event) => {
    setText(event.target.value);
  }


  const handleButtonClick = () => {
    let lowercasetext = text.toLowerCase();
    if(lowercasetext === "alarm clock"){
      onLevelComplete();
    }
    else{
      alert("Incorrect!! Try again");
    }
    setText("");
  };

  const handlebuttonhint = () =>{
    document.getElementById("ans1").innerHTML = "<p>  Alarm Clock</p>";
    if(used === 0){
      onhintused();
      setused(used+1);
    }
  }


  return (
    <React.Fragment>
        <div className="center">
        <div> 
           <h3> LEVEL 3 </h3>
           <h1> Solve the RIDDLE </h1>
           <h4>Every night I'm told what to do, and each morning I do what I'm told. But I still don't escape your scold. What am I?</h4>
        </div>
        </div>
        <div className="center">
          <div>
            <form>
            <label>
              <h4>ANSWER</h4>
              <input type="text" value={text}  onChange={handleChange}/>
              <p> </p>
            </label>
            </form>
          <Button danger onClick={handleButtonClick}>submit</Button>
          <p></p>
          <br></br>
          </div>
        </div>
        <div>
        <div className="center">
          <Button inverse onClick={handlebuttonhint}>Hint</Button>
          <h4 id="ans1"></h4>
        </div>
        </div>
    </React.Fragment>
  );
};

export default Level3;

