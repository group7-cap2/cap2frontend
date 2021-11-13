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
    const res = await axios.get("https://cap2-backend.herokuapp.com/allMedia/fav");

    // console.log(data.data[0].data);

    setFavList(res.data);
  };

  const handleFav = async (item) => {
    const res = await axios.get(
      `https://cap2-backend.herokuapp.com/song/isfav/${item.trackId}`
    );

    if (res.data) {
      axios.put(`https://cap2-backend.herokuapp.com/song/removeFav/${item.trackId}`);
    } else {
      axios.post(`https://cap2-backend.herokuapp.com/song/addToFav/${item.trackId}`);
    }

    console.log(res.data);
  };

  const isFavFun = async (id) => {
    const res = await axios.get(`https://cap2-backend.herokuapp.com/song/isfav/${id}`);

    console.log(res.data);
    return res.data;
  };

  return (
    <div className="mediaWrapper">
      <h1>Songs</h1>
      <div className="mediaDiv">
        {favList.song.map((item, i) => (
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
              className="favButton"
              src={`https://img.icons8.com/external-prettycons-solid-prettycons/60/${
                isFavFun(item.trackId) ? "000000" : "ff0000"
              }/external-favorite-essentials-prettycons-solid-prettycons.png`}
              alt="favIcon"
              onClick={() => handleFav(item)}
            />
          </div>
        ))}
      </div>
      <h1>Podcasts</h1> {/* هنا ننادي الكيز للتايب الي اختارها المستخدم*/}
      <div className="mediaDiv">
        {favList.podcast.map((item, i) => (
          <div className="homeSongs" key={i}>
            <div
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
                <b>{item.trackName.substr(0, 35)}</b>
              </p>
              <p className="artistName" key={`artN-${i}`}>
                {item.artistName}
              </p>
            </div>
            <img
              className="favButton"
              src={`https://img.icons8.com/external-prettycons-solid-prettycons/60/${
                isFavFun(item.trackId) ? "000000" : "ff0000"
              }/external-favorite-essentials-prettycons-solid-prettycons.png`}
              alt="favIcon"
              onClick={() => handleFav(item)}
            />
          </div>
        ))}
      </div>
      <h1>Music Videos</h1> {/* هنا ننادي الكيز للتايب الي اختارها المستخدم*/}
      <div className="mediaDiv">
        {favList.musicVideo.map((item, i) => (
          <div className="homeSongs" key={i}>
            <div
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
                <b>{item.trackName.substr(0, 35)}</b>
              </p>
              <p className="artistName" key={`artN-${i}`}>
                {item.artistName}
              </p>
            </div>{" "}
            <img
              className="favButton"
              src={`https://img.icons8.com/external-prettycons-solid-prettycons/60/${
                isFavFun(item.trackId) ? "000000" : "ff0000"
              }/external-favorite-essentials-prettycons-solid-prettycons.png`}
              alt="favIcon"
              onClick={() => handleFav(item)}
            />
          </div>
        ))}
      </div>
      <h1>Audio Books</h1> {/* هنا ننادي الكيز للتايب الي اختارها المستخدم*/}
      <div className="mediaDiv">
        {favList.audiobook.map((item, i) => (
          <div className="homeSongs" key={i}>
            <div
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
                <b>{item.collectionName.substr(0, 35)}</b>
              </p>
              <p className="artistName" key={`artN-${i}`}>
                {item.artistName}
              </p>
            </div>{" "}
            <img
              className="favButton"
              src={`https://img.icons8.com/external-prettycons-solid-prettycons/60/${
                isFavFun(item.trackId) ? "000000" : "ff0000"
              }/external-favorite-essentials-prettycons-solid-prettycons.png`}
              alt="favIcon"
              onClick={() => handleFav(item)}
            />
          </div>
        ))}
      </div>
      <h1>Movies</h1> {/* هنا ننادي الكيز للتايب الي اختارها المستخدم*/}
      <div className="mediaDiv">
        {favList.movie.map((item, i) => (
          <div className="homeSongs" key={i}>
            <div
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
                <b>{item.trackName.substr(0, 35)}</b>
              </p>
              <p className="artistName" key={`artN-${i}`}>
                {item.artistName}
              </p>
            </div>
            <img
              className="favButton"
              src={`https://img.icons8.com/external-prettycons-solid-prettycons/60/${
                isFavFun(item.trackId) ? "000000" : "ff0000"
              }/external-favorite-essentials-prettycons-solid-prettycons.png`}
              alt="favIcon"
              onClick={() => handleFav(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
