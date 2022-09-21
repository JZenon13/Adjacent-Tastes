import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { getSongInAllPlaylists } from "../api/playlist";
import { editOneSong, getOneSong } from "../api/songs";
var getYouTubeID = require("get-youtube-id");

function SingleSongPage({ setUpdateSong }) {
  const navigate = useNavigate();
  const params = useParams();
  const [oneSongInfo, setOneSongInfo] = useState([]);
  const [songPlaylistInfo, setSongPlaylistInfo] = useState([]);
  const [songId, setSongId] = useState(oneSongInfo.id);
  const [newLink, setNewLink] = useState(oneSongInfo.link);
  console.log(oneSongInfo.band);

  useEffect(() => {
    getOneSong(params.id).then((data) => setOneSongInfo(data));
  }, []);
  useEffect(() => {
    getSongInAllPlaylists(params.id).then((data) => setSongPlaylistInfo(data));
  }, []);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const youtubeId = getYouTubeID(oneSongInfo.link);

  function handleNewLink() {
    const editedSong = {
      id: oneSongInfo.id,
      band: oneSongInfo.band,
      songs: oneSongInfo.songs,
      link: newLink,
    };
    editOneSong(editedSong).then((data) => setUpdateSong(data));
  }

  return (
    <>
      <YouTube videoId={youtubeId} opts={opts} />
      <h1>
        <b>{oneSongInfo.songs}</b> by {oneSongInfo.band}
      </h1>
      <div className="App">
        <h2> Featured on</h2>
        <div>
          New Link{"  "}
          <input
            type="text"
            onChange={(e) => setNewLink(e.target.value)}
          ></input>
          <button onClick={() => handleNewLink()}>Submit</button>
        </div>
        <hr></hr>

        {songPlaylistInfo?.map((playlist) => {
          return (
            <>
              <ul key={playlist.id} className="clickableLink">
                <i>
                  <u
                    onDoubleClick={() =>
                      navigate(`/playlist/${playlist.id}`, {
                        state: { playlist },
                      })
                    }
                  >
                    {playlist.name}
                  </u>
                </i>
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
}

export default SingleSongPage;
