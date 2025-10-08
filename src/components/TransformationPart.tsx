"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";
import { useState, useRef, useEffect, useMemo } from "react";
import { CONSTANTS } from "../constants";

const TransformationPart = () => {
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const galleryScrollRef = useRef<HTMLDivElement>(null);

  const checkScrollButtons = () => {
    const element = galleryScrollRef.current;
    if (element) {
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        // Desktop: check vertical scroll
        setCanScrollUp(element.scrollTop > 0);
        setCanScrollDown(
          element.scrollTop < element.scrollHeight - element.clientHeight
        );
      } else {
        // Mobile: check horizontal scroll
        setCanScrollLeft(element.scrollLeft > 0);
        setCanScrollRight(
          element.scrollLeft < element.scrollWidth - element.clientWidth
        );
      }
    }
  };

  const scrollGallery = (direction: "up" | "down" | "left" | "right") => {
    const element = galleryScrollRef.current;
    if (element) {
      const isDesktop = window.innerWidth >= 1024;
      const scrollAmount = isDesktop ? 140 : 180; // Adjust for mobile vs desktop

      if (isDesktop) {
        // Desktop: vertical scrolling
        element.scrollBy({
          top:
            direction === "down"
              ? scrollAmount
              : direction === "up"
              ? -scrollAmount
              : 0,
          behavior: "smooth",
        });
      } else {
        // Mobile: horizontal scrolling
        element.scrollBy({
          left:
            direction === "right"
              ? scrollAmount
              : direction === "left"
              ? -scrollAmount
              : 0,
          behavior: "smooth",
        });
      }
    }
  };

  const galleryItems = useMemo(
    () => [
      {
        videoSrc: CONSTANTS.VIDEOS.KANHA,
        thumbnail: CONSTANTS.THUMBNAILS.KANHA,
        title: "Kanha Biochar Project",
      },
      {
        videoSrc: CONSTANTS.VIDEOS.SHIVGARH,
        thumbnail: CONSTANTS.THUMBNAILS.SHIVGARH,
        title: "Shivgarh Impact Story",
      },
      {
        videoSrc: CONSTANTS.VIDEOS.WHAT_IS_BIOCHAR,
        thumbnail: CONSTANTS.THUMBNAILS.WHAT_IS_BIOCHAR,
        title: "What is Biochar",
      },
      {
        videoSrc: CONSTANTS.VIDEOS.HOW_TO_USE_BIOCHAR,
        thumbnail: CONSTANTS.THUMBNAILS.HOW_TO_USE_BIOCHAR,
        title: "How to Use Biochar",
      },
      {
        videoSrc: CONSTANTS.VIDEOS.BIOCHAR_GOLD_FOR_FARMERS,
        thumbnail: CONSTANTS.THUMBNAILS.BIOCHAR_GOLD_FOR_FARMERS,
        title: "Biochar Gold for Farmers",
      },
      {
        videoSrc: CONSTANTS.VIDEOS.BIOCHAR_HEARTFULNESS_MOVEMENT,
        thumbnail: CONSTANTS.THUMBNAILS.BIOCHAR_HEARTFULNESS_MOVEMENT,
        title: "Biochar the Heartfulness Movement",
      },
    ],
    []
  );

  const [selectedItem, setSelectedItem] = useState(galleryItems[0]);
  const [testimonialPlaying, setTestimonialPlaying] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Handle video visibility changes
  const handleVisibilityChange = (
    isVisible: boolean,
    setPlayingState: (playing: boolean) => void
  ) => {
    if (!isVisible) {
      setPlayingState(false);
    }
  };
  const testimonialRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);

  const topCards = [
    {
      count: 3000,
      label: "Farmers\nEngaged",
      description: "Trials Active with 460 Farmers in 8 Districts",
    },
    {
      count: 10200,
      label: "Hectares\nRestored",
      description: "with Biochar-Based Soil Regeneration Practices",
    },
    {
      count: 3920,
      label: "Carbon Credits\nIssued",
      description: "Verified via Leading Standards",
    },
  ];
  const bottomCards = [
    {
      count: 18,
      label: "18+ Million\nFarmers\nEmpowered",
      description: "Scalable model for regenerative\nagriculture across India",
      showCountSeparately: false,
    },
    {
      count: 100000,
      label: "Villages\nReached",
      description: "Decentralized biochar units catalyzing\nrural livelihoods",
      showCountSeparately: true,
    },
    {
      count: 2,
      label: "2+ Million\nCarbon\nCredits",
      description: "Projected long-term\ncarbon drawdown",
      showCountSeparately: false,
    },
  ];

  // Intersection Observer for testimonial section (Google Drive video)
  useEffect(() => {
    const testimonialSection = testimonialRef.current;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Testimonial visible
        } else {
          handleVisibilityChange(false, setTestimonialPlaying);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible/invisible
        rootMargin: "0px",
      }
    );
    if (testimonialSection) {
      observer.observe(testimonialSection);
    }
    return () => {
      if (testimonialSection) {
        observer.unobserve(testimonialSection);
      }
    };
  }, []);

  // Intersection Observer for video section
  useEffect(() => {
    const videoSection = videoSectionRef.current;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Section visible
        } else {
          // Stop video when section is not visible
          setVideoPlaying(false);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible/invisible
        rootMargin: "0px",
      }
    );
    if (videoSection) {
      observer.observe(videoSection);
    }
    return () => {
      if (videoSection) {
        observer.unobserve(videoSection);
      }
    };
  }, []);

  // Check scroll buttons on mount and scroll
  useEffect(() => {
    const element = galleryScrollRef.current;
    if (element) {
      checkScrollButtons();
      element.addEventListener("scroll", checkScrollButtons);

      // Also check on window resize
      const handleResize = () => {
        setTimeout(() => checkScrollButtons(), 100); // Small delay to ensure resize is complete
      };
      window.addEventListener("resize", handleResize);

      return () => {
        element.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  // Initialize scroll state on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      checkScrollButtons();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section
        id="ourImpact"
        className="bg-[#e9edf2] py-4 md:px-7"
        ref={sectionRef}
      >
        <div className="max-w-7xl mx-auto px-5 py-6 lg:py-12">
          {/* <div className="grid md:grid-cols-12 md:gap-16"> */}
          <div className="md:flex md:justify-between w-full">
            {/* LEFT – headline */}
            <div className="md:w-1/2">
              <p className="text-sm font-light tracking-wide text-gray-600 mb-4">
                Impact
              </p>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight mb-6">
                Transformation at scale {""}
                <br className="hidden sm:block" />
                with Biochar
              </h2>
            </div>

            {/* RIGHT – copy, list, button */}
            <div className="md:w-1/2">
              <p>
                Biochar&apos;s potential to regenerate soil at scale is
                evidenced by these three large case studies in restoring barren
                land, afforestation and agriculture.
              </p>

              <p>
                Carbon finance enables us to set up more biochar sites, driving
                operational viability and creating self-sustaining business
                models.
              </p>

              {/* <ul className="list-disc pl-5 space-y-1">
                <li>Creates local entrepreneurs and jobs</li>
                <li>Drives measurable soil improvement and higher yields</li>
                <li>Delivers rising rural incomes</li>
              </ul> */}

              <button className="inline-block mt-4 px-5 py-2 rounded-full border border-gray-400 text-gray-800 hover:bg-gray-900 hover:text-white transition">
                <Link href="#formForId">Turn carbon into community</Link>
              </button>
            </div>
          </div>
        </div>
        {/* ─────────────── Responsive Testimonial Card – All Screens ─────────────── */}
        <div className="max-w-7xl mx-auto">
          <div
            className="mt-6 mx-4 lg:mt-10 bg-gray-900 text-white rounded-xl overflow-hidden"
            ref={testimonialRef}
          >
            <div className="flex flex-col lg:items-center lg:flex-row h-full">
              {/* Video Section */}
              <div
                className="relative aspect-video lg:w-1/2 bg-gray-800 cursor-pointer overflow-hidden max-xl:rounded-r-xl max-lg:rounded-r-none"
                onClick={() => setTestimonialPlaying(true)}
              >
                {testimonialPlaying ? (
                  CONSTANTS.VIDEOS.PATRICIA.includes("youtube.com/embed") ? (
                    <iframe
                      src={CONSTANTS.VIDEOS.PATRICIA}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={CONSTANTS.VIDEOS.PATRICIA}
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                      preload="auto"
                    >
                      Your browser does not support the video tag.
                    </video>
                  )
                ) : (
                  <Image
                    src={CONSTANTS.THUMBNAILS.PATRICIA}
                    alt="Patricia Scotland Testimonial"
                    className="w-full h-full object-cover"
                    width={640}
                    height={360}
                    style={{ width: "auto", height: "auto" }}
                  />
                )}
              </div>

              {/* Content Section */}
              <div className="px-4 py-6 sm:py-5 sm:px-5 lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
                <div className="space-y-3 lg:space-y-4">
                  <p className="font-serif text-sm sm:text-base lg:text-lg leading-relaxed">
                    &ldquo;Vision, ingenuity, and labor have transformed what
                    was once harsh and depleted land into a lush green campus,
                    with rainforest, thriving, endemic, and endangered species
                    and organic farms. Kanha Shanti Vanam has become a testament
                    to harmony with nature.&rdquo;
                  </p>

                  <div className="text-sm text-gray-300">
                    <p>Patricia Scotland</p>
                    <p>Former Secretary General, Commonwealth</p>
                  </div>

                  <p className="text-xs sm:text-sm lg:text-sm text-gray-400 leading-relaxed">
                    Water table has increased from 1,200 feet below ground to
                    300 feet below ground. Over 150,000 trees have been grown on
                    barren land, in a period of 6 years. Multiple rainforests
                    grown on poor soil in a semi-arid land with low annual
                    rainfall, considered impossible by experts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          className="bg-[#e9edf2] 
       "
        >
          <div className="max-w-7xl mx-auto  py-10 px-4 mt-16">
            {/* Section Title */}
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-800">
                Where we are currently standing
              </h2>
            </div>

            {/* First Row – 2 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
              {topCards.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow px-6 py-10 flex flex-col justify-between h-full"
                >
                  {/* <h3 className="text-3xl sm:text-4xl font-roboto font-semibold leading-tight mb-4">
                  <CountUp end={item.count} duration={2} />
                  {item.count >= 1000 ? "+" : ""} <br />
                  {item.label}
                </h3> */}
                  <h3 className="text-3xl sm:text-4xl font-roboto font-semibold leading-tight mb-4">
                    {item.label.includes("Million") ? (
                      <>
                        <CountUp
                          end={item.count}
                          duration={2.5}
                          separator=","
                        />
                        + Million
                        <br />
                        {item.label.replace("Million+", "").trim()}
                      </>
                    ) : (
                      <>
                        <CountUp
                          end={item.count}
                          duration={2.5}
                          separator=","
                        />
                        {item.count >= 1000 ? "+" : ""} <br />
                        {item.label.split("\n").map((line, index) => (
                          <span key={index}>
                            {line}
                            {index < item.label.split("\n").length - 1 && (
                              <br />
                            )}
                          </span>
                        ))}
                      </>
                    )}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < item.description.split("\n").length - 1 && (
                          <br />
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>

            {/* Loved and supported by section */}
            <div className="bg-white text-black mt-12 rounded-xl">
              <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-12">
                <p className="text-center text-sm font-light tracking-wide text-gray-600 mb-6 sm:mb-10">
                  Loved And Supported By
                </p>

                <div className="slider">
                  <div className="slider-track">
                    {[
                      ...CONSTANTS.LOGOS.BRANDS,
                      ...CONSTANTS.LOGOS.BRANDS,
                      ...CONSTANTS.LOGOS.BRANDS,
                    ].map((logoSrc, i) => {
                      const logos = CONSTANTS.LOGOS.BRANDS;
                      const logoIndex = i % logos.length;
                      const logoUrl = CONSTANTS.BRAND_URLS[logoIndex];

                      return (
                        <Link
                          key={i}
                          href={logoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-center md:min-w-[200px]"
                        >
                          <div className="relative">
                            <Image
                              src={logoSrc}
                              alt={`Partner logo ${logoIndex + 1}`}
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
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Section Title for Video */}
            <div className="text-center mb-10 mt-16">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-800">
                Touching Lives
              </h2>
            </div>

            {/* Video Section */}
            <div className="max-w-7xl mx-auto my-10" ref={videoSectionRef}>
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Image Thumbnails Gallery - Left Side */}
                <div className="lg:w-[15%] lg:order-1 lg:aspect-video relative">
                  {/* Mobile: Left Arrow */}
                  {canScrollLeft && (
                    <button
                      onClick={() => scrollGallery("left")}
                      className="lg:hidden absolute -left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-all"
                      aria-label="Scroll left"
                    >
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                  )}

                  {/* Desktop: Up Arrow */}
                  {canScrollUp && (
                    <button
                      onClick={() => scrollGallery("up")}
                      className="hidden lg:block absolute -top-2 left-1/2 transform -translate-x-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-all"
                      aria-label="Scroll up"
                    >
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    </button>
                  )}

                  <div
                    ref={galleryScrollRef}
                    className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:h-full pb-4 lg:pb-0 scrollbar-hide"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {galleryItems.map((item, idx) => (
                      <div
                        key={idx}
                        className={`relative w-[140px] h-[80px] sm:w-[180px] sm:h-[100px] md:w-[220px] md:h-[130px] lg:w-full lg:h-[120px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer border ${
                          selectedItem.thumbnail === item.thumbnail
                            ? "border-blue-500 border-2"
                            : "border-transparent"
                        }`}
                        onClick={() => {
                          setSelectedItem(item);
                          setVideoPlaying(false);
                        }}
                      >
                        <div className="relative w-full h-full bg-gray-800">
                          <Image
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-full object-cover"
                            width={220}
                            height={130}
                            style={{ width: "auto", height: "auto" }}
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent">
                            <p className="text-xs text-white font-medium truncate">
                              {item.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile: Right Arrow */}
                  {canScrollRight && (
                    <button
                      onClick={() => scrollGallery("right")}
                      className="lg:hidden absolute -right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-all"
                      aria-label="Scroll right"
                    >
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  )}

                  {/* Desktop: Down Arrow */}
                  {canScrollDown && (
                    <button
                      onClick={() => scrollGallery("down")}
                      className="hidden lg:block absolute -bottom-2 left-1/2 transform -translate-x-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-all"
                      aria-label="Scroll down"
                    >
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Main Video Player - Right Side */}
                <div className="lg:w-[85%] lg:order-2">
                  <div
                    className="relative overflow-hidden rounded-2xl shadow-lg aspect-video cursor-pointer"
                    onClick={() => setVideoPlaying(true)}
                  >
                    {videoPlaying ? (
                      selectedItem.videoSrc.includes("youtube.com/embed") ? (
                        <iframe
                          src={selectedItem.videoSrc}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      ) : (
                        <video
                          src={selectedItem.videoSrc}
                          className="w-full h-full object-cover"
                          controls
                          playsInline
                          preload="auto"
                        >
                          Your browser does not support the video tag.
                        </video>
                      )
                    ) : (
                      <Image
                        src={selectedItem.thumbnail}
                        alt={selectedItem.title}
                        className="w-full h-full object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 900px"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Section Title for Bottom Cards */}
            <div className="text-center mb-10 mt-16">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-800">
                Our 2030 Vision
              </h2>
            </div>

            {/* Last Row – 3 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
              {bottomCards.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow px-6 py-10 flex flex-col justify-between h-full"
                >
                  {/* <h3 className="text-3xl sm:text-4xl font-roboto font-semibold leading-tight mb-4">
                  <CountUp end={item.count} duration={2} />
                  {item.count >= 1000 ? "+" : ""} <br />
                  {item.label}
                </h3> */}
                  <h3 className="text-3xl sm:text-4xl font-roboto font-semibold leading-tight mb-4">
                    {item.showCountSeparately ? (
                      <>
                        <CountUp
                          end={item.count}
                          duration={2.5}
                          separator=","
                        />
                        {item.count >= 1000 ? "+" : ""} <br />
                        {item.label.split("\n").map((line, index) => (
                          <span key={index}>
                            {line}
                            {index < item.label.split("\n").length - 1 && (
                              <br />
                            )}
                          </span>
                        ))}
                      </>
                    ) : (
                      <>
                        {item.label.split("\n").map((line, index) => (
                          <span key={index}>
                            {line}
                            {index < item.label.split("\n").length - 1 && (
                              <br />
                            )}
                          </span>
                        ))}
                      </>
                    )}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < item.description.split("\n").length - 1 && (
                          <br />
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>

            {/* Download Annual Report Button */}
            <div className="text-center mt-12 mb-8">
              <button className="inline-block px-6 py-3 rounded-full border border-gray-400 text-gray-800 hover:bg-gray-900 hover:text-white transition">
                <a
                  href={CONSTANTS.DOCUMENTS.ANNUAL_REPORT}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Heartyculture Biochar: At a Glance
                </a>
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default TransformationPart;
