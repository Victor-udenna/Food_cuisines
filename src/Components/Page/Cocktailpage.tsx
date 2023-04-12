import React, { Fragment, useEffect } from 'react'
import { Navbar } from '../Template/Navbar'
import { Banner } from '../Template/Banner'
import { Footer } from '../Template/Footer'
import axios from 'axios'
import { Topcocktail } from '../Template/Topcocktail'
import { FoodCard } from '../Template/FoodCard';
import { DownloadInput } from '../Organism/DownloadInput'
import fooddata from "../../data/Topfood.json"

export const Cocktailpage = () => {
  
let allcocktail = fooddata.all_cocktail;

  return (
  <Fragment>
    <Navbar/>
    <Banner 
    header='Our  Cocktail'
    text='...sip'
    styles={{backgroundImage: `url(https://images.unsplash.com/photo-1570598912132-0ba1dc952b7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29ja3RhaWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60)`}}/>
    <Topcocktail/>
    <section>
    <h2 className='food_header'>Our Cocktails Recipes</h2>
        <div className="card_container">
          {allcocktail?.map((item: any, i: number)=>{
            if( i < 30){
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
