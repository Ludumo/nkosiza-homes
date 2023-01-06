import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const contact = () => {
  return (
    <div>
        <Hero  
              heading='Contact' 
              bgImage="https://ludumobucket.s3.eu-central-1.amazonaws.com/Sundry+pics/h.jpg" 
              button="Get in touch" 
              showButton={true}
              link='/contact'
        />
        <Contact />
    </div>
  )
}

export default contact