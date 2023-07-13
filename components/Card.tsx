import React from 'react';
import Image from 'next/image';

interface CardProps {
  image: string;
  header: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ image, header, text }) => {
  return (
    <div className="w-full md:w-1/3 px-4 mb-8 animated bounce">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full h-56">
          <Image src={image} alt="" layout="fill" objectFit="cover" />
        </div>
        <div className="p-8">
          <h3 className="text-xl font-bold mb-2">{header}</h3>
          <p className="text-gray-700 text-base">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
