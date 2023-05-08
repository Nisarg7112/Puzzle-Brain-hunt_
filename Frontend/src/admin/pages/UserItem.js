import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './UserItem.css';

const UserItem = props => {
  return (
    <li className="user-item">
    <Link>
      <Card className="user-item__content">
          <div className="user-item__image">
            <Avatar image={process.env.REACT_APP_ASSET_URL +`/${props.image}`} alt={props.name} />
          </div>
          <div className="user-item__info">
            <b><h2>{props.name}</h2></b>
            <h2>
              Games Played : {props.playedgames}
            </h2>
            <h2>
              Score : {props.score}
            </h2>
            <h2>
              Accuracy : {props.accuracy}
            </h2>
            <h2>
              Highest level Reached : {props.highestlevel}
            </h2>
          </div>
      </Card>
    </Link>
    </li>
  );
};

export default UserItem;
