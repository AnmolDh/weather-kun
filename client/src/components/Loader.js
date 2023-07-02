import React from "react";
import RingLoader from "react-spinners/RingLoader";

function Loader(props) {
  return (
    <div className="loader">
      <RingLoader color={"white"} size={150}></RingLoader>
      {props.notFound ? (
        <p>404 - location not found... infinite loop... please refresh...</p>
      ) : (
        <p>spinning up the server...</p>
      )}
    </div>
  );
}

export default Loader;
