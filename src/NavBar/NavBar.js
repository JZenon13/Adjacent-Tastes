import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import "./navBar.css";

function NavBar({ search, setSearch, allPlaylists }) {
  return (
    <>
      <header>
        <div>
          <Link to="/">Home</Link>
          <Link to="/artist">Artist</Link>
          <Link to="/songs">Songs</Link>
          <Link to="/playlist">Playlists</Link>
          <SearchBar
            search={search}
            setSearch={setSearch}
            allPlaylists={allPlaylists}
          />
        </div>
        <div className="siteTitle">
          <b>Adjacent Tastes</b>
        </div>
      </header>
    </>
  );
}

export default NavBar;
