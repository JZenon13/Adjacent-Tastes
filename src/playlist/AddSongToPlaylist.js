import React from "react";

function AddSongToPlaylist({ newlyAdded }) {
  return (
    <>
      {newlyAdded?.map((song) => (
        <div key={song.id}>{song.songs}</div>
      ))}
    </>
  );
}

export default AddSongToPlaylist;
