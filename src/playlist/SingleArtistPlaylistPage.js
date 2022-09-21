import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getArtistInAllPlaylists } from "../api/playlist";

function SingleArtistPlaylistPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [allArtistPlaylists, setAllArtistPlaylists] = useState([]);
  const [artistId, setArtistId] = useState(location.state.addToPlaylist.id);

  useEffect(() => {
    getArtistInAllPlaylists(artistId).then((data) =>
      setAllArtistPlaylists(data)
    );
  }, []);

  return (
    <div>
      <h1>
        {allArtistPlaylists.length} Playlists Featuring
        {location.state.addToPlaylist.name}
      </h1>

      {allArtistPlaylists?.map((playlist) => {
        return (
          <>
            <div key={playlist.id}>
              <div className="allHomeCards">
                <div className="homeCard">
                  <img
                    src="https://cdn.britannica.com/03/151903-131-E310E9EC/Microphone-background-sound-waves-energy-Music.jpg"
                    alt=""
                    className="homeCardImage"
                    onDoubleClick={() =>
                      navigate(`/playlist/${playlist.id}`, {
                        state: { playlist },
                      })
                    }
                  ></img>

                  <div className="homeCardInfo">
                    <h3>{playlist.name}</h3>
                    <h4>{playlist.songs.length} songs</h4>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default SingleArtistPlaylistPage;
