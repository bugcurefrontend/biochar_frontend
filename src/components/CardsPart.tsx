"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OptimizedImage } from "./OptimizedImage";
import { SLIDE_DATA } from "../data/slideImages";

interface Slide {
  title: string;
  bullets: string[];
  images: string[];
}

const CardsPart = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  // Track image position for each tab to resume from where left off
  const [imagePositions, setImagePositions] = useState<number[]>([0, 0, 0, 0]);

  const slides = SLIDE_DATA;

  const currentSlide = slides[activeIndex];
  const currentImage = currentSlide.images[imageIndex];

  // OPTIMIZATION: Memoized functions with useCallback
  const handleNext = useCallback(() => {
    const numImages = slides[activeIndex]?.images.length || 1;
    setImageIndex((prev) => (prev + 1) % numImages);
  }, [activeIndex, slides]);

  const handlePrev = useCallback(() => {
    const numImages = slides[activeIndex]?.images.length || 1;
    setImageIndex((prev) => (prev - 1 + numImages) % numImages);
  }, [activeIndex, slides]);

  const onSlideChange = useCallback((index: number) => {
    // Save current image position before switching tabs
    setImagePositions(prev => {
      const newPositions = [...prev];
      newPositions[activeIndex] = imageIndex;
      return newPositions;
    });

    setActiveIndex(index);
    // Resume from saved position for the new tab
    setImageIndex(imagePositions[index]);
  }, [activeIndex, imageIndex, imagePositions]);

  // Auto-play functionality: Images change every 2 seconds, tabs every 5 seconds
  useEffect(() => {
    // Image auto-advance every 2 seconds
    const imageInterval = setInterval(() => {
      setImagePositions(prev => {
        const newPositions = [...prev];
        const numImages = slides[activeIndex]?.images.length || 1;
        newPositions[activeIndex] = (newPositions[activeIndex] + 1) % numImages;
        return newPositions;
      });

      const numImages = slides[activeIndex]?.images.length || 1;
      setImageIndex((prev) => (prev + 1) % numImages);
    }, 2000);

    return () => clearInterval(imageInterval);
  }, [activeIndex, slides]);

  useEffect(() => {
    // Tab auto-advance every 5 seconds
    const tabInterval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % slides.length;
        // Set image to the saved position for the next tab
        setImageIndex(imagePositions[nextIndex]);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(tabInterval);
  }, [imagePositions, slides.length]);

  return (
    <section id="whyUs" className="max-w-7xl mx-auto px-2 sm:px-4 lg:py-24 py-12 overflow-hidden">
      <div className="text-center mb-10 lg:mb-16">
        <p className="text-sm lg:text-base font-light tracking-wide text-gray-500 mb-4">
          What sets HeartyCulture Biochar apart?
        </p>
        <h2 className="font-semibold text-2xl md:text-3xl md:font-normal px-2 sm:px-[10%] lg:text-5xl leading-tight">
          Permanent carbon removal that drives
          <br className="hidden lg:block" />
          real community impact
        </h2>
      </div>

      {/* ACCESSIBILITY: Added ARIA roles for tab navigation */}
      <nav
        role="tablist"
        aria-label="Why Us Categories"
        className="w-full py-5 mb-6 md:mb-10"
      >
        <div className="grid grid-cols-2 gap-1 sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3 md:gap-6 max-w-full mx-auto">
          {slides.map((slide, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={activeIndex === index}
              onClick={() => onSlideChange(index)}
              className={`px-1 py-2 sm:px-3 md:px-4 rounded-full text-xs sm:text-sm md:text-base transition-all border sm:flex-none min-w-0 text-center overflow-hidden ${activeIndex === index
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-600 hover:text-black border-gray-300"
                }`}
            >
              <span className="block leading-tight truncate sm:whitespace-nowrap">
                {slide.title}
              </span>
            </button>
          ))}
        </div>
      </nav>

      <div className="px-1 sm:px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row gap-4 md:gap-6 rounded-xl overflow-hidden"
          >
            {/* Text side */}
            <div className="bg-gray-900 text-white md:w-1/2 p-4 sm:p-6 md:p-8 space-y-4 md:space-y-6 flex flex-col justify-center rounded-xl">
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 md:mb-4">
                {currentSlide.title}
              </h3>
              <ul className="list-disc pl-4 md:pl-5 space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base leading-relaxed">
                {currentSlide.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>

            {/* Image Carousel side */}
            <div className="md:w-1/2 flex items-center justify-center relative overflow-hidden">
              <button
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-black/80 transition-colors text-xs sm:text-sm md:text-base"
              >
                &#8249;
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={imageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-full relative rounded-xl overflow-hidden shadow"
                >
                  {/* Using OptimizedImage to prevent duplicate loading */}
                  <OptimizedImage
                    src={currentImage}
                    alt={`${currentSlide.title} - image ${imageIndex + 1}`}
                    className="object-contain"
                    priority={activeIndex === 0 && imageIndex === 0}
                  />
                </motion.div>
              </AnimatePresence>

              <button
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-black/80 transition-colors text-xs sm:text-sm md:text-base"
              >
                &#8250;
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CardsPart;