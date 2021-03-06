import React from "react";
import "./style.css";

export const Media = () => {
  return (
    <div className="mediaWrapper">
      <h1>media type</h1> {/* هنا ننادي الكيز للتايب الي اختارها المستخدم*/}
      <div className="mediaDiv">
        <div className="mediaCards">
          <img
            className="artworkImg"
            src="https://i.pinimg.com/564x/a1/f3/2c/a1f32cc9f791174884eab87aa299c503.jpg"
            alt="artworkImg"
          />
          <p className="trackName">
            <b>track/media name</b>
          </p>
          <p className="artistName">artist name</p>
        </div>
      </div>
    </div>
  );
};
