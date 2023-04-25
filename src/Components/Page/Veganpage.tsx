import React, { Fragment, useState } from "react";
import { Navbar } from "../Template/Navbar";
import { Banner } from "../Template/Banner";
import { Footer } from "../Template/Footer";
import { Topvegan } from "../Template/Topvegan";
import { FoodCard } from "../Template/FoodCard";
import { useQuery } from "react-query";
import axios from "axios";
import { Card_lazyloading } from "../Template/Card_lazyloading";
import { PageTitle } from "../Atom/PageTitle";
import { Errormessage } from "../Organism/Errormessage";

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
        image="https://images.unsplash.com/photo-1615366105533-5b8f3255ea5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZXRhcmlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
      />
      <Topvegan />
      <section>
        <PageTitle pagetitle="Our Vegetarian Recipes"/>


        <div>
         <div className="card_container">

          {status === "success" &&
            foodData?.map((item: any, i: number) => {
              if (i < 15) {
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
          </div>
          {status === "error" && <Errormessage/>}
        </div> 
      </section>
      <Footer />
    </Fragment>
  );
};
