import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer p-24 mt-16 text-center'>
        <h1 className='text-5xl text-white font-bold mb-12'>Get started with X Coin today</h1>
        <form className='flex flex-col items-center'>
            <input type='email' placeholder='Enter your email to sign up for newsletter.....' className='px-4 py-3 mb-4 rounded-md text-start w-96 bg-slate-800' />
            
            <button className='px-5 py-2 rounded-lg bg-amber-300 text-black transition-all hover:bg-amber-400 font-semibold'><Link to='/'>Submit</Link></button>
        </form>
    </footer>
  )
}

export default Footer;