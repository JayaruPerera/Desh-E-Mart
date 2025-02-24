'use client';

import HeroSection from "./hero";
import Link from "next/link";
import Image from "next/image";
import plap1 from "@/assets/images/plap1.png";
import plap2 from "@/assets/images/plap2.png";
import pphone1 from "@/assets/images/pphone1.png";
import pphone2 from "@/assets/images/pphone2.png";
import pcctv1 from "@/assets/images/pcctv1.png";
import HeroProduct from "@/assets/images/hero_product.png";
import Header from "@/sections/Header";
import { useEffect, useState } from "react";
import { Navbar } from "@nextui-org/react";
import Footer from "@/sections/Footer";

//Helps TypeScript ensure products follow this structure.
interface Product {
  _id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);   //products: Stores fetched product data.
  const [loading, setLoading] = useState<boolean>(true);   //loading: Tracks if data is being fetched.
  const [selectedCategory, setSelectedCategory] = useState<string>("All");  //selectedCategory: Stores the selected filter category.
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {                //Uses useEffect to fetch product data when the component mounts.
    const fetchProducts = async () => {
      try {                             //http://localhost:3000/api/product   ..//https://desh-e-mart.vercel.app
        const response = await fetch("https://desh-e-mart.vercel.app/api/product");
        const res = await response.json();   //Fetches product data from the API.
        console.log("Fetched products:", res);
        setProducts(res.data);  //Sets the fetched product data to the products state.
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);      //Sets loading to false when done.
      }
    };

    fetchProducts();    //Calls fetchProducts when the component mounts.
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredProducts = loading
    ? []
    : products.filter((product) => {
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        const matchesSearch = searchQuery === "" || product.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });

  if (loading) {
    return <div>Loading products...</div>;
  }

  // const buttonStyle = (category: string) => {
  //   return selectedCategory === category
  //     ? "lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1 bg-white text-black font-bold rounded-full hover:bg-gray-500 md:text-sm sm:text-xs"
  //     : "lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1 text-white font-bold rounded-full hover:bg-gray-500 border border-white border-opacity-70 md:text-sm sm:text-xs";
  // };

  return (
    <div>
      <Header />
      <HeroSection heroImage={HeroProduct.src} onSearch={handleSearch} />

      <div className="sm:ml-8 ml-14">
        <h1 className="font-bold mb-4 mt-12">Filter your selections</h1>  
        <div className="flex gap-4 flex-wrap">

          {/* //Clicking a button updates selectedCategory, which re-filters products. */}
          <button
            className={`lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1 font-bold rounded-full  md:text-sm sm:text-xs ${
              selectedCategory === "All"
                ? "bg-white text-black hover:bg-gray-500"
                : "text-white hover:bg-gray-500"
            }`}
            onClick={() => setSelectedCategory("All")}
          >
            View All
          </button>

          <button 
      className={`lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1 font-bold rounded-full  md:text-sm sm:text-xs ${
        selectedCategory === "Mobile Phone"
        ? "bg-white text-black hover:bg-gray-500"
        : "text-white hover:bg-gray-500"
      }`}
      onClick={()=>setSelectedCategory("Mobile Phone")}>Phones</button>

<button 
      className={`lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1 font-bold rounded-full  md:text-sm sm:text-xs ${
        selectedCategory === "Laptop"
        ? "bg-white text-black hover:bg-gray-500"
        : "text-white hover:bg-gray-500"
      }`}
      onClick={()=>setSelectedCategory("Laptop")} >Laptops</button>

<button 
      className={`lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1 font-bold rounded-full  md:text-sm sm:text-xs ${
        selectedCategory === "CCTV"
        ? "bg-white text-black hover:bg-gray-500"
        : "text-white hover:bg-gray-500"
      }`}
      onClick={()=>setSelectedCategory("CCTV")}>CCTV</button>

<button 
      className={`lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1 font-bold rounded-full  md:text-sm sm:text-xs ${
        selectedCategory === "Accessories"
        ? "bg-white text-black hover:bg-gray-500"
        : "text-white hover:bg-gray-500"
      }`}
      onClick={()=>setSelectedCategory("Accessories")}>Accessories</button>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-10 lg:px-12 justify-items-center">
    {/* Maps through filteredProducts and displays:
      Product image
      Title
      Description
      Price (formatted)
      "Buy Now" button (linked to Stripe checkout) */}
    {filteredProducts.map((product) => (
    <div key={product._id} className="sm:ml-8 mt-10 ml-14 lg:w-[226px] md:w-[200px] sm:w-[130px] h-auto flex flex-col justify-between">
        <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            className="w-full rounded-xl "
            />
            <h1 className="font-bold md:text-[15px] sm:text-sm">{product.title}</h1>
            <p className="hidden text-justify sm:block text-sm md:text-[14px] truncate" title={product.description}>{product.description}</p>
            <p className="font-bold md:text-[18px] sm:text-[16px]">LKR {product.price.toLocaleString()}</p>

    <Link href={"https://buy.stripe.com/test_aEU16B1HRdK98xy7sw?prefilled_email=lankeshpathmaraj%40gmail.com"}>
    <button className="w-full mt-4 px-4 py-2 bg-white text-black font-bold rounded hover:bg-[#9D1CAC] transition duration-300 md:text-sm sm:text-[14px]">
        Buy Now
    </button>
    </Link>
    </div>
    ))}
        </div>
        <Footer/>
      </div>
  );
}

export default ProductsPage;
