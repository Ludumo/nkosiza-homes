import React from 'react'
import Hero from './Hero'


export default function AboutUs() {
  return (
    <div>
      <Hero 
      bgImage="https://ludumobucket.s3.eu-central-1.amazonaws.com/Trail+Huts/8.jpg" 
      heading="ABOUT US" 
      message="The New Trend-Setters in the Residential Industry"
      >
      </Hero>
      <p 
          className='flex justify-center items-center w-64 ml-64 pb-10 pt-12 font-bold border '>
              We understand the challenges and frustrations people face when it comes to housing.
              We offer high-quality homes that can be constructed and erected quickly, without unnecessary bureaucracy. 
              We aim to make the process of finding and securing a new home as stress-free as possible, 
              and offer financial services to support our customers in the long term.
      </p>
    </div>
  )
}
