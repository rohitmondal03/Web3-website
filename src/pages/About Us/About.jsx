import React from 'react'
import "./About.css";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Template from './TeamSecTemplate';
import teamData from "./teamData";
import protect_img from "../../assets/locker_safe.png"


const About = () => {

  return (

    <>

      <Navbar />

      <div className='about_sec'>


        {/* FIRST SECTION STARTS */}

        <div className='about_sec_first_part flex flex-col items-center text-center text-zinc-300 py-20'>

          <div className='about_sec_first_part_text'>
            <h1 className='text-6xl my-5 font-bold'>Welcome to the X Coin World</h1>
            <p className='text-lg my-5'>We're building the Web3 payments, <br /> the future of money.</p>

            <button className='border border-yellow-400 text-yellow-400 text-lg font-semibold rounded-2xl py-4 px-7 mt-5 hover:bg-yellow-500 hover:text-black transition duration-300'> <a href='#team_members'> Open positions </a> </button>
          </div>

          <div className='about_sec_first_part_img mt-16'>
            <img src={protect_img} className='h-64' alt='protect-img' />
          </div>

        </div>

        {/* FIRST SECTION ENDS */}





        {/* SECOND SECTION STARTS */}

        <div className='about_second_part bg-zinc-300 py-20 px-20'>

          <h1 className='capitalize text-center text-5xl text-zinc-600 font-bold'>Our culture</h1>

          <div className='about_second_part_abt_culture text-zinc-700 text-center flex flex-row justify-evenly mt-24'>
            <div className='about_second_part_abt_culture_inner w-1/3 px-5 py-5'>
              <h1 className='text-3xl mb-4 font-semibold'>Open-mindedness</h1>
              <p>We have a collaborative culture, when we discuss things openly. Everyone has a voice.</p>
            </div>

            <div className='about_second_part_abt_culture_inner w-1/3 px-5 py-5'>
              <h1 className='text-3xl mb-4 font-semibold'>Remote-first</h1>
              <p>At X Coin, you can work from anywhere around the world! That means more time for family and friends.</p>
            </div>

            <div className='about_second_part_abt_culture_inner w-1/3 px-5 py-5'>
              <h1 className='text-3xl mb-4 font-semibold'>Love for learning</h1>
              <p>Great people optimize fr learning and growth above all else.</p>
            </div>
          </div>

        </div>

        {/* SECOND SECTION ENDS  */}






        {/* THIRD SECTION STARTS */}

        <div className='about_sec_third_part py-44 bg-zinc-400 text-zinc-800 text-center'>

          <div className='about_sec_third_part_upper_part mx-auto mb-40 w-72'>
            <h1 className='text-5xl font-bold mb-8'>About</h1>
            <p className='text-lg'>Our goal is to fix the flaws of traditional currencies by leveraging Web3 and cryptocurrency.</p>
          </div>

          <div className='about_sec_third_part_below_part mt-44 px-20'>

            <h1 className='text-6xl font-bold'>Open positions</h1>

            <div className='opening-section mt-28 flex flex-wrap flex-row justify-evenly text-lg text-zinc-700 font-semibold'>
              <button className='uppercase rounded-2xl bg-white px-7 py-3 mx-2 my-5 hover:bg-zinc-700 hover:text-white transition'><i className="fa-solid fa-clipboard mr-2" />All</button>
              <button className='uppercase rounded-2xl bg-white px-7 py-3 mx-2 my-5 hover:bg-zinc-700 hover:text-white transition'><i className="fa-solid fa-laptop mr-2" />Engineering</button>
              <button className='uppercase rounded-2xl bg-white px-7 py-3 mx-2 my-5 hover:bg-zinc-700 hover:text-white transition'><i className="fa-solid fa-pen-nib mr-2" />Design</button>
              <button className='uppercase rounded-2xl bg-white px-7 py-3 mx-2 my-5 hover:bg-zinc-700 hover:text-white transition'><i className="fa-solid fa-pen-nib mr-2" />Foundation</button>
              <button className='uppercase rounded-2xl bg-white px-7 py-3 mx-2 my-5 hover:bg-zinc-700 hover:text-white transition'><i className="fa-solid fa-truck-fast mr-2" />Commercial</button>
            </div>

          </div>

        </div>

        {/* THIRD SECTION ENDS */}






        {/* FOURTH SECTION STARTS */}

        <div className='about_sec_fourth_part text-center text-zinc-300 pt-48 pb-10 px-20 flex flex-col items-center' id='team_members'>

          <h1 className='text-6xl font-bold mb-12'>Team</h1>
          <p className='about_sec_fourth_part_abt text-lg w-1/3'>Our goal is to create a borderless and banking-free economy, which facilitates the frictionless use of our multi-currency wallet peformance.</p>

          <div className='team_members my-20 flex flex-row flex-wrap items-start justify-center'>

            {teamData.map(data => (
              <Template
                key={data.name}
                img={data.img}
                name={data.name}
                desgn={data.desg}
              />
            ))}

          </div>

        </div>

        {/* FOURTH SECTION ENDS */}


        {/* <Footer /> */}


      </div>

    </>
  )
}

export default About