import React from "react";
import "./style.css";
// import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className="navWrapper">
      {/* <div className="navList"> */}
      <ul>
        <li>
          <a href="./../">Home</a>
        </li>
        <li>
          <a href="./../Media">Songs</a>
        </li>
        <li>
          <a href="./../Media">Podcasts</a>
        </li>
        <li>
          <a href="./../Media">Music Videos</a>
        </li>
        <li>
          <a href="./../Media">Audio Books</a>
        </li>
        <li>
          <a href="./../Media">Movies</a>
        </li>
      </ul>
      {/* </div> */}

      {/* <Link to="/media/song" > song </Link> */}
    </div>
  );
};
