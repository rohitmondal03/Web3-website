import React from 'react'
import "./Use.css";
import data from "./abtUseData";
import Template from './AbtUseTemplate';
import Navbar from "../../components/Navbar/Navbar"

const Use = () => {
  return (
    <>

      <Navbar />

      <div className='use_sec text-zinc-300 my-20' >

        <h1 className='main_heading text-center text-6xl font-bold mx-1'>How to Use X Coin?</h1>

        <div className='use_sec_use_cases'>
          {data.map((data) => (
            <Template 
              key= {data.id}
              id= {data.id}
              type= {data.type}
              heading= {data.heading}
              abt= {data.abt}
              btnText= {data.btnText}
              img= {data.img}
            />
          ))}
        </div>

      </div>

    </>
  )
}

export default Use