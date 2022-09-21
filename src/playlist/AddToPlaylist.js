import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import MakeNewPlaylist from "./Playlist";
import OldPlaylist from "./OldPlaylist";

function AddToPlaylist({
  setAddToPlaylist,
  allPlaylists,
  addToPlaylist,
  allBands,
}) {
  const [searchPlaylists, setSearchPlaylists] = useState("");
  const [hideSearch, setHideSearch] = useState(false);

  return (
    <>
      <div>
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>Playlist: </h2>

            <button
              className="oldPlaylist"
              onClick={() => setHideSearch(!hideSearch)}
            >
              Old Playlist
            </button>

            <button className="newPlaylist">
              <Routes>
                <Route path="/playlist" element={<MakeNewPlaylist />} />
              </Routes>
              <Link to="/playlist"> New Playlist</Link>
            </button>
            <button
              className="close-modal"
              onClick={() => setAddToPlaylist(!addToPlaylist)}
            >
              CLOSE
            </button>
            {hideSearch && (
              <OldPlaylist
                addToPlaylist={addToPlaylist}
                allBands={allBands}
                setSearchPlaylists={setSearchPlaylists}
                searchPlaylists={searchPlaylists}
                allPlaylists={allPlaylists}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddToPlaylist;
