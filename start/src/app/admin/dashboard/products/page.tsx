"use client";

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

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

//Helps TypeScript ensure products follow this structure.
interface Product {
  _id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]); //products: Stores fetched product data.
  const [loading, setLoading] = useState<boolean>(true); //loading: Tracks if data is being fetched.
  const [selectedCategory, setSelectedCategory] = useState<string>("All"); //selectedCategory: Stores the selected filter category.
  const router = useRouter();

  useEffect(() => {
    //Uses useEffect to fetch product data when the component mounts.
    const fetchProducts = async () => {
      try {
        //http://localhost:3000/api/product   ..//https://desh-e-mart.vercel.app
        const response = await fetch("http://desh-e-mart.vercel.app/api/product");
        const res = await response.json(); //Fetches product data from the API.
        console.log("Fetched products:", res);
        setProducts(res.data); //Sets the fetched product data to the products state.
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); //Sets loading to false when done.
      }
    };

    fetchProducts(); //Calls fetchProducts when the component mounts.
  }, []);

  const filteredProducts = loading
    ? [] //If loading is true, it returns an empty array.
    : selectedCategory === "All"
    ? products //If "All" is selected, it shows all products.
    : products.filter((product) => product.category === selectedCategory); //Otherwise, it filters products by the selected category.

  if (loading) {
    return <div>Loading products...</div>;
  }

  const buttonStyle = (category: string) => {
    return selectedCategory === category
      ? "lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1 bg-white text-black font-bold rounded-full hover:bg-gray-500 md:text-sm sm:text-xs"
      : "lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1 text-white font-bold rounded-full hover:bg-gray-500 border border-white border-opacity-70 md:text-sm sm:text-xs";
  };

  const handleDelete = async (productId: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const response = await fetch(
          `http://desh-e-mart.vercel.app/api/product?id=${productId}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          // Remove the deleted product from state
          setProducts(products.filter((product) => product._id !== productId));
        } else {
          console.error("Failed to delete product");
        }
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  const handleUpdate = (productId: string) => {
    router.push(`/admin/dashboard/products/edit/${productId}`);
  };

  return (
    <>
      <header>
        <div>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white sm:text-3xl">
                  All Products
                </h1>

                <p className="mt-1.5 text-sm text-white">
                  Lets Create a New Product
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <div>
                    <Link href="/admin/dashboard/products/newProduct">
                      <Button
                        color="secondary"
                        variant="shadow"
                        className="mt-6"
                        size="lg"
                      >
                        Add Product
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <hr className="my-2 h-px border-0 bg-purple-600" />

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        Products will displayed here
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div>
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
                onClick={() => setSelectedCategory("Mobile Phone")}
              >
                Phones
              </button>

              <button
                className={`lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1 font-bold rounded-full  md:text-sm sm:text-xs ${
                  selectedCategory === "Laptop"
                    ? "bg-white text-black hover:bg-gray-500"
                    : "text-white hover:bg-gray-500"
                }`}
                onClick={() => setSelectedCategory("Laptop")}
              >
                Laptops
              </button>

              <button
                className={`lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1 font-bold rounded-full  md:text-sm sm:text-xs ${
                  selectedCategory === "CCTV"
                    ? "bg-white text-black hover:bg-gray-500"
                    : "text-white hover:bg-gray-500"
                }`}
                onClick={() => setSelectedCategory("CCTV")}
              >
                CCTV
              </button>

              <button
                className={`lg:px-8 lg:py-3 md:px-6 md:py-2 sm:px-4 sm:py-1 font-bold rounded-full  md:text-sm sm:text-xs ${
                  selectedCategory === "Accessories"
                    ? "bg-white text-black hover:bg-gray-500"
                    : "text-white hover:bg-gray-500"
                }`}
                onClick={() => setSelectedCategory("Accessories")}
              >
                Accessories
              </button>
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
              <div
                key={product._id}
                className="sm:ml-8 mt-10 ml-14 lg:w-[226px] md:w-[200px] sm:w-[130px] h-auto flex flex-col justify-between"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="w-full rounded-xl "
                />
                <h1 className="font-bold md:text-[15px] sm:text-sm">
                  {product.title}
                </h1>
                <p
                  className="hidden text-justify sm:block text-sm md:text-[14px] truncate"
                  title={product.description}
                >
                  {product.description}
                </p>
                <p className="font-bold md:text-[18px] sm:text-[16px]">
                  LKR {product.price.toLocaleString()}
                </p>

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleUpdate(product._id)}
                    className="w-full px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition duration-300 md:text-sm sm:text-[14px]"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="w-full px-4 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition duration-300 md:text-sm sm:text-[14px]"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
