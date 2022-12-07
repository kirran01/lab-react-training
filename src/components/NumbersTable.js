import React from 'react';

const NumbersTable = (props) => {
  let arr = [];
  for (let i = 1; i <= props.limit; i++) {
    arr.push(i);
  }
  return (
    <div className="number-table">
      {arr.map((el) => {
        if (el % 2 === 0) {
          return (
            <div className="number-square" style={{ backgroundColor: 'red' }}>
              {el}
            </div>
          );
        } else {
          return (
            <div className="number-square" style={{ backgroundColor: 'white' }}>
              {el}
            </div>
          );
        }
      })}
    </div>
  );
};

export default NumbersTable;
