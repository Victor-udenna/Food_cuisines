import React, { Fragment, useState } from "react";
import { Navbar } from "../Template/Navbar";
import { Banner } from "../Template/Banner";
import { Footer } from "../Template/Footer";
import { TopMexican } from "../Template/TopMexican";
import { FoodCard } from "../Template/FoodCard";
import { useQuery } from "react-query";
import axios from "axios";
import { Card_lazyloading } from "../Template/Card_lazyloading";
import { PageTitle } from "../Atom/PageTitle";
import fooddata from "../../data/Topfood.json";
import { Errormessage } from "../Organism/Errormessage";

export const Mexicanfood = () => {
  const [foodData, setFoodData] = useState<any>([]);
let food = fooddata.allmexican_food;
  const options = {
    method: "GET",
    url: "https://the-mexican-food-db.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": "5312ed048amsh03ba71e9c5ebb31p10336djsnc538ae0495e9",
      "X-RapidAPI-Host": "the-mexican-food-db.p.rapidapi.com",
      // 2eb9578c9emsh80336b04e9b9b41p1b565ajsnec3d31f4b6b2
    },
  };

  const getMexican = () => {
    axios
      .request(options)
      .then(function (response) {
        setFoodData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const { data, status } = useQuery("food", getMexican);
  console.log(status);

  return (
    <Fragment>
      <Navbar />
      <main className="mexican_page">
        <Banner
          header="Mexican foods"
          text="tu comida favorita"
          image="https://media.istockphoto.com/id/981494268/photo/mexican-tacos-al-pastor.jpg?s=612x612&w=0&k=20&c=GLPA0IeEj92Gr7rTCTxYR1CX9H1-nBjl5Gw9W6NHPyk="
        />
        <TopMexican />
        <section>
          <PageTitle pagetitle="Our Mexican recipes"/>
      

          <div>
          <div className="card_container">
            {status === "success" &&
              foodData?.map((items: any, i: number) => {
                if (i < 15) {
                  return (
                    <FoodCard
                      key={items.id}
                      id={items.id}
                      title={items.title}
                      difficulty={items.difficulty}
                      image={items.image}
                    />
                  );
                }
              })}

            {status === "loading" && <Card_lazyloading />}
            </div>
            {status === "error" && <Errormessage/>}
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};
