import React from "react";
import Desktopnav  from "../Molecule/Desktopnav";
import { MobileNav } from "../Molecule/Mobilenav";

export const Navbar = () => {
  return (
    <nav className="nav_template">
      <MobileNav />
      <Desktopnav />
    </nav>
  );
};
