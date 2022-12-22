import React from 'react'
import Hero from './Hero'
import Image from "next/image";


const Card = ({ image, header, text }) => (
  <div className="w-full md:w-1/3 p-4">
    <div className="h-full rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={image} alt="Card image" />
      <div className="p-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{header}</h3>
        <p className="text-gray-600 leading-relaxed">{text}</p>
      </div>
    </div>
  </div>
)

export default Card
