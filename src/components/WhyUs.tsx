"use client";
import React, { useCallback, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { SLIDE_DATA } from "../data/slideImages";



const WhyUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());
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
        threshold: 0.3,
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

  // Preload images effect
  useEffect(() => {
    const preloadImage = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        if (preloadedImages.has(src)) {
          resolve();
          return;
        }
        
        const img = new window.Image();
        img.onload = () => {
          setPreloadedImages(prev => new Set([...prev, src]));
          resolve();
        };
        img.onerror = reject;
        img.src = src;
      });
    };

    // Preload current slide's images
    const currentSlideImages = slides[activeIndex].images;
    
    // Preload current image first
    preloadImage(currentSlideImages[imageIndex]).catch(console.error);
    
    // Then preload next few images in current slide
    const preloadPromises = [];
    for (let i = 1; i <= 3; i++) {
      const nextIndex = (imageIndex + i) % currentSlideImages.length;
      preloadPromises.push(preloadImage(currentSlideImages[nextIndex]));
    }
    
    // Preload first image of next slide
    const nextSlideIndex = (activeIndex + 1) % slides.length;
    const nextSlideFirstImage = slides[nextSlideIndex].images[0];
    preloadPromises.push(preloadImage(nextSlideFirstImage));
    
    Promise.allSettled(preloadPromises);
  }, [activeIndex, imageIndex, slides, preloadedImages]);

  // Handle image loading state
  useEffect(() => {
    if (preloadedImages.has(currentImage)) {
      setImageLoading(false);
    } else {
      setImageLoading(true);
    }
  }, [currentImage, preloadedImages]);

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
    if (!isVisible) return;

    const imageInterval = setInterval(() => {
      const numImages = slides[activeIndex]?.images.length || 1;
      const newImageIndex = (imagePositionsRef.current[activeIndex] + 1) % numImages;
      imagePositionsRef.current[activeIndex] = newImageIndex;
      setImageIndex(newImageIndex);
    }, 2000);

    return () => clearInterval(imageInterval);
  }, [activeIndex, slides, isVisible]);

  // Tab auto-advance - only when visible
  useEffect(() => {
    if (!isVisible) return;

    const tabInterval = setInterval(() => {
      setActiveIndex((prevActiveIndex) => {
        const currentImageIndex = imagePositionsRef.current[prevActiveIndex];
        imagePositionsRef.current[prevActiveIndex] = currentImageIndex; // Save current position
        const nextIndex = (prevActiveIndex + 1) % slides.length;
        
        // Switch to new tab's stored image immediately
        setImageIndex(imagePositionsRef.current[nextIndex]);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(tabInterval);
  }, [slides.length, isVisible]);

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
                className={`flex flex-nowrap text-nowrap items-center justify-center px-4 py-2 transition-all duration-300 ${
                  isActive
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
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-white text-[4rem] px-2 py-1 hover:bg-black/20 rounded transition-colors"
          >
            ‹
          </button>

          <div className="w-full h-[50vh] md:h-[80vh] relative overflow-hidden shadow">
            {/* Loading skeleton */}
            {imageLoading && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-gray-400 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-500 text-sm">Loading image...</p>
                </div>
              </div>
            )}
            
            <Image
              src={currentImage}
              alt={`${currentSlide.title} - image ${imageIndex + 1}`}
              fill
              className={`object-cover transition-all duration-500 ${
                imageLoading ? 'opacity-0' : 'opacity-100'
              }`}
              priority={activeIndex === 0 && imageIndex === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
              onLoad={() => setImageLoading(false)}
              onLoadStart={() => setImageLoading(true)}
              style={{ 
                objectFit: 'cover',
                transition: 'opacity 0.5s ease'
              }}
            />
          </div>

          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-white text-[4rem] px-2 py-1 hover:bg-black/20 rounded transition-colors"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;