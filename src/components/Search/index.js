import React from "react";
import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";

export const Search = () => {
  const [results, setResults] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://cap2-backend.herokuapp.com/allmedia/search/${location.state}`
      );
  
      // console.log(data.data[0].data);
  
      setResults(res.data);
    };
    
    getData();

  },[]);

  // const getData = async () => {
  //   const res = await axios.get(
  //     `https://cap2-backend.herokuapp.com/allmedia/search/${location.state}`
  //   );

  //   // console.log(data.data[0].data);

  //   setResults(res.data);
  // };

  const handleFav = async (item) => {
    const res = await axios.get(
      `https://cap2-backend.herokuapp.com/song/isfav/${item.trackId}`
    );

    if (res.data) {
      axios.put(`https://cap2-backend.herokuapp.com/${item.kind}/removeFav/${item.trackId}`);
    } else {
      axios.post(`https://cap2-backend.herokuapp.com/${item.kind}/addToFav/${item.trackId}`);
    } /*هنا حطيت ايتم كايند بس يختلف المسمى
    الي كاتبينه عن الي بالقاعده الاساسيه  */

    console.log(res.data);
  };

  const isFavFun = async (id) => {
    const res = await axios.get(`https://cap2-backend.herokuapp.com/song/isfav/${id}`);

    console.log(res.data);
    return res.data;
  };

  return (
    <div className="mediaWrapper">
      <h1>Search result</h1> {/* هنا ننادي الكيز للتايب الي اختارها المستخدم*/}
      <div className="mediaDiv">
        {results.map((item, i) => (
          <div className="homeSongs" key={i}>
            <div
              onClick={() => {
                navigate(`/${item.kind}/info`, { state: item });
              }}
            >
              <img
                key={`img-${i}`}
                className="songImg"
                src={item.artworkUrl100.replace(`100x100`, `1400x1400`)}
                alt={`songImg-${i}`}
              />
              <p className="songName" key={`trackN-${i}`}>
                <b>{item.trackName}</b>
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
