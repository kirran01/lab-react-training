import React from 'react';

const LikeButton = (props) => {
  return (
    <div>
      <button value={props.likes}>likes</button>
    </div>
  );
};

export default LikeButton;
