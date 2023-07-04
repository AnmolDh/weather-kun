import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import Loader from "./Loader";

// Initialize Google Analytics, and send a pageview hit to them
ReactGA.initialize(process.env.REACT_APP_GA_ID);
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  // Fetch weather data from the Backend API on component Mount
  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL)
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
    // If the API returns a 404 error, set the "notFound" to true
    data.cod === "404" ? setNotFound(true) : setWeatherData(data);
  }

  return (
    <>
      {weatherData && !notFound ? (
        // If weatherData is not null and notFound is false , render this
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
        // If weatherData is null or notFound is true, render this
        <Loader notFound={notFound} />
      )}
    </>
  );
}

export default App;
