import React from "react";
import './Rules.css';

const Rules = () => {

    return(
        <div className="rule">
            <h1 className="center">
                GAME RULES <span>&#128220;</span>
            </h1>
            <ul>
                <li>
                    This game has 5 Levels.
                </li>
                <li>
                    <b>Score Rules(for single level)</b>:
                    <ul>
                        <li>Correct Answer: 20 points</li>
                        <li className="warning">Using Hint: 0 points</li>
                    </ul>
                </li>
                <li>
                    For every level except <b>level 3</b> you have <span className="warning">maximum 2 tries</span>.
                     For level 3 you can try as many times as you want.
                </li>
                <li>If you fail to give the correct answer in <span className="warning">2 tries the game ends</span>
                 at that level except level 3. And points of all the remaining levels are considered as 0. 
                </li>
                <li>Score for current game: Sum of all the points of each levels.</li>
                <li>
                   <b className="h2">Your stat</b>
                   <ul>
                    <li>Score: It gives the sum of all the score of the games you played so far.</li>
                    <li>Accuracy: It shows your accuracy of all the games played.</li>
                    <li>HighestLevel: It displays the highest level reached out of all your games played. </li>
                    </ul> 
                </li>
            </ul>
            <h1 className="center">
                GOOD LUCK !! <span>&#10024;</span>
            </h1>
        </div>
    );
};

export default Rules;