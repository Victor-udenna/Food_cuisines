import {Fragment} from "react";
import { Footer } from "../Template/Footer";
import { Navbar } from "../Template/Navbar";
import { Favouritebanner } from "../Template/Favouritebanner";

export const Favouritepage = () => {
  return (
  <Fragment>
    <Navbar/>
    <Favouritebanner/>
    <section>
      <h1>Your Favourite Food</h1>
    </section>
<Footer/>
  </Fragment>
  )
}
