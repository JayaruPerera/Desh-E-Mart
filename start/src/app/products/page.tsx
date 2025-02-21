import HeroSection from "./hero";
import Link from "next/link";
import Image from "next/image";
import plap1 from "@/assets/images/plap1.png"
import plap2 from "@/assets/images/plap2.png"
import pphone1 from "@/assets/images/pphone1.png"
import pphone2 from "@/assets/images/pphone2.png"
import pcctv1 from "@/assets/images/pcctv1.png"
import HeroProduct from "@/assets/images/hero_product.png";
import Header from "@/sections/Header";
import { useEffect, useState } from "react";
import { Navbar } from "@nextui-org/react";

interface Product {
  _id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

function ProductsPage() {
  return (
    <div>
      <Header/>
      <HeroSection heroImage={HeroProduct.src} />

      <div className="sm:ml-8 ml-14">
        <h1 className="font-bold mb-4 mt-12">Filter your selections</h1>
        <div className="flex gap-4 flex-wrap"> 
        <button className="lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1 bg-white text-black font-bold rounded-full hover:bg-gray-500 md:text-sm sm:text-xs">View All</button>
        <button className="lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1  text-white font-bold rounded-full hover:bg-gray-500 border border-white border-opacity-70 md:text-sm sm:text-xs">Phones</button>
        <button className="lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1  text-white font-bold rounded-full hover:bg-gray-500 border border-white border-opacity-70 md:text-sm sm:text-xs">Laptops</button>
        <Link href="/products/cctv"><button className="lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1  text-white font-bold rounded-full hover:bg-gray-500 border border-white border-opacity-70 md:text-sm sm:text-xs">CCTV</button></Link>
        <Link href="/products/accessories"><button className="lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1  text-white font-bold rounded-full hover:bg-gray-500 border border-white border-opacity-70 md:text-sm sm:text-xs">Accessories</button></Link>
        </div>
      </div>
        
        <div className="flex flex-wrap">
        <div className="sm:ml-8 mt-10 ml-14 lg:w-[226px] md:w-[200px] sm:w-[130px] h-auto">
            <Image
                src={plap1}
                alt="lap product"
                className="w-full  "
                />
                <h1 className="font-bold md:text-[15px] sm:text-sm">Microsoft Surface Laptop 5</h1>
                <p className="hidden sm:block text-sm md:text-[14px]">Fast SSD storage, excellent touch 
                display, and smooth performance.</p>
                <p className="font-bold md:text-[18px] sm:text-[16px]">LKR 325500.00</p>
        <button className="w-full mt-4 px-4 py-2 bg-white text-black font-bold rounded hover:bg-[#9D1CAC] transition duration-300 md:text-sm sm:text-[14px]">
            Buy Now
        </button>
        </div>

        <div className="sm:ml-8 mt-10 ml-14 lg:w-[226px] md:w-[200px] sm:w-[130px] h-auto">
            <Image
                src={pphone1}
                alt="lap product"
                className="w-full  "
                />
                <h1 className="font-bold md:text-[15px] sm:text-sm">Microsoft Surface Laptop 5</h1>
                <p className="hidden sm:block text-sm md:text-[14px]">Fast SSD storage, excellent touch 
                display, and smooth performance.</p>
                <p className="font-bold md:text-[18px] sm:text-[16px]">LKR 325500.00</p>
                  <button className="w-full mt-4 px-4 py-2 bg-white text-black font-bold rounded hover:bg-[#9D1CAC] transition duration-300 md:text-sm sm:text-[14px]">
            Buy Now
        </button>  
        </div>

        <div className="sm:ml-8 mt-10 ml-14 lg:w-[226px] md:w-[200px] sm:w-[130px] h-auto">
            <Image
                src={pphone2}
                alt="lap product"
                className="w-full  "
                />
                <h1 className="font-bold md:text-[15px] sm:text-sm">Microsoft Surface Laptop 5</h1>
                <p className="hidden sm:block text-sm md:text-[14px]">Fast SSD storage, excellent touch 
                display, and smooth performance.</p>
                <p className="font-bold md:text-[18px] sm:text-[16px]">LKR 325500.00</p>
                <button className="w-full mt-4 px-4 py-2 bg-white text-black font-bold rounded hover:bg-[#9D1CAC] transition duration-300 md:text-sm sm:text-[14px]">Buy Now</button>
        </div>

        <div className="sm:ml-8 mt-10 ml-14 lg:w-[226px] md:w-[200px] sm:w-[130px] h-auto">
            <Image
                src={plap2}
                alt="lap product"
                className="w-full  "
                />
                <h1 className="font-bold md:text-[15px] sm:text-sm">Microsoft Surface Laptop 5</h1>
                <p className="hidden sm:block text-sm md:text-[14px]">Fast SSD storage, excellent touch 
                display, and smooth performance.</p>
                <p className="font-bold md:text-[18px] sm:text-[16px]">LKR 325500.00</p>
                <button className="w-full mt-4 px-4 py-2 bg-white text-black font-bold rounded hover:bg-[#9D1CAC] transition duration-300 md:text-sm sm:text-[14px]">Buy Now</button>
        </div>

        <div className="sm:ml-8 mt-10 ml-14 lg:w-[226px] md:w-[200px] sm:w-[130px] h-auto">
            <Image
                src={pcctv1}
                alt="lap product"
                className="w-full  "
                />
                <h1 className="font-bold md:text-[15px] sm:text-sm">Microsoft Surface Laptop 5</h1>
                <p className="hidden sm:block text-sm md:text-[14px]">Fast SSD storage, excellent touch 
                display, and smooth performance.</p>
                <p className="font-bold md:text-[18px] sm:text-[16px]">LKR 325500.00</p>
                <button className="w-full mt-4 px-4 py-2 bg-white text-black font-bold rounded hover:bg-[#9D1CAC] transition duration-300 md:text-sm sm:text-[14px]">Buy Now</button>
        </div>

     

       

      

        
        
        </div>

    </div>
  );
}

export default ProductsPage;

