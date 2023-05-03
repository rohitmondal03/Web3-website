import React from 'react'
import Data from "./DivData"
import Template from "./DivTemp";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./Works.css"

const Works = () => {
    return (
        <>
            <Navbar />

            {Data.map(data => (
                <Template
                    head= {data.first_head}
                    small_head= {data.small_head}
                    para= {data.abt_para}
                    img= {data.img}
                    btn_text= {data.btn_text}
                    alt_text= {data.alt_text}
                    redirect_to= {data.link_redirect}
                />
            ))}

            <Footer />
        </>
    )
}

export default Works