import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs';
import Vision from './vision'
import Mission from './mission'
import Philosophy from './philosophy'


function about() {
  return (
    <>
    <AboutUs />
    {/* <Hero bgImage="https://ludumobucket.s3.eu-central-1.amazonaws.com/Trail+Huts/8.jpg" 
          heading="ABOUT US" 
          message="We understand the challenges and frustrations people face when it comes to housing.
                   We offer high-quality homes that can be constructed and erected quickly, without unnecessary bureaucracy. 
                   We aim to make the process of finding and securing a new home as stress-free as possible, 
                   and offer financial services to support our customers in the long term."
                   >

      </Hero> */}
      <div>
      <Vision/>
      <Mission/>
      <Philosophy/>
      </div>
    </>
  )
}

export default about