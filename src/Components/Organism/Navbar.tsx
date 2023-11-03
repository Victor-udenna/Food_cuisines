import React from "react";
import { DesktopNav } from "../Molecule/Desktopnav";
import { MobileNav } from "../Molecule/Mobilenav";

export const Navbar = () => {
  return (
    <nav className="nav_template">
      <MobileNav />
      <DesktopNav />
    </nav>
  );
};
