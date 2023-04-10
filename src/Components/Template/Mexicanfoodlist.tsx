import React, { Fragment} from 'react';
import fooddata from "../../data/Topfood.json";
import { Primarybutton } from '../Atom/Primarybutton';
import {AiOutlineDownload} from "react-icons/ai";

export const MexicanFoodlist = () => {

    let food  = fooddata.food_1[0]
  return (
  <Fragment>
        
    <div className="card">
    <div><img className="recipe_img" src={food.image}/></div>
    
    <div className='recipe_text'>
    <h3 className='title recipe_header'>{food.title}</h3>
    <p className='difficulty'> <b className='recipe_header'>Difficulty </b>{food.difficulty}</p>
    <p className='desc'>{food.description}</p>
    <span className='time'>{food.time}</span>
    <div className='ingridients'>
    <h4 className='ingridient_header recipe_header'>Ingridients</h4>
    <ul>{food.ingredients.map((item)=>{
        return(
            <li className='ingridient_items' key={item}>{item}</li>
        )
    })}
    </ul>
    </div>
<div className='method'>
    <h4 className='method_header recipe_header'>Method</h4>
    <p className='method_1'><b>Step 1. </b> {food.method[0]['Step 1']}</p>
    <p className='method_2'><b>Step 2.</b>  {food.method[1]['Step 2']}</p>
</div>
<p className='portion'><b className='recipe_header'>Portion</b>  {food.portion}</p>

    </div>
    <button className='download' onClick={()=> alert("download successfull")}><AiOutlineDownload/></button>
    </div>
  </Fragment>
  )
}
