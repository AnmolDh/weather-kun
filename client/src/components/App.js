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
          <input id="search" type="text" placeholder="Search your Location"></input>
          <button id="searchBtn">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;