import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

import Header from "@/sections/Header";

import { ClerkProvider } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";
import Provider from "./Provider";

const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oxygen",
  display: "swap",
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
    <ClerkProvider>
      <html lang="en" className={`dark ${oxygen.variable}`}>
        <body
          className={twMerge("bg-[#161A1D] text-white antialiased font-oxygen")}
        >
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
