import React, { Fragment } from "react";

import "./App.scss";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home } from "./Components/Page/Home";
import { Mexicanfood } from "./Components/Page/Mexicanfood";
import { Chinesepage } from "./Components/Page/Chinesepage";
import { Cocktailpage } from "./Components/Page/Cocktailpage";
import { Veganpage } from "./Components/Page/Veganpage";
import { Favouritepage } from "./Components/Page/Favouritepage";
import { PremiumPage } from "./Components/Page/PremiumPage";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mexicanfood" element={<Mexicanfood />} />
          <Route path="/Chinesepage" element={<Chinesepage />} />
          <Route path="/Cocktail" element={<Cocktailpage />} />
          <Route path="/Veganpage" element={<Veganpage />} />
          <Route path="/Favouritepage" element={<Favouritepage />} />
          <Route path="/PremiumPage" element={<PremiumPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
