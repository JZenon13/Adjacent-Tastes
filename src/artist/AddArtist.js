import React from "react";
import AddArtistCard from "./AddArtistCard";

function AddArtist({ addArtist, setAddArtist, setCreateArtist }) {
  function addNewArtist() {
    setAddArtist(!addArtist);
  }

  return (
    <>
      <div className="addSongButton">
        <div onClick={() => addNewArtist()}>
          Don't See your Favorite Artist?
        </div>
      </div>
      {addArtist && (
        <AddArtistCard
          setAddArtist={setAddArtist}
          addArtist={addArtist}
          setCreateArtist={setCreateArtist}
        />
      )}
    </>
  );
}

export default AddArtist;
