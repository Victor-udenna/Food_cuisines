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
 styles={{backgroundImage: `url(https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80)`}}/>
 <Topvegan/>
 <section>
 <h2 className='food_header'>Our Vegetarian Recipes</h2>
        <div className="card_container">
          {veganfood?.map((item: any, i: number)=>{
            if(i < 30) {
              return(
                <FoodCard
                key={item.id}
                title={item.title}
                difficulty={item.difficulty}
                image={item.image}
                id={item.id}
                />
                  )
            }
          })}
        <DownloadInput/>
        </div>
        </section>
 <Footer/>
  </Fragment>
  )
}
