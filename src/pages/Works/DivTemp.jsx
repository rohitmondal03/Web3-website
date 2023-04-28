import React from 'react'

const DivTemp = (props) => {
    return (
        <div className='working_sec'>

            <div className='working_sec_left'>
                <h1 className='working_sec_main_head'>{props.head}</h1>
                <h2 className='working_sec_small_head'>{props.small_head}</h2>
                <p className='working_sec_abt'>{props.para}</p>
                <button className='working_sec_btn font-semibold'>{props.btn_text}</button>
            </div>

            <div className='working_sec_right'>
                <img src={props.img} className='working_sec_img' />
            </div>
        </div>
    )
}

export default DivTemp