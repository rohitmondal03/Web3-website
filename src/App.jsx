import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About Us/About.jsx'
import Contact from './pages/Contact Us/Contact.jsx'
import Works from "./pages/Works/Works"
import Use from "./pages/Use/Use";
import Join from "./pages/JoinUs/JoinUs"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='about-us' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='how-it-works' element={<Works />} />
        <Route path='how-to-use' element={<Use />} />
        <Route path='join-us' element={<Join />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App