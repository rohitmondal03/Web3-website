import React from 'react'
import { Link } from 'react-router-dom'
import  "./Locker.css"
import lock_img from "../../assets/locker.png"

const Locker = () => {
    return (
        <div className='locker_section bg-white px-16 py-24 flex items-center justify-evenly' >

            <div className='locker_sec_left text-center flex justify-center'>
                <img className='lock_img h-96' src={lock_img} />
            </div>

            <div className='locker_sec_right text-left flex flex-col items-start justify-center text-slate-600'>
                <h1 className='text-left text-5xl font-bold mb-6'>X Coin and the blockchain</h1>
                <p className='text-lg'>X coin is the next currency of the internet. X Coin's <br /> blockchain is a decentralized open-source,public  <br />  good that anyone can rely on. It's low-cost, fast, <br /> accessible anywhere in the world, and available to <br /> anyone. It's place for  Web3 applications to run in full <br /> decentralization.</p>
                <button className='px-5 py-3 rounded-lg mt-10 bg-amber-300 text-black transition-all hover:bg-amber-400 font-semibold'><Link to='/'>Get started with X Coin</Link></button>
            </div>
        </div>
    )
}

export default Locker
