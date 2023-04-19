import React, { useState } from "react";
import { Topfoodcard } from "../Organism/Topfoodcard";
import Topfooddata from "../../data/Topfood.json";

export const TopMexican = () => {
  let topmexicanFood = Topfooddata.topmexican;

  return (
    <div className="Topfood_container">
      <h2 className="Topfood_header">Our Top Mexican food</h2>
      <div className="Topfood_cardcontainer">
        {topmexicanFood.map((item) => {
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
