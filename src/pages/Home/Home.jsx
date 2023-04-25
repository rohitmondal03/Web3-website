import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import coin_img from "../../assets/coin_front.png"
import coin_pile from "../../assets/coin_pile.jpg"
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='py-10 px-32 flex justify-between items-center text-white'>
        <div className='home_left'>
          <h1 className='main_head font-bold mb-10'>X Coin: The next <br /> big Web3 digital <br /> currency</h1>
          <p className='text-lg'>X Coin is a Web3 cryptocurrency — the first decentralized, <br /> P2P digital currency with zero transaction fees and instant <br /> payments.</p>
          <div className='home_left_btn mt-10 flex '>
            <button className='px-5 py-3 rounded-lg mr-3 bg-amber-500 text-black'><Link to='/about-us'>Get started with X coin</Link></button>
            <button className='px-5 py-3 rounded-lg ml-3'><Link to='/'>Buy X coin</Link></button>
          </div>
        </div>
        <div className='home_right'>
          <img className='coin_img' src={coin_img} />
        </div>
      </div>

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

      <div className='home_abt bg-white py-16 px-16 flex justify-evenly items-center'>
        <div className='home_abt_left'>
          <img className='coin_pile' src={coin_pile} />
        </div>
        <div className='home_abt_right px-10'>
          <h1 className='home_abt_right_head font-bold mb-10 text-5xl mb-10'>X coin is the first Web3 <br /> digital currency with a <br />decentralized blockchain.</h1>
          <p className='text-lg'>X Coin the first Web3 digital currency with a decentralized blockchain, allowing instant global payments with a low transaction fees. It ensures that everyone has access to financial services and eliminates the need for banl accounts, striving for a world-wide cahsless society.</p>
          <button className='px-5 py-3 rounded-lg mt-10 bg-yellow-400 font-semibold'><Link to='/'>Get started with X Coin</Link></button>
        </div>
      </div>
    </>
  )
}

export default Home