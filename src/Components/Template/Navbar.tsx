import React from 'react'
import { DesktopNav } from '../Organism/Desktopnav'
import { MobileNav } from '../Organism/Mobilenav'

export const Navbar = () => {
  return (
<nav className='nav_template'>
<MobileNav/>
<DesktopNav/>
</nav>
  )
}
