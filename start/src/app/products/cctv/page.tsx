import HeroSection from "../hero";
import HeroCCTVImage from "@/assets/images/cctv1.jpg";
import Image from "next/image";
import Link from "next/link";

function CCTVDetails() {
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

          <Link href="/cctv">
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

      

    </div>
  );
}

export default CCTVDetails;
