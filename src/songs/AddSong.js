import React, { useState } from "react";
import AddSongCard from "./AddSongCard";

function AddSong({ addSong, setAddSong, setCreateSong }) {
  function addNewSong() {
    setAddSong(!addSong);
  }

  return (
    <>
      <div className="addSongButton">
        <div onClick={() => addNewSong()}>Don't See your Favorite Song?</div>
      </div>
      {addSong && (
        <AddSongCard
          setAddSong={setAddSong}
          addSong={addSong}
          setCreateSong={setCreateSong}
        />
      )}
    </>
  );
}

export default AddSong;
