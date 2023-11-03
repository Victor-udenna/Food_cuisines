import React, { Fragment, useState, useEffect } from "react";
import Logo from "../Atom/Logo";
import hambergerbtn from "../../assets/images/hamburger_menu.svg";
import { Navlist } from "../Molecule/Navlist";
import cancel from "../../assets/images/x.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { Primarybutton } from "../Atom/Primarybutton";

export const MobileNav = () => {
  const [dropdown, setdropdown] = useState(false);
  const [likedno, setlikedNo] = useState(0);
  const [resarray, setresarray] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/liked_foods").then((response) => {
      setlikedNo(response.data.length);
      setresarray(response.data);
    });
  }, [resarray]);

  const handleDropdown = () => {
    setdropdown(!dropdown);
  };
  return (
    <Fragment>
      <nav className="mobile_nav">
        <div className="logo_container">
          <Link to="/">
         <Logo/>
          </Link>
        </div>
        <div>
          {!dropdown ? (
            <img src={hambergerbtn} onClick={handleDropdown} />
          ) : (
            <img src={cancel} onClick={handleDropdown} />
          )}
          <button className="like_count">{likedno}</button>
        </div>
      </nav>
      <section
        className={`mobile_link_container ${dropdown ? "active" : "inactive"}`}
      >
        <Navlist />
<div className="nav__btn__container">
<button className="login__btn">Log in</button>
        <Link to="/Favouritepage">
          <Primarybutton />
        </Link>
</div>
      </section>
    </Fragment>
  );
};
