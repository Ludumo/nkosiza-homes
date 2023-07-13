import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  backgroundImage: string;
  header: string;
  message: string;
  showButton: boolean;
  backgroundPosition?: string;
  buttonText: string;
  buttonLink?: string;
}

const Hero: FC<HeroProps> = ({
  backgroundImage,
  header,
  message,
  showButton,
  backgroundPosition = 'center',
  buttonText,
  buttonLink = '/',
}) => {
  return (
    <div className="relative">
      {/* Optimized background image */}
      <Image
        src={backgroundImage}
        layout="responsive"
        objectFit="cover"
        quality={100}
        alt=""
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center">
        <div className="p-5 text-white">
          <h2 className="text-3xl font-bold text-white sm:text-4xl uppercase">{header}</h2>
        </div>
        <p className="text-2xl italic p-8 font-semibold text-white">{message}</p>
        {showButton && (
          <Link href={buttonLink}>
            <div className="py-4 px-6 bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
              {buttonText}
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
