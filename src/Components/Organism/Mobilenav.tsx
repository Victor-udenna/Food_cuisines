import React, { Fragment, useState, useEffect } from "react";
import logo from "../../assets/images/logo (1).png";
import hambergerbtn from "../../assets/images/hamburger_menu.svg";
import { Navlist } from "../Molecule/Navlist";
import cancel from "../../assets/images/x.svg";
import { Link } from "react-router-dom";
import axios from "axios";

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
            <img src={logo} width="50px" className="app_logo" alt="logo" />
            <p className="logo_text center">Kuisine</p>
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
      </section>
    </Fragment>
  );
};
