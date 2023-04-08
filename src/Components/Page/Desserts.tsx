import React, { Fragment } from 'react'
import { Navbar } from '../Template/Navbar'
import { Banner } from '../Template/Banner'
import { Footer } from '../Template/Footer'

export const Desserts = () => {
  return (
  <Fragment>
    <Navbar/>
    <Banner 
    header='Our  Desserts'
    text='..yummy'
    styles={{backgroundImage: `url(https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80)`}}/>
    <Footer/>
  </Fragment>
  )
}
