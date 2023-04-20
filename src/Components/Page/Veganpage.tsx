import React, { Fragment, useState } from "react";
import { Navbar } from "../Template/Navbar";
import { Banner } from "../Template/Banner";
import { Footer } from "../Template/Footer";
import { Topvegan } from "../Template/Topvegan";
import { FoodCard } from "../Template/FoodCard";
import { useQuery } from "react-query";
import axios from "axios";
import { Card_lazyloading } from "../Template/Card_lazyloading";
import Topfooddata from "../../data/Topfood.json";

export const Veganpage = () => {

  const [foodData, setFoodData] = useState([]);
  const options = {
    method: "GET",
    url: "https://the-vegan-recipes-db.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": "2eb9578c9emsh80336b04e9b9b41p1b565ajsnec3d31f4b6b2",
      "X-RapidAPI-Host": "the-vegan-recipes-db.p.rapidapi.com",
    },
  };

  const getVeganfood = () => {
    axios
      .request(options)
      .then(function (response) {
        setFoodData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const { status, data } = useQuery("food", getVeganfood);


  return (
    <Fragment>
      <Navbar />
      <Banner
        header="Our Vegan recipes"
        text="learn how to prepare your favourite"
        styles={{
          backgroundImage: `url(https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80)`,
        }}
      />
      <Topvegan />
      <section>
        <h2 className="food_header">Our Vegetarian Recipes</h2>

        <div className="card_container">
          {status === "success" &&
            foodData?.map((item: any, i: number) => {
              if (i < 30) {
                return (
                  <FoodCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    difficulty={item.difficulty}
                    image={item.image}
                  />
                );
              }
            })}

          {status === "loading" && <Card_lazyloading />}
          {status === "error" && <div>Error getting recipe</div>}
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};
