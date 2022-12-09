import React from 'react';
import profiles from '../data/berlin.json';

const Facebook = () => {
  return (
    <div>
      <h1>facebook</h1>
      {console.log(profiles[0].isStudent)}
      {profiles.map((profile) => {
        return (
          <div className="facebook-card">
            <p>first name: {profile.firstName}</p>
            <p>last name: {profile.lastName}</p>
            <p>country: {profile.country}</p>
            {profile.isStudent ? <p>type: teacher</p> : <p>type: student</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Facebook;
