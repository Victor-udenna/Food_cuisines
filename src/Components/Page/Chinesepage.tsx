import React, { Fragment } from 'react'
import { Navbar } from '../Template/Navbar'
import { Banner } from '../Template/Banner'
import { Footer } from '../Template/Footer'
import { Topchinese } from '../Template/Topchinese'

export const Chinesepage = () => {
  return (
    <Fragment>
        <Navbar/>
        <Banner
        header='Chinese food'
        text='Nǐ xǐhuān chī shénme? 你喜欢吃什么？'
        styles={{backgroundImage: `url(https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60)`}}/>
        <Topchinese/>
        <Footer/>
    </Fragment>
  )
}
