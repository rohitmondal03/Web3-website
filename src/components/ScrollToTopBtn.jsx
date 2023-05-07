import React, { useState, useEffect } from 'react'
import { North } from '@mui/icons-material'


const ScrollToTopBtn = () => {

    const [scrollToTop, setScrollToTop] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.pageYOffset > 300 ?
                setScrollToTop(true) :
                setScrollToTop(false)
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo(
            {
                top: 0,
                behavior: 'smooth'
            }
        )
    }


    const buttonStyle = {
        position: 'fixed',
        bottom: '1rem',
        right: '2rem',
        height: '50px',
        width: '50px',
        fontSize: '2rem',
        color: 'white',
        padding: '.75rem .2rem',
        border: '1px solid black',
        borderRadius: '10px',
    }



    return (
        <>
            {scrollToTop && (
                <North
                    className='bg-black'
                    style={buttonStyle}
                    onClick={scrollUp}
                />
            )}
        </>
    )
}

export default ScrollToTopBtn