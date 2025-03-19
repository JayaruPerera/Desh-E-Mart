"use client";

import Image from "next/image";
import Logo from "@/assets/images/navLogo.png";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineYoutube } from "react-icons/ai";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);

  // Check if the current user is an admin
  useEffect(() => {
    if (user) {
      const adminEmails = ["jayaruperera1998@gmail.com"];
      const primaryEmail = user.primaryEmailAddress?.emailAddress;
      
      setIsAdmin(primaryEmail ? adminEmails.includes(primaryEmail) : false);
    }
  }, [user]);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }

  return (<nav className="z-50 fixed w-full h-20">

    <div className="flex  h-full w-full items-center px-3 sm:px-4 md:px-16 lg:px-24 bg-[#161A1D]/90">
      <Link href="/">
      <Image
      src={Logo}
      alt="Logo"
      width={120}
      height={120}
      className="cursor-pointer sm:w-[160px]"
      priority
      />
      </Link>

      {/*Navbar links*/}
      <div className="hidden md:flex ml-auto">
        <ul className="hidden sm:flex sm:text-[10px] md:text-[14px] lg:text-[16px] ml-10 gap-6 md:gap-12">
        <Link href="/">
          <li className="hover:opacity-80">Home</li>
        </Link>
        <Link href={`/products`}>
          <li className="hover:opacity-80">Products</li>
        </Link>
        <Link href={`/about`}>
          <li className="hover:opacity-80">About</li>
        </Link>
        <Link href={"/contact"}>
          <li className="hover:opacity-80">Contact</li>
        </Link>
        {/* Show Dashboard link only for admin users */}
        {isAdmin && (
          <Link href="/admin/dashboard">
            <li className="hover:opacity-80">Dashboard</li>
          </Link>
        )}
        </ul>
      </div>

      {/*User buttons*/}
      <div className="ml-10 md:ml-10 flex items-center">

          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <ul className="flex space-x-2 sm:space-x-4 justify-start items-center">
              <Link href="/sign-in">
                <li className="text-sm sm:text-[12px] md:text-[14px] lg:text-[16px]">Sign In</li>
              </Link>
              <Link href="/sign-up">
                <li className="text-sm sm:text-[12px] md:text-[14px] lg:text-[16px] text-[#161A1D] py-2 px-3 sm:py-3 sm:px-4 rounded-full bg-[#FCFDFF]">Sign Up</li>
              </Link>
            </ul>
          )}
        </div>


                  {/* Hamburger Icon */}
        <div
          onClick={handleNav}
          className="ml-4 md:hidden flex items-center cursor-pointer "
        >
          <AiOutlineMenu size={25} className="text-white" />
        </div>
      




        {/*Hamburger menu*/}
    <div className={
      twMerge(
      menuOpen
      ? "fixed left-0 top-0 w-[65%] md:hidden h-screen bg-[#363b3e] p-10 ease-in-out duration-500"
      : "fixed left-[-100%] top-0 p-10  border-r-gray-900 bg-[#000300] ease-in-out duration-500" 
    )
    }>
      <div className="flex w-full items-center justify-end">
        <div onClick={handleNav} className="cursor-pointer">
          <AiOutlineClose size={25} />
        </div>
      </div>
      <div className="flex-col py4">
        <ul>
          <Link href="/">
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer"
              >
                Home
            </li>
          </Link>
          <Link href={`/products`}>
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer"
              >
                Product
            </li>
          </Link>
          <Link href={`/about`}>
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer"
              >
                About
            </li>
          </Link>
          <Link href={`/contact`}>
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer"
              >
                Contact
            </li>
          </Link>
          {/* Show Dashboard link in mobile menu only for admin users */}
          {isAdmin && (
                <Link href="/admin/dashboard">
                  <li
                    onClick={() => setMenuOpen(false)}
                    className="py-4 cursor-pointer"
                  >
                    Dashboard
                  </li>
                </Link>
              )}
        </ul>
      </div>

      {/* Social Icons */}
      <div className="flex flex-row justify-around pt-10 items-center">
        <AiOutlineInstagram size={30} className="cursor-pointer" color="#9D1CAC" />
        <AiOutlineFacebook size={30} className="cursor-pointer" color="#9D1CAC"/>
        <AiOutlineYoutube size={30} className="cursor-pointer" color="#9D1CAC" />
      </div>

      {/* Mobile Logo in hamburger menu */}
      <div className="flex flex-row justify-center">
      <Image
      src={Logo}
      alt="Logo"
      width={200}
      height={200}
      className="cursor-pointer pt-6 "
      priority
      />
      </div>
    </div>
    </div>
  </nav>)
};
export default Header;