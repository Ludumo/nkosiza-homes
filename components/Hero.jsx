import React from 'react';

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='min-w-[0] m-auto p-4 h-min-[0]'>

      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2]' />
      <div className=' min-w-[0] min-h-[0] z-[2] mt-[-15]'>
        <h2 className='text-5xl text-white font-light '>{heading}</h2>
        <p className='flex-row  w-64 h-64 pb-m64 py-5 text-xl  text-s text-wrap  text-white'>{message}</p>
        </div>
      </div>
    </div>
 
  );
};

export default Hero;