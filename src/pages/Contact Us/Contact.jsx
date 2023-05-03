import React from 'react'
import "./Contact.css";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
  return (
    <>

      <Navbar />

      <div className='contact_sec text-zinc-800 bg-zinc-400 py-40 flex flex-row items-center justify-around'>

        <div className='contact_sec_left'>
          <h1 className='text-6xl font-bold mb-20'>Contact Us</h1>

          <form action='' method='' className='flex flex-col items-start'>

            <label>
              <input
                placeholder='Name'
                className='my-5 px-5 py-3 rounded-lg w-96 focus:bg-zinc-100 focus:scale-105 transition' />
            </label>

            <label>
              <input
                placeholder='Email Address'
                className='my-5 px-5 py-3 rounded-lg w-96 focus:bg-zinc-100 focus:scale-105 transition' />
            </label>

            <label>
              <textarea
                placeholder='Write your message'
                className='my-5 px-5 py-3 rounded-lg w-96 focus:bg-zinc-100 focus:scale-105 transition'
              />
            </label>

            <button className='font-bold text-lg px-5 py-4 my-5 bg-yellow-400 w-96 rounded-lg hover:bg-yellow-500 transition'>Send</button>

          </form>
        </div>

        <div className='contact_sec_right bg-zinc-200 py-16 pr-20 pl-5 rounded-xl'>
          <h1 className='text-3xl mb-5 font-bold text-zinc-600'>Contact Information</h1>

          <div className='contact_sec_right_inner my-8'>
            <h2 className='font-semibold'>Address</h2>
            <p className='text-xl mt-2'>717 Market Street</p>
            <p className='text-xl'>San Fransisco, CA 94103</p>
          </div>

          <div className='contact_sec_right_inner my-8'>
            <h2 className='font-semibold'>Phone Number</h2>
            <p className='text-xl mt-2'>+91-994XXXXXXX</p>
          </div>

          <div className='contact_sec_right_inner mt-8'>
            <h2 className='font-semibold'>Email</h2>
            <p onClick={() => window.location = 'mailto:hello@xcoin.com'} className='text-xl mt-2 cursor-pointer underline'>hello@xcoin.com</p>
          </div>

        </div>

      </div>

      <Footer />

    </>
  )
}

export default Contact