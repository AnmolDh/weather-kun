import React, { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import Main from "./Main";
import Search from "./Search";
import Details from "./Details";
import Footer from "./Footer";

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
          <div className="container left">
            <header>weather-kun</header>
            <Main weatherData={weatherData} />
          </div>
          <div className="container right">
            <Search handleSearchResults={handleSearchResults} />
            <Details weatherData={weatherData} />
            <Footer />
          </div>
        </div>
      ) : (
        <div className="loader">
          <RingLoader color={"white"} size={150}></RingLoader>
          {notFound ? (
            <p>
              404 - location not found... infinite loop... please refresh...
            </p>
          ) : (
            <p>spinning up the server...</p>
          )}
        </div>
      )}
    </>
  );
}

export default App;
