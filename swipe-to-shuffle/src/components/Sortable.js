import React, {useState } from "react";
import {SwipeToShuffle, SwipeToShuffleContainer, SwipeToShuffleWrapper} from '../styles/SwipeToShuffleMainStyle';
import { ReactSortable } from "react-sortablejs";

const Sortable = () => {
  const [state, setState] = useState([
    { id: 1, name: "Draggable Element One" },
    { id: 2, name: "Draggable Element Two" },
    { id: 3, name: "Draggable Element Three" },
    { id: 4, name: "Draggable Element Four" },
  ]);

  return (
    <SwipeToShuffle>
      <SwipeToShuffleContainer>
            <ReactSortable className="wrapper" list={state} setList={setState}>
              {state.map((item) => (
                <div key={item.id} className="item">
                  <span className="text">{item.name}</span>
                  <i className="fas fa-bars"></i>
                </div>
              ))}
        </ReactSortable>
      </SwipeToShuffleContainer>
    </SwipeToShuffle>
  );
}

export default Sortable;
