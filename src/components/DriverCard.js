import React from 'react';

const DriverCard = (props) => {
  let stars = '★'.repeat(Math.round(props.rating));
  //the amt of blank stars is just the total stars (5) minus the used stars
  let empties = '☆'.repeat(5 - Math.round(props.rating))

  return (
    <div className="driver-card">
      <img
        style={{ height: `100px`, width: `100px`, borderRadius: `100px` }}
        src={props.img}
        alt="1"
      />
      <div className="driver-card-info">
        <div className="driver-card-name">
          <p>{props.name}</p>
        </div>
        <div className="driver-card-rating">
          <p>
            {props.rating}
            {stars}{empties}
          </p>
        </div>
        <div className="model-and-plate">
          <p>{props.car.model}</p>
          <p>{props.car.licensePlate} </p>
        </div>
      </div>

      {/* <p>car:{props.car}</p> */}
    </div>
  );
};

export default DriverCard;
