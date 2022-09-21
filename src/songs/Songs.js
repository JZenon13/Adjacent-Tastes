import React, { useState } from "react";
import AddSong from "./AddSong";
import EditSong from "./EditSong";
import { useNavigate } from "react-router-dom";
import "./songs.css";
import { deleteSong } from "../api/songs";

function Songs({ allSongs, setUpdateSong, setDeleteSong, setCreateSong }) {
  const navigate = useNavigate();
  const [addSong, setAddSong] = useState(false);
  const [editSong, setEditSong] = useState(false);

  function handleDeleteSong(id) {
    deleteSong(id);
    setDeleteSong(id);
  }

  function handleSingleSong(song) {
    navigate(`/playlist/song/${song.id}`);
  }

  return (
    <div className="songPage">
      <table className="songTable">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Title</th>
            <th scope="col">Artist</th>
            <th scope="col">Link</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {allSongs?.map((song) => {
          return (
            <>
              <tbody key={song.id}>
                <tr>
                  <td className="hoverEvent">
                    <img
                      className="songProfileImg"
                      src="/images/Devil_note.png"
                      alt=""
                      onDoubleClick={() => handleSingleSong(song)}
                    ></img>
                  </td>
                  <td>{song.songs}</td>
                  <td>{song.band}</td>
                  <td>
                    <a href={song.link}>{song.link}</a>
                  </td>
                  <td>
                    <button
                      className="songTableEditBtn"
                      onClick={() => setEditSong(song, !editSong)}
                    >
                      Edit
                    </button>
                    <button
                      className="songTableDeleteBtn"
                      onClick={() => handleDeleteSong(song.id)}
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
      {editSong && (
        <EditSong
          setEditSong={setEditSong}
          editSong={editSong}
          setUpdateSong={setUpdateSong}
        />
      )}
      <AddSong
        addSong={addSong}
        setAddSong={setAddSong}
        setCreateSong={setCreateSong}
      />
    </div>
  );
}

export default Songs;
