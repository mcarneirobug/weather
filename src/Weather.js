import React from 'react';

const Weather = ({ dados }) => {

  return (
    <div>
      <h1>{dados.name}</h1>
      <h1>{dados.main.temp}</h1>
    </div>
  );

};

export default Weather;