import React from "react";
import {  useLocation } from "react-router-dom";
import "./style.css";

export const SongInfo = () => {
  const location = useLocation();
  const item = location.state;

  console.log(item);
  return (
    <div className="infoPageDiv">
      <div className="infoDetails">
        <h1>Song Details</h1>
        <img
          className="infoImg"
          src={item.artworkUrl100.replace(`100x100`, `1400x1400`)}
          alt={`songImg-100`}
        />
        <h2 className="songName">
          <b>{item.trackName}</b>
        </h2>
        <p className="album">
          <b> {item.collectionName}</b>
        </p>
        <h3 className="artistName">{item.artistName}</h3>
        <audio controls className="preview">
          <source src={item.previewUrl} type="audio/mp4" />
        </audio>
      </div>
    </div>
  );
};
