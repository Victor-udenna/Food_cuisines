import React from 'react'

import './App.scss'
// import { Getdata } from './Components/Getdata';

import {Routes, Route, BrowserRouter} from "react-router-dom"

import { Home } from './Components/Page/Home'
import { Mexicanfood } from './Components/Page/Mexicanfood'
import { Pizzapage } from './Components/Page/Pizzapage'
import { Desserts } from './Components/Page/Desserts'
import { Recipepage } from './Components/Page/Recipepage'

function App() {


  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Mexicanfood' element={<Mexicanfood/>} />
  <Route path='/Pizzapage' element={<Pizzapage/>}/>
  <Route path='/Desserts' element={<Desserts/>}/>
  <Route path='/Recipepage' element={<Recipepage/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App
