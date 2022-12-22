import React from 'react'
import Hero from './Hero'
import { useState } from 'react';


function About() {
  return (
    <>
    <Hero className='text-wrap' heading='About'/>
    <p>
      As a team, 
    we understand and share the frustration that many people feel about
     the slow progress and subpar quality of housing in our country.
      It can be disheartening to see homes that are poorly constructed 
      or held back by politics. That is why we are dedicated to finding 
      a solution and providing high-quality homes that can be constructed 
      and erected in just one day, without any unnecessary bureaucracy or red
       tape. We want to make the process of getting a new home as simple and 
       straightforward as possible. In addition to our quick and efficient home
        construction services, we also offer financial services to support our 
        customers in the long term.
    </p>
    </>
  )
}

export default About