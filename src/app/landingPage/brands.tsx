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
          className="flex gap-12 items-center w-full"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {loopLogos.map((logo, i) => (
            <Link
              key={i}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Image
                src={logo.src}
                alt={`Partner logo ${i + 1}`}
                width={200}
                height={200}
                className="max-w-[200px] flex-shrink-0 hover:opacity-80 transition"
              />
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
