import React, { useState } from "react";
import _ from "lodash";

function Main(props) {
  const { weather: [currentWeather], main: {temp}, name } = props.weatherData;

  return (
    <div className="main-content">
      <h1 className="main-temp">{Math.round(temp)}°</h1>
      <div>
        <h2 className="city">{name}</h2>
        <p className="main-description">{_.capitalize(currentWeather.description)}</p>
      </div>
    </div>
  );
};

export default Main;