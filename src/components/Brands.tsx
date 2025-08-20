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
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-16 overflow-hidden">
        <p className="text-center text-[10px] sm:text-xs uppercase tracking-wider text-gray-400 mb-6 sm:mb-10">
          Loved and supported by
        </p>

        <motion.div
          className="flex items-center"
          style={{ gap: isMobile ? '1rem' : '2rem', x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: isMobile ? 20 : 40,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {loopLogos.map((logo, i) => (
            <Link
              key={i}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 group"
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
                  style={{ height: 'auto' }}
                  priority={i < 5} // Load first 5 images immediately
                />
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}