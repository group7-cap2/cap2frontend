import React from "react";
import "./style.css";
import axios from "axios";
import { useEffect,useState } from "react";



export const Musicvid = () => {
  const [musicV, setmusicV] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/musicvideo");

    // console.log(data.data[0].data);

    setmusicV(res.data);
  };

  return (
    <div className="mediaWrapper">
      <h1>Music Videos</h1> {/* هنا ننادي الكيز للتايب الي اختارها المستخدم*/}
      <div className="mediaDiv">
        {musicV.map((item, i) => (
          <div className="homeSongs" key={i}>
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
      </div>
    </div>
  );
};