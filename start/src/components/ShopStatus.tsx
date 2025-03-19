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
  const [isUpdating, setIsUpdating] = useState(false);
  const { user, isLoaded } = useUser();

  // Set initial status from props
  useEffect(() => {
    console.log("Initial status from props:", initialStatus);
    setIsOpen(initialStatus);
  }, [initialStatus]);

  useEffect(() => {
    if (isLoaded && user) {
      // Check if user has admin role in metadata
      setIsAdmin(user.publicMetadata?.role === "admin");
    }
  }, [user, isLoaded]);

  // Add polling to keep status updated for all users
  useEffect(() => {
    const pollStatus = async () => {
      try {
        // Add a timestamp to prevent caching
      const timestamp = new Date().getTime();
      const response = await fetch(`/api/shop-status?t=${timestamp}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
          }
        });
        if (response.ok) {
          const data = await response.json();
          console.log("Polled shop status:", data.isOpen);
          setIsOpen(data.isOpen);
        }
      } catch (error) {
        console.error("Error polling shop status:", error);
      }
    };

    // Poll every 30 seconds to keep status updated
    const interval = setInterval(pollStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleStatus = async () => {
    if (!isAdmin || isUpdating) return;
    
    setIsUpdating(true);
    try {
      console.log("Current status before toggle:", isOpen);
      const newStatus = await toggleShopStatus();
      console.log("New status after toggle:", newStatus);
      
      // Verify the change by making a direct GET request
      const verifyResponse = await fetch('/api/shop-status', { 
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' }
      });
      const verifyData = await verifyResponse.json();
      console.log("Verified status from database:", verifyData.isOpen);
      
      setIsOpen(newStatus);
    } catch (error) {
      console.error("Error toggling shop status:", error);
    } finally {
      setIsUpdating(false);
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
          disabled={isUpdating}
          className="mt-2 px-3 py-1 text-sm rounded-md text-white admin-toggle-btn"
          style={{ 
            backgroundColor: isOpen ? "#F44336" : "#4CAF50",
            transition: "background-color 0.3s ease",
            zIndex: 10,
            position: "relative",
            opacity: isUpdating ? 0.7 : 1
          }}
        >
          {isUpdating ? "Updating..." : `Set as ${isOpen ? "Closed" : "Open"}`}
        </button>
      )}
    </>
  );
}