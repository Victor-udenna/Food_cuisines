import React, { Fragment } from 'react'
import { Navbar } from '../Template/Navbar'
import { Banner } from '../Template/Banner'
import { Footer } from '../Template/Footer'

export const Pizzapage = () => {
  return (
    <Fragment>
        <Navbar/>
        <Banner
        header='Pizza'
        text='we sure  have your favourite pizza'
        styles={{backgroundImage: `url(https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60)`}}/>
        <Footer/>
    </Fragment>
  )
}
