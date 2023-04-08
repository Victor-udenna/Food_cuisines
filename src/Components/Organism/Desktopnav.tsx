import React from 'react'
import { Navlist } from '../Molecule/Navlist';
import logo from "../../assets/images/logo (1).png";
import { Link } from 'react-router-dom';

export const DesktopNav = () => {
  return (
<nav className='desktop_nav'>
<div><Link to="/"><img src={logo} className='app_logo' width="50px"/></Link></div>
 <Navlist/>
</nav>
    )
}
