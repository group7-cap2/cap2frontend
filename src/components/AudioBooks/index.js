import React from "react";
import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const AudioBook = () => {
  const [audioB, setaudioB] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("https://cap2-backend.herokuapp.com/audiobook");

    // console.log(data.data[0].data);

    setaudioB(res.data);
  };

  const handleFav = async (item) => {
    const res = await axios.get(
      `https://cap2-backend.herokuapp.com/audiobook/isfav/${item.trackId}`
    );

    if (res.data) {
      axios.put(`https://cap2-backend.herokuapp.com/removeFav/${item.trackId}`);
    } else {
      axios.post(
        `https://cap2-backend.herokuapp.com/audiobook/addToFav/${item.trackId}`
      );
    }

    console.log(res.data);
  };

  const isFavFun = async (id) => {
    const res = await axios.get(
      `https://cap2-backend.herokuapp.com/audiobook/isfav/${id}`
    );

    console.log(res.data);
    return res.data;
  };

  return (
    <div className="mediaWrapper">
      <h1>Audio Books</h1> {/* هنا ننادي الكيز للتايب الي اختارها المستخدم*/}
      <div className="mediaDiv">
        {audioB.map((item, i) => (
          <div className="homeSongs" key={i}>
            <div
              onClick={() => {
                navigate("/audiobook/info", { state: item });
              }}
            >
              <img
                key={`img-${i}`}
                className="songImg"
                src={item.artworkUrl100.replace(`100x100`,`1400x1400`)}
                alt={`songImg-${i}`}
              />
              <p className="songName" key={`trackN-${i}`}>
                <b>{item.collectionName.substr(0, 35)}</b>
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
