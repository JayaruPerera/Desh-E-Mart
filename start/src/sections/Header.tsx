"use client";

import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineYoutube } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }


  return (<nav className="w-full h-24">
    <div className="flex justify-between h-full w-full items-center px-4 md:px-16 lg:px-24">
      <Link href="/">
      <Image
      src={Logo}
      alt="Logo"
      width={100}
      height={100}
      className="cursor-pointer"
      priority
      />
      </Link>

      <div className="hidden md:flex">
        <ul className="hidden sm:flex">
        <Link href="/">
          <li className="ml-10 uppercase hover:border-b sm:text-sm md:text-lg lg:text-xl">Home</li>
        </Link>
        <Link href="/">
          <li className="ml-10 uppercase hover:border-b sm:text-sm md:text-lg lg:text-xl">Products</li>
        </Link>
        <Link href="/">
          <li className="ml-10 uppercase hover:border-b sm:text-sm md:text-lg lg:text-xl">About</li>
        </Link>
        <Link href="/">
          <li className="ml-10 uppercase hover:border-b sm:text-sm md:text-lg lg:text-xl">Contact</li>
        </Link>
        </ul>
      </div>

      
      <div onClick={handleNav} className="md:hidden lg:hidden cursor-pointer pl-24">
        <AiOutlineMenu size={25} />
      </div>
    </div>
    <div className={
      menuOpen
      ? "fixed left-0 top-0 w-[65%] md:hidden h-screen bg-[#363b3e] p-10 ease-in-out duration-500"
      : "fixed left-[-100%] top-0 p-10  border-r-gray-900 bg-[#000300] ease-in-out duration-500"
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
          <Link href="/">
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer"
              >
                Product
            </li>
          </Link>
          <Link href="/">
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer"
              >
                About
            </li>
          </Link>
          <Link href="/">
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer"
              >
                Contact
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex flex-row justify-around pt-10 items-center">
        <AiOutlineInstagram size={30} className="cursor-pointer" color="#9D1CAC" />
        <AiOutlineFacebook size={30} className="cursor-pointer" color="#9D1CAC"/>
        <AiOutlineYoutube size={30} className="cursor-pointer" color="#9D1CAC" />
      </div>
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
  </nav>)
};
export default Header;