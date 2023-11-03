import React from "react";
import { Navlist } from "../Atom/Navlist";
import Logo from "../Atom/Logo";
import { Link } from "react-router-dom";
import { Primarybutton } from "../Atom/Primarybutton";

export const DesktopNav = () => {
  return (
    <nav className="desktop_nav">
      <div className="logo_container">
        <Link to="/">
       <Logo/>
        </Link>
      </div>
      <Navlist />
<div>

<button className="login__btn">Log in</button>

<Link to="/Favouritepage">
          <Primarybutton />
        </Link>

</div>
    </nav>
  );
};
