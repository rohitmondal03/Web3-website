import React from 'react'

const AbtUseTemplate = (props) => {
    return (
        <div className='use_sec_parts flex flex-row justify-between items-center py-32 px-32 mx-20 border-b-4'>

            <div className='use_sec_parts_left w-1/2'>

                <div className='use_sec_parts_left_top my-10 text-2xl'>
                    <span className='number border px-4 py-2 rounded-full bg-zinc-300 text-white'>{props.id}</span>
                    <span className='heading'> {props.type}</span>
                </div>

                <h3 className='text-5xl my-5 text-yellow-400 font-bold'>{props.heading}</h3>
                <p className='text-lg'>{props.abt}</p>

                <button className='my-8 border-2 border-yellow-400 py-4 px-8 rounded-2xl bg-yellow-400 text-lg text-black font-semibold hover:bg-transparent hover:text-yellow-400 duration-150'>{props.btnText}</button>
            </div>

            <div className='use_sec_parts_right'>
                <img 
                    src={props.img} 
                    className=' h-80'
                />
            </div>

        </div>
    )
}

export default AbtUseTemplate;