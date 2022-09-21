import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  editOnePlaylist,
  getPlaylists,
  deletePlaylists,
  deleteSongPlaylist,
  getOnePlaylist,
} from "../api/playlist";

function SinglePlaylistPage({
  setDeletePlaylist,
  setUpdatePlaylist,
  deletePlaylist,
  updatePlaylist,
  setAllPlaylists,
}) {
  const params = useParams();
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [onePlaylistInfo, setOnePlaylistInfo] = useState([]);
  const [newName, setNewName] = useState([]);
  const [newVibe, setNewVibe] = useState([]);
  const [updatedSongs, setUpdatedSongs] = useState([]);

  useEffect(() => {
    getOnePlaylist(params.id).then((data) => {
      setOnePlaylistInfo(data);
      setNewName(data.name);
      setNewVibe(data.description);
      setUpdatedSongs(data.songs);
    });
  }, []);

  useEffect(() => {
    getPlaylists().then((data) => setAllPlaylists(data));
  }, [deletePlaylist, updatePlaylist]);

  function handleDeletePlaylist(id) {
    deletePlaylists(id);
    setDeletePlaylist(id);
    navigate("/");
  }

  function handleDeleteSong(song) {
    const songID = song.id;
    const id = onePlaylistInfo.id;
    deleteSongPlaylist(id, songID);
    setUpdatedSongs(
      onePlaylistInfo.songs.filter((songs) => {
        return songs.id !== song.id;
      })
    );
  }

  function updatedPlaylist() {
    const newPlaylist = {
      name: newName,
      description: newVibe,
      songs: updatedSongs,
      id: onePlaylistInfo.id,
    };

    editOnePlaylist(newPlaylist).then((data) => setUpdatePlaylist(data));
    navigate("/");
  }

  return (
    <div>
      {editMode ? (
        <div className="editPlaylistName">
          <label for="name">
            <b>Playlist Name </b>
          </label>
          <input
            className="playlistEdit"
            defaultValue={onePlaylistInfo.name}
            onChange={(e) => setNewName(e.target.value)}
          ></input>
          <label for="description">
            <b> Vibe </b>
          </label>
          <select
            className="playlistEdit"
            onChange={(e) => setNewVibe(e.target.value)}
          >
            <option value=""></option>
            <option value="Happiness">Happiness</option>
            <option value="Sadness">Sadness</option>
            <option value="Fear">Fear</option>
            <option value="Disgust">Disgust</option>
            <option value="Anger">Anger</option>
            <option value="Surprise">Surprise</option>
          </select>
        </div>
      ) : (
        <>
          <h1>
            {onePlaylistInfo.name}
            <button
              className="playlistBarBtn"
              onClick={() => setEditMode(!editMode)}
            >
              Edit
            </button>
          </h1>
          <h2>
            Vibe Check : <i>{onePlaylistInfo.description}</i>
          </h2>
        </>
      )}

      <div>
        <div className="artistPage">
          <table className="artistTable">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Artist</th>
                <th scope="col">Song</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {onePlaylistInfo.songs?.map((song) => {
              return (
                <tbody key={song.id}>
                  <tr>
                    <td>
                      <img
                        className="artistProfileImg"
                        src="/images/person.jpg"
                        alt=""
                      ></img>
                    </td>

                    <td>{song.band}</td>

                    <td>{song.songs}</td>
                    <td>
                      <button
                        className="artistTableDeleteBtn"
                        onClick={() => handleDeleteSong(song)}
                      >
                        Del
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
          <div
            className="playlistBtn"
            onClick={() => handleDeletePlaylist(onePlaylistInfo.id)}
          >
            Delete Playlist?
          </div>
          <div className="playlistBtn" onClick={(e) => updatedPlaylist(e)}>
            Finished Edit?
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePlaylistPage;
