import React from "react";
import "./style.css";
// import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className="navWrapper">
      {/* <div className="navList"> */}
      <ul>
        <li>
          <a href="./../Home">Home</a>
        </li>
        <li>
          <a>Songs</a>
        </li>
        <li>
          <a>Podcasts</a>
        </li>
        <li>
          <a>Music Videos</a>
        </li>
        <li>
          <a>Audio Books</a>
        </li>
        <li>
          <a>Movies</a>
        </li>
      </ul>
      {/* </div> */}

      {/* <Link to="/media/song" > song </Link> */}
    </div>
  );
};
