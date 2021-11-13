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
    const res = await axios.get("https://cap2-backend.herokuapp.com/musicvideo");

    // console.log(data.data[0].data);

    setmusicV(res.data);
  };

  const handleFav = async (item) => {
    const res = await axios.get(
      `https://cap2-backend.herokuapp.com/musicvideo/isfav/${item.trackId}`
    );

    if (res.data) {
      axios.put(`https://cap2-backend.herokuapp.com/musicvideo/removeFav/${item.trackId}`);
    } else {
      axios.post(`https://cap2-backend.herokuapp.com/musicvideo/addToFav/${item.trackId}`);
    }

    console.log(res.data);
  };

  const isFavFun = async (id) => {
    const res = await axios.get(`https://cap2-backend.herokuapp.com/musicVideo/isfav/${id}`);

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
