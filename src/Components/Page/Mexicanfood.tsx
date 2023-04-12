import React, { Fragment } from "react";
import { Navbar } from "../Template/Navbar";
import { Banner } from "../Template/Banner";
import { Footer } from "../Template/Footer";
import { TopMexican } from "../Template/TopMexican";
import { FoodCard } from "../Template/FoodCard";
import fooddata from "../../data/Topfood.json";

export const Mexicanfood = () => {
  let allmexican = fooddata.allmexican_food;

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
            {allmexican?.map((items, i) => {
              if (i < 30) {
                return (
                  <FoodCard
                    key={items.id}
                    title={items.title}
                    difficulty={items.difficulty}
                    image={items.image}
                  />
                );
              }
            })}
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};
