"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { toggleShopStatus } from "@/lib/shop-status";
import './page.css';

interface ShopStatusProps {
  initialStatus: boolean;
}

export default function ShopStatus({ initialStatus }: ShopStatusProps) {
  const [isOpen, setIsOpen] = useState(initialStatus);
  const [isAdmin, setIsAdmin] = useState(false);
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && user) {
      // Check if user has admin role in metadata
      setIsAdmin(user.publicMetadata?.role === "admin");
    }
  }, [user, isLoaded]);

  const handleToggleStatus = async () => {
    if (!isAdmin) return;
    
    try {
      const newStatus = await toggleShopStatus();
      setIsOpen(newStatus);
    } catch (error) {
      console.error("Error toggling shop status:", error);
    }
  };

  return (
    <>
    <h4 className="openclose">
      <div 
        className={`dot ${isOpen ? "bg-green-500" : "bg-red-500"}`} 
        style={{ backgroundColor: isOpen ? "#4CAF50" : "#F44336" }}
      ></div>
      {isOpen ? "Open" : "Closed"}
    </h4>
    <div className="time">
      <p>from 09:00 am to 05:00 pm</p>
      <p>Monday - Friday</p>
    </div>
    
    {isAdmin && (
      <button 
        onClick={handleToggleStatus}
        className="mt-2 px-3 py-1 text-sm rounded-md text-white admin-toggle-btn"
        style={{ 
          backgroundColor: isOpen ? "#F44336" : "#4CAF50",
          transition: "background-color 0.3s ease",
          zIndex: 10,
          position: "relative"
        }}
      >
        Set as {isOpen ? "Closed" : "Open"}
      </button>
    )}
  </>
  );
}