import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer p-24 mt-16 text-center'>

      <h1 className='text-5xl text-white font-bold mb-12'>Get started with X Coin today</h1>

      <form className='flex flex-col items-center'>
        <input type='email' placeholder='Enter your email to sign up for newsletter.....' className='px-4 py-3 mb-4 rounded-md text-start w-96 bg-slate-800' />
        <button type='submit' className='px-5 py-2 rounded-lg bg-amber-300 text-black transition-all hover:bg-amber-400 font-semibold'><Link to='/'>Submit</Link></button>
      </form>

      <div className='footer_links px-56 mt-20'>
        <ul className='text-white font-semibold text-xl flex flex-row items-center justify-between'>
          <li><Link to='/' className='mx-2 hover:text-yellow-200 transition-all'>X Coin</Link></li>
          <li><Link to='/how-it-works' className='mx-2 hover:text-yellow-200 transition-all'>How it works</Link></li>
          <li><Link to='/how-to-use' className='mx-2 hover:text-yellow-200 transition-all'>How to use</Link></li>
          <li><Link to='/about-us' className='mx-2 hover:text-yellow-200 transition-all'>About us</Link></li>
          <li><Link to='/contact' className='mx-2 hover:text-yellow-200 transition-all'>Contact</Link></li>
          <li><Link to='/join-us' className='mx-2 hover:text-yellow-200 transition-all'>Join Us</Link></li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer;