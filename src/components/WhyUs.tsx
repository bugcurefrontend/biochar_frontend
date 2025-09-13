"use client";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { SLIDE_DATA } from "../data/slideImages";
import { AnimatePresence, easeOut, motion } from "framer-motion";

const WhyUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(
    new Set()
  );
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
        rootMargin: "0px",
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
          setPreloadedImages((prev) => new Set([...prev, src]));
          resolve();
        };
        img.onerror = reject;
        img.src = src;
      });
    };

    // Preload current slide's images
    const currentSlideImages = slides[activeIndex].images;

    // Preload current image first
    preloadImage(currentSlideImages[imageIndex]).catch(() => {});

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

  const onSlideChange = useCallback(
    (index: number) => {
      imagePositionsRef.current[activeIndex] = imageIndex;
      setActiveIndex(index);
      setImageIndex(imagePositionsRef.current[index]);
    },
    [activeIndex, imageIndex]
  );

  // Image auto-advance - only when visible
  useEffect(() => {
    if (!isVisible) return;

    const imageInterval = setInterval(() => {
      const numImages = slides[activeIndex]?.images.length || 1;
      const newImageIndex =
        (imagePositionsRef.current[activeIndex] + 1) % numImages;
      imagePositionsRef.current[activeIndex] = newImageIndex;
      setImageIndex(newImageIndex);
    }, 3000);

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
    }, 7000);

    return () => clearInterval(tabInterval);
  }, [slides.length, isVisible]);

  // Animation variants
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut, // Corrected here
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: easeOut, // Corrected here
      },
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: easeOut, // Corrected here
      },
    }),
  };

  return (
    <section
      id="whyUs"
      className="max-w-7xl mx-auto px-4 lg:py-12 py-12"
      ref={sectionRef}
    >
      <div className="text-center mb-6 lg:mb-8">
        <p className="text-sm tracking-wide text-gray-600 mb-3">
          What sets HeartyCulture Biochar apart?
        </p>
        <h2 className="font-serif text-2xl md:text-3xl px-[10%] lg:text-3xl leading-tight">
          Permanent carbon removal that drives
          <br className="hidden lg:block" />
          real community impact
        </h2>
      </div>

      <nav className="w-full overflow-x-auto py-3 mb-6 lg:overflow-x-hidden">
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

      <div className="flex flex-col md:flex-row rounded-xl overflow-hidden md:items-center bg-gray-900">
        <div className="text-white md:w-1/2 p-6 space-y-4 flex flex-col justify-center md:h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${activeIndex}`}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-4"
            >
              <motion.h3
                className="font-serif text-xl lg:text-2xl mb-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                {currentSlide.title}
              </motion.h3>

              <motion.ul
                className="font-serif list-disc pl-5 space-y-2 text-sm md:text-sm leading-relaxed"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                {currentSlide.bullets.map((bullet, i) => {
                  const [title, ...rest] = bullet.split(":");
                  const description = rest.join(":").trim();

                  return (
                    <motion.li key={i} custom={i} variants={listItemVariants}>
                      <span className="font-semibold">
                        {title}
                        <span>:</span>
                      </span>{" "}
                      <span>{description}</span>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="md:w-1/2 flex items-center justify-center relative h-full">
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-white text-[4rem] px-2 py-1 hover:bg-black/20 rounded transition-all duration-200 hover:scale-110"
          >
            ‹
          </button>

          <div className="w-full relative flex items-center justify-center">
            {/* Loading skeleton with animation */}
            <AnimatePresence>
              {imageLoading && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-gray-400 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-500 text-sm">Loading image...</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.img
                key={`${activeIndex}-${imageIndex}`}
                src={currentImage}
                alt={`${currentSlide.title} - image ${imageIndex + 1}`}
                width={600}
                height={400}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full h-full object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                onLoad={() => setImageLoading(false)}
                onLoadStart={() => setImageLoading(true)}
                style={{
                  objectFit: "contain",
                }}
              />
            </AnimatePresence>
          </div>

          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-white text-[4rem] px-2 py-1 hover:bg-black/20 rounded transition-all duration-200 hover:scale-110"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
