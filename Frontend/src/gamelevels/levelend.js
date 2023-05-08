import React, { useContext } from 'react';
import Card from '../shared/components/UIElements/Card';
import { useParams, useHistory } from 'react-router-dom';
import Button from '../shared/components/FormElements/Button';

import { AuthContext } from '../shared/context/auth-context';
import { useHttpClient } from '../shared/hooks/http-hook';

const Levelends = props => {
 const auth = useContext(AuthContext);
 const {sendRequest} = useHttpClient();
 let x= props.level;
 if(props.hints > x){
  x=0;
 }
 else{
  x=x-props.hints;
 }
 const scored= (x/5)*100;
 const accuracys = x/5;
 const userId = useParams().userId;
 const history = useHistory();


 const gameUpdateSubmitHandler = async event => {
    event.preventDefault();
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/api/users/${userId}`,
        'PATCH',
        JSON.stringify({
          score: scored,
          accuracy: accuracys,
          highestlevel: x,
        }),
        {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token
        }
      );
      history.push('/');
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <div className="center">
      <div>
      <h3>
        GAME ENDS
      </h3>
      {x === 5 ? <h1>EXCELLENT!! YOU WON</h1> : <h1>WELL PLAYED! Better Luck Next Time</h1>}
      <Card>
        YOUR SCORE : {scored} %
      </Card>
      <p> </p>
      </div>
     </div>
     <div className="center">
        <Button danger onClick={gameUpdateSubmitHandler}>
            UPDATE SCORE
          </Button>
      </div>
    </React.Fragment>
  );
};

export default Levelends;
