import HeroSection from "../hero";
import HeroCCTVImage from "@/assets/images/cctv3.png";
import Link from "next/link";
import Image from "next/image";
import cctv1 from "@/assets/images/CCTV_P1.jpg";
import cctv2 from "@/assets/images/CCTV_P2.jpg";
import cctv3 from "@/assets/images/CCTV_P3.jpg";
import cctv4 from "@/assets/images/CCTV_P4.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Footer from "@/sections/Footer";

function CCTVDetails() {
  const products = [
    {
      id: 1,
      imageSrc: cctv1,
      alt: "CCTV Model A",
      title: "CCTV Model A",
      description: "High-resolution, night vision, and motion detection.",
      price: "LKR 150,000.00",
      inStock: true,
    },
    {
      id: 2,
      imageSrc: cctv2,
      alt: "CCTV Model B",
      title: "CCTV Model B",
      description: "Wireless connectivity, wide-angle lens, and waterproof.",
      price: "LKR 175,000.00",
      inStock: false,
    },
    {
      id: 3,
      imageSrc: cctv3,
      alt: "CCTV Model C",
      title: "CCTV Model C",
      description: "Smart integration, cloud storage, and two-way audio.",
      price: "LKR 200,000.00",
      inStock: true,
    },
    {
      id: 4,
      imageSrc: cctv4,
      alt: "CCTV Model D",
      title: "CCTV Model D",
      description: "4K resolution, AI analytics, and solar-powered.",
      price: "LKR 250,000.00",
      inStock: true,
    },
  ];

  return (
    <div>
      <HeroSection heroImage={HeroCCTVImage.src} />

      <div className="sm:ml-8 ml-14">
        <h1 className="font-bold mb-4 mt-12">Filter your selections</h1>
        <div className="flex gap-4 flex-wrap">
          <Link href="/products">
            <button className="lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1 text-white font-bold rounded-full hover:bg-gray-500 border border-white border-opacity-70 md:text-sm sm:text-xs">
              View All
            </button>
          </Link>
          <Link href="/products/phones">
            <button className="lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1 text-white font-bold rounded-full hover:bg-gray-500 border border-white border-opacity-70 md:text-sm sm:text-xs">
              Phones
            </button>
          </Link>
          <Link href="/products/laptops">
            <button className="lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1 text-white font-bold rounded-full hover:bg-gray-500 border border-white border-opacity-70 md:text-sm sm:text-xs">
              Laptops
            </button>
          </Link>
          <Link href="/product/cctv">
            <button className="lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1 bg-white text-black font-bold rounded-full md:text-sm sm:text-xs">
              CCTV
            </button>
          </Link>
          <Link href="/products/accessories">
            <button className="lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1 text-white font-bold rounded-full hover:bg-gray-500 border border-white border-opacity-70 md:text-sm sm:text-xs">
              Accessories
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap">
        {products.map((product) => (
          <div
            key={product.id}
            className="sm:ml-8 mt-10 ml-4 lg:w-[226px] md:w-[200px] sm:w-[150px] w-[140px] h-auto rounded-lg flex-shrink-0"
          >
            <div className="w-full h-[200px] overflow-hidden rounded-lg">
              <Image
                src={product.imageSrc}
                alt={product.alt}
                width={226}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="font-bold  md:text-[15px] sm:text-sm text-xs mt-2">
              {product.title}
            </h1>
            <p className="hidden sm:block text-sm md:text-[14px]  mt-1">
              {product.description}
            </p>
            <p className="font-bold  md:text-[18px] sm:text-[16px] text-sm mt-1">
              {product.price}
            </p>
            <div className="flex items-center space-x-2 mt-4">
              <button className="flex-grow px-4 py-2 bg-white text-black font-bold rounded hover:bg-[#9D1CAC] transition duration-300 md:text-sm sm:text-[14px] text-xs">
                Buy Now
              </button>
             <div className="h-8 w-8 flex items-center justify-center rounded-4 hover:cursor-pointer border-2 ">
              <FontAwesomeIcon icon={faShoppingCart} className="text-white px-1" />
            </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default CCTVDetails;
