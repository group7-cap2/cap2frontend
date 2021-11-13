import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Home = () => {
  const [song, setSong] = useState([]);
  const [isFav, setIsFav] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/song");

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
    <div className="homeDiv">
      <h1>Geners</h1>

      <div className="genreCardsDiv">
        <div
          className="genres"
          onClick={() => {
            navigate("/rock");
          }}
        >
          <img
            className="genreImg"
            src="https://i.pinimg.com/564x/8b/15/c4/8b15c41b8b22f5c2a7a6debd25f7f6c8.jpg"
            alt="rockImg"
          />
          <h2 className="genHead">Rock</h2>
        </div>
        <div
          className="genres"
          onClick={() => {
            navigate("/pop");
          }}
        >
          <img
            className="genreImg"
            src="https://i.pinimg.com/564x/91/f4/c7/91f4c75d05f3a193cbd38524b5f55a77.jpg"
            alt="popImg"
          />
          <h2 className="genHead">Pop</h2>
        </div>
        <div
          className="genres"
          onClick={() => {
            navigate("/kpop");
          }}
        >
          <img
            className="genreImg"
            src="https://i.pinimg.com/564x/e5/e1/b2/e5e1b272a5d1a234bd626310c932f701.jpg"
            alt="jazzImg"
          />
          <h2 className="genHead">Kpop</h2>
        </div>
        <div
          className="genres"
          onClick={() => {
            navigate("/soul");
          }}
        >
          <img
            className="genreImg"
            src="https://i.pinimg.com/564x/19/79/4f/19794fa23fedd4226ac1f598de7a6490.jpg"
            alt="ClassicImg"
          />
          <h2 className="genHead">R&B/Soul</h2>
        </div>
      </div>
      <h1>For You</h1>
      <div className="homeSongsDiv">
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
              src={`https://img.icons8.com/external-prettycons-solid-prettycons/60/000000/external-favorite-essentials-prettycons-solid-prettycons.png`}
              alt="favIcon"
              onClick={() => handleFav(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
