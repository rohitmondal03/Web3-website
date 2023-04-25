import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About Us/About.jsx'
import Contact from './pages/Contact Us/Contact.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='about-us' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App