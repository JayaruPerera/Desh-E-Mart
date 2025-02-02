import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";

const  DashboardAuthLayout= ({ children } : { children: React.ReactNode}) => {
    return ( 
    <React.Fragment>
<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      <div className="hidden lg:relative lg:block lg:p-12">
        <a className="block text-white" href="#">
          <span className="sr-only">Home</span>
          <svg
            className="h-8 sm:h-10"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
             
          </svg>
          <div className="flex justify-center">
          <Image
              src={Logo}
              alt="Logo"
              width={200}
              height={200}
              className="cursor-pointer"
              priority
              />
              </div >
        </a>

        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Welcome to Desha E-Mart 📱💻🔧
        </h2>

        <p className="mt-4 leading-relaxed text-white/90">
        We provide top-quality gadgets and reliable repair services tailored to your needs. 
        From the latest devices to expert care, we’ve got you covered.
        </p>
      </div>
    </section>

    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
        {children}
    </main>
  </div>
</section>



    </React.Fragment> );
}
 
export default DashboardAuthLayout;