import React from 'react'
import { SlArrowDown } from 'react-icons/sl';
import { useState } from 'react';

const About = ({heading, message}) => {

  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='min-w-[0] m-auto p-4 h-min-[0]'>

      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2]' />
      <div className=' min-w-[0] min-h-[0] z-[2] mt-[-15]'>
        <h2 className='text-5xl text-white font-light '>About</h2>
        <p className='flex-row  w-64 h-64 pb-m64 py-5 text-l  text-s text-wrap  text-white'>
        We understand the challenges and frustrations people face when it comes to housing. 
        We offer high-quality homes that can be constructed and erected quickly, without unnecessary bureaucracy. 
        We aim to make the process of finding and securing a new home as stress-free as possible, 
        and offer financial services to support our customers in the long term.
        </p>
        </div>
      </div>
    </div>
 
  );
};

export default About;