import React, { useState } from "react";
import AddToPlaylist from "../playlist/AddToPlaylist";
import "./artist.css";
import EditArtist from "./EditArtist";
import AddArtist from "./AddArtist";
import { deleteBand } from "../api/band";

function Artist({
  allBands,
  allPlaylists,
  setCreateArtist,
  setDeleteBand,
  setUpdateBand,
}) {
  const [editArtist, setEditArtist] = useState(false);
  const [addToPlaylist, setAddToPlaylist] = useState(false);
  const [addArtist, setAddArtist] = useState(false);

  function handleDeleteArtist(id) {
    deleteBand(id);
    setDeleteBand(id);
  }

  return (
    <>
      <div className="artistPage">
        <table className="artistTable">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Artist</th>
              <th scope="col">...on the Playlist?</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {allBands?.map((band) => {
            return (
              <>
                <tbody key={band.id}>
                  <tr>
                    <td>
                      <img
                        className="artistProfileImg"
                        src="/images/person.jpg"
                        alt=""
                      ></img>
                    </td>

                    <td>{band.name}</td>

                    <td>
                      <button
                        className="artistTableAddBtn"
                        onClick={() => setAddToPlaylist(band, !addToPlaylist)}
                      >
                        🎶
                      </button>
                    </td>

                    <td>
                      <button
                        className="artistTableEditBtn"
                        onClick={() => setEditArtist(band, !editArtist)}
                      >
                        Edit
                      </button>
                      <button
                        className="artistTableDeleteBtn"
                        onClick={() => handleDeleteArtist(band.id)}
                      >
                        Del
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>

        {addToPlaylist && (
          <AddToPlaylist
            allBands={allBands}
            allPlaylists={allPlaylists}
            addToPlaylist={addToPlaylist}
            setAddToPlaylist={setAddToPlaylist}
          />
        )}
        {editArtist && (
          <EditArtist
            setEditArtist={setEditArtist}
            editArtist={editArtist}
            setUpdateBand={setUpdateBand}
          />
        )}

        <AddArtist
          setCreateArtist={setCreateArtist}
          setAddArtist={setAddArtist}
          addArtist={addArtist}
        />
      </div>
    </>
  );
}

export default Artist;
