import React from 'react'
import Hero from './Hero'
import { useState } from 'react';
import Card from 'next'
import Image from 'next/image'

const servicesCard = () => {
  
  return (
    <>
   <Hero heading='Services'/>
  <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 className="sr-only">Products</h2>

    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <a href="#" className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <Image 
          src='https://ludumobucket.s3.eu-central-1.amazonaws.com/Sundry+pics/5.jpg'
          width={100}
          height={100}
          className="h-full w-full object-cover object-center group-hover:opacity-75" />
          <h1 className="mt-4 text-sm text-gray-700">Construction Managent</h1>
          <p className="mt-1 text-lg font-medium text-gray-900">Our construction team is top-notch 
          and we are confident in their ability to efficiently and effectively erect your complete 
          structure within just one day. We stand behind our promise to deliver a high-quality, 
          fully constructed home in a timely manner. Our team is dedicated to providing excellent 
          service and ensuring that you are satisfied with the final product.
          </p>
        </div>
      </a>

      <a href="#" className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <Image 
          src="https://ludumobucket.s3.eu-central-1.amazonaws.com/Floor+Plans/blueprint.jpg" 
          width={100}
          height={100}
          className="h-full w-full object-cover object-center group-hover:opacity-75" 
        />
        </div>
        <h1 className="mt-4 text-sm text-gray-700">Preconstuction Planning</h1>
        <p className="mt-1 text-lg font-medium text-gray-900">
        As part of our comprehensive service,we take the time to thoroughly assess
         your site and consider the best course of action with our team of experts. 
         We understand that every project is unique and requires a personalized approach. 
         That's why we take the time to thoroughly evaluate your site and work with you to determine the best way forward.
        Our team of experts is dedicated to providing elite services and ensuring that your new structure is erected in
          the most effective and efficient manner possible.
          </p>
      </a>

      <a href="#" className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <Image 
            src="https://ludumobucket.s3.eu-central-1.amazonaws.com/Trail+Huts/6.jpg" 
            width={100}
            height={100}
            className="h-full w-full object-cover object-center group-hover:opacity-75" 
            />
          <h1 className="mt-4 text-sm text-gray-700">Architectural Modelling</h1>
          <p className="mt-1 text-lg font-medium text-gray-900">
            Our team is skilled in architectural modeling and we use the latest technology
             to create detailed and accurate models based on your specific needs and requirements.
              We take the time to carefully consider the layout and design of your new structure, 
              as well as any unique features or challenges presented by your site. Once we have a 
              clear understanding of your needs and preferences, we use state-of-the-art software 
              to create a detailed model that reflects the final design of your new structure. This
               allows us to carefully plan and execute the construction process, ensuring that everything 
               is built to your specifications and meets your expectations.
            </p>
        </div>
      </a>


    </div>
  </div>

   
</>
  );
};

export default servicesCard

{/*   <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{title}</div>
    <p className="text-gray-700 text-base">
    {text}
    </p>
    </div>
    </div>
    <div className="flex flex-wrap justify-center">
    <Card
    title="Architectural Modelling"
    text="We do the architectural modelling based on what pre specs we have and model it accordingly to your sites needs."
    />
    <Card
    title="Preconstuction Planning"
    text="As, part of our elite services we go through your site and where the structure is to be erected and asses what will be the best way forward together with our team of experts."
    />
    <Card
    title="Construction Managent"
    text="We have an excellent construction team that erects your complete structure within one day guaranteed."
    />
  </div> */}