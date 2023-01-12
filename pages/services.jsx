import React from 'react'
import Card from '../components/Card'
import Hero from '../components/Hero'


const Services = () => (
  <>
  <Hero 
  bgImage="https://ludumobucket.s3.eu-central-1.amazonaws.com/Trail+Huts/5.jpg" 
  heading="SERVICES" 
  message="We provide comprehensive construction services including management, architectural design, pre-construction planning, high-quality work, timely completion and excellent customer service, using a team of experts to tackle unique projects.">

  </Hero>

    <div className='flex items-center justify-center mb-1 '>
      {/* Overlay */}
      <div className='min-w-[0] m-auto p-4 h-min-[0]'>

      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2]' />
      <div className=' min-w-[0] min-h-[0] z-[2] mt-[-15]'>
        <h2 className='text-5xl text-white font-light '></h2>
        </div>
      </div>
    </div>


  <div className="container mx-auto px-4 py-8">
    <div className="flex flex-wrap -mx-4 ">
      <Card
        image="https://ludumobucket.s3.eu-central-1.amazonaws.com/Floor+Plans/blueprint.jpg"
        header="Preconstruction Planning"
        text="We thoroughly assess your site and work with experts to determine the best course of action for your unique project. Our team is dedicated to providing elite services and ensuring that your new structure is erected efficiently and effectively."
        />
        <Card
          image="https://ludumobucket.s3.eu-central-1.amazonaws.com/Sundry+pics/b.jpg"
          header="Architectural Modelling"
          text="We thoroughly assess your site and work with experts to determine the best course of action for your unique project. Our team is dedicated to providing elite services and ensuring that your new structure is erected efficiently and effectively."
          />
      <Card
        image="https://ludumobucket.s3.eu-central-1.amazonaws.com/Sundry+pics/h.jpg"
        header="Construction Management"
        text="Our skilled construction team can efficiently and effectively 
        erect your complete structure in just one day. We promise high-quality, 
        timely construction and excellent service to ensure customer satisfaction."
        />
    </div>
  </div>
</>
)

export default Services
