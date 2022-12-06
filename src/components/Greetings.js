import React from 'react';

const Greetings = (props) => {
  return (
    <div>
      <p>{props.lang}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default Greetings;
