import React from 'react'
import {AiFillHeart} from 'react-icons/ai';

type Cardproptype = {
  image: string
  title: string
  difficulty: string

}

export const Topfoodcard = (prop: Cardproptype) => {
  return (
    <div className='topfood_card'>
     <div className='topfood_imgcontainer'><img className='topfood_img' src={prop.image}/></div>
     <div className='topfood_textcontainer'>
      <h3 className='topfood_title'>{prop.title}</h3>
 <div className='topfood_detail'><p className='topfood_difficulty'>{prop.difficulty}</p>
      <AiFillHeart  className="like" color='red'/></div>
    </div>   
    </div>
  )
}
