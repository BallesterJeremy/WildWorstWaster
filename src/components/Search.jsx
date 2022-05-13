import React from "react";

function Search({ searchValue, setSearchValue, launchSearch }) {
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
      <button
        type="submit"
        value={searchValue}
        onClick={(e) => launchSearch(e)}
      >
        envoyer
      </button>
    </div>
  );
}

export default Search;
