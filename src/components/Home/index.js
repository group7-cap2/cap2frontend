import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await axios.get("http://localhost:5000/audiobook");

    console.log(data.data[0].artistName);

    setData(data);
  };

  return (
    <div className="homeDiv">
      <h1>{getData}Geners</h1>

      <div className="genreCardsDiv">
        <div className="genres">
          <img
            className="genreImg"
            src="https://i.pinimg.com/564x/8b/15/c4/8b15c41b8b22f5c2a7a6debd25f7f6c8.jpg"
          />
          <h2 className="genHead">Rock</h2>
        </div>
        <div className="genres">
          <img
            className="genreImg"
            src="https://i.pinimg.com/564x/91/f4/c7/91f4c75d05f3a193cbd38524b5f55a77.jpg"
          />
          <h2 className="genHead">Pop</h2>
        </div>
        <div className="genres">
          <img
            className="genreImg"
            src="https://i.pinimg.com/564x/b3/02/0d/b3020d4f9cad774a77a1097ae8da04ea.jpg"
          />
          <h2 className="genHead">Jazz</h2>
        </div>
        <div className="genres">
          <img
            className="genreImg"
            src="https://i.pinimg.com/564x/3f/50/02/3f500283ba9122de81bfd12b996aa3df.jpg"
          />
          <h2 className="genHead">Classic</h2>
        </div>
      </div>
      <h1>For You</h1>
      <div className="homeSongsDiv">
        <div className="homeSongs">
          <img
            className="songImg"
            src="https://i.pinimg.com/564x/a1/f3/2c/a1f32cc9f791174884eab87aa299c503.jpg"
          />
          <p className="songName">
            <b>Sky full of stars</b>
          </p>
          <p className="artistName">Coldplay</p>
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
      </div>
    </div>
  );
};
