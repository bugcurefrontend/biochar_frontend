import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CONSTANTS } from "../constants";

const logos = CONSTANTS.LOGOS.BRANDS.map((src, index) => ({
  src,
  url: CONSTANTS.BRAND_URLS[index]
}));

export default function Brands() {
  // Create three sets of logos for a seamless infinite loop
  const tripleLogos = [...logos, ...logos, ...logos];

  return (
    <section className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-16">
        <p className="text-center text-[10px] sm:text-xs uppercase tracking-wider text-gray-400 mb-6 sm:mb-10">
          Loved and supported by
        </p>

        <div className="slider">
          <div className="slider-track">
            {tripleLogos.map((logo, i) => (
              <Link
                key={i}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center min-w-[200px]"
              >
                <div className="relative">
                  <Image
                    src={logo.src}
                    alt={`Partner logo ${(i % logos.length) + 1}`}
                    width={150}
                    height={100}
                    className="w-[80px] h-auto sm:w-[120px] md:w-[150px] 
                      object-contain transition-all duration-300 
                      group-hover:opacity-80 group-hover:scale-105"
                    style={{ width: "auto", height: "auto" }}
                    priority={i < 5}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}