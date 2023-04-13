import React from 'react'
import {BsFacebook, BsPinterest, BsReddit} from "react-icons/bs";
import {AiFillTwitterCircle, AiFillInstagram} from "react-icons/ai";
import logo from "../../assets/images/logo (1).png";

export const Footer = () => {
  return (
<footer className='app_footer'>

<div className='footer_items'>
    <h3>Location</h3>
    <ul className='footer_link_container'>
    <li className='footer_link_item'>Kuisiene</li>
    <li className='footer_link_item'>Omole phase 1, ikeja</li>
    <li className='footer_link_item'>Lagos, Nigeria</li>
    </ul>
</div>


   <div className='footer_items'>
    <h3>Socials</h3>
   <ul className='footer_link_container'>
        <li className='footer_link_item'><BsFacebook width={50} height={50}/> <span>Facebook</span></li>
        <li className='footer_link_item'><AiFillTwitterCircle/> <span>Twitter</span></li>
        <li className='footer_link_item'><AiFillInstagram/> <span>Instagram</span></li>
        <li className='footer_link_item'><BsPinterest/> <span>Pinterest</span></li>
        <li className='footer_link_item'><BsReddit/> <span>Reddit</span></li>
    </ul>
   </div>



<div>
<div className='footer_items'>
        <h3>About us</h3>
<div><img src={logo} className="app_logo" alt=''/>
    </div>
    <p className='logo_text'>Kuisiene</p>
</div>
<p>Copyright © 2020 cuisineresturant. All rights reserved</p>
</div>
</footer>
  )
}
