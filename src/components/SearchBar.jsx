import React from "react";

function SearchBar({ searchValue, setSearchValue, launchSearch }) {
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
      <button type="submit" onSubmit={(e) => launchSearch(e.target.value)}>
        envoyer
      </button>
    </div>
  );
}

export default SearchBar;
