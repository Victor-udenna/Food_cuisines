import React from "react";
import { BsTelephone } from "react-icons/bs";
import {FaFacebook} from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram, AiOutlineMail} from "react-icons/ai";

import logo from "../../assets/images/logo (1).png";
import '../../styles/Footer.scss';

export const Footer = () => {
  return (
    <footer className="app_footer">


<section className="footer_content">


        <div className="footer_items">

<div className="brand_container">
<div className="footer_logo">
            <img src={logo} className="app_logo" alt="" />
          </div>
          <p className="brand_text">
           Cuisine
          </p>
</div>
          <p className="brand_description">Learn, Create and Share
          <br/>
          your favourite meal</p>
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
   <h3>Services</h3>
   <ul className="footer_link_container">
   <li className="footer_link_item">About Us</li>
    <li className="footer_link_item">Contact Us</li>
    <li className="footer_link_item">Feature</li>
   </ul>
</div>


      <div className="footer_items">
        <h3>Contact</h3>
        <ul className="footer_link_container">
          <div className="footer_link_item">
          <p></p>
            <p>cuisinefood@gmail.co</p>
           
          </div>
          <div className="footer_link_item">
          <p></p>
            <p>+(234)8 085 265743</p>
           

          </div>
          <li className="icon_container">
            <div className="icon">
<FaFacebook size={20}/>
            </div>

            <div className="icon">
              <AiFillInstagram size={20}/>
              </div>

              <div className="icon">
              <AiFillTwitterCircle size={20}/>
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
