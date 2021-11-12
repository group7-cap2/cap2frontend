import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

export const AudioBookInfo = () => {
  const location = useLocation();
  const item = location.state;

  console.log(item);
  return (
    <div className="infoPageDiv">
      <div className="infoDetails">
        <h1>Audio Book Details</h1>
        <img
          className="infoImg"
          src={item.artworkUrl100}
          alt={"songImg-${i}"}
        />
        <h2 className="songName">
          <b>{item.trackName}</b>
        </h2>
        <h4 className="album"> {item.collectionName}</h4>
        <h3 className="artistName">{item.artistName}</h3>
        <audio controls className="preview">
          <source src={item.previewUrl} type="audio/mp4" />
        </audio>
      </div>
    </div>
  );
};
