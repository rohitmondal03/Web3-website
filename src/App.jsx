import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopBtn from './components/ScrollToTopBtn'
import Home from './pages/Home/Home'
import About from './pages/About Us/About.jsx'
import Contact from './pages/Contact Us/Contact.jsx'
import Works from "./pages/Works/Works"
import Use from "./pages/Use/Use";

const App = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about-us' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='how-it-works' element={<Works />} />
        <Route path='how-to-use' element={<Use />} />
      </Routes>
      <ScrollToTopBtn />
    </BrowserRouter>
  )
}

export default App