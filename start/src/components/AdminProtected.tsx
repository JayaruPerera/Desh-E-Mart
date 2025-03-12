"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { checkAdminAccess } from "@/lib/auth-action";

export default function AdminProtected({ children }: { children: React.ReactNode }) {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    async function checkAccess() {
      if (!isLoaded) return;
      
      if (!user) {
        router.push("/sign-in");
        return;
      }
      
      try {
        // Check if user has admin role in metadata
        const userIsAdmin = user.publicMetadata?.role === "admin";
        setIsAdmin(userIsAdmin);
        
        if (!userIsAdmin) {
          router.push("/");
        }
      } catch (error) {
        console.error("Error checking admin status:", error);
        router.push("/");
      } finally {
        setIsChecking(false);
      }
    }
    
    checkAccess();
  }, [user, isLoaded, router]);

  if (isChecking) {
    return <div className="min-h-screen flex items-center justify-center">Checking permissions...</div>;
  }

  if (!isAdmin) {
    return null; // Will redirect in useEffect
  }

  return <>{children}</>;
}