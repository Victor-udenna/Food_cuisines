import React from "react";
import { Navlist } from "../Atom/Navlist";
import Logo from "../Atom/Logo";
import { Link } from "react-router-dom";
import { Primarybutton } from "../Atom/Primarybutton";
import { FaUser } from "react-icons/fa";
import {BiChevronDown} from "react-icons/bi"

export const DesktopNav = () => {
  return (
    <nav className="desktop_nav">
      <div className="logo_container">
        <Link to="/">
       <Logo/>
        </Link>
      </div>
      <Navlist />
<div className="desktop__nav__btn">
<button className="login__btn"><FaUser/> Account <BiChevronDown/></button>
<Link to="/Favouritepage">
          <Primarybutton />
        </Link>

</div>
    </nav>
  );
};
