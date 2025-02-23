import React from 'react';
import Image, { StaticImageData } from 'next/image';
interface ProductProps {
    inStock: boolean; 
    title: string;
    description: string;
    price: string; 
    imageUrl: StaticImageData; // Updated to StaticImageData
    iconUrl?: string;
}

const ProductCard = ({ title, description, price, imageUrl, inStock }:ProductProps) => {
  return (
    <div className="relative max-w-[220px] rounded-md overflow-hidden shadow-lg hover:bg-[#1E1E1E]">
      <div className="flex justify-between items-center mb-2">

        {inStock ? (
            <span className="z-10 absolute top-[20px] right-[12px] text-[12px] font-normal text-[#FCFDFF] bg-green-500 px-2 py-1 rounded">
                In Stock
            </span>
        ) : ( <span className="z-10 absolute top-[20px] right-[12px] text-[12px] font-normal text-[#FCFDFF] bg-red-500 px-2 py-1 rounded">
          Out Stock
        </span> )}
        
      </div>

      <div className="w-full h-48 bg-gray-200 mb-4 overflow-hidden relative rounded-t-md">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="text-content px-4 pb-4">
        <h2 className="text-[14px] font-medium text-[#FCFDFF] mb-1 overflow-hidden max-h-5">
            {title}
        </h2>
        <p className="text-[12px] text-[#FCFDFF] opacity-70 mb-2 overflow-hidden max-h-9">
            {description}
        </p>
        <p className="text-[18px] font-semibold text-[#FCFDFF] mb-4">
            LKR {price}
        </p>

        <div className="flex space-x-2">
            <button className="flex-1 bg-[#FCFDFF] text-[#161A1D] text-[14px] font-medium py-2 px-4 rounded hover:bg-[#FCFDFF] hover:opacity-90 transition duration-300">
                Buy Now
            </button>
            <button className="flex-1 bg-gray-700 text-[#FCFDFF] text-[14px] font-medium py-2 px-4 rounded hover:bg-gray-800 transition duration-300">
                + Cart
            </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;