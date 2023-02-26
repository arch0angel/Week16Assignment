import React from 'react'
import AboutCarousel from './Carousel'
import Cards from './Cards'
import '../index.css'

function About() {
    return (
        <div className='about'>
            <h1 align='center'>All About Us!</h1>
        <AboutCarousel />
        <br></br>
        <div class='card-deck'>
        <Cards/>
        </div>
        </div>
        
    )
}

export default About