const APIURL = process.env.REACT_APP_API_URL;

export const getSongs = async () => {
  const res = await fetch(`${APIURL}/songs`);
  return res.json();
};
export const getOneSong = async (id) => {
  const res = await fetch(`${APIURL}/song/${id}`);
  return res.json();
};

export const addOneSong = async (newSong) => {
  const response = await fetch(`${APIURL}/songs`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSong),
  });
  return response.json();
};

export const editOneSong = async (data) => {
  const response = await fetch(`${APIURL}/songs/${data.id}`, {
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

export const deleteSong = async (id) => {
  const response = fetch(`${APIURL}/songs/${id}`, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
  });
  return response;
};
