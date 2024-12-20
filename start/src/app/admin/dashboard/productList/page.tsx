"use client";

import { useEffect, useState } from "react";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch products from the API
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/product");
                const res = await response.json();
                setProducts(res.data); // Assuming the API returns an array of products
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const truncateDescription = (description:String, maxLength = 100) => {
        return description.length > maxLength
            ? description.substring(0, maxLength) + "..."
            : description;
    };

    return (
        <div>
            <header className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <h1 className="text-2xl font-bold text-white sm:text-3xl">Product List</h1>
                <hr className="my-2 h-px border-0 bg-purple-600" />
            </header>

            {loading ? (
                <div className="text-center text-white">Loading...</div>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4 mx-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="rounded-lg bg-gray-200 shadow-md overflow-hidden cursor-pointer hover:bg-gray-300"
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-black text-lg font-bold">{product.title}</h2>
                                <p className="text-sm text-gray-600">{product.category}</p>
                                <p className="text-sm text-gray-800 mt-2">
                                    {truncateDescription(product.description)}
                                </p>
                                <p className="text-black font-semibold mt-4">LKR {product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
