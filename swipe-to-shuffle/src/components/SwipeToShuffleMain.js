import React from 'react';
import {SwipeToShuffle, SwipeToShuffleContainer, SwipeToShuffleWrapper} from '../styles/SwipeToShuffleMainStyle';

const SwipeToShuffleMain = () => {
  return (
    <SwipeToShuffle>
      <SwipeToShuffleContainer>
            <div className="wrapper">
              <div className="item">
                <span className="text">Swipe Element One</span>
                <i className="fas fa-bars"></i>
              </div>
              <div className="item">
                <span className="text">Swipe Element Two</span>
                <i className="fas fa-bars"></i>
              </div>
              <div className="item">
                <span className="text">Swipe Element Three</span>
                <i className="fas fa-bars"></i>
              </div>
              <div className="item">
                <span className="text">Swipe Element Four</span>
                <i className="fas fa-bars"></i>
              </div>
              <div className="item">
                <span className="text">Swipe Element Five</span>
                <i className="fas fa-bars"></i>
              </div>
        </div>
      </SwipeToShuffleContainer>
    </SwipeToShuffle>
  );
}

export default SwipeToShuffleMain;
