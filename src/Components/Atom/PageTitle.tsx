import React from 'react'

type pagetext ={
    pagetitle: string
}

export const PageTitle = (prop: pagetext) => {
  return (
   <h2 className='food_header'>{prop.pagetitle}</h2>
  )
}
