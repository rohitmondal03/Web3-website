import React, { useState, useRef } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { MdArrowRightAlt } from "react-icons/md"

const Navbar = () => {

    const [toggleHamburger, setToggleHamburger] = useState(false)
    const navigate = useNavigate();
    const navRef= useRef();

    const showNavbar= () => {
        navRef.current.classList.toggle('.small_menu_lists_show')
    }

    return (
        <nav className="navbar navbar-expand-lg mx-20 py-10">
            <div className='navbar flex flex-row justify-between items-center'>

                <div className='navbar_left'>
                    <ul className='flex flex-row items-center text-xl text-gray-300 font-bold'>
                        <li className='ml-3 mr-10 logo'>
                            <img onClick={() => { navigate('/') }} className='h-16 cursor-pointer' src='../../assets/favicon.png' alt='website_logo' />
                        </li>
                        <li className='mx-3 nav_links'>
                            <Link className='nav_links transition-all hover:text-yellow-100'>How it works</Link>
                        </li>
                        <li className='mx-3 nav_links'>
                            <Link className='nav_links transition-all hover:text-yellow-100'>How to use</Link>
                        </li>
                        <li className='mx-3 nav_links'>
                            <Link className='nav_links transition-all hover:text-yellow-100'>About us</Link>
                        </li>
                        <li className='mx-3 nav_links'>
                            <Link className='nav_links transition-all hover:text-yellow-100'>Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className='navbar_right text-white flex flex-row items-center'>

                    <button className='py-3 px-5 font-bold rounded-xl text-yellow-400 text-lg hover:text-yellow-600'>Join Us</button>

                    <div className='mx-3'>
                        <MenuIcon
                            fontSize='large'
                            className='menu_icon'
                            onClick={() => { setToggleHamburger(true) }}
                        />

                        {toggleHamburger && (
                            <div className='small_menu'>

                                <div className='small_menu_lists' ref={navRef}>
                                    <ul className='p-40 flex flex-col items-center'>
                                        <li className='my-5 text-3xl hover:font-medium'>How it works</li>
                                        <li className='my-5 text-3xl hover:font-medium'>How to use</li>
                                        <li className='my-5 text-3xl hover:font-medium'>About us</li>
                                        <li className='my-5 text-3xl hover:font-medium'>Contact</li>
                                        <li className='my-5 text-3xl hover:font-medium'>Join Us</li>
                                        <li className='my-5 text-3xl hover:font-medium'>
                                            <MdArrowRightAlt
                                                fontSize='50px'
                                                color='warning'
                                                className='cut_image absolute top-10 right-20'
                                                onClick={() => { setToggleHamburger(false) }}
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                    </div>

                </div>

            </div>
        </nav>
    )
}

export default Navbar