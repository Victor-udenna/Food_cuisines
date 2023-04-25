import React, { Fragment, useState } from "react";
import { Navbar } from "../Template/Navbar";
import { Footer } from "../Template/Footer";

import "../../styles/premium.scss";

export const PremiumPage = () => {

const [modal, setModal] = useState(false);

const handlemodal =()=>{
  setModal(!modal)
  console.log(!modal)
}


  let img = "https://media.istockphoto.com/id/1429424921/photo/stuffed-turkey-for-thanksgiving-holidays-with-pumpkin-peas-pecan-berry-pie-cheese-variations.jpg?s=612x612&w=0&k=20&c=5aHuzDFr2RpKBjspxePj7Ezub44nwo1QGbO_8ae98Ss=";
  return (
    <Fragment>
      <Navbar />

  <header className="header">
<h1>Upgrage
   to <br/><span>premium</span></h1>
<div>
  <img src={img} alt=""/>
</div>
  </header>

      <main className="main">
        <div className="text_content">
          <h2 className="list_header">What comes with premium</h2>
          <ul className="list">
            <li>Gives you access to 1000+ recipe</li>
            <li>
              Gives you full details, steps and ingredients for that recipe
            </li>
            <li>Enable you save recipe details to your device</li>
            <li>Enable you choose several themes</li>
            <li>
              <button className="premium_btn" onClick={handlemodal}>Try Premium</button>
            </li>
          </ul>
        </div>


        <div className={`premium_modal_container ${modal ? 'active' : 'inactive'}`}>
         <div className="premium_modal">
           <h4>Premium Currently not available</h4>
           <p>Premium subscription is currently <span>not availabe</span>.
            this could be because of network issues or saver down time.
           </p>
           <button onClick={handlemodal}>Close</button>
         </div>
        </div>

      </main>

      
      <Footer />
    </Fragment>
  );
};
