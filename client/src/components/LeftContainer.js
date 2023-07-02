import React from "react";
import Main from "./Main";

function LeftContainer(props) {
  return (
    <div className="container left">
      <header>weather-kun</header>
      <Main weatherData={props.weatherData} />
    </div>
  );
};

export default LeftContainer;