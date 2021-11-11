import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom'

export const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="navWrapper">
      {/* <div className="navList"> */}
      <ul>
        <li
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            navigate("/media");
          }}
        >
          Songs
        </li>
        <li
          onClick={() => {
            navigate("/media");
          }}
        >
          Podcasts
        </li>
        <li
          onClick={() => {
            navigate("/media");
          }}
        >
          Music Videos
        </li>
        <li
          onClick={() => {
            navigate("/media");
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
      {/* </div> */}

      {/* <Link to="/media/song" > song </Link> */}
    </div>
  );
};
