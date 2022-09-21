import React, { useState } from "react";
import "./playlist.css";
import Songlist from "./Songlist";
import MakePlaylist from "./MakePlaylist";
import AddSongToPlaylist from "./AddSongToPlaylist";

function Playlist({ allSongs, setCreatePlaylist, setUpdatePlaylist }) {
  const [playlistSearch, setPlaylistSearch] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [savePlaylist, setSavePlaylist] = useState(false);
  const [playlist, setPlaylist] = useState("New Playlist");
  const [vibe, setVibe] = useState("");
  const [newlyAdded, setNewlyAdded] = useState([]);

  const filteredSongs = allSongs.filter((song) =>
    song.songs.toLowerCase().includes(playlistSearch.toLowerCase())
  );

  return (
    <div className="playlistPage">
      <div className="playlistHeader">
        <img
          className="musicImg"
          src="https://t3.ftcdn.net/jpg/03/20/41/30/360_F_320413016_omSvNeOZw7UrPyMvCf95KTCKzt6WbHXG.jpg"
          alt=""
          onDoubleClick={() => setEditMode(!editMode)}
        ></img>
        <div>
          {playlist}

          <button
            className="playlistBarBtn"
            onClick={() => setSavePlaylist(!savePlaylist)}
          >
            Save Playlist
          </button>
        </div>
      </div>
      Make A New Playlist
      <div>
        <label>Let's Jam! </label>
        <input
          className="searchPlaylists"
          type="text"
          placeholder="Search Song"
          onChange={(e) => setPlaylistSearch(e.target.value)}
        />
      </div>
      <div className="addingPlaylist">
        <AddSongToPlaylist newlyAdded={newlyAdded} />
      </div>
      <hr></hr>
      {playlistSearch === "" ? null : (
        <Songlist
          filteredSongs={filteredSongs}
          setUpdatePlaylist={setUpdatePlaylist}
          playlist={playlist}
          vibe={vibe}
          setNewlyAdded={setNewlyAdded}
          newlyAdded={newlyAdded}
        />
      )}
      {savePlaylist && (
        <MakePlaylist
          setSavePlaylist={setSavePlaylist}
          savePlaylist={savePlaylist}
          setPlaylist={setPlaylist}
          setVibe={setVibe}
          vibe={vibe}
          playlist={playlist}
          setCreatePlaylist={setCreatePlaylist}
          newlyAdded={newlyAdded}
        />
      )}
    </div>
  );
}

export default Playlist;
