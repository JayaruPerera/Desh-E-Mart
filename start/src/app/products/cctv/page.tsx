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

           
            <div className="flex flex-row mt-6 space-x-4">
              <button
                className={`flex-grow w-[59px] h-[48px] font-bold rounded  md:text-sm sm:text-[14px] text-xs ${
                  product.inStock === true
                    ? "bg-red-500 text-white"
                    : "bg-gray-300 text-black cursor-not-allowed"
                } rounded`}
                disabled={product.inStock !== true}
              >
                Buy now
              </button>
              <button
                className={`w-[59px] h-[48px] bg-[#161A1D] text-black rounded  ${
                  product.inStock === true
                    ? "cursor-pointer"
                    : "cursor-not-allowed"
                }`}
              >
                <svg
                  width="59"
                  height="48"
                  viewBox="0 0 59 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="58"
                    height="47"
                    rx="5.5"
                    stroke="#FCFDFF"
                  />
                  <g clip-path="url(#clip0_463_140)">
                    <path
                      d="M16.8331 15.4492L16.8331 15.4492C16.7029 15.4034 16.5602 15.4719 16.5144 15.6021L16.8331 15.4492ZM16.8331 15.4492L17.1345 15.5552L17.1345 15.5552M16.8331 15.4492L17.1345 15.5552M17.1345 15.5552C17.7608 15.7753 18.2526 15.9491 18.6324 16.1354L18.6324 16.1354M17.1345 15.5552L18.6324 16.1354M18.6324 16.1354C19.0273 16.3291 19.3237 16.5469 19.5424 16.867C19.7605 17.1861 19.8614 17.5484 19.9103 18.0005C19.9323 18.2034 19.9445 18.4341 19.951 18.6975L19.963 19.1851M18.6324 16.1354L19.963 19.1851M19.963 19.1851H20.4508M19.963 19.1851H20.4508M20.4508 19.1851H31.089C31.9408 19.1851 32.7101 19.1858 33.3217 19.2542C33.6263 19.2882 33.8684 19.3368 34.049 19.4003C34.2336 19.4652 34.3101 19.5302 34.3384 19.567L34.3384 19.5671M20.4508 19.1851L34.3384 19.5671M34.3384 19.5671C34.4538 19.7171 34.522 19.9345 34.494 20.3885C34.4653 20.8531 34.3442 21.4653 34.168 22.3484C34.1679 22.349 34.1678 22.3495 34.1677 22.35L33.6685 24.7717C33.5084 25.5484 33.3966 26.0864 33.2609 26.4891C33.1296 26.8788 32.9934 27.085 32.8179 27.2279C32.6425 27.3709 32.4131 27.4627 32.0049 27.5126C31.5831 27.5642 31.0336 27.5651 30.2406 27.5651H24.9377C23.5284 27.5651 22.5244 27.5639 21.7621 27.4558C21.017 27.3502 20.5769 27.1512 20.2508 26.8073C19.8929 26.4298 19.7003 26.0523 19.591 25.4142C19.4756 24.74 19.4583 23.8081 19.4583 22.3251V19.7234C19.4583 18.9948 19.458 18.4677 19.4132 18.0543M34.3384 19.5671L19.1296 17.1491M19.1296 17.1491L19.1296 17.1491C19.2838 17.3747 19.3691 17.6465 19.4132 18.0543M19.1296 17.1491C18.9763 16.9247 18.7613 16.7556 18.4121 16.5843L19.1296 17.1491ZM19.4132 18.0543L18.9161 18.1081L19.4132 18.0543ZM16.6673 15.9209L16.6673 15.9209L16.9285 16.0128C16.9285 16.0128 16.9285 16.0128 16.9285 16.0128C17.5845 16.2434 18.0564 16.4097 18.4121 16.5843L16.6673 15.9209ZM16.6673 15.9209C16.537 15.8751 16.4686 15.7324 16.5144 15.6022L16.6673 15.9209Z"
                      stroke="#FCFDFF"
                    />
                    <path
                      d="M21 30.4651C21.6075 30.4651 22.1 30.9576 22.1 31.5651C22.1 32.1726 21.6075 32.6651 21 32.6651C20.3925 32.6651 19.9 32.1726 19.9 31.5651C19.9 30.9576 20.3925 30.4651 21 30.4651Z"
                      stroke="#FCFDFF"
                      stroke-width="0.8"
                    />
                    <path
                      d="M30 30.4651C30.6075 30.4651 31.1 30.9576 31.1 31.5651C31.1 32.1726 30.6075 32.6651 30 32.6651C29.3925 32.6651 28.9 32.1726 28.9 31.5651C28.9 30.9576 29.3925 30.4651 30 30.4651Z"
                      stroke="#FCFDFF"
                      stroke-width="0.8"
                    />
                    <path
                      d="M44.8545 25.0918H47.5205V26.0215H44.8477V28.9541H43.9111V26.0215H41.1973V25.0918H43.918V22.1934H44.8545V25.0918Z"
                      fill="#FCFDFF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_463_140">
                      <rect
                        width="38"
                        height="30"
                        fill="white"
                        transform="translate(10.5 9)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default CCTVDetails;
