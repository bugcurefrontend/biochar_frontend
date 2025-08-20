import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Goudy_Bookletter_1911 } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const goudy = Goudy_Bookletter_1911({
  subsets: ["latin"], // or [] for full
  weight: "400", // only 400 is offered
  display: "swap", // Prevents invisible text during font load
  variable: "--font-goudy",
  preload: true, // Preload font for faster loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Heartyculture Biochar",
  description: "Permanent carbon removal that drives real community impact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${goudy.variable} antialiased`}
      >
        
        {children}
      </body>
    </html>
  );
}
