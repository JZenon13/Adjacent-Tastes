import React from "react";

function Songlist({ filteredSongs, setNewlyAdded, newlyAdded }) {
  return (
    <>
      <div className="artistPage">
        <table className="artistTable">
          <thead>
            <tr>
              <th scope="col">Song</th>
              <th scope="col">Artist</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {filteredSongs.map((song) => {
            return (
              <>
                <tbody key={song.id}>
                  <tr>
                    <td>{song.songs}</td>

                    <td>{song.band}</td>
                    <td>
                      <button
                        onClick={() => setNewlyAdded([...newlyAdded, song])}
                      >
                        Add
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Songlist;
