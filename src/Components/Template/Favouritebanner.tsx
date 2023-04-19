import React, { Fragment } from "react";
import loveimg from "../../assets/images/heart-fill.svg";
import "../../styles/favoutite.scss";
export const Favouritebanner = () => {
  return (
    <Fragment>
      <header className="favourite_header">
        <div>
          <img src={loveimg} className="like_img" />
        </div>

        <div className="favourite_text">
          <h1>Your Liked Foods</h1>
          <p>Your favourite foods are saved just for you</p>
        </div>
      </header>
    </Fragment>
  );
};
