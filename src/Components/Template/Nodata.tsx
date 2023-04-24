import React from 'react'
import noitemimg from "../../assets/images/no-data-concept.avif";

export const Nodata = () => {
  return (
    <div className='no_data'>
   <div><img src={noitemimg} alt='noitem'/> </div>
   <h3>You have no liked recipe</h3>
    </div>
  )
}
