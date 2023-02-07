import React from 'react';
import Link from 'next/link';


const Hero = ({ backgroundImage, header, message,showButton, backgroundPosition = 'center', buttonText, buttonLink = '/', height = '80' }) => {
  return (
    <div
      className={`bg-cover  h-${height} bg-${backgroundPosition} flex items-center justify-center h-screen mb-12 bg-fixed `}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        {/* Overlay */}
      <div className=" top-0 left-0 right-0 bottom-0 bg-black/10 z-[2]">
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
      <h2 className="text-3xl font-bold text-white sm:text-4xl uppercase">{header}</h2>
      </div>
      <p className="text-2xl italic p-8 font-semibold text-white">{message}</p>
      {showButton && (
      <Link className='p-24' href={buttonLink}>
        <div className='py-4 px-6  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'>
          {buttonText}
        </div>
      </Link>
        )}
    </div>
    </div>
  );
};

export default Hero;
