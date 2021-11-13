import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

export const PodcastInfo = () => {
  const location = useLocation();
  const item = location.state;

  console.log(item);
  return (
    <div className="infoPageDiv">
      <div className="infoDetails">
        <h1>Podcast Details</h1>
        <img
          className="infoImg"
          src={item.artworkUrl600}
          alt={"songImg-102"}
        />
        <p className="songName">
          <b>{item.trackName}</b>
        </p>
        <p className="artistName">{item.artistName}</p>
        <audio controls onPlay className="preview">
          <source src={item.collectionViewUrl} type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
};
