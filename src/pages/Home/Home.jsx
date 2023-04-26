import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import coin_img from "../../assets/coin_front.png"
import coin_pile from "../../assets/coin_pile.jpg"
import lock_img from "../../assets/locker.png"
import facebook_img from "../../assets/facebook.png"
import google_img from "../../assets/google_logo.png"
import instagram_img from "../../assets/instagram.png"
import tesla_img from "../../assets/tesla.png"
import microsoft_img from "../../assets/microsoft.png"
import Navbar from '../../components/Navbar/Navbar'
import Footer from "../../components/Footer/Footer"

const Home = () => {
  return (
    <>

      <Navbar />


      {/* MAIN HOME SECTION */}

      <div className='py-10 px-32 flex justify-between items-center text-white'>

        <div className='home_left'>
          <h1 className='main_head font-bold mb-10'>X Coin: The next <br /> big Web3 digital <br /> currency</h1>
          <p className='text-lg'>X Coin is a Web3 cryptocurrency — the first decentralized, <br /> P2P digital currency with zero transaction fees and instant <br /> payments.</p>
          <div className='home_left_btn mt-10 flex font-semibold'>
            <button className='px-5 py-3 rounded-lg mr-3 bg-amber-300 text-black transition-all hover:bg-amber-400'><Link to='/about-us'>Get started with X coin</Link></button>
            <button className='px-5 py-3 text-amber-300 rounded-lg ml-3 transition-all hover:bg-cyan-800'><Link to='/'>Buy X coin</Link></button>
          </div>
        </div>

        <div className='home_right'>
          <img className='coin_img' src={coin_img} />
        </div>

      </div>


      {/* VALUES SECTION INSIDE HOME SECTION */}

      <div className='home_values text-white flex justify-evenly text-center mt-28 font-semibold mb-28'>

        <div className='home_below_inner'>
          <h1 className='text-lg mb-3'>Treasure Balance</h1>
          <p className='text-4xl'>$802,906,041</p>
        </div>

        <div className='home_below_inner'>
          <h1 className='text-lg mb-3'>Current APY</h1>
          <p className='text-4xl'>7,366%</p>
        </div>

        <div className='home_below_inner'>
          <h1 className='text-lg mb-3'>Total Value</h1>
          <p className='text-4xl'>$3,687,637,771</p>
        </div>

        <div className='home_below_inner'>
          <h1 className='text-lg mb-3'>% XCR Stacked</h1>
          <p className='text-4xl'>90.4%</p>
        </div>

      </div>



      {/* COIN PILE SECTION */}

      <div className='home_abt bg-white py-16 px-16 flex justify-evenly items-center'>

        <div className='home_abt_left'>
          <img className='coin_pile' src={coin_pile} />
        </div>

        <div className='home_abt_right px-10 text-slate-600'>
          <h1 className='home_abt_right_head font-bold mb-10 text-5xl'>X coin is the first Web3 <br /> digital currency with a <br />decentralized blockchain.</h1>
          <p className='text-lg text-black'>X Coin the first Web3 digital currency with a decentralized blockchain, allowing instant global payments with a low transaction fees. It ensures that everyone has access to financial services and eliminates the need for bank accounts, striving for a world-wide cashless society.</p>
          <button className='px-5 py-3 rounded-lg mt-10 bg-amber-300 text-black transition-all hover:bg-amber-400 font-semibold'><Link to='/'>Get started with X Coin</Link></button>
        </div>

      </div>



      {/* SUSTAINABLE STAKE SECTION */}

      <div className='text_spare p-60 text-center bg-slate-200 flex items-center justify-center font-bold'>

        <div className='back_text absolute left-2/4 -translate-x-1/2 opacity-10'>
          <h1>4,8</h1>
        </div>

        <div className='front_text relative text-center'>
          <h1 className='text-6xl mb-10'>Sustainable Staking APY</h1>
          <h2 className='text-3xl font-medium'>X Coin rewards coin stakes with <br /> compounding interest, increasing <br /> XCR holdings over time.</h2>
        </div>

      </div>




      {/* LOCKER SECTION */}

      <div className='locker_section bg-white px-16 py-24 flex items-center justify-evenly'>

        <div className='locker_sec_left text-center flex justify-center'>
          <img className='lock_img h-96' src={lock_img} />
        </div>

        <div className='locker_sec_right text-left flex flex-col items-start justify-center text-slate-600'>
          <h1 className='text-left text-5xl font-bold mb-6'>X Coin and the blockchain</h1>
          <p className='text-lg'>X coin is the next currency of the internet. X Coin's <br /> blockchain is a decentralized open-source,public  <br />  good that anyone can rely on. It's low-cost, fast, <br /> accessible anywhere in the world, and available to <br /> anyone. It's place for  Web3 applications to run in full <br /> decentralization.</p>
          <button className='px-5 py-3 rounded-lg mt-10 bg-amber-300 text-black transition-all hover:bg-amber-400 font-semibold'><Link to='/'>Get started with X Coin</Link></button>
        </div>

      </div>



      {/* LAST SECTION */}

      <div className='last_sec p-24 flex flex-col items-center'>

        <div className='last_sec_top mb-20'>
          <h1 className='last_heading text-7xl text-white font-bold'>Trusted by</h1>
        </div>

        <div className='last_sec_bottom flex flex-row'>
          <img className='h-16 mx-12' src={tesla_img} />
          <img className='h-16 mx-12' src={facebook_img} />
          <img className='h-16 mx-12' src={google_img} />
          <img className='h-16 mx-12' src={instagram_img} />
          <img className='h-16 mx-12' src={microsoft_img} />
        </div>

      </div>


      <Footer />

    </>
  )
}

export default Home