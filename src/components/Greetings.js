import React from 'react';

const Greetings = (props) => {
  if (props.lang === 'de') {
    return (
      <div className="greeting">
        <p>hallo </p>
        <p>-</p>
        <p>{props.children}</p>
      </div>
    );
  } else if (props.lang === 'fr') {
    return (
      <div className="greeting">
        <p>bonjour </p>
        <p>-</p>
        <p>{props.children}</p>
      </div>
    );
  }
};

export default Greetings;
