import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CONSTANTS } from "../constants";

const logos = CONSTANTS.LOGOS.BRANDS.map((src, index) => ({
  src,
  url: CONSTANTS.BRAND_URLS[index]
}));

// Create enough duplicates for seamless infinite scroll
const loopLogos = [...logos, ...logos, ...logos];

export default function Brands() {

  return (
    <section className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-16 overflow-hidden">
        <p className="text-center text-[10px] sm:text-xs uppercase tracking-wider text-gray-400 mb-6 sm:mb-10">
          Loved and supported by
        </p>

        <div className="animate-scroll-infinite flex items-center whitespace-nowrap" style={{ gap: '3rem' }}>
          {loopLogos.map((logo, i) => (
            <Link
              key={i}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block flex-shrink-0 group"
            >
              <div className="relative">
                <Image
                  src={logo.src}
                  alt={`Partner logo ${i + 1}`}
                  width={150}
                  height={100}
                  className="w-[80px] h-auto sm:w-[120px] md:w-[150px] 
                    object-contain transition-all duration-300 
                    group-hover:opacity-80 group-hover:scale-105"
                  priority={i < 5} // Load first 5 images immediately
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}