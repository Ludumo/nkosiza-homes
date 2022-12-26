import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


const Hero = ({heading, message}) => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

// Array of images for the slideshow
const images = [
  'https://ludumobucket.s3.eu-central-1.amazonaws.com/Sundry+pics/1.jpg',
  'https://ludumobucket.s3.eu-central-1.amazonaws.com/Sundry+pics/2.jpg', 
  'https://ludumobucket.s3.eu-central-1.amazonaws.com/Sundry+pics/3.jpg', 
  'https://ludumobucket.s3.eu-central-1.amazonaws.com/Sundry+pics/4.jpg',
  'https://ludumobucket.s3.eu-central-1.amazonaws.com/Sundry+pics/5.jpg'
];

// Function to handle moving to the next slide
const nextSlide = () => {
  const next = currentSlide + 1;
  if (next === images.length) {
  setCurrentSlide(0);
  } else {
  setCurrentSlide(next);
  }
  }
  
  // Function to handle moving to the previous slide
  const prevSlide = () => {
  const prev = currentSlide - 1;
  if (prev < 0) {
  setCurrentSlide(images.length - 1);
  } else {
  setCurrentSlide(prev);
  }
  }
  
  // Set up an interval to automatically move to the next slide
  useEffect(() => {
  const interval = setInterval(nextSlide, 3000);
  return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover'>
    {/* Overlay */}
    <div className='min-w-[0] m-auto p-4 h-min-[0]'>
    <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2]' />
    <h2 className='text-5xl text-white font-bold '>{heading}</h2>
    <div className='min-w-[0] min-h-[0] z-[2] mt-[-15]'>
    <p className='flex-row  w-64 h-64 pb-m64 py-5 text-xl  text-s text-wrap  text-white'>{message}</p>
    </div>
    </div>

    {/* Slideshow controls */}
    <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
    <button onClick={prevSlide}>Prev</button>
    <button onClick={nextSlide}>Next</button>
  </div>

  {/* Slideshow background */}
  <div className='absolute top-0 left-0 right-0 bottom-0'>
    {images.map((image, index) => (
      <div
        key={index}
        className={`h-screen w-full bg-center bg-cover bg-no-repeat ${currentSlide === index ? 'block' : 'hidden'}`}
        style={{ backgroundImage: `url(${image})` }}
      />
    ))}
  </div>
</div>
);
};

export default Hero;

