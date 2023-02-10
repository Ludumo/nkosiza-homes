import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Image from 'next/image';


const contact = () => {
  return (
    <div>
      <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover '>
      <Image
        src="https://ludumobucket.s3.eu-central-1.amazonaws.com/Sundry+pics/h.jpg"
        height={1080}
        width={1920}  
        alt="St James"  
        />
      </div>
      {/*   <Hero  
              header='Contact' 
              backgroundImage=   
        /> */}
        <Contact />
    </div>
  )
}

export default contact