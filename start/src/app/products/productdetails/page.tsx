import Header from "@/sections/Header";
import Link from "next/link";
import Image from "next/image";

// Importing images
import plap1 from "@/assets/images/plap1.png";
import plap2 from "@/assets/images/plap2.png";
import pphone1 from "@/assets/images/pphone1.png";
import pphone2 from "@/assets/images/pphone2.png";
import pcctv1 from "@/assets/images/pcctv1.png";
import S23ultra from "@/assets/images/S23ultra.jpg";
import cart from "@/assets/icons/cart.png";
import left from "@/assets/icons/left.png"
import { px } from "framer-motion";
import { Footer } from "@/sections/Footer";

const ProductDetails = () => {
  return (
    <div className="bg-[#161A1D] min-h-screen">
      {/* Header */}
      <Header />

      {/* Product Section */}
      <main className="max-w-7xl mx-auto p-4 border-b-2 border-gray-600 pb-3 ">
        <div className="mt-8 border-b-2 border-gray-600 pb-3">
          <a href="/products" className="text-xl mt-20 mb-4 flex">
            Back
          </a>
          <h1 className="text-2xl font-bold">Samsung Galaxy S23 Ultra</h1>
        </div>
        <div className="bg-[#161A1D] p-6 rounded shadow-md border-b-2 border-gray-600 pb-6">
          <div className="flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={S23ultra} // Imported image
                alt="Samsung Galaxy S23 Ultra"
                className="rounded"
                width={300}
                height={100}
              />
            </div>
            {/* Product Details */}
            <div className="w-full md:w-1/2 md:pl-6">
              
              <p className="text-3xl font-semibold text-red-500 mt-4">
                LKR 376,900.00
              </p>
              <p className="text-green-500 mt-2">In Stock</p>
              <p className="mt-4">
                <strong>Specifications:</strong> <br />
                SIM Card Quantity: 2 SIM Card <br />
                Wireless Charging: Yes <br />
                Battery Capacity: 4900mAh <br />
                Charging Interface Type: Type-C
              </p>
              <div className="mt-6">
                <button className="bg-red-500 text-white px-6 py-2 rounded mr-2">
                  Buy now
                </button>
                <button className="bg-white text-black px-6 py-2 rounded">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* More to Select Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">More to select</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product Card */}
            {[
              {
                name: "Xiaomi 13 Pro",
                price: "LKR 234000.00",
                stock: "Out of Stock",
                image: pphone2,
              },
              {
                name: "Samsung Galaxy A54",
                price: "LKR 165000.00",
                stock: "Out of Stock",
                image: pphone2,
              },
              {
                name: "Realme 11 Pro",
                price: "LKR 83500.00",
                stock: "In Stock",
                image: pphone2,
              },
              {
                name: "Vivo V29",
                price: "LKR 97300.00",
                stock: "In Stock",
                image: pphone2,
              },
            ].map((product, index) => (
              <div key={index} className=" p-4 rounded shadow">
                <Image
                  src={product.image} // Correctly referencing the imported image
                  alt={product.name}
                  className="w-full h-48 object-cover rounded"
                />
                <h4 className="font-bold mt-2">{product.name}</h4>
                <p className="text-lg font-semibold">{product.price}</p>
                <p
                  className={`text-sm ${
                    product.stock === "In Stock"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {product.stock}
                </p>
              <div className= {`flex flex-row mt-6 space-x-4 `} >
                  <button
                    className={`w-full mt-2 px-4 py-2 ${
                      product.stock === "In Stock"
                        ? "bg-red-500 text-white"
                        : "bg-gray-300 text-black cursor-not-allowed"
                    } rounded`}
                    disabled={product.stock !== "In Stock"}
                  >
                    Buy now
                  </button>
                  <button className={`bg-white text-black mt-2 px-4 py-2 rounded ${
                    product.stock === "In Stock" ? "cursor-pointer" : "cursor-not-allowed"
                  }`}>
                    <Image
                      src={cart}
                      alt="add to cart"
                      width={59}
                      height={48}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default ProductDetails;
