import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

export const MusicVideoInfo = () => {
  const location = useLocation();
  const item = location.state;

  console.log(item);
  return (
    <div className="infoPageDiv">
      <div className="infoDetails">
        <h1>Music Video Details</h1>
        <video controls width="800">
          <source src={item.previewUrl} type="video/mp4" />
        </video>
        <h2 className="songName">
          <b>{item.trackName}</b>
        </h2>
        <h4 className="album"> {item.collectionName}</h4>
        <h3 className="artistName">{item.artistName}</h3>
      </div>
    </div>
  );
};
