import React from "react";
import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const Musicvid = () => {
  const [musicV, setmusicV] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/musicvideo");

    // console.log(data.data[0].data);

    setmusicV(res.data);
  };

  const handleFav = async (item) => {
    const res = await axios.get(
      `http://localhost:5000/musicvideo/isfav/${item.trackId}`
    );

    if (res.data) {
      axios.put(`http://localhost:5000/musicvideo/removeFav/${item.trackId}`);
    } else {
      axios.post(`http://localhost:5000/musicvideo/addToFav/${item.trackId}`);
    }

    console.log(res.data);
  };

  const isFavFun = async (id) => {
    const res = await axios.get(`http://localhost:5000/musicVideo/isfav/${id}`);

    console.log(res.data);
    return res.data;
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
                src={item.artworkUrl100}
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
