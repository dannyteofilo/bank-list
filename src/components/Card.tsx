import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  age:number;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, age }) => {
  return (
    <div className="bg-gradient-to-br rounded-xl shadow-lg p-4 m-4 w-1/7 mx-auto text-white">
      <img className="object-contain h-48 w-full" src={imageUrl} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
        <p className="text-gray-300">Edad: {age}</p>
      </div>
    </div>
  );
};

export default Card;
