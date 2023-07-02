import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import Loader from "./Loader";

ReactGA.initialize(process.env.REACT_APP_GA_ID);
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [notFound, setNotFound] = useState(false);

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

  function handleSearchResults(data) {
    data.cod === "404" ? setNotFound(true) : setWeatherData(data);
  }

  return (
    <>
      {weatherData && !notFound ? (
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
        <Loader notFound={notFound} />
      )}
    </>
  );
}

export default App;
