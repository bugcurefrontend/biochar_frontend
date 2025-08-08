"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const logos = [
  { src: "/Logos/brand1.png", url: "https://4p1000.org/" },
  { src: "/Logos/brand2.png", url: "https://www.carbon-standards.com/" },
  { src: "/Logos/brand3.png", url: "https://icar.org.in/" },
  { src: "/Logos/brand4.png", url: "https://www.fairtrade.net/" },
  { src: "/Logos/brand5.png", url: "http://heartfullness.org/" },
  { src: "/Logos/brand6.png", url: "https://www.heartyculturenursery.com/" },
  { src: "/Logos/brand7.png", url: "https://plantvillage.psu.edu/" },
  { src: "/Logos/brand8.png", url: "https://pratibhasyntex.com/" },
  { src: "/Logos/brand9.png", url: "https://samunnati.com/" },
  { src: "/Logos/brand10.png", url: "https://www.arvindfashions.com/" },
];

// Duplicate for infinite scroll
const loopLogos = [...logos, ...logos];

export default function Brands() {
  return (
    <section className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-16 overflow-hidden">
        <p className="text-center text-xs uppercase tracking-wider text-gray-400 mb-10">
          Loved and supported by
        </p>

        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
            repeatType: "loop",
          }}
          style={{ x: "0%" }}
        >
          {loopLogos.map((logo, i) => (
            <Link
              key={i}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <Image
                src={logo.src}
                alt={`Partner logo ${i + 1}`}
                width={150}
                height={150}
                className="w-[150px] h-[100px] object-contain hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
