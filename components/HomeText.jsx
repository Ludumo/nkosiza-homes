import React from 'react'
import Hero from './Hero';

function HomeText() {
  return (
    <div>
        <h2 className='text-2xl pb-10 pt-12 font-bold text-center'>CREATING A NEW WAY OF LIVING</h2>
        <p className='text-xl pb-10 pt-12  font-light text-center'>Our product is unique, our model is simple.Jobs, Profit and Culture</p>
        <div>
        <Hero
            heading='Modular | Wood | Sustainable' 
            message="70% of the worlds homes are built using wood. In South Africa, wood only accounts for 2%.
                    We are a Dutch company with a global vision to bring the latest European
                    technologies and innovations to construct sustainable factory manufactured modular homes,
                    made from wood."
            bgImage="https://ludumobucket.s3.eu-central-1.amazonaws.com/Sundry+pics/h.jpg" 
            showButton={false}
            link='/contact'
        />
        </div>
    </div>  
  )
}

export default HomeText
