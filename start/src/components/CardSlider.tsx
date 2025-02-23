"use client"; // Mark component as a Client Component

import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import { products } from '../assets/images/data';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Product {
  inStock: boolean;
  title: string;
  description: string;
  price: string;
  imageUrl: StaticImageData; // Updated to StaticImageData
  iconUrl?: string; 
}

interface SliderProps {
  heading: string;
  seemore: string;
}

const CardSlider = ({ heading, seemore }: SliderProps) => {

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="cardslider flex flex-col max-w-[100%] mx-auto">
      
      <div className="slider-top py-[10px] border-b border-[#C1C2C3] border-opacity-30 flex flex-row justify-between">
        <h3 className="slider-heading text-[18px]">{heading}</h3>
        <Link href={seemore}>
          <p className="hover:opacity-100 opacity-70 text-[14px] text-[#FCFDFF]">See more</p>
        </Link>
      </div>

      <div className="relative py-4">

        <div ref={sliderRef}
          className="flex overflow-x-auto space-x-[20px] scrollbar-hide"
        >
          {products.map((product: Product, index: number) => (
            <div key={index} className="flex-none ">
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <br />

        <div className="slider-btn flex flex-row gap-[24px] absolute right-0 bottom-[-24px]">
          <button
            onClick={scrollLeft}
            className="transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
          >
            &larr;
          </button>
          <button
            onClick={scrollRight}
            className="transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;