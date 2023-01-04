import React from 'react';

const Card = (props) => {
  return (
    <div className="w-full md:w-1/3 px-4 mb-8 animated bounce" style={{animationName: 'bounce'}}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={props.image} alt="" className="w-full h-56 object-cover" />
        <div className="p-8">
          <h3 className="text-xl font-bold mb-2">{props.header}</h3>
          <p className="text-gray-700 text-base">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;


