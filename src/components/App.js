import React from "react";

function App() {
  return (
    <div className="container">
      <div className="container-left">
        <header>weather-kun</header>
        <div className="main-content">
          <h1 className="main-temp">22°</h1>
          <div>
            <h2 className="city">Chandigarh</h2>
            <p className="date">06:00 - Tuesday, 28 June '23</p>
          </div>
        </div>
      </div>
      <div className="container-right">
        <form>
          <input
            id="search"
            type="text"
            placeholder="Search your Location"
          ></input>
          <button id="searchBtn">
            <i className="fa fa-search"></i>
          </button>
        </form>
        <table>
          <thead>
            <tr>
              <th className="tableHead" colSpan={2}>Weather Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="detailName">Feels Like</th>
              <th className="detailValue">21°</th>
            </tr>
            <tr>
              <th className="detailName">Wind</th>
              <th className="detailValue">10km/hr</th>
            </tr>
            <tr>
              <th className="detailName">Humidity</th>
              <th className="detailValue">60%</th>
            </tr>
            <tr>
              <th className="detailName">Cloudy</th>
              <th className="detailValue">90%</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;