import React from 'react';
import { useState } from 'react';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import diceEmpty from '../assets/images/dice-empty.png';

const Dice = () => {
  const [dicePic, setDicePic] = useState(dice1);
  const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6];
  
  return (
    <div>
      <p>yea</p>
      <div
        className="dice-pic"
        onClick={() => {
          setDicePic(diceEmpty);
          let roll = Math.floor(Math.random() * 6) + 1;
          setTimeout(() => {
            switch (roll) {
              case 1:
                return setDicePic(dice1);
              case 2:
                return setDicePic(dice2);
              case 3:
                return setDicePic(dice3);
              case 4:
                return setDicePic(dice4);
              case 5:
                return setDicePic(dice5);
              case 6:
                return setDicePic(dice6);
              default:
            }
          }, 1000);
        }}
      >
        <img style={{ height: 200 }} src={dicePic} alt="1" />
      </div>
    </div>
  );
};

export default Dice;
