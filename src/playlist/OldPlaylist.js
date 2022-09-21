import React from "react";
import { useNavigate } from "react-router-dom";

function OldPlaylist({ addToPlaylist }) {
  const navigate = useNavigate();

  function redirectToArtistPlaylists(addToPlaylist) {
    navigate("/playlist/artist", { state: { addToPlaylist } });
  }

  return (
    <>
      <div>
        Search for playlists featuring{" "}
        <b>
          <u onDoubleClick={() => redirectToArtistPlaylists(addToPlaylist)}>
            {addToPlaylist.name}
          </u>
        </b>
      </div>
    </>
  );
}

export default OldPlaylist;
