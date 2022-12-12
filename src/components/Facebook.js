import React from 'react';
import profilesData from '../data/berlin.json';
import { useState } from 'react';

const Facebook = () => {
  const [profiles, setProfiles] = useState(
    profilesData.map((p) => ({ ...p, selected: false }))
  );
  const [buttonText, setButtonText] = useState('all');

  const handleButtonText = (e) => {
    const newButtonText = e.target.innerText.toLowerCase();
    const copyProfiles = profiles.map((p) => {
      return {
        ...p,
        selected: p.country.toLowerCase() === newButtonText,
      };
    });
    setProfiles(copyProfiles);
    setButtonText(newButtonText);
  };

  return (
    <div>
      <h1>facebook</h1>
      <div className="facebook-buttons">
        <button
          style={{
            backgroundColor: buttonText === 'all' ? 'cyan' : 'white',
          }}
          onClick={handleButtonText}
        >
          all
        </button>
        <button onClick={handleButtonText}>england</button>
        <button onClick={handleButtonText}>usa</button>
        <button onClick={handleButtonText}>malaysia</button>
        <button onClick={handleButtonText}>germany</button>
      </div>
      {profiles.map((p) => {
        return (
          <div
            className="facebook-card"
            style={{ backgroundColor: p.selected ? 'cyan' : 'white' }}
          >
            <p>first name: {p.firstName}</p>
            <p>last name: {p.lastName}</p>
            <p>country: {p.country.toLowerCase()}</p>
            {p.isStudent ? <p>type: teacher</p> : <p>type: student</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Facebook;
