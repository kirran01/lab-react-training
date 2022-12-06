import React from 'react';
import { useState } from 'react';

const ClickablePicture = (props) => {
  const [picture, setPicture] = useState(props.img);

  return (
    <div
      onClick={() => {
        if (picture === props.img) {
          setPicture(props.imgClicked);
        } else {
          setPicture(props.img);
        }
      }}
    >
      <img style={{ height: 200 }} src={picture} alt="1"></img>
    </div>
  );
};

export default ClickablePicture;
