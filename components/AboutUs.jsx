import React from 'react'
import Hero from './Hero'


export default function AboutUs() {
  return (
    <div>
      <Hero 
      bgImage="https://ludumobucket.s3.eu-central-1.amazonaws.com/Trail+Huts/8.jpg" 
      heading="ABOUT US" 
      message="Setting the trend instilling pride in the Residential Industry"
      >
      </Hero>
      <div>
      <p className='text-xl pb-10 pt-12 mx-auto  font-light text-center'>
        We specialize in using Cross Laminated Timber (CLT), an environmentally friendly building method.
        CLT is a prefabricated, solid, engineered wood panel that is lightweight,
        strong, and has exceptional fire and thermal performance.
        It is easy to install, generates minimal waste and has a low environmental impact.
        Our CLT is FSC approved, ensuring that it comes from sustainable resources and is sourced locally.
        </p>
      </div>
        
      
    </div>
  )
}
