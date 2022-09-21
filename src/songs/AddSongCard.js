import React, { useState } from "react";
import { addOneSong } from "../api/songs";
import "./songs.css";

function AddSongCard({ addSong, setAddSong, setCreateSong }) {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  function handleAddSong(e) {
    e.preventDefault();

    const newSong = {
      band: artist,
      songs: title,
      link: link,
    };

    addOneSong(newSong).then((newSong) => setCreateSong(newSong));
  }

  return (
    <>
      <div>
        <form>
          <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
              <h2>Song: </h2>
              <label>Artist: </label>
              <input
                type="text"
                placeholder="Name..."
                onChange={(e) => setArtist(e.target.value)}
              />
              <label> Title </label>
              <input
                type="text"
                placeholder="Title..."
                onChange={(e) => setTitle(e.target.value)}
              />
              <label> Link </label>
              <input
                type="text"
                placeholder="Link..."
                onChange={(e) => setLink(e.target.value)}
              />
              <button
                className="close-modal"
                onClick={() => setAddSong(!addSong)}
              >
                CLOSE
              </button>
              <button type="submit" onClick={(e) => handleAddSong(e)}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddSongCard;
