import React, { Fragment } from "react";
import loveimg from "../../assets/images/heart-fill.svg";
import "../../styles/favoutite.scss";
export const Favouritebanner = () => {
  return (
    <Fragment>
      <header className="favourite_header">
      
      <div className="favourite_header_text">
          <h1>Your <span>Favorite Foods</span></h1>
          <p>Your favourite foods are saved <span>just for you</span></p>
        </div>

        <div className="like_img_container">
          <img src={loveimg} className="like_img" />
        </div>
      </header>
    </Fragment>
  );
};
