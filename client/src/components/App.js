import React, { useEffect, useState } from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import Loader from "./Loader";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  // Fetch weather data from the Backend API on component Mount
  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_URL)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Handle search results from the POST request to Backend API
  function handleSearchResults(data) {
    setWeatherData(data);
  }

  return (
    <>
      {weatherData ? (
        // If weatherData is not null, render this
        <div
          className="container main"
          style={{
            background: `url('./assets/img/${weatherData.weather[0].icon}.jpg')`,
          }}
        >
          <LeftContainer weatherData={weatherData} />
          <RightContainer
            handleSearchResults={handleSearchResults}
            weatherData={weatherData}
          />
        </div>
      ) : (
        // If weatherData is null, render this
        <Loader />
      )}
    </>
  );
}

export default App;
