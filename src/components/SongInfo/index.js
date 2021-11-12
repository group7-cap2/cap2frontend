import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const SongInfo = () => {
  const location = useLocation();
  const item = location.state;

  console.log(item);
  return (
    <div>
      <img
        className="songImg"
        src={item.artworkUrl100}
        alt={"songImg-${i}"}
      />
      <p className="songName">
        <b>{item.trackName}</b>
      </p>
      <p className="artistName">
        {item.artistName}
      </p>
    </div>
  );
};
