import HeroSection from "../hero";
import HeroAssImage from "@/assets/images/ass1.jpg";
import Link from "next/link";

import Image from "next/image";
import ASS_P1 from "@/assets/images/ASS_P1.jpg";
import ASS_P2 from "@/assets/images/ASS_P2.jpg";
import ASS_P3 from "@/assets/images/ASS_P3.jpg";
import ASS_P4 from "@/assets/images/ASS_P4.jpg";
import ASS_P5 from "@/assets/images/ASS_P5.jpg";
import ASS_P6 from "@/assets/images/ASS_P6.jpg";
import ASS_P7 from "@/assets/images/ASS_P7.jpg";
import ASS_P8 from "@/assets/images/ASS_P1.jpg";
import ASS_P9 from "@/assets/images/ASS_P9.jpg";
import ASS_P10 from "@/assets/images/ASS_P10.jpg";

import Footer from "@/sections/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function AccessoriesDetails() {
  const products = [
    {
      id: 1,
      imageSrc: ASS_P1,
      alt: "Accessories Model A",
      title: "Accessories Model A",
      description: "High-resolution, night vision, and motion detection.",
      price: "LKR 150,000.00",
      inStock: true,
    },
    {
      id: 2,
      imageSrc: ASS_P2,
      alt: "Accessories Model B",
      title: "Accessories Model B",
      description: "Wireless connectivity, wide-angle lens, and waterproof.",
      price: "LKR 175,000.00",
      inStock: false,
    },
    {
      id: 3,
      imageSrc: ASS_P3,
      alt: "Accessories Model C",
      title: "Accessories Model C",
      description: "Smart integration, cloud storage, and two-way audio.",
      price: "LKR 200,000.00",
      inStock: true,
    },
    {
      id: 4,
      imageSrc: ASS_P4,
      alt: "Accessories Model D",
      title: "Accessories Model D",
      description: "4K resolution, AI analytics, and solar-powered.",
      price: "LKR 250,000.00",
      inStock: true,
    },
    {
      id: 5,
      imageSrc: ASS_P5,
      alt: "Accessories Model E",
      title: "Accessories Model E",
      description: "High-resolution, night vision, and motion detection.",
      price: "LKR 150,000.00",
      inStock: true,
    },
    {
      id: 6,
      imageSrc: ASS_P6,
      alt: "Accessories Model F",
      title: "Accessories Model F",
      description: "Wireless connectivity, wide-angle lens, and waterproof.",
      price: "LKR 175,000.00",
      inStock: false,
    },
    {
      id: 7,
      imageSrc: ASS_P7,
      alt: "Accessories Model G",
      title: "Accessories Model G",
      description: "Smart integration, cloud storage, and two-way audio.",
      price: "LKR 200,000.00",
      inStock: true,
    },
    {
      id: 8,
      imageSrc: ASS_P8,
      alt: "Accessories Model H",
      title: "Accessories Model H",
      description: "4K resolution, AI analytics, and solar-powered.",
      price: "LKR 250,000.00",
      inStock: true,
    },
    {
      id: 9,
      imageSrc: ASS_P9,
      alt: "Accessories Model I",
      title: "Accessories Model I",
      description: "4K resolution, AI analytics, and solar-powered.",
      price: "LKR 250,000.00",
      inStock: true,
    },
    {
      id: 10,
      imageSrc: ASS_P10,
      alt: "Accessories Model J",
      title: "Accessories Model J",
      description: "4K resolution, AI analytics, and solar-powered.",
      price: "LKR 250,000.00",
      inStock: "IN Stock",
    },
  ];

  return (
    <div>
      <HeroSection heroImage={HeroAssImage.src} />

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

          <Link href="/products/cctv">
            <button className="lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1 text-white font-bold rounded-full hover:bg-gray-500 border border-white border-opacity-70 md:text-sm sm:text-xs">
              CCTV
            </button>
          </Link>

          <Link href="/products/accessories">
            <button className="lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1 bg-white text-black font-bold rounded-full md:text-sm sm:text-x">
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
            <div className="w-full h-[200px] overflow-hidden rounded-lg relative">
              {/* Image */}
              <Image
                src={product.imageSrc}
                alt={product.alt}
                width={226}
                height={200}
                className="w-full h-full object-cover"
              />

              {/* In Stock Overlay */}
              <p
                className={`absolute top-2 right-2 text-sm font-bold px-2 py-1 rounded bg-opacity-80 ${
                  product.inStock
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </p>
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
              <button className="flex-grow px-4 py-2 bg-white text-black font-bold rounded hover:bg-red-600 transition duration-300 md:text-sm sm:text-[14px] text-xs">
                Buy Now
              </button>
              <div className="h-9 w-9 flex items-center justify-center  rounded hover:cursor-pointer border-2 ">
                <svg
                  width="39"
                  height="30"
                  viewBox="0 0 39 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_458_770)">
                    <path
                      d="M6.83302 6.44893L6.833 6.44893C6.70275 6.40313 6.56004 6.47159 6.51423 6.60184L6.83302 6.44893ZM6.83302 6.44893L7.13442 6.55489L7.13442 6.55489M6.83302 6.44893L7.13442 6.55489M7.13442 6.55489C7.76063 6.77503 8.25252 6.94876 8.63223 7.13508L8.63224 7.13508M7.13442 6.55489L8.63224 7.13508M8.63224 7.13508C9.02714 7.32884 9.32355 7.54656 9.54233 7.8667C9.76039 8.18582 9.86125 8.54809 9.91018 9.00015C9.93214 9.20308 9.94434 9.43377 9.95086 9.69718L9.96293 10.1848M8.63224 7.13508L9.96293 10.1848M9.96293 10.1848H10.4507M9.96293 10.1848H10.4507M10.4507 10.1848H21.0889C21.9406 10.1848 22.7099 10.1855 23.3216 10.2539C23.6262 10.2879 23.8683 10.3365 24.0489 10.4C24.2335 10.4649 24.3099 10.5299 24.3383 10.5667L24.3383 10.5668M10.4507 10.1848L24.3383 10.5668M24.3383 10.5668C24.4537 10.7168 24.5219 10.9342 24.4938 11.3882C24.4652 11.8528 24.3441 12.465 24.1679 13.3481C24.1678 13.3487 24.1677 13.3492 24.1675 13.3497L23.6684 15.7714C23.5083 16.5481 23.3965 17.0861 23.2608 17.4888C23.1294 17.8785 22.9932 18.0846 22.8178 18.2276C22.6424 18.3706 22.413 18.4624 22.0048 18.5123C21.583 18.5639 21.0335 18.5648 20.2405 18.5648H14.9376C13.5282 18.5648 12.5242 18.5636 11.7619 18.4555C11.0169 18.3499 10.5767 18.1509 10.2506 17.807C9.89279 17.4295 9.7002 17.052 9.59091 16.4139C9.47543 15.7397 9.45817 14.8078 9.45817 13.3248V10.7231C9.45817 9.99446 9.45784 9.46736 9.41308 9.05395M24.3383 10.5668L9.12951 8.14879M9.12951 8.14879L9.12952 8.14881C9.28367 8.37439 9.36895 8.64622 9.41308 9.05395M9.12951 8.14879C8.97615 7.92438 8.76119 7.75529 8.41199 7.58396L9.12951 8.14879ZM9.41308 9.05395L8.91599 9.10776L9.41308 9.05395ZM6.66716 6.92061L6.66717 6.92062L6.92838 7.01246C6.92838 7.01246 6.92838 7.01246 6.92838 7.01246C7.58437 7.24309 8.05632 7.40944 8.41198 7.58395L6.66716 6.92061ZM6.66716 6.92061C6.53692 6.87483 6.46844 6.73213 6.51423 6.60186L6.66716 6.92061Z"
                      stroke="#FCFDFF"
                    />
                    <path
                      d="M11 21.4654C11.6075 21.4654 12.1 21.9579 12.1 22.5654C12.1 23.1729 11.6075 23.6654 11 23.6654C10.3925 23.6654 9.9 23.1729 9.9 22.5654C9.9 21.9579 10.3925 21.4654 11 21.4654Z"
                      stroke="#FCFDFF"
                      stroke-width="0.8"
                    />
                    <path
                      d="M20 21.4654C20.6075 21.4654 21.1 21.9579 21.1 22.5654C21.1 23.1729 20.6075 23.6654 20 23.6654C19.3925 23.6654 18.9 23.1729 18.9 22.5654C18.9 21.9579 19.3925 21.4654 20 21.4654Z"
                      stroke="#FCFDFF"
                      stroke-width="0.8"
                    />
                    <path
                      d="M34.8545 16.0918H37.5205V17.0215H34.8477V19.9541H33.9111V17.0215H31.1973V16.0918H33.918V13.1934H34.8545V16.0918Z"
                      fill="#FCFDFF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_458_770">
                      <rect
                        width="38"
                        height="30"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default AccessoriesDetails;
