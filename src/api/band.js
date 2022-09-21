const APIURL = process.env.REACT_APP_API_URL;

export const getBand = async () => {
  const res = await fetch(`${APIURL}`);
  return res.json();
};

export const addOneBand = async (newBand) => {
  const response = await fetch(`${APIURL}/band`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBand),
  });
  return response.json();
};

export const editOneBand = async (data) => {
  const response = await fetch(`${APIURL}/band/${data.id}`, {
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

export const deleteBand = async (id) => {
  const response = fetch(`${APIURL}/band/${id}`, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
  });
  return response;
};
