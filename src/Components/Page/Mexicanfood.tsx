import React, { Fragment, useState } from "react";
import { Navbar } from "../Template/Navbar";
import { Banner } from "../Template/Banner";
import { Footer } from "../Template/Footer";
import { TopMexican } from "../Template/TopMexican";
import { FoodCard } from "../Template/FoodCard";
import { useQuery } from "react-query";
import axios from "axios";
import { Card_lazyloading } from "../Template/Card_lazyloading";

export const Mexicanfood = () => {

  const [foodData, setFoodData] = useState<any>([])

  const options = {
    method: 'GET',
    url: 'https://the-mexican-food-db.p.rapidapi.com/',
    headers: {
      // 'X-RapidAPI-Key': '5312ed048amsh03ba71e9c5ebb31p10336djsnc538ae0495e9',
      'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
      // 2eb9578c9emsh80336b04e9b9b41p1b565ajsnec3d31f4b6b2
    }
  };

  const getMexican =()=>{
    axios.request(options).then(function (response) {
      setFoodData(response.data)
      console.log(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }

  const {data, status} = useQuery("food", getMexican)
  console.log(status)

  return (
    <Fragment>
      <Navbar />
      <main className="mexican_page">
        <Banner
          header="Mexican foods"
          text="tu comida favorita"
          styles={{
            backgroundImage: `url(https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWV4aWNhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60)`,
          }}
        />
        <TopMexican />
        <section>
          <h2 className="food_header">Our Mexican recipes</h2>
          <div className="card_container">
            { status === "success" && foodData?.map((items: any, i: number) => {
              if (i < 30) {
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

            {
              status === 'loading' && <Card_lazyloading/>
            }

            {
              status === 'error' && <div>Error getting recipe</div>
            }
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};
