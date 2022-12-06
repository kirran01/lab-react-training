import React from 'react';

const DriverCard = (props) => {
    return (
        <div>
            <p>name={props.name}</p>
            <p>rating={props.rating}</p>
            <p>img={props.img}</p>
            <p>car={props.car}</p>
        </div>
    );
}

export default DriverCard;
