import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import Artist from "./artist/Artist";
import Songs from "./songs/Songs";
import { getSongs } from "./api/songs";
import { getBand } from "./api/band";
import { getPlaylists } from "./api/playlist";
import Playlist from "./playlist/Playlist";
import SingleArtistPlaylistPage from "./playlist/SingleArtistPlaylistPage";
import SinglePlaylistPage from "./playlist/SinglePlaylistPage";
import SingleSongPage from "./songs/SingleSongPage";
import Spinner from "./Spinner";

function App() {
  const [allSongs, setAllSongs] = useState([]);
  const [updateSong, setUpdateSong] = useState([]);
  const [deleteSong, setDeleteSong] = useState([]);
  const [createSong, setCreateSong] = useState([]);
  const [allBands, setAllBands] = useState([]);
  const [search, setSearch] = useState("");
  const [allPlaylists, setAllPlaylists] = useState([]);
  const [createArtist, setCreateArtist] = useState([]);
  const [deleteBand, setDeleteBand] = useState([]);
  const [updateBand, setUpdateBand] = useState([]);
  const [createPlaylist, setCreatePlaylist] = useState([]);
  const [deletePlaylist, setDeletePlaylist] = useState([]);
  const [updatePlaylist, setUpdatePlaylist] = useState([]);

  useEffect(() => {
    getSongs().then((data) => setAllSongs(data));
  }, [updateSong, deleteSong, createSong]);

  useEffect(() => {
    getBand().then((data) => setAllBands(data));
  }, [createArtist, deleteBand, updateBand]);

  useEffect(() => {
    getPlaylists().then((data) => setAllPlaylists(data));
  }, [createPlaylist, deletePlaylist, updatePlaylist]);

  return (
    <div className="App">
      <NavBar
        search={search}
        setSearch={setSearch}
        allPlaylists={allPlaylists}
      />
      <Routes>
        <Route
          path="/"
          element={
            allPlaylists ? (
              <Home
                {...{
                  allPlaylists,
                  setDeletePlaylist,
                  setUpdatePlaylist,
                  search,
                }}
              />
            ) : (
              <Spinner />
            )
          }
        />
        <Route
          path="/artist"
          element={
            <Artist
              {...{
                allBands,
                allPlaylists,
                setCreateArtist,
                setDeleteBand,
                setUpdateBand,
              }}
            />
          }
        />
        <Route
          path="/songs"
          element={
            <Songs
              {...{ allSongs, setUpdateSong, setCreateSong, setDeleteSong }}
            />
          }
        />
        <Route
          path="/playlist"
          element={<Playlist {...{ allSongs, setCreatePlaylist }} />}
        />
        <Route path="/playlist/artist" element={<SingleArtistPlaylistPage />} />
        <Route
          path="/playlist/:id"
          element={
            <SinglePlaylistPage
              {...{
                setUpdatePlaylist,
                setDeletePlaylist,
                updatePlaylist,
                deletePlaylist,
                setAllPlaylists,
              }}
            />
          }
        />
        <Route
          path="/playlist/song/:id"
          element={<SingleSongPage {...{ setUpdateSong }} />}
        />
      </Routes>
    </div>
  );
}

export default App;
