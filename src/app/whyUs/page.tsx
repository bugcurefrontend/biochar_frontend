"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState, useRef, useMemo } from "react";
import { OptimizedImage } from "../../components/OptimizedImage";
import { SLIDE_DATA } from "../../data/slideImages";

interface Slide {
  title: string;
  bullets: string[];
  images: string[];
}

const WhyUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const imagePositionsRef = useRef<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const slides = SLIDE_DATA;

  const currentSlide = slides[activeIndex];
  const currentImage = currentSlide.images[imageIndex];

  // Intersection Observer to detect visibility
  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Component is visible when 30% is in view
        rootMargin: '0px'
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const handleNext = useCallback(() => {
    const numImages = slides[activeIndex].images.length;
    setImageIndex((prev) => (prev + 1) % numImages);
  }, [activeIndex, slides]);

  const handlePrev = useCallback(() => {
    const numImages = slides[activeIndex].images.length;
    setImageIndex((prev) => (prev - 1 + numImages) % numImages);
  }, [activeIndex, slides]);

  const onSlideChange = useCallback((index: number) => {
    imagePositionsRef.current[activeIndex] = imageIndex;
    setActiveIndex(index);
    setImageIndex(imagePositionsRef.current[index]);
  }, [activeIndex, imageIndex]);

  // Image auto-advance - only when visible
  useEffect(() => {
    if (!isVisible) return; // Don't run when not visible

    const imageInterval = setInterval(() => {
      const numImages = slides[activeIndex]?.images.length || 1;
      const newImageIndex = (imagePositionsRef.current[activeIndex] + 1) % numImages;
      imagePositionsRef.current[activeIndex] = newImageIndex;
      setImageIndex(newImageIndex);
    }, 2000);

    return () => clearInterval(imageInterval);
  }, [activeIndex, slides, isVisible]); // Added isVisible dependency

  // Tab auto-advance - only when visible
  useEffect(() => {
    if (!isVisible) return; // Don't run when not visible

    const tabInterval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % slides.length;
        setImageIndex(imagePositionsRef.current[nextIndex]);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(tabInterval);
  }, [slides.length, isVisible]); // Added isVisible dependency

  return (
    <section id="whyUs" className="max-w-7xl mx-auto px-4 lg:py-24 py-12" ref={sectionRef}>
      <div className="text-center mb-10 lg:mb-16">
        <p className="text-sm lg:text-base font-light tracking-wide text-gray-500 mb-4">
          What sets HeartyCulture Biochar apart?
        </p>
        <h2 className="font-semibold text-2xl md:text-3xl md:font-normal px-[10%] lg:text-5xl leading-tight">
          Permanent carbon removal that drives
          <br className="hidden lg:block" />
          real community impact
        </h2>

        {/* Optional: Visual indicator when paused */}
        {!isVisible && (
          <div className="mt-4 text-xs text-gray-400 opacity-50">
            ⏸️ Auto-slide paused (not in view)
          </div>
        )}
      </div>

      <nav className="w-full overflow-x-auto py-5 mb-10 lg:overflow-x-hidden">
        <div className="flex mx-auto w-max gap-6 px-4">
          {slides.map((slide, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={index}
                onClick={() => onSlideChange(index)}
                className={`flex flex-nowrap text-nowrap items-center justify-center px-4 py-2 transition-all duration-300 ${isActive
                    ? "text-black border-b-2 border-black"
                    : "text-gray-400 hover:text-black"
                  }`}
              >
                <span className="text-lg mt-1 text-center font-medium">
                  {slide.title}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      <div className="flex flex-col md:flex-row rounded-xl overflow-hidden">
        <div className="bg-gray-900 text-white md:w-1/2 p-8 space-y-6 flex flex-col justify-center">
          <h3 className="font-serif text-2xl lg:text-3xl mb-4">
            {currentSlide.title}
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-sm md:text-base leading-relaxed">
            {currentSlide.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>

        <div className="md:w-1/2 flex items-center justify-center relative overflow-hidden">
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-white text-[4rem] px-2 py-1"
          >
            ‹
          </button>

          {/* --- THIS IS THE ONLY CHANGE --- */}
          <div className="w-full h-[50vh] md:h-[80vh] relative overflow-hidden shadow">
            <OptimizedImage
              src={currentImage}
              alt={`${currentSlide.title} - image ${imageIndex + 1}`}
              className="object-cover transition-opacity duration-300"
              priority={activeIndex === 0 && imageIndex === 0}
            />
          </div>

          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-white text-[4rem] px-2 py-1"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;