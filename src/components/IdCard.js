import React from 'react';

const IdCard = (props) => {
  return (
    <div className="id-card">
      <div className="id-card-pic">
        <img src={props.picture} alt="1"></img>
      </div>
      <div className="id-card-info">
        <p>firstName: {props.lastName}</p>
        <p>lastName: {props.firstName}</p>
        <p>gender: {props.gender}</p>
        <p>height: {props.height}</p>
        <p>{props.birth.toDateString()}</p>
      </div>
    </div>
  );
};

export default IdCard;
