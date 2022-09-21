import React, { useState } from "react";
import "./home.css";
import HomeCard from "./HomeCard";

function Home({ allPlaylists, search }) {
  const [singlePlaylistPage, setSinglePlaylistPage] = useState(true);
  const [singlePlaylistInfo, setSinglePlaylistInfo] = useState([]);

  let filteredPlaylists = allPlaylists?.filter((playlist) => {
    return playlist.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="homeBackground">
      <div className="playlistHeader">
        <h1>🎹 Your Playlists 🎹</h1>
      </div>

      <div className="allHomeCards">
        <HomeCard
          allPlaylists={allPlaylists}
          singlePlaylistPage={singlePlaylistPage}
          setSinglePlaylistPage={setSinglePlaylistPage}
          singlePlaylistInfo={singlePlaylistInfo}
          setSinglePlaylistInfo={setSinglePlaylistInfo}
          filteredPlaylists={filteredPlaylists}
        />
      </div>
    </div>
  );
}

export default Home;
