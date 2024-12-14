import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/sections/Header";

const oxygen = Oxygen ({
  subsets: ["latin"],
  variable: "--font-oxygen",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Desha E-Mart",
  description: "Mobile phone store & repair service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(oxygen.variable, "bg-[#161A1D] text-white antialiased font-oxygen")} >
        
        <Header />
        {children}
      </body>
    </html>
  );
}
