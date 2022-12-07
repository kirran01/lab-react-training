import React from 'react';
import { useState } from 'react';

const Carousel = (props) => {
  const [reelNum, setReelNum] = useState(0);
  let carouselPics = props.images;
  return (
    <div className="carousel">
      <div className="carousel-buttons">
        <button
          onClick={() => {
            console.log('current reel num', reelNum);
            if (reelNum === carouselPics.length - 1) {
            } else {
              setReelNum(reelNum + 1);
            }
          }}
        >
          left
        </button>
        <button
          onClick={() => {
            console.log('current reel num', reelNum);
            if (reelNum === 0) {
            } else {
              setReelNum(reelNum - 1);
            }
          }}
        >
          right
        </button>
      </div>
      <img src={carouselPics[reelNum]} alt="1" />
    </div>
  );
};

export default Carousel;
