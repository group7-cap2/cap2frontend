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
    console.log(favList);
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/allMedia/fav");

    // console.log(data.data[0].data);

    setFavList(res.data);
  };

  return (
    <div className="mediaWrapper">
      <h1>Songs</h1>
      <div className="mediaDiv">
        {favList.song.map((item, i) => (
          <div
            className="homeSongs"
            key={i}
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
              <b>{item.trackName}</b>
            </p>
            <p className="artistName" key={`artN-${i}`}>
              {item.artistName}
            </p>
          </div>
        ))}
      </div>
      <h1>Podcasts</h1> {/* هنا ننادي الكيز للتايب الي اختارها المستخدم*/}
      <div className="mediaDiv">
        {favList.podcast.map((item, i) => (
          <div
            className="homeSongs"
            key={i}
            onClick={() => {
              navigate("/podcast/info", { state: item });
            }}
          >
            <img
              key={`img-${i}`}
              className="songImg"
              src={item.artworkUrl600}
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
      <h1>Music Videos</h1> {/* هنا ننادي الكيز للتايب الي اختارها المستخدم*/}
      <div className="mediaDiv">
        {favList.musicVideo.map((item, i) => (
          <div
            className="homeSongs"
            key={i}
            onClick={() => {
              navigate("/musicvideo/info", { state: item });
            }}
          >
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
      <h1>Audio Books</h1> {/* هنا ننادي الكيز للتايب الي اختارها المستخدم*/}
      <div className="mediaDiv">
        {favList.audiobook.map((item, i) => (
          <div
            className="homeSongs"
            key={i}
            onClick={() => {
              navigate("/audiobook/info", { state: item });
            }}
          >
            <img
              key={`img-${i}`}
              className="songImg"
              src={item.artworkUrl100}
              alt={`songImg-${i}`}
            />
            <p className="songName" key={`trackN-${i}`}>
              <b>{item.collectionName}</b>
            </p>
            <p className="artistName" key={`artN-${i}`}>
              {item.artistName}
            </p>
          </div>
        ))}
      </div>
      <h1>Movies</h1> {/* هنا ننادي الكيز للتايب الي اختارها المستخدم*/}
      <div className="mediaDiv">
        {favList.movie.map((item, i) => (
          <div
            className="homeSongs"
            key={i}
            onClick={() => {
              navigate("/movie/info", { state: item });
            }}
          >
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
