import React from 'react'
import { Link } from 'react-router-dom'
import { Primarybutton } from '../Atom/Primarybutton'

export const Navlist = () => {
  return (
        <ul className='nav_list'>
            <li className='nav_link'><Link to="/Mexicanfood">Mexican Food</Link></li>
            <li className='nav_link'><Link to="/Chinesepage">Chinese food</Link></li>
            <li className='nav_link'><Link to='/Cocktail'>Cocktail</Link></li>
            <li><Link to="/Veganpage"><Primarybutton text='Vegetarin'/></Link></li>
        </ul>
  )
}
