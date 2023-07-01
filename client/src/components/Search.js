import React, { useState } from "react";

function Search(props) {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchInput(event) {
    const { value } = event.target;
    setSearchInput(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchQuery: searchInput }),
    })
      .then((response) => response.json())
      .then((data) => props.handleSearchResults(data))
      .catch((err) => console.log(err));
    setSearchInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleSearchInput}
        id="search"
        type="text"
        placeholder="Search your Location"
        autoComplete="off"
        name="searchQuery"
        value={searchInput}
      ></input>
      <button id="searchBtn">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
}

export default Search;
