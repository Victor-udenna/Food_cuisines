import React, { Fragment, useState } from 'react'
import logo from "../../assets/images/logo (1).png"
import hambergerbtn from "../../assets/images/hamburger_menu.svg"
import { Navlist } from '../Molecule/Navlist';
import cancel from "../../assets/images/x.svg";

export const MobileNav = () => {

const [dropdown, setdropdown] = useState(false);

const handleDropdown = () => {
setdropdown(!dropdown)
}
  return (
<Fragment>
<nav className='mobile_nav'>
<div><img src={logo} width="50px" className='app_logo' alt='logo'/>
<p>Cuisine</p></div>
<div>
{!dropdown ? <img src={hambergerbtn} onClick={handleDropdown}/>
 : <img src={cancel} onClick={handleDropdown}/> }
</div>
    </nav>
    <section className={`mobile_link_container ${dropdown ? 'active' : 'inactive'}`}>
        <Navlist/>
    </section>

</Fragment>
  )
}