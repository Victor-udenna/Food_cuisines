import React, { Fragment } from 'react'
import { Navbar } from '../Template/Navbar'
import { Banner } from '../Template/Banner'
import { Footer } from '../Template/Footer'
import { Topvegan } from '../Template/Topvegan';
import fooddata from "../../data/Topfood.json";
import { FoodCard } from '../Template/FoodCard';
import { DownloadInput } from '../Organism/DownloadInput';


export const Veganpage = () => {

let veganfood = fooddata.Vegan_food;

  return (
  <Fragment>
    <Navbar/>
    <Banner header='Our Vegan recipes'
    text='learn how to prepare your favourite'
 styles={{backgroundImage: `url(https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60)`}}/>
 <Topvegan/>
 <section>
 <h2 className='food_header'>Our Vegetarian Recipes</h2>
        <div className="card_container">
          {veganfood?.map((item)=>{
            return(
          <FoodCard
          key={item.id}
          title={item.title}
          difficulty={item.difficulty}
          image={item.image}
          id={item.id}
          />
            )
          })}
        </div>
        <DownloadInput/>
        </section>
 <Footer/>
  </Fragment>
  )
}
