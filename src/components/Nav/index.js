import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom'

export const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="navWrapper">
      <ul>
        <li
          onClick={() => {
            navigate(-1);
          }}
        >
          <img
            className="backIcon"
            src="https://img.icons8.com/material-outlined/48/000000/circled-left--v1.png"
            alt="backIcon"
          />
        </li>
        <li
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            navigate("/songs");
          }}
        >
          Songs
        </li>
        <li
          onClick={() => {
            navigate("/podcasts");
          }}
        >
          Podcasts
        </li>
        <li
          onClick={() => {
            navigate("/musicvid");
          }}
        >
          Music Videos
        </li>
        <li
          onClick={() => {
            navigate("/audiobook");
          }}
        >
          Audio Books
        </li>
        <li
          onClick={() => {
            navigate("/media");
          }}
        >
          Movies
        </li>
      </ul>

      {/* <Link to="/media/song" > song </Link> */}
    </div>
  );
};
