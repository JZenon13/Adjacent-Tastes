import React, { useState } from "react";
import "./artist.css";
import { editOneBand } from "../api/band";

function EditArtist({ setEditArtist, editArtist, setUpdateband }) {
  const [name, setName] = useState(editArtist.name);
  function handleEditedArtist(e) {
    e.preventDefault();

    const editedArtist = {
      id: editArtist.id,
      name: name,
    };

    editOneBand(editedArtist).then((data) => setUpdateband(data));
  }

  return (
    <>
      <div>
        <form onSubmit={handleEditedArtist}>
          <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
              <h2>Artist: </h2>
              <label>Name: </label>
              <input
                type="text"
                className="artistEdit"
                defaultValue={editArtist.name}
                placeholder={editArtist.name}
                onChange={(e) => setName(e.target.value)}
              />

              <button
                className="close-modal"
                onClick={() => setEditArtist(!editArtist)}
              >
                CLOSE
              </button>
              <button className="artistTableEditBtn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditArtist;
