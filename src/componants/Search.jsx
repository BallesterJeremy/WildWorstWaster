import React from "react";

function Search({ searchValue, setSearchValue }) {
  return (
    <div>
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="enter a city name"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}

export default Search;
