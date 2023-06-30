import React, { useEffect, useState } from "react";
import Main from "./Main";
import Search from "./Search";
import Details from "./Details";
import Footer from "./Footer";

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

  function handleSearchResults(data) {
    setWeatherData(data);
  }

  return (
    <>
      {weatherData && (
        <div className="container main">
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
      )}
    </>
  );
}

export default App;
