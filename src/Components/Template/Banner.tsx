import React from "react";
import img from "../../assets/images/cake.jpg"

type Bannerprop = {
  header: string;
  text: string;
  image: string
};

export const Banner = (props: Bannerprop) => {
  return (
    <header className="Banner">
      <div>
        <h1 className="banner_header">{props.header}</h1>
        <p className="banner_text">{props.text}</p>
      </div>

      <div className="banner_img_container">
    <img className="banner_img" src={props.image}/>
      </div>
    </header>
  );
};
