import React  from 'react'
import Topfooddata from "../../data/Topfood.json";
import { Topfoodcard } from '../Organism/Topfoodcard';

export const Topchinese = () => {

  let topchinesefood = Topfooddata.topchinese;
  return (
<div className='Topfood_container'>
    <h2 className='Topfood_header'>Our Top Mexican food</h2>
<div className='Topfood_cardcontainer'>
{topchinesefood.map((item)=>{
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
