import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { SliderData } from './SliderData';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const length = slides.length;

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 5000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, [current]);

  const nextSlide = () => {
    clearInterval(intervalId);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    clearInterval(intervalId);
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id='gallery' className='max-w-[1240px] mx-auto'>
      <h1 className='text-2xl font-bold text-center p-4'>Gallery</h1>
      <div className='relative flex justify-center p-4'>

      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? 'opacity-[1] ease-in duration-1000'
                : 'opacity-0'
            }
          >
              <TfiArrowCircleLeft
                onClick={prevSlide}
                className='absolute top-[50%] left-[30px] text-white/10 cursor-pointer select-none z-[2]'
                size={50}
              />
              {index === current && (
                <Image
                  src={slide.image}
                  alt='/'
                  width='1440'
                  height='600'
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "cover"
                  }} />
              )}
              <TfiArrowCircleRight
                onClick={nextSlide}
                className='absolute top-[50%] right-[30px] text-white/10 cursor-pointer select-none z-[2]'
                size={50}
              />
            </div>
        );
    })}
    </div>
    </div>
  );
};

export default Slider