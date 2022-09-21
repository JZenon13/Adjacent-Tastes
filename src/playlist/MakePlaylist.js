import React from "react";
import { useNavigate } from "react-router-dom";
import { addOnePlaylist } from "../api/playlist";

function MakePlaylist({
  setSavePlaylist,
  savePlaylist,
  setPlaylist,
  setVibe,
  currentPlaylist,
  playlist,
  vibe,
  setCreatePlaylist,
  newlyAdded,
}) {
  const navigate = useNavigate();
  function handleNewPlaylist(e) {
    e.preventDefault();

    const newPlaylist = {
      name: playlist,
      description: vibe,
      songs: newlyAdded,
    };
    addOnePlaylist(newPlaylist).then((newPlaylist) =>
      setCreatePlaylist(newPlaylist)
    );
    navigate("/");
  }

  return (
    <>
      <div>
        <form onSubmit={handleNewPlaylist}>
          <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
              <h2>Playlist: </h2>
              <label>Title: </label>
              <input
                className="playlistAddEdit"
                type="text"
                placeholder={currentPlaylist}
                onChange={(e) => setPlaylist(e.target.value)}
              />

              <label for="description"> Vibe </label>
              <select
                className="playlistAddEdit"
                onChange={(e) => setVibe(e.target.value)}
              >
                <option value=""></option>
                <option value="Happiness">Happiness</option>
                <option value="Sadness">Sadness</option>
                <option value="Fear">Fear</option>
                <option value="Disgust">Disgust</option>
                <option value="Anger">Anger</option>
                <option value="Surprise">Surprise</option>
              </select>
              <button
                className="close-modal"
                onClick={() => setSavePlaylist(!savePlaylist)}
              >
                CLOSE
              </button>
              <button className="playlistEditBtn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default MakePlaylist;
