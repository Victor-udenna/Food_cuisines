import React from 'react'
import { Topfoodcard } from '../Organism/Topfoodcard';
import fooddata from "../../data/Topfood.json"

export const Topvegan = () => {
    let topVegan = fooddata.top_vegan;
  return (
<div className='Topfood_container'>
    <h2 className='Topfood_header'>Our Top Vegetarian food</h2>
<div className='Topfood_cardcontainer'>
{topVegan.map((item)=>{
  return(
    <Topfoodcard
    key={item.id}
    title={item.title}
    difficulty={item.difficulty}
    image={item.image}/>
  )
})}
</div>
</div>
  )
}
