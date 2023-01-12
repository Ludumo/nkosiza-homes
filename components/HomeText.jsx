import React from 'react'
import Hero from './Hero';

function HomeText() {
  return (
    <div>
        <h2 className='text-2xl pb-10 pt-12 font-bold text-center'>USHERING IN THE FUTURE OF LIVING</h2>
        <p className='text-xl pb-10 pt-12  font-light text-center'>Our product is unique, and our approach is straightforward. Our focus is on creating jobs, supplying homes & fostering a positive culture.</p>
        <div>
        <Hero
            heading='SUSTAINABILITY' 
            message=""
            bgImage="https://ludumobucket.s3.eu-central-1.amazonaws.com/Sundry+pics/h.jpg"
        />
        </div>
        <p className='text-xl pb-10 pt-12 mx-auto  font-light text-center'>
        We use European technology to construct sustainable, 
            factory-manufactured modular homes primarily made of wood, 
            unlike the majority of homes in South Africa which are only 2% wood.
        </p>
    </div>  
  )
}

export default HomeText
