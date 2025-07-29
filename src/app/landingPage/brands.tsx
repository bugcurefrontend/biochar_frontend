"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/Logos/brand1.png",
  "/Logos/brand2.png",
  "/Logos/brand3.png",
  "/Logos/brand4.png",
  "/Logos/brand5.png",
  "/Logos/brand6.png",
  "/Logos/brand7.png",
  "/Logos/brand8.png",
  "/Logos/brand9.png",
  "/Logos/brand10.png",
];

export default function Brands() {
  /** Duplicate the logos so the strip can loop seamlessly used */
  const loopLogos = [...logos, ...logos];

  return (
    <section className="bg- text-">
      <div className="max-w-7xl mx-auto px-6 py-16 overflow-hidden">
        {/* Tagline */}
        <p className="text-center text-xs uppercase tracking-wider text-gray-400 mb-10">
          Loved and supported by
        </p>

        {/* Infinite marquee */}
        <motion.div
          className="flex gap-12 items-center"
          /** The magic: slide from 0 → -50% and repeat forever */
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20, // speed (seconds)
            ease: "linear",
          }}
        >
          {loopLogos.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt="Partner logo"
              width={120}
              height={40}
              className=" w-auto flex-shrink-0"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
