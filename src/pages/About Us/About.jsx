import React from 'react'
import "./About.css";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import protect_img from "../../assets/locker_safe.png"

const About = () => {
  return (

    <>

      <Navbar />

      <div className='about_sec'>


        {/* FIRST SECTION STARTS */}

        <div className='about_sec_first_part text-white flex flex-col items-center text-center py-20'>

          <div className='about_sec_first_part_text'>
            <h1 className='text-6xl my-5 font-bold'>Welcome to the X Coin World</h1>
            <p className='text-lg my-5'>We're building the Web3 payments, <br /> the future of money.</p>

            <button className='border border-yellow-400 text-yellow-400 text-lg font-semibold rounded-2xl py-4 px-7 mt-5 hover:bg-yellow-500 hover:text-black transition duration-300'>Open positions</button>
          </div>

          <div className='about_sec_first_part_img mt-16'>
            <img src={protect_img} className='h-64' />
          </div>

        </div>

        {/* FIRST SECTION ENDS */}





        {/* SECOND SECTION STARTS */}

        <div className='about_sec_second_part bg-zinc-300 py-20 px-20'>

          <h1 className='capitalize text-center text-5xl text-zinc-600 font-bold'>Our culture</h1>

          <div className='about_sec_second_part_abt_culture text-zinc-700 text-center flex flex-row justify-evenly mt-24'>
            <div className='about_sec_second_part_abt_culture_inner w-1/3 px-5 py-5'>
              <h1 className='text-3xl mb-4 font-semibold'>Open-mindedness</h1>
              <p>We have a collaborative culture, when we discuss things openly. Everyone has a voice.</p>
            </div>

            <div className='about_sec_second_part_abt_culture_inner w-1/3 px-5 py-5'>
              <h1 className='text-3xl mb-4 font-semibold'>Remote-first</h1>
              <p>At X Coin, you can work from anywhere around the world! That means more time for family and friends.</p>
            </div>

            <div className='about_sec_second_part_abt_culture_inner w-1/3 px-5 py-5'>
              <h1 className='text-3xl mb-4 font-semibold'>Love for learning</h1>
              <p>Great people optimize fr learning and growth above all else.</p>
            </div>
          </div>

        </div>

        {/* SECOND SECTION ENDS */}




        {/* THIRD SECTION STARTS */}

        <div className='about_sec_second_part py-44 bg-zinc-400 text-zinc-800 text-center'>

          <div className='about_sec_second_part_upper_part mx-auto mb-40 w-72'>
            <h1 className='text-5xl font-bold mb-8'>About</h1>
            <p className='text-lg'>Our goal is to fix the flaws of traditional currencies by leveraging Web3 and cryptocurrency.</p>
          </div>

          <div className='about_sec_second_part_below_part mt-44'>
            <h1 className='text-6xl font-bold'>Open positions</h1>
          </div>

        </div>

        {/* THIRD SECTION ENDS */}


      </div>

    </>
  )
}

export default About