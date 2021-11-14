import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export const Favorite = () => {
  const [favList, setFavList] = useState({
    audiobook: [],
    movie: [],
    musicVideo: [],
    podcast: [],
    song: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    getData();
    // console.log(favList);
  }, []);

  const getData = async () => {
    const res = await axios.get(
      "https://cap2-backend.herokuapp.com/allMedia/fav"
    );

    // console.log(data.data[0].data);

    setFavList(res.data);
  };

  const handleFav = async (item) => {
    const res = await axios.get(
      `https://cap2-backend.herokuapp.com/${item.kind}/isfav/${item.trackId}`
    );

    if (res.data) {
      axios.put(
        `https://cap2-backend.herokuapp.com/${item.kind}/removeFav/${item.trackId}`
      );
    } else {
      axios.post(
        `https://cap2-backend.herokuapp.com/${item.kind}/addToFav/${item.trackId}`
      );
    }

    console.log(res.data);
  };

  const isFavFun = async (id) => {
    const res = await axios.get(
      `https://cap2-backend.herokuapp.com/song/isfav/${id}`
    );

    console.log(res.data);
    return res.data;
  };

  return (
    <div className="mediaWrapperFav">
      <h1>Favorite</h1>
      <div className="favDiv">
        {favList.song.map((item, i) => (
          <div className="favSongs" key={i}>
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
            <button
              className="favBtn"
              alt="favIcon"
              onClick={() => handleFav(item)}
            >
              {isFavFun(item.trackId) ? `❤` : `✘`}
            </button>
          </div>
        ))}
      </div>
      
    </div>
  );
};
