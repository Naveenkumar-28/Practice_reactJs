import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import { Router } from './Componets/Router'
import Navbar from './Componets/Navbar'
import User from './Componets/User'
import Cart from './Componets/Cart'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' Component={User}/>
      <Route path='/cart' Component={Cart}/>
    </Routes>
  
    </BrowserRouter>

  )
}

export default App
