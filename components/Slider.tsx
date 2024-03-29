import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

interface Slide {
  image: string;
}

interface SliderProps {
  slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setCurrent((current) => (current === 0 ? length - 1 : current - 1));
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4 uppercase">Gallery</h1>
      <div className="relative flex justify-center p-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={index === current ? 'opacity-100' : 'opacity-0'}
          >
            <FaArrowCircleLeft
              onClick={prevSlide}
              className="absolute top-[50%] left-[30px] text-white/30 cursor-pointer select-none z-[2]"
              size={50}
            />
            {index === current && (
              <Image
                className="object-cover"
                src={slide.image}
                alt="/"
                width={1440}
                height={600}
              />
            )}
            <FaArrowCircleRight
              onClick={nextSlide}
              className="absolute top-[50%] right-[30px] text-white/30 cursor-pointer select-none z-[2]"
              size={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
