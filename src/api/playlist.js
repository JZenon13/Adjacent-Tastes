const APIURL = process.env.REACT_APP_API_URL;

export const getPlaylists = async () => {
  const res = await fetch(`${APIURL}/playlist`);
  return res.json();
};

export const getOnePlaylist = async (id) => {
  const res = await fetch(`${APIURL}/playlistss/${id}`);
  return res.json();
};

export const addOnePlaylist = async (newPlaylist) => {
  const response = await fetch(`${APIURL}/playlist`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlaylist),
  });
  return response.json();
};

export const editOnePlaylist = async (data) => {
  const response = await fetch(`${APIURL}/playlist/${data.id}`, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const deletePlaylists = async (id) => {
  const response = fetch(`${APIURL}/playlist/${id}`, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
  });
  return response;
};
export const deleteSongPlaylist = async (id, songId) => {
  const response = fetch(`${APIURL}/playlist/${id}/${songId}`, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
  });

  return response;
};

export const getSongInAllPlaylists = async (songId) => {
  const res = await fetch(`${APIURL}/playlist/${songId}`);
  return res.json();
};

export const getArtistInAllPlaylists = async (artistId) => {
  const res = await fetch(`${APIURL}/playlists/${artistId}`);
  return res.json();
};
