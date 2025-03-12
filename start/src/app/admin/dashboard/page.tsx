"use client";

import Link from "next/link";
import Navbar from "../ui/dashboard/navbar/navbar";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import AdminProtected from "@/components/AdminProtected";

export default function Dashboard() {
  const router = useRouter();
  const { user, isLoaded } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      // Check if user is admin
      const adminEmails = ["jayaruperera1998@gmail.com"]; // Replace with your actual admin email
      const primaryEmail = user?.primaryEmailAddress?.emailAddress;

      const userIsAdmin = primaryEmail
        ? adminEmails.includes(primaryEmail)
        : false;
      setIsAdmin(userIsAdmin);

      // If not admin, redirect to home
      if (!userIsAdmin) {
        router.push("/");
      }

      setIsChecking(false);
    }
  }, [user, isLoaded, router]);

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Checking permissions...
      </div>
    );
  }

  if (!isAdmin) {
    return null; // Will redirect in useEffect
  }

  return (
    <AdminProtected>
    <div>
      <header>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                Admin Dashboard
              </h1>

              <p className="mt-1.5 text-sm text-white">
                Customize your Products, Categories and Orders using this menu.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div>
                <div>
                  <Link href="/products">
                    <Button
                      color="secondary"
                      variant="shadow"
                      className="mt-6"
                      size="lg"
                    >
                      View Products
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <Link href="/">
                  <Button
                    color="secondary"
                    variant="shadow"
                    className="mt-6"
                    size="lg"
                  >
                    View Shop
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 px-4 mx-4">
        <Link href="/admin/dashboard/productList">
          <div className="h-32 rounded-lg bg-gray-200 flex items-center justify-center">
            <h2 className="text-black text-xl shadow-lg font-bold ">
              Products
            </h2>
          </div>
        </Link>
        <div className="h-32 rounded-lg bg-gray-200"></div>
        <div className="h-32 rounded-lg bg-gray-200"></div>
        <div className="h-32 rounded-lg bg-gray-200"></div>
      </div>
    </div>
    </AdminProtected>
  );
}
