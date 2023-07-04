import React, { useState } from "react";

function Search(props) {
  const [searchInput, setSearchInput] = useState("");

  // Handle changes to the search input field
  function handleSearchInput(event) {
    const { value } = event.target;
    setSearchInput(value);
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Send a POST request to the Backend API with the search query
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
