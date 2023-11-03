import {useState} from "react";
import { Navlist } from "../Atom/Navlist";
import Logo from "../Atom/Logo";
import { Link } from "react-router-dom";
import { Primarybutton } from "../Atom/Primarybutton";
import { FaUser } from "react-icons/fa";
import {BiChevronDown} from "react-icons/bi"

 const Desktopnav = () => {

const [isauthdropdown, setAuthdropdown] = useState(false);

  const openAuthdropdown =()=>{
    setAuthdropdown(!isauthdropdown);
  }

  const closeAuthdropdown =()=>{
    setAuthdropdown(false);
  }

  return (
    <nav className="desktop_nav">
      <div className="logo_container">
        <Link to="/">
       <Logo/>
        </Link>
      </div>
      <Navlist />
<div className="desktop__nav__btn">
<button className="acc__btn" onClick={openAuthdropdown}><FaUser/> Account <BiChevronDown/></button>
<Link to="/Favouritepage">
          <Primarybutton />
        </Link>
{isauthdropdown  && (
  <div className="auth_dropdown">
  <button className="login_btn">Log in</button>
  <hr></hr>
  <button className="signup_btn">Sign up</button>
  </div>
)}
</div>
    </nav>
  );
};

export default Desktopnav
