import React, { Fragment } from 'react'
import { AiTwotoneHeart } from "react-icons/ai";

export const Primarybutton = () => {
  return (
  <Fragment>
<button className='primary_btn'>Favourite <span className='love_icon'><AiTwotoneHeart/></span></button>
<button className='like_count'>0</button>
  </Fragment>
  )
}
