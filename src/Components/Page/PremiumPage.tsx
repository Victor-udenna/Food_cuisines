import React, { Fragment } from "react";
import { Navbar } from "../Template/Navbar";
import { Footer } from "../Template/Footer";
import "../../styles/premium.scss";
import { Banner } from "../Template/Banner";

export const PremiumPage = () => {
  return (
    <Fragment>
      <Navbar />
      <Banner
        header="Try Premium"
        text=""
        styles={{
          backgroundImage: `url(https://plus.unsplash.com/premium_photo-1679814439413-fc5dabe0b6cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG93bmxvYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60)`,
        }}
      />
      <main className="main">
        <div className="text_content">
          <h2 className="list_header">What comes with premium</h2>
          <ul className="list">
            <li>Gives you access to 1000+ recipe</li>
            <li>
              Gives you full detials, steps and ingridients for that recipe
            </li>
            <li>Enable you save recie details to your device</li>
            <li>
              <button className="premium_btn">Try Premium</button>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
