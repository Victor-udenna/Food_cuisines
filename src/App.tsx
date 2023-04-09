import React, {Fragment} from 'react'

import './App.scss'
import { Getdata } from './Components/Getdata';

import {Routes, Route, BrowserRouter} from "react-router-dom"

import { Home } from './Components/Page/Home'
import { Mexicanfood } from './Components/Page/Mexicanfood'
import { Chinesepage } from './Components/Page/Chinesepage';
import { Cocktailpage } from './Components/Page/Cocktailpage'
import { Recipepage } from './Components/Page/Recipepage'

function App() {


  return (
<Fragment>
<Getdata/>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Mexicanfood' element={<Mexicanfood/>} />
  <Route path='/Pizzapage' element={<Chinesepage/>}/>
  <Route path='/Cocktail' element={<Cocktailpage/>}/>
  <Route path='/Recipepage' element={<Recipepage/>}/>
</Routes>
</BrowserRouter>
</Fragment>
  )
}

export default App
