import React from "react";
import "./searchbar.css";
import { useNavigate } from "react-router-dom";

function SearchBar({ search, setSearch, allPlaylists }) {
  const navigate = useNavigate();

  const filteredPlaylists = allPlaylists.filter((playlist) => {
    return playlist.name === search;
  });

  function handleRedirect() {
    navigate("/");
  }
  return (
    <div>
      <input
        className="searchBar"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button
        className="searchBarBtn"
        onClick={() => {
          handleRedirect();
        }}
      >
        <b>Search</b>
      </button>
    </div>
  );
}

export default SearchBar;
