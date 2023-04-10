import React, { Fragment } from 'react'
import { Navbar } from '../Template/Navbar'
import { Banner } from '../Template/Banner'
import { Footer } from '../Template/Footer'
import { Topchinese } from '../Template/Topchinese'
import fooddata from '../../data/Topfood.json';
import { FoodCard } from '../Template/FoodCard'


export const Chinesepage = () => {

  let chinesfood = fooddata.chinese_food;
  return (
    <Fragment>
        <Navbar/>
        <Banner
        header='Chinese food'
        text='Nǐ xǐhuān chī shénme? 你喜欢吃什么？'
        styles={{backgroundImage: `url(https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60)`}}/>
        <Topchinese/>
        <section>
          <h3>Our chinese Recipes</h3>
        <div className="card_container">
          {chinesfood?.map((item)=>{
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
        </section>
        <Footer/>
    </Fragment>
  )
}
