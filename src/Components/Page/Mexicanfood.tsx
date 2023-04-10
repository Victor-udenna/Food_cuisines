import React, {Fragment} from 'react'
import { Navbar } from '../Template/Navbar'
import { Banner } from '../Template/Banner'
import { Footer } from '../Template/Footer'
import { TopMexican } from '../Template/TopMexican'
import { MexicanFoodlist } from '../Template/Mexicanfoodlist'

export const Mexicanfood = () => {
  return (
    <Fragment>
     <Navbar/>
<main className='mexican_page'>
<Banner header='Mexican foods' 
     text='tu comida favorita'
     styles={{backgroundImage: `url(https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWV4aWNhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60)`}}
     />
     <TopMexican/>
     <section>
      <h2 className='food_header'>Our Mexican recipes</h2>
<div className='card_container'>
<MexicanFoodlist/>
     <MexicanFoodlist/>
     <MexicanFoodlist/>
     <MexicanFoodlist/> 
</div>
     </section>
</main>
     <Footer/>   
    </Fragment>
  )
}
