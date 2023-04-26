import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg px-20 py-10">
        <div className='navbar flex flex-row justify-between items-center'>
            <div className='navbar_left'>
                <ul className='flex flex-row text-xl text-gray-300 font-bold'>
                    <li >
                        <img />
                    </li>
                    <li className='px-3'>
                        <Link className='nav_links transition-all hover:text-yellow-100'>How it works</Link>
                    </li>
                    <li className='px-3'>
                        <Link className='nav_links transition-all hover:text-yellow-100'>How to use</Link>
                    </li>
                    <li className='px-3'>
                        <Link className='nav_links transition-all hover:text-yellow-100'>About us</Link>
                    </li>
                    <li className='px-3'>
                        <Link className='nav_links transition-all hover:text-yellow-100'>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className='navbar_right text-white'>
                <button className='py-3 px-5 font-bold rounded-xl text-yellow-400 text-lg hover:text-yellow-600'>Join Us</button>
            </div>
        </div>
    </nav>
)

export default Navbar