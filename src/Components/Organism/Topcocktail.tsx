import React from "react";
import Topfooddata from "../../data/Topfood.json";
import { Topfoodcard } from "../Molecule/Topfoodcard";

export const Topcocktail = () => {
  let topcocktail = Topfooddata.topcocktail;
  return (
    <div className="Topfood_container">
      <h2 className="Topfood_header">Our Top cocktail drinks </h2>
      <div className="Topfood_cardcontainer">
        {topcocktail.map((item) => {
          return (
            <Topfoodcard
              key={item.id}
              title={item.title}
              difficulty={item.difficulty}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};
