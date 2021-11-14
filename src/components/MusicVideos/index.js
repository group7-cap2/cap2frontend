import React from "react";
import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const Musicvid = () => {
  const [musicV, setmusicV] = useState([]);
  const [favIcon, setFavIcon] = useState(Array(100).fill("❤"));

  const navigate = useNavigate();

  useEffect(() => {
    getData();
    setFavIconFun();
  }, []);

  useEffect(() => {
    getData();
  }, [favIcon]);

  const getData = async () => {
    const res = await axios.get(
      "https://cap2-backend.herokuapp.com/musicvideo"
    );

    setmusicV(res.data);
  };

  const handleFav = async (item, i) => {
    const res = await axios.get(
      `https://cap2-backend.herokuapp.com/song/isfav/${item.trackId}`
    );

    if (res.data) {
      await axios.put(
        `https://cap2-backend.herokuapp.com/song/removeFav/${item.trackId}`
      );
      let newArr = [...favIcon];
      newArr[i] = "❤";
      setFavIcon([...newArr]);
    } else {
      await axios.post(
        `https://cap2-backend.herokuapp.com/song/addToFav/${item.trackId}`
      );
      let newArr = [...favIcon];
      newArr[i] = "✘";
      setFavIcon([...newArr]);
    }
  };

  const setFavIconFun = async () => {
    let newArr = [...favIcon];

    const res = await axios.get(
      "https://cap2-backend.herokuapp.com/musicvideo"
    );
    res.data.map(async (item, i) => {
      const res = await axios.get(
        `https://cap2-backend.herokuapp.com/song/isfav/${item.trackId}`
      );
      if (res.data === true) newArr[i] = "✘";
      if (newArr.length === 100) {
        setFavIcon(newArr);
      }
    });
  };

  return (
    <div className="mediaWrapper">
      <h1>Music Videos</h1> {/* هنا ننادي الكيز للتايب الي اختارها المستخدم*/}
      <div className="mediaDiv">
        {musicV.map((item, i) => (
          <div className="homeSongs" key={i}>
            <div
              onClick={() => {
                navigate("/musicvideo/info", { state: item });
              }}
            >
              <img
                key={`img-${i}`}
                className="songImg"
                src={item.artworkUrl100.replace(`100x100`, `1400x1400`)}
                alt={`songImg-${i}`}
              />
              <p className="songName" key={`trackN-${i}`}>
                <b>{item.trackName.substr(0, 35)}</b>
              </p>
              <p className="artistName" key={`artN-${i}`}>
                {item.artistName.substr(0, 35)}
              </p>
            </div>
            <button
              className="favBtn"
              alt="favIcon"
              onClick={() => handleFav(item, i)}
            >
              {favIcon[i]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
