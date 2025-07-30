import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Goudy_Bookletter_1911 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const goudy = Goudy_Bookletter_1911({
  subsets: ["latin"], // or [] for full
  weight: "400", // only 400 is offered
  display: "swap", // optional
  variable: "--font-goudy",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heaartyculture Biochar",
  description: "",
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
