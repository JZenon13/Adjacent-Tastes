import React, { useState } from "react";
import { editOneSong } from "../api/songs";

function EditSong({ setEditSong, editSong, setUpdateSong }) {
  const [artist, setArtist] = useState(editSong.band);
  const [title, setTitle] = useState(editSong.songs);
  const [link, setLink] = useState(editSong.link);

  function handleEditedSong(e) {
    e.preventDefault();
    const editedSong = {
      id: editSong.id,
      band: artist,
      songs: title,
      link: link,
    };
    editOneSong(editedSong).then((data) => setUpdateSong(data));
  }

  return (
    <>
      <div>
        <form>
          <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
              <h2>
                <b>Song: </b>
              </h2>
              <label>
                <b>Artist:</b>{" "}
              </label>
              <input
                className="songEdit"
                type="text"
                placeholder={artist}
                onChange={(e) => setArtist(e.target.value)}
              />

              <label>
                <b>Title: </b>{" "}
              </label>
              <input
                className="songEdit"
                type="text"
                placeholder={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <label>
                <b>Link :</b>{" "}
              </label>
              <input
                className="songEdit"
                type="text"
                placeholder={link}
                onChange={(e) => setLink(e.target.value)}
              />

              <button
                className="close-modal"
                onClick={() => setEditSong(!editSong)}
              >
                CLOSE
              </button>
              <button
                className="songEditBtn"
                type="submit"
                onClick={(e) => handleEditedSong(e)}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditSong;
