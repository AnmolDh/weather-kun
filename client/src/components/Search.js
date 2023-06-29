import React from "react";

function Search() {
  return (
    <form>
      <input
        id="search"
        type="text"
        placeholder="Search your Location"
        autoComplete="off"
      ></input>
      <button id="searchBtn">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
}

export default Search;
