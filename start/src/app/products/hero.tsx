import HeroProduct from "@/assets/images/hero_product.png";
import { FC, useState, useEffect } from "react";
import Image from "next/image";

interface HeroSectionProps {
  heroImage: string;
  onSearch: (query: string) => void;
  isSearching?: boolean; // Add prop for search loading state
}

const HeroSection: FC<HeroSectionProps> = ({ heroImage = HeroProduct.src, onSearch, isSearching = false  }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

// this effect automatically trigger search when input is cleared
useEffect(() => {
  if (searchQuery === "") {
    onSearch("");
  }
}, [searchQuery, onSearch]);

  return (
    <div>
      <div className="relative w-full h-auto aspect-[1920/477] bg-cover bg-center md:pb-4 sm:pb-6" style={{
                backgroundImage: `url(${heroImage})`,
                }}>
      <div className="flex flex-col items-center justify-center text-center z-10 sm:py-2">
        <h1 className="lg:mt-36 md:mt-24 sm:mt-20 font-bold lg:text-6xl md:text-4xl sm:text-2xl">
          Find Your Perfect Match
        </h1>
        <p className="mt-4 lg:text-xl md:text-lg sm:text-sm sm:mx-10 sm:mt-2">
          Shop the latest gadgets and accessories tailored to your needs.
        </p>

        <div className="mt-6 flex items-center">
        <input
          type="text"
          placeholder="Search products..."
          className="lg:px-6 lg:py-3 md:px-4 md:py-2 sm:px-3 sm:py-1 border border-white border-opacity-70 rounded-full bg-transparent text-white placeholder-white placeholder-opacity-40 focus:outline-none focus:ring-2 focus:ring-white mr-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          />
        <button className="lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1 bg-white text-black font-bold rounded-full hover:bg-gray-200"
        onClick={handleSearch}
        disabled={isSearching}
        >
         {isSearching ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
          ) : (
            "Search"
          )}
        </button>
      </div>
          </div>

      </div>

      
    </div>
  );
}

export default HeroSection;
