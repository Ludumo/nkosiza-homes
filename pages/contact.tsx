import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const contact = () => {
  return (
    <div>
        <Hero  
        header='Contact'
        backgroundImage="https://ludumobucket.s3.eu-central-1.amazonaws.com/Sundry+pics/h.jpg" message={''} showButton={false} buttonText={''}        />
        <Contact />
    </div>
  )
}

export default contact