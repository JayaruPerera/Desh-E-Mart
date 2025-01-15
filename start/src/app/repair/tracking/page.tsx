"use client";

import { useState, useEffect } from "react";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

// Define the structure of each order
type Order = {
  id: string;
  date: string;
  product: string;
  deviceType: string;
  issue: string;
  address: string;
  status: string;
};

export default function Tracking() {
  // Explicitly define the type of orders state
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Simulated fetch logic - replace this with actual API call or data source
    const fetchOrders = async () => {
      const ordersData: Order[] = [
        {
          id: "2345625346",
          date: "12/11/2024",
          product: "Samsung Galaxy S23 Ultra",
          deviceType: "Phone",
          issue:
            "My phone battery is dying immediately. So, I want to replace it.",
          address: "Pambahinna, Balangoda, Rathnapura",
          status: "Order pending",
        },
        {
          id: "4213764598",
          date: "12/11/2024",
          product: "Samsung Galaxy S23 Ultra",
          deviceType: "Phone",
          issue:
            "My phone battery is dying immediately. So, I want to replace it.",
          address: "Pambahinna, Balangoda, Rathnapura",
          status: "Repairing",
        },
      ];
      setOrders(ordersData);
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <Header />
      <div className="pt-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto p-2">
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
                fill-opacity="0.8"
              />
            </svg>
            <div>Back </div>
          </a>
        </div>
        <h1 className="text-2xl font-bold mb-6">
          Order queue ({orders.length})
        </h1>

        <div className="space-y-6">
          {orders.map((order, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg w-4/5">
              <div className="flex items-start">
                <div className="flex flex-col mr-6">
                  {/* Order pending step */}
                  <div className="flex">
                    <div
                      className={`w-4 h-4 ${
                        order.status === "Order pending" ||
                        order.status === "Repairing" ||
                        order.status === "Completed"
                          ? "bg-white"
                          : "bg-gray-600"
                      } rounded-full border mb-0`}
                    ></div>
                    <span className="ml-2 text-white">Order pending</span>
                  </div>
                  <div className="h-6 border-l-2 ml-2 mb-2 border-white"></div>

                  {/* Repairing step */}
                  <div className="flex">
                    <div
                      className={`w-4 h-4 ${
                        order.status === "Repairing" ||
                        order.status === "Completed"
                          ? "bg-white"
                          : "bg-gray-600"
                      } rounded-full border`}
                    ></div>
                    <span className="ml-2 text-white">Repairing</span>
                  </div>
                  <div className="h-6 border-l-2 ml-2 mb-2 border-white"></div>

                  {/* Completed step */}
                  <div className="flex">
                    <div
                      className={`w-4 h-4 ${
                        order.status === "Completed"
                          ? "bg-white"
                          : "bg-gray-600"
                      } rounded-full border`}
                    ></div>
                    <span className="ml-2 text-white">Completed</span>
                  </div>
                </div>

                {/* Border with dynamic height */}
                <div className="flex items-center">
                  <div className="border-l-2 border-white mx-4 lg:h-32 sm:h-48"></div>
                </div>

                {/* Order details */}
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-white mb-2">
                    Order: {order.id}
                  </h2>
                  <p className="text-white">{order.product}</p>
                  <p className="text-gray-400">
                    Device type: {order.deviceType}
                  </p>
                  <p className="text-gray-400">{order.issue}</p>
                  <p className="mt-2 text-white">
                    Delivery address: {order.address}
                  </p>
                </div>

                {/* Order date */}
                <div className="ml-auto text-gray-400">
                  <p>Date: {order.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
