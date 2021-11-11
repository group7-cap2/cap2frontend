import React from "react";
import "./style.css";

export const Header = () => {
  return (
    <div className="headerDiv">
      <div className="logoDiv">
        <img
          className="logo"
          src="https://img.icons8.com/color/48/000000/music--v1.png"
        />
      </div>
      <h2>MusicHub</h2>

      <input className="searchBar" placeholder="   Search..." />
    </div>
  );
};
