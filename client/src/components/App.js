import React, { useEffect, useState } from "react";
import Main from "./Main";
import Search from "./Search";
import Details from "./Details";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container main">
      <div className="container left">
        <header>weather-kun</header>
        <Main />
      </div>
      <div className="container right">
        <Search />
        <Details />
      </div>;
    </div>
  );
}

export default App;
