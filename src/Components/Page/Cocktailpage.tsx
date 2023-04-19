import React, { Fragment, useState } from 'react'
import { Navbar } from '../Template/Navbar'
import { Banner } from '../Template/Banner'
import { Footer } from '../Template/Footer'
import axios from 'axios'
import { Topcocktail } from '../Template/Topcocktail'
import { FoodCard } from '../Template/FoodCard';
import fooddata from "../../data/Topfood.json"
import { Card_lazyloading } from '../Template/Card_lazyloading'
import { useQuery } from 'react-query'


export const Cocktailpage = () => {

const [foodData, setFoodData] = useState([]);

const options = {
  method: 'GET',
  url: 'https://the-cocktail-db3.p.rapidapi.com/',
  headers: {
    // 'X-RapidAPI-Key': '2eb9578c9emsh80336b04e9b9b41p1b565ajsnec3d31f4b6b2',
    'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
  }
};

const getCocktail =()=>{
  axios.request(options).then(function (response) {
    setFoodData(response.data)
   }).catch(function (error) {
     console.error(error);
   });
}


const {data, status} = useQuery("food", getCocktail);


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
          {status === "success" && foodData?.map((item: any, i: number)=>{
            if( i < 30){
              return(
                <FoodCard
                key={item.id}
                id={item.id}
                title={item.title}
                difficulty={item.difficulty}
                image={item.image}
                />
                  )
            }
          })} 

          {
            status === "loading" && <Card_lazyloading/>
          }

          {
            status === "error" && <div>Error getting recipe</div>
          }
        </div>
        </section>
    <Footer/>
  </Fragment>
  )
}
