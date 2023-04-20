import React from "react";
import { BsFacebook, BsPinterest, BsReddit } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import logo from "../../assets/images/logo (1).png";

export const Footer = () => {
  return (
    <footer className="app_footer">


<section className="footer_content">

<div>
        <div className="footer_items">
          <h3>About us</h3>
          <div>
            <img src={logo} className="app_logo" alt="" />
          </div>
          <p className="logo_text">Kuisiene</p>
        </div>
      </div>




      <div className="footer_items">
        <h3>Location</h3>
        <ul className="footer_link_container">
          <li className="footer_link_item">Kuisiene</li>
          <li className="footer_link_item">Omole phase 1, ikeja</li>
          <li className="footer_link_item">Lagos, Nigeria</li>
        </ul>
      </div>


      <div className="footer_items">
        <h3>Contact</h3>
        <ul className="footer_link_container">
          <li className="footer_link_item">cuisinefood@gmail.co</li>
          <li className="footer_link_item">+(234)8 085 265743</li>
          <li className="icon_container">
            <div className="">
<BsFacebook size={25}/>
            </div>

            <div>
              <AiFillInstagram size={25}/>
              </div>

              <div>
              <AiFillTwitterCircle size={25}/>
              </div>
          </li>
        </ul>

      </div>
</section>

      <div className="copy_container">

<p className="copy_text">Copyright © 2020 cuisineresturant. All rights reserved</p>
      </div>

    </footer>
  );
};
