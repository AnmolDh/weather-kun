import React, { useEffect, useState } from "react";
import Main from "./Main";
import Search from "./Search";
import Details from "./Details";


function App() {
  const backendURL = process.env.BACKEND_URL;
  const [weatherData, setWeatherData] = useState(null);
  
  useEffect(() => {
    fetch(backendURL)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {weatherData && (
        <div className="container main">
          <div className="container left">
            <header>weather-kun</header>
            <Main weatherData={weatherData} />
          </div>
          <div className="container right">
            <Search />
            <Details />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
