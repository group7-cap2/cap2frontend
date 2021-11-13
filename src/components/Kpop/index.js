import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Kpop = () => {
  const [song, setSong] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/kpop");

    // console.log(data.data[0].data);

    setSong(res.data);
  };

  const handleFav = async (item) => {
    const res = await axios.get(
      `http://localhost:5000/song/isfav/${item.trackId}`
    );

    if (res.data) {
      axios.put(`http://localhost:5000/song/removeFav/${item.trackId}`);
    } else {
      axios.post(`http://localhost:5000/song/addToFav/${item.trackId}`);
    }

    console.log(res.data);
  };

  const isFavFun = async (id) => {
    const res = await axios.get(`http://localhost:5000/song/isfav/${id}`);

    console.log(res.data);
    return res.data;
  };

  return (
    <div className="mediaWrapper">
      <h1>K-pop Songs</h1>
      <div className="mediaDiv">
        {song.map((item, i) => (
          <div className="homeSongs" key={i}>
            <div
              onClick={() => {
                navigate("/song/info", { state: item });
              }}
            >
              <img
                key={`img-${i}`}
                className="songImg"
                src={item.artworkUrl100}
                alt={`songImg-${i}`}
              />
              <p className="songName" key={`trackN-${i}`}>
                <b>{item.trackName.substr(0, 35)}</b>
              </p>
              <p className="artistName" key={`artN-${i}`}>
                {item.artistName}
              </p>
            </div>
            <img
              className="favIcon"
              src="https://img.icons8.com/external-prettycons-solid-prettycons/60/000000/external-favorite-essentials-prettycons-solid-prettycons.png"
              alt="favIcon"
              onClick={() => handleFav(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
