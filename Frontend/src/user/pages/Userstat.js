import React from "react";

import Card from "../../shared/components/UIElements/Card";
import UserItem from "../../admin/pages/UserItem";


const Userstat = props => {
    if (props.items.length === 0){
        return (
            <div className="center">
                 <Card>
                   <h2>No users found</h2>
                </Card>
            </div>
        );
    }

    return ( 
        <ul className="users-list" > 
        { 
            <UserItem  
            key= {props.items.id} 
            id={props.items.id}
            image={props.items.image}  
            name={props.items.name}
            playedgames={props.items.playedgames}
            score={props.items.score}
            accuracy={props.items.accuracy}
            highestlevel={props.items.highestlevel}
            />
        }
    </ul>
    );
};

export default Userstat;