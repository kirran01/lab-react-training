import React from 'react';

const Random = (props) => {
  let rando = Math.floor(Math.random() * (props.max - props.min) + props.min);
  return (
    <div className='random'>
      <p>
        random value between {props.min} and {props.max} = {rando}
      </p>
    </div>
  );
};

export default Random;
