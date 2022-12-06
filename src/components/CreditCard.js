import React from 'react';

const CreditCard = (props) => {
  return (
    <div style={{backgroundColor:`${props.bgColor}`, color:`${props.color}`}} className="credit-card">
      <div className="card-title">
        <p>{props.type}</p>
      </div>
      <div className="card-number">
        <p>*** *** **{props.number.substring(12)}</p>
      </div>
      <div className="card-exp-and-bank">
        <p>
          Expires {props.expirationMonth}/
          {String(props.expirationYear).substring(2)}
        </p>
        <p>{props.bank}</p>
      </div>
      <div className="card-owner">
        <p>{props.owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
