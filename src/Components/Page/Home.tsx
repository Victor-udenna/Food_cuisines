import React, { Fragment } from "react";
import { Navbar } from "../Organism/Navbar";
import { Footer } from "../Organism/Footer";
import "../../styles/home.scss";
import headimg from "../../assets/images/cover1.avif";
import {FaHandHoldingHeart} from "react-icons/fa";
import {FiArrowDownCircle} from "react-icons/fi";
import {CgDetailsMore} from "react-icons/cg";
import {BiSync} from "react-icons/bi";
import mexicanfoodimg from "../../assets/images/mexicanfood.jpg";
import chinesefoodimg from "../../assets/images/chinesefood.jpg";
import cocktailimg from "../../assets/images/cocktail.webp";
import veganimg from "../../assets/images/vegetarianfood.jpg";
import africanfoodimg from "../../assets/images/africanfood.jpg";
import cakeimg from "../../assets/images/cake.jpg";
import italianfoodimg from "../../assets/images/italianfood.jpg";
import frenchfoodimg from "../../assets/images/frenchfood.webp";
import { Link } from "react-router-dom";
import { AppPricing } from "../Organism/AppPricing";



export const Home = () => {
  return (
    <Fragment>
      <Navbar />
<header className="home_header">
<div className="header_text">
<h1>The Online 
  <br/>Cookbook For <span>Your Kitchen</span></h1>
<p>with kuisine you can create your next meal <span>within 10mins</span> - Easy to understand</p>
<div className="start_container">
<a href="#getstarted">  <button className="start_btn">
    Get started
  </button></a>
</div>
</div>
<div className="header_img_container">
<img className="header_img" src={headimg} alt="header_img"/>
</div>
</header>

<main>

<section className="card_component">
<h2 className="header_text">How it works</h2>
<p className="header_text">Keep track of all your favoutire recipes across <span>all categoty</span></p>
<div>

<div className="homecard_container">
<div className="home_card">
  <div className="card_icon"><FaHandHoldingHeart size={20} color="pink"/></div>
  <h5>Save Your favourite recipes</h5>
  <p>Liked recipe gets saved and you are constantly notified.</p>
</div>

<div className="home_card">
  <div className="card_icon"><FiArrowDownCircle size={20} color="pink"/></div>
  <h5>Download recipe </h5>
  <p>Save recipes   of your interest and access them offline on your device.</p>
</div>

<div className="home_card">
  <div className="card_icon"><BiSync size={20} color="pink"/></div>
  <h5>Sync progress</h5>
  <p>Save recipes and dowloaded recipes   of your interest are always indicated</p>
</div>

<div className="home_card">
  <div className="card_icon"><CgDetailsMore size={20} color="pink"/></div>
  <h5>View recipe details</h5>
  <p>View recipe details before saving <span>(pro)</span> .</p>
</div>
</div>
</div>
</section>

<section id="getstarted" className="category_container">

<h2>Food Category</h2>

<div className="category_card_container">

<Link to="/Mexicanfood">
<div className="category_card">
  <div>
    <img src={mexicanfoodimg}/>
  </div>
<h6>Mexican Food</h6>
</div></Link>

<Link to="/Chinesepage">
<div className="category_card">
  <div><img src={chinesefoodimg}/></div>
  <h6>Chinese Food</h6>
</div></Link>

<Link to="/Cocktail">
<div className="category_card">
  <div><img src={cocktailimg}/></div>
  <h6>Cocktails</h6>
</div></Link>

<Link to="/Veganpage">
<div className="category_card">
  <div><img src={veganimg} /></div>
  <h6>Vegetarian Food</h6>
</div></Link>


</div>

<div className="coming_soon">
 <h3>Coming Soon...</h3>

<div className="comingsoon_card_container">

<div className="comingsoon_card">
<div><img src={africanfoodimg}/></div>
<h6>African Food</h6>
</div>

<div className="comingsoon_card">
<div><img src={cakeimg}/></div>
<h6>Cakes</h6>
</div>

<div className="comingsoon_card">
<div><img src={italianfoodimg}/></div>
<h6>Italian Food</h6>
</div>

<div className="comingsoon_card">
<div><img src={frenchfoodimg}/></div>
<h6>French Food</h6>
</div>

</div>
</div>
</section>
</main>

<AppPricing/>

      <Footer />
    </Fragment>
  );
};
