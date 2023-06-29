import React, { useState } from "react";

function Main(props) {
  const { weather: [currentWeather], main, winds, clouds, sys, name } = props.weatherData;
  // const [currentTemp, setCurrentTemp] = useState(temp);

  // function handleValues() {
  //   setTemp(props.weatherData.main.temp)
  // }

  return (
    <div className="main-content">
      <h1 className="main-temp">{Math.round(main.temp)}°</h1>
      <div>
        <h2 className="city">{name}</h2>
        <p className="main-description">{currentWeather.main}</p>
      </div>
    </div>
  );
};

export default Main;