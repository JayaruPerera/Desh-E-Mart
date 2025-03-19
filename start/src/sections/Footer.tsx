// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faInstagram,
//   faTiktok,
// } from "@fortawesome/free-brands-svg-icons";
// import {
//   faMapMarkerAlt,
//   faEnvelope,
//   faPhone,
// } from "@fortawesome/free-solid-svg-icons";

// const Footer = () => {
//   return (
//     <footer className="text-white py-10 mt-10 border-t border-gray-700 ">
//       {/* Custom container with reduced padding */}
//       <div className="container mx-auto ml-10 mr-10 grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Logo and Mission */}
//         <div className="">
//           <h1 className="text-4xl font-bold">Desha E-Mart</h1>
//           <p className="mt-2 text-sm">
//             Our mission is to provide quality products and trusted repair
//             services, making technology accessible and reliable for all.
//           </p>
//           <div className="mt-8">
//             <span>Follow in:</span>
//             <div className="flex space-x-4 mt-2 text-black">
//               <a
//                 href="/"
//                 className="inline-block w-10 bg-white rounded-full m-2 p-2"
//               >
//                 <FontAwesomeIcon icon={faFacebook} />
//               </a>
//               <a
//                 href="/"
//                 className="inline-block w-10 bg-white rounded-full m-2 p-2"
//               >
//                 <FontAwesomeIcon icon={faInstagram} />
//               </a>
//               <a
//                 href="/"
//                 className="inline-block w-10 bg-white rounded-full m-2 p-2"
//               >
//                 <FontAwesomeIcon icon={faTiktok} />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div className="ml-20">
//           <h2 className="font-bold text-lg">Quick Links</h2>
//           <ul className="mt-4 space-y-2 text-sm list-disc list-inside">
//             <li>
//               <a href="/" className="hover:text-gray-400">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="/" className="hover:text-gray-400">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="/" className="hover:text-gray-400">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="/" className="hover:text-gray-400">
//                 Blogs
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Services */}
//         <div className="ml-10">
//           <h2 className="font-bold text-lg">Services</h2>
//           <ul className="mt-4 space-y-2 text-sm list-disc list-inside">
//             <li>
//               <a href="/" className="hover:text-gray-400">
//                 Smartphone Repair
//               </a>
//             </li>
//             <li>
//               <a href="/" className="hover:text-gray-400">
//                 Laptop Repair
//               </a>
//             </li>
//             <li>
//               <a href="/" className="hover:text-gray-400">
//                 Desktop Repair
//               </a>
//             </li>
//             <li>
//               <a href="/" className="hover:text-gray-400">
//                 Tablet Repair
//               </a>
//             </li>
//             <li>
//               <a href="/" className="hover:text-gray-400">
//                 OS Update
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div className="ml-10">
//           <h2 className="font-bold text-lg">Contact</h2>
//           <ul className="mt-4 space-y-2 text-sm">
//             <li className="flex items-center">
//               <span className="inline-block w-4">
//                 <FontAwesomeIcon icon={faMapMarkerAlt} />
//               </span>
//               <span className="ml-5">Pambahinna, Balangoda, Rathnapura.</span>
//             </li>
//             <li className="flex items-center">
//               <span className="inline-block w-4">
//                 <FontAwesomeIcon icon={faEnvelope} />
//               </span>
//               <span className="ml-5 ">deshamart@gmail.com</span>
//             </li>
//             <li className="flex items-center">
//               <span className="inline-block w-4">
//                 <FontAwesomeIcon icon={faPhone} />
//               </span>
//               <span className="ml-5">(+94) 76 214 639</span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-5 border-b border-gray-700 pt-4 pb-4 text-center text-sm flex justify-between ">
//         <p className="ml-10">© 2024 Desha E-Mart. All Rights Reserved by team ///.</p>
//         <p className="mr-10">
//           Read our{" "}
//           <a href="/" className="hover:text-gray-400">
//             Privacy Policy
//           </a>{" "}
//           and{" "}
//           <a href="/" className="hover:text-gray-400">
//             Terms of Use
//           </a>
//           .
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/navLogo.png";
import { icons } from "@/assets/icons/assets";
import './footer.css';
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";


export const Footer = () => {
  return ( 
    <div className="footer flex flex-col h-full w-full items-center mt-[140px] sm:mt-[80px] px-4 md:px-16 lg:px-24 relative overflow-hidden">
      
      {/* Add background effects */}
      <div className="absolute inset-0 bg-transparent">
        <StarsBackground 
          starDensity={0.0002}
          className="opacity-50"
        />
        <ShootingStars 
          minDelay={2000}
          maxDelay={5000}
          starColor="#ffffff"
          trailColor="#4a4a4a"
          className="opacity-30"
        />
      </div>

      <div className="relative z-10 w-full">
      <div className="footer-top">
        <div className="footer-logo">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={220} className="cursor-pointer" priority />
          </Link>

          <p className="text-logo">
            Our mission is to provide quality products and trusted repair 
            services, making technology accessible and reliable for all.
          </p>

          <div className="social">
            <p>Follow in:</p>

            <div className="social-logo">
              <Link href="/">
                <Image src={icons.facebook} alt="facebook" width={30} className="cursor-pointer" priority />
              </Link>
              <Link href="/">
                <Image src={icons.instagram} alt="instagram" width={30} className="cursor-pointer" priority />
              </Link>
              <Link href="/">
                <Image src={icons.tiktok} alt="tiktok" width={30} className="cursor-pointer" priority />
              </Link>
            </div>
          </div>
        </div>
        <div className="quick-links">

          <div className="quick-link">
            <h3>Quick Links</h3>
            <div className="link">
              <Link href="/">Home</Link>
              <Link href="/">About</Link>
              <Link href="/">Services</Link>
              <Link href="/">Blogs</Link>
            </div>
          </div>

          <div className="quick-link">
            <h3>Services</h3>
            <div className="link">
              <Link href="/">Smartphone Repair</Link>
              <Link href="/">Laptop Repair</Link>
              <Link href="/">Desktop Repair</Link>
              <Link href="/">Tablet Repair</Link>
              <Link href="/">OS Update</Link>
            </div>
          </div>

          <div className="quick-link">
            <h3>Contact</h3>
            <div className="link contact">
              <Link href="/">
                <Image src={icons.address} alt="facebook" width={16} className="cursor-pointer" priority />
                Pambahinna, Balangoda, Rathnapura.
              </Link>
              <Link href="/">
                <Image src={icons.email} alt="facebook" width={16} className="cursor-pointer" priority />
                deshamart@gmail.com
              </Link>
              <Link href="/">
                <Image src={icons.phone} alt="facebook" width={16} className="cursor-pointer" priority />
                (+94) 76 214 639
              </Link>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bootom">
        <p>© 2024 Desha E-Mart. All Rights Reserved by team ####.</p>
        <p>Read our <span>Privacy Policy</span> and <span>Terms of Use</span></p>
      </div>
      
    </div>
    </div>
  );
};

export default Footer;
