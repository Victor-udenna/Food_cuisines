import React, { Fragment } from 'react'
import { Navbar } from '../Template/Navbar'
import { Banner } from '../Template/Banner'
import { Footer } from '../Template/Footer'

export const Recipepage = () => {
  return (
  <Fragment>
    <Navbar/>
    <Banner header='Our recipes'
    text='learn how to prepare your favourite'
 styles={{backgroundImage: `url(https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60)`}}/>
 <Footer/>
  </Fragment>
  )
}
