import React, { Fragment, useState } from "react";
import { Navbar } from "../Template/Navbar";
import { Banner } from "../Template/Banner";
import { Footer } from "../Template/Footer";
import axios from "axios";
import { Topcocktail } from "../Template/Topcocktail";
import { FoodCard } from "../Template/FoodCard";
import { Card_lazyloading } from "../Template/Card_lazyloading";
import { useQuery } from "react-query";
import { PageTitle } from "../Atom/PageTitle";
import { Errormessage } from "../Organism/Errormessage";

export const Cocktailpage = () => {
  const [foodData, setFoodData] = useState([]);

  const options = {
    method: "GET",
    url: "https://the-cocktail-db3.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": "2eb9578c9emsh80336b04e9b9b41p1b565ajsnec3d31f4b6b2",
      "X-RapidAPI-Host": "the-cocktail-db3.p.rapidapi.com",
    },
  };

  const getCocktail = () => {
    axios
      .request(options)
      .then(function (response) {
        setFoodData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const { data, status } = useQuery("food", getCocktail);

  return (
    <Fragment>
      <Navbar />
      <Banner
        header="Our  Cocktail"
        text="...sip"
        image="https://media.istockphoto.com/id/1307922399/photo/four-hands-holding-glasses-with-yellow-and-red-fruit-cocktails-in-a-toast.jpg?s=612x612&w=0&k=20&c=OQwJ1jFspFU22KgP7VNO1-roUSBsg2qBQaIJMTQlMXg="
      />
      <Topcocktail />
      <PageTitle pagetitle="Our Cocktail recipes"/>

      <section>

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

          {status === "error" && <Errormessage/>}
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};
