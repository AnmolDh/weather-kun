import React from "react";
import Search from "./Search";
import Details from "./Details";
import Footer from "./Footer";

function RightContainer(props) {
  return (
    <div className="container right">
      <Search handleSearchResults={props.handleSearchResults} />
      <Details weatherData={props.weatherData} />
      <Footer />
    </div>
  );
};

export default RightContainer;