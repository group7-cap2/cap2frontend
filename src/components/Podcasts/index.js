import React from "react";
import "./style.css";
import axios from "axios";
import { useEffect,useState } from "react";
export const Podcasts = () => {
  const [podC, setPodC] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/podcast");

    // console.log(data.data[0].data);

    setPodC(res.data);
  };

  return (
    <div className="mediaWrapper">
      <h1>Podcasts</h1> {/* هنا ننادي الكيز للتايب الي اختارها المستخدم*/}
      <div className="mediaDiv">
        {podC.map((item, i) => (
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
