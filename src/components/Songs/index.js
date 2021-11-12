import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";

export const Songs = () => {
  const [song, setSong] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/song");

    // console.log(data.data[0].data);

    setSong(res.data);
  };

  return (
    <div className="mediaWrapper">
      <h1>Songs</h1> {/* هنا ننادي الكيز للتايب الي اختارها المستخدم*/}
      <div className="mediaDiv">
        {song.map((item, i) => (
          <div className="homeSongs" key={i}>
            <img
              key={`img-${i}`}
              className="songImg"
              src={item.artworkUrl100}
              alt={`songImg-${i}`}
            />
            <p className="songName" key={`trackN-${i}`}>
              <b>{item.trackName}</b>
            </p>
            <p className="artistName" key={`artN-${i}`}>
              {item.artistName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};