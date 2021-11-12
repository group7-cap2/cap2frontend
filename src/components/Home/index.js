import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Home = () => {
  const [song, setSong] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/song");

    // console.log(data.data[0].data);

    setSong(res.data);
  };
  console.log(song);
  return (
    <div className="homeDiv">
      <h1>Geners</h1>

      <div className="genreCardsDiv">
        <div className="genres">
          <img
            className="genreImg"
            src="https://i.pinimg.com/564x/8b/15/c4/8b15c41b8b22f5c2a7a6debd25f7f6c8.jpg"
            alt="rockImg"
          />
          <h2 className="genHead">Rock</h2>
        </div>
        <div className="genres">
          <img
            className="genreImg"
            src="https://i.pinimg.com/564x/91/f4/c7/91f4c75d05f3a193cbd38524b5f55a77.jpg"
            alt="popImg"
          />
          <h2 className="genHead">Pop</h2>
        </div>
        <div className="genres">
          <img
            className="genreImg"
            src="https://i.pinimg.com/564x/b3/02/0d/b3020d4f9cad774a77a1097ae8da04ea.jpg"
            alt="jazzImg"
          />
          <h2 className="genHead">Jazz</h2>
        </div>
        <div className="genres">
          <img
            className="genreImg"
            src="https://i.pinimg.com/564x/3f/50/02/3f500283ba9122de81bfd12b996aa3df.jpg"
            alt="ClassicImg"
          />
          <h2 className="genHead">Classic</h2>
        </div>
      </div>
      <h1>For You</h1>
      <div className="homeSongsDiv">
        {song.map((item, i) => (
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
        {/* <div className="homeSongs">
          <img
            className="songImg"
            src="https://i.pinimg.com/564x/a1/f3/2c/a1f32cc9f791174884eab87aa299c503.jpg"
          />
          <p className="songName">
            <b>song name</b>
          </p>
          <p className="artistName">artist name</p>
        </div>
        <div className="homeSongs">
          <img
            className="songImg"
            src="https://i.pinimg.com/564x/a1/f3/2c/a1f32cc9f791174884eab87aa299c503.jpg"
          />
          <p className="songName">
            <b>song name</b>
          </p>
          <p className="artistName">artist name</p>
        </div>
        <div className="homeSongs">
          <img
            className="songImg"
            src="https://i.pinimg.com/564x/a1/f3/2c/a1f32cc9f791174884eab87aa299c503.jpg"
          />
          <p className="songName">
            <b>song name</b>
          </p>
          <p className="artistName">artist name</p>
        </div>
        <div className="homeSongs">
          <img
            className="songImg"
            src="https://i.pinimg.com/564x/a1/f3/2c/a1f32cc9f791174884eab87aa299c503.jpg"
          />
          <p className="songName">
            <b>song name</b>
          </p>
          <p className="artistName">artist name</p>
        </div>
        <div className="homeSongs">
          <img
            className="songImg"
            src="https://i.pinimg.com/564x/a1/f3/2c/a1f32cc9f791174884eab87aa299c503.jpg"
          />
          <p className="songName">
            <b>song name</b>
          </p>
          <p className="artistName">artist name</p>
        </div>
        <div className="homeSongs">
          <img
            className="songImg"
            src="https://i.pinimg.com/564x/a1/f3/2c/a1f32cc9f791174884eab87aa299c503.jpg"
          />
          <p className="songName">
            <b>song name</b>
          </p>
          <p className="artistName">artist name</p>
        </div>
        <div className="homeSongs">
          <img
            className="songImg"
            src="https://i.pinimg.com/564x/a1/f3/2c/a1f32cc9f791174884eab87aa299c503.jpg"
          />
          <p className="songName">
            <b>song name</b>
          </p>
          <p className="artistName">artist name</p>
        </div>{" "}
        <div className="homeSongs">
          <img
            className="songImg"
            src="https://i.pinimg.com/564x/a1/f3/2c/a1f32cc9f791174884eab87aa299c503.jpg"
          />
          <p className="songName">
            <b>song name</b>
          </p>
          <p className="artistName">artist name</p>
        </div>{" "}
        <div className="homeSongs">
          <img
            className="songImg"
            src="https://i.pinimg.com/564x/a1/f3/2c/a1f32cc9f791174884eab87aa299c503.jpg"
          />
          <p className="songName">
            <b>song name</b>
          </p>
          <p className="artistName">artist name</p>
        </div> */}
      </div>
    </div>
  );
};
