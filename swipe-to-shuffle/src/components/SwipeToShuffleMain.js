import React from 'react';
import {SwipeToShuffle, SwipeToShuffleContainer, SwipeToShuffleWrapper} from '../styles/SwipeToShuffleMainStyle';

const SwipeToShuffleMain = () => {
  return (
    <SwipeToShuffle>
      <SwipeToShuffleContainer>
            <div className="wrapper">
              <div className="item">
                <span className="text">Draggable Element One</span>
                <i className="fas fa-bars"></i>
              </div>
              <div className="item">
                <span className="text">Draggable Element Two</span>
                <i className="fas fa-bars"></i>
              </div>
              <div className="item">
                <span className="text">Draggable Element Three</span>
                <i className="fas fa-bars"></i>
              </div>
              <div className="item">
                <span className="text">Draggable Element Four</span>
                <i className="fas fa-bars"></i>
              </div>
              <div className="item">
                <span className="text">Draggable Element Five</span>
                <i className="fas fa-bars"></i>
              </div>
        </div>
      </SwipeToShuffleContainer>
    </SwipeToShuffle>
  );
}

export default SwipeToShuffleMain;
