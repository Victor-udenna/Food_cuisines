import React, { Fragment } from "react";
import { Navbar } from "../Template/Navbar";
import { Footer } from "../Template/Footer";
import { Banner } from "../Template/Banner";

export const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Banner
        header="Welcome"
        text="...just a moment away from leaning your next meal"
        styles={{
          backgroundImage: `url(https://images.unsplash.com/photo-1596560548464-f010549b84d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
        }}
      />
      <Footer />
    </Fragment>
  );
};
