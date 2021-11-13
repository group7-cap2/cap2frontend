import React from "react";
import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const Podcasts = () => {
  const [podC, setPodC] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/podcast");

    // console.log(data.data[0].data);

    setPodC(res.data);
  };

  const handleFav = async (item) => {
    const res = await axios.get(
      `http://localhost:5000/podcast/isfav/${item.trackId}`
    );

    if (res.data) {
      axios.put(`http://localhost:5000/podcast/removeFav/${item.trackId}`);
    } else {
      axios.post(`http://localhost:5000/podcast/addToFav/${item.trackId}`);
    }

    console.log(res.data);
  };

  const isFavFun = async (id) => {
    const res = await axios.get(`http://localhost:5000/podcast/isfav/${id}`);

    console.log(res.data);
    return res.data;
  };

  return (
    <div className="mediaWrapper">
      <h1>Podcasts</h1> {/* هنا ننادي الكيز للتايب الي اختارها المستخدم*/}
      <div className="mediaDiv">
        {podC.map((item, i) => (
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
                {item.artistName.substr(0, 35)}
              </p>
            </div>
            <img
              className="favIcon"
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
