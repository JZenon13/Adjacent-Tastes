import React, { useState } from "react";
import { addOneBand } from "../api/band";
import "./artist.css";

function AddArtistCard({ addArtist, setAddArtist, setCreateArtist }) {
  const [artist, setArtist] = useState("");

  function handleAddArtist(e) {
    e.preventDefault();

    const newBand = {
      name: artist,
    };
    addOneBand(newBand).then((newBand) => setCreateArtist(newBand));
  }

  return (
    <>
      <div>
        <form onSubmit={handleAddArtist}>
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
              <button
                className="close-modal"
                onClick={() => setAddArtist(!addArtist)}
              >
                CLOSE
              </button>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddArtistCard;
