import React from 'react';

const Hero = ({ bgImage, heading, message, card }) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover' style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/5 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl pb-10 font-bold text-center'>{heading}</h2>
        <p className='flex-row  w-64 h-64 pb-m64 text-s text-wrap  text-white py-5 text-center'>{message}</p>
        <div className='flex flex-row justify-center items-center'>{card}</div>
      </div>
    </div>
  );
};

export default Hero;
