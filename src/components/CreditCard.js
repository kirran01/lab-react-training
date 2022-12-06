import React from 'react';

const CreditCard = (props) => {
  return (
    <div>
      <p>type={props.type}</p>
      <p>number={props.number}</p>
      <p>expirationMonth={props.expirationMonth}</p>
      <p>expirationYear={props.expirationYear}</p>
      <p>bank={props.bank}</p>
      <p>owner={props.owner}</p>
      <p>bgColor={props.bgColor}</p>
      <p>color={props.color}</p>
    </div>
  );
};

export default CreditCard;
