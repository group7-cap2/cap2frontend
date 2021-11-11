import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="headerDiv">
      <div
        className="logoDiv"
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          className="logo"
          src="https://img.icons8.com/color/48/000000/music--v1.png"
        />
      </div>
      <h2
        onClick={() => {
          navigate("/");
        }}
      >
        MusicHub
      </h2>

      <input className="searchBar" placeholder="   Search..." />

      <img
        className="favIcon"
        src="https://img.icons8.com/external-prettycons-solid-prettycons/60/000000/external-favorite-essentials-prettycons-solid-prettycons.png"
        onClick={() => {
          navigate("/Favorite");
        }}
      />
    </div>
  );
};
