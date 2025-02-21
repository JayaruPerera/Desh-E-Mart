import Header from "@/sections/Header";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import plap1 from "@/assets/images/plap1.png";
import plap2 from "@/assets/images/plap2.png";
import pphone1 from "@/assets/images/pphone1.png";
import pphone2 from "@/assets/images/pphone2.png";
import pcctv1 from "@/assets/images/pcctv1.png";
import S23ultra from "@/assets/images/S23ultra.jpg";
import cart from "@/assets/icons/cart.png";
import left from "@/assets/icons/left.png";
import { px } from "framer-motion";
import Footer from "@/sections/Footer";

interface Product {
  name: string;
  price: string;
  stock: boolean;
  image: StaticImageData;
}


const ProductDetails = () => {
  return (
    <div className=" h-full">
      {/* Header */}
      <Header />

      {/* Product Section */}
      <main className="bg-[#161A1D] max-w-7xl mx-auto p-4   ">
        <div className="mt-8 ">
          <a
            href="/products"
            className="text-l mt-20 mb-4 flex items-center text-white gap-2"
          >
            <svg
              width="8"
              height="12"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.30753 9.77806C5.01161 10.074 4.53177 10.074 4.23585 9.77806L0.532184 6.07068C-0.0592017 5.47877 -0.0589738 4.51955 0.53264 3.92786L4.23858 0.221952C4.5345 -0.0739838 5.01433 -0.0739838 5.31027 0.221952C5.60621 0.517894 5.60621 0.997702 5.31027 1.29364L2.13841 4.46552C1.84242 4.76144 1.84242 5.24127 2.13841 5.53719L5.30753 8.70638C5.60348 9.0023 5.60348 9.48206 5.30753 9.77806Z"
                fill="#FCFDFF"
                fillOpacity="0.8"
              />
            </svg>
            <div>Back </div>
          </a>
          <h1 className="text-2xl font-bold">Samsung Galaxy S23 Ultra</h1>
        </div>

       
        
        <div className="bg-[#161A1D] p-6 rounded shadow-md border-b-2 border-gray-600 pb-36">
          <div className="flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="w-full md:w-1/3">
              <Image
                src={S23ultra}
                alt="Samsung Galaxy S23 Ultra"
                className="rounded"
                width={300}
                height={100}
              />
            </div>
            {/* Product Details */}
            <div className="w-full md:w-2/3 md:pl-6">
              <h1 className="text-3xl font-semibold  mt-4">LKR 376,900.00</h1>
              <p className="bg-green-500 mt-3 text-sm rounded px-2 py-1 inline-block">
                In Stock
              </p>
              <p className="mt-4 border-b border-gray-600 pb-2">
                Original Samsung Galaxy S23 Ultra 5G Mobile Phone 8GB/12GB RAM
                256GB/512GB Snapdragon 8 Gen 2 120Hz AMOLED 2X Display Android
                13
              </p>
              <div className="mt-8">
                <h3 className="">Specifications</h3>
                <p className=" mt-4 border-b border-gray-600 pb-2">
                  SIM Card Quantity: 2 SIM Card | Wireless Charging: Yes Battery
                  | Capacity: 4900mAh | Charging Interface Type: Type-C
                </p>
              </div>
              <div className="mt-10">
                <Link href="/products/productpurchase">
                <button className="bg-red-500 text-white px-6 py-2 rounded mr-2">
                  Buy now
                </button>
                </Link>
                <button className="bg-white text-black px-6 py-2 rounded">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* More to Select Section */}
        <div className="mt-8 border-b-2 border-gray-600 pb-48 flex-wrap">
          <h3 className="text-xl font-bold mb-4">More to select</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 h-fit">
            {/* Product Card */}
            {[
              {
                name: "Xiaomi 13 Pro",
                price: "LKR 234000.00",
                stock: true,
                image: pphone2,
              },
              {
                name: "Samsung Galaxy A54",
                price: "LKR 165000.00",
                stock: false,
                image: pphone2,
              },
              {
                name: "Samsung Galaxy A54",
                price: "LKR 165000.00",
                stock: false,
                image: pphone2,
              },
              {
                name: "Samsung Galaxy A54",
                price: "LKR 165000.00",
                stock: false,
                image: pphone2,
              },
              {
                name: "Samsung Galaxy A54",
                price: "LKR 165000.00",
                stock: false,
                image: pphone2,
              },
              {
                name: "Realme 11 Pro",
                price: "LKR 83500.00",
                stock: true,
                image: pphone2,
              },
              {
                name: "Vivo V29",
                price: "LKR 97300.00",
                stock: false,
                image: pphone2,
              },
            ].map((product, index) => (
              <div key={`product-${index}`} className="w-full rounded relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={226}
                  className="w-full  object-cover rounded"
                />
                <div
                  className={`text-sm absolute right-2 top-2 rounded px-2 py-1 bg-opacity-80 ${
                    product.stock === true ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {product.stock === true ? "In Stock" : "Out of Stock"}
                </div>
                <h4 className="font-bold mt-2">{product.name}</h4>
                <p className="text-lg font-semibold">{product.price}</p>

                <div className="flex flex-row mt-6 space-x-4">
                  <button className="flex-grow w-[59px] h-[48px] font-bold rounded hover:bg-red-500 hover:text-white  md:text-sm sm:text-[14px] text-xs bg-white text-[#161A1D]">
                    Buy now
                  </button>
                  <button className="w-[59px] h-[48px] bg-[#161A1D] text-black rounded">
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
