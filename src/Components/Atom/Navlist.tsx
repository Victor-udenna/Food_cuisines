import React from "react";
import { Link } from "react-router-dom";

export const Navlist = () => {
  return (
    <ul className="nav_list">
      <li className="nav_link">
        <Link to="/Mexicanfood">Mexican</Link>
      </li>
      <li className="nav_link">
        <Link to="/Chinesepage">Chinese</Link>
      </li>
      <li className="nav_link">
        <Link to="/Cocktail">Cocktail</Link>
      </li>
      <li className="nav_link">
        <Link to="/Veganpage">Vegetarian</Link>
      </li>
    </ul>
  );
};
