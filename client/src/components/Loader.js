import React from "react";
import RingLoader from "react-spinners/RingLoader";

function Loader() {
  return (
    <div className="loader">
      <RingLoader color={"white"} size={150}></RingLoader>
        <p>spinning up the server...</p>
    </div>
  );
}

export default Loader;
