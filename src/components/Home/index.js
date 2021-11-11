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
      <h1>{getData}</h1>

    </div>
  );
};
