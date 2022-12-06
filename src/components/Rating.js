import React from 'react';

const Rating = (props) => {
  if (Math.ceil(props.children) == 5) {
    return (
      <div>
        <p>★★★★★</p>
      </div>
    );
  } else if (Math.ceil(props.children) == 4) {
    return (
      <div>
        <p>★★★★☆</p>
      </div>
    );
  } else if (Math.ceil(props.children) == 3) {
    return (
      <div>
        <p>★★★☆☆</p>
      </div>
    );
  } else if (Math.ceil(props.children) == 2) {
    return (
      <div>
        <p>★★☆☆☆</p>
      </div>
    );
  } else if (Math.ceil(props.children) == 1) {
    return (
      <div>
        <p>★☆☆☆☆</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>☆☆☆☆☆</p>
      </div>
    );
  }
};

export default Rating;
