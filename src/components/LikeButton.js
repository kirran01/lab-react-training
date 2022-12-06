import React from 'react';
import { useState } from 'react';

const LikeButton = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={()=>{
        setCount(count+1)
      }}>{count} likes</button>
    </div>
  );
};

export default LikeButton;
