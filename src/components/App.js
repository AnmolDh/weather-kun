import React from "react";
import Main from "./Main";
import Search from "./Search";
import Details from "./Details";

function App() {
  return (
    <div className="container main">
      <div className="container left">
        <header>weather-kun</header>
        <Main/>
      </div>
      <div className="container right">
        <Search/>
        <Details/>
      </div>
    </div>
  );
};

export default App;