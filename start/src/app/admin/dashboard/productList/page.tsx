"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface Product {
  _id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try { 
        ////http://localhost:3000/api/product  ..https://desh-e-mart.vercel.app
        const response = await fetch("http://desh-e-mart.vercel.app/api/product");
        const res = await response.json();
        console.log("Fetched products:", res); 
        setProducts(res.data); 
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div>
    <header className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <h1 className="text-2xl font-bold text-white sm:text-3xl">Product List</h1>
                <hr className="my-2 h-px border-0 bg-purple-600" />
    </header>
    <div className="grid grid-cols-4 gap-4 p-4">
      {Array.isArray(products) &&
        products.map((product) => (
          <div
            key={product._id}
            className="rounded-lg bg-gray-200 shadow-md overflow-hidden cursor-pointer hover:bg-gray-300"
          >
          <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-black">{product.title}</h2>
              <p className="text-sm text-gray-600">{product.category}</p>
              <p className="text-gray-800 font-semibold">${product.price}</p>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
};

export default ProductList;
