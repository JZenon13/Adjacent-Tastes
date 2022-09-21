import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function HomeCard({ setSinglePlaylistInfo, filteredPlaylists }) {
  const navigate = useNavigate();

  function navigateTo(playlist) {
    navigate(`/playlist/${playlist.id}`, { state: { playlist } });
  }

  return (
    <>
      {filteredPlaylists?.map((playlist) => {
        return (
          <div>
            <div key={playlist.id} className="allHomeCards">
              <div className="homeCard">
                <img
                  src="https://cdn.britannica.com/03/151903-131-E310E9EC/Microphone-background-sound-waves-energy-Music.jpg"
                  alt=""
                  className="homeCardImage"
                ></img>
                <button
                  className="editBtn"
                  onClick={() => {
                    navigateTo(playlist);
                    setSinglePlaylistInfo(playlist);
                  }}
                >
                  <b>Edit</b>
                </button>

                <div className="homeCardInfo">
                  <h3>
                    <i>
                      <u>Name:</u>
                    </i>
                    {"  "}
                    {playlist.name}
                  </h3>
                  <h4>
                    <i>
                      <u>Vibe:</u>
                    </i>
                    {"  "}
                    {playlist.description}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default HomeCard;
