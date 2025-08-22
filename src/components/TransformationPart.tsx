"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";
import { useState, useRef, useEffect, useMemo } from "react";
import { CONSTANTS } from "../constants";

const TransformationPart = () => {
  const galleryItems = useMemo(() => [
    {
      videoSrc: CONSTANTS.VIDEOS.KANHA,
      thumbnail: CONSTANTS.THUMBNAILS.KANHA,
      title: "Kanha Biochar Project"
    },
    {
      videoSrc: CONSTANTS.VIDEOS.SHIVGARH,
      thumbnail: CONSTANTS.THUMBNAILS.SHIVGARH,
      title: "Shivgarh Impact Story"
    },
  ], []);

  const [selectedItem, setSelectedItem] = useState(galleryItems[0]);
  const [testimonialPlaying, setTestimonialPlaying] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Handle video visibility changes
  const handleVisibilityChange = (isVisible: boolean, setPlayingState: (playing: boolean) => void) => {
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
        rootMargin: '0px'
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
        rootMargin: '0px'
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

  return (
    <>
      <section id="ourImpact" className="bg-[#e9edf2] py-6 md:px-7" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-5 py-10 lg:py-24">
          {/* <div className="grid md:grid-cols-12 md:gap-16"> */}
          <div className="md:flex md:justify-between w-full">
            {/* LEFT – headline */}
            <div className="md:w-1/2">
              <p className="text-sm font-light tracking-wide text-gray-600 mb-6">
                Impact
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight mb-8">
                Transformation at scale
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
                Carbon finance enables us to set&nbsp;up biochar sites, which:
              </p>

              <ul className="list-disc pl-5 space-y-1">
                <li>Creates local entrepreneurs and jobs</li>
                <li>Drives measurable soil improvement and higher yields</li>
                <li>Delivers rising rural incomes</li>
              </ul>

              <button className="inline-block mt-5 px-6 py-3 rounded-full border border-gray-400 text-gray-800 hover:bg-gray-900 hover:text-white transition">
                <Link href="#formForId">Turn carbon into community</Link>
              </button>
            </div>
          </div>
        </div>
        {/* ─────────────── Responsive Testimonial Card – All Screens ─────────────── */}
        <div className="mt-8 mx-4 sm:mx-6 lg:mt-16 bg-gray-900 text-white rounded-xl overflow-hidden" ref={testimonialRef}>
          <div className="flex flex-col lg:flex-row lg:h-96">
            {/* Video Section */}
            <div 
              className="relative aspect-video lg:aspect-auto lg:w-1/2 bg-gray-800 cursor-pointer overflow-hidden" 
              onClick={() => setTestimonialPlaying(true)}
            >
              {testimonialPlaying ? (
                <video
                  src={CONSTANTS.VIDEOS.PATRICIA}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="auto"
                >
                  Your browser does not support the video tag.
                </video>
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
            <div className="p-4 sm:p-6 lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:p-8">
              <div className="space-y-4 lg:space-y-6">
                <p className="font-serif text-base sm:text-lg lg:text-xl leading-relaxed">
                  &ldquo;Vision, ingenuity, and labor have transformed what was once
                  harsh and depleted land into a lush green campus, with
                  rainforest full of thriving, endemic, and endangered species,
                  medicinal and edible plants, and organic farms. Kanha Shanti
                  Vanam has become a testament to harmony with nature.&rdquo;
                </p>

                <div className="text-sm text-gray-300">
                  <p>Patricia Scotland</p>
                  <p>Secretary General, Commonwealth</p>
                </div>

                <p className="text-xs sm:text-sm lg:text-sm text-gray-400 leading-relaxed">
                  Water table has increased from 1,200 feet below ground to 300
                  feet below ground. Over 150,000 trees have been grown on barren
                  land, in a period of 6 years. Multiple rainforests grown on poor
                  soil in a semi-arid land with low annual rainfall, considered
                  impossible by experts.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-[#e9edf2] py-10 px-4 mt-16">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-800">
              Where we are currently standing
            </h2>
          </div>

          {/* First Row – 2 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
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
                      <CountUp end={item.count} duration={2} separator="," />+ Million
                      <br />
                      {item.label.replace("Million+", "").trim()}
                    </>
                  ) : (
                    <>
                      <CountUp end={item.count} duration={2} separator="," />
                      {item.count >= 1000 ? "+" : ""} <br />
                      {item.label.split('\n').map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < item.label.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </>
                  )}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.description.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < item.description.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>

          {/* Section Title for Video */}
          <div className="text-center mb-10 mt-16">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-800">
              Touching Lives
            </h2>
          </div>

          {/* Video Section */}
          <div className="max-w-6xl mx-auto my-10" ref={videoSectionRef}>
            {/* Main Video Player */}
            <div 
              className="relative overflow-hidden rounded-2xl shadow-lg aspect-video mb-4 cursor-pointer"
              onClick={() => setVideoPlaying(true)}
            >
              {videoPlaying ? (
                <video
                  src={selectedItem.videoSrc}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="auto"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={selectedItem.thumbnail}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                  width={640}
                  height={360}
                  style={{ width: "auto", height: "auto" }}
                />
              )}
            </div>

            {/* Image Thumbnails Gallery */}
            <div className="flex gap-4 overflow-x-auto mt-6 pb-4">
              {galleryItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative w-[140px] h-[80px] sm:w-[180px] sm:h-[100px] md:w-[220px] md:h-[130px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer border ${selectedItem.thumbnail === item.thumbnail
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
          </div>

          {/* Section Title for Bottom Cards */}
          <div className="text-center mb-10 mt-16">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-800">
              Our 2030 Vision
            </h2>
          </div>

          {/* Last Row – 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
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
                      <CountUp end={item.count} duration={2} separator="," />
                      {item.count >= 1000 ? "+" : ""} <br />
                      {item.label.split('\n').map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < item.label.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </>
                  ) : (
                    <>
                      {item.label.split('\n').map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < item.label.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </>
                  )}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.description.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < item.description.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>

          {/* Download Annual Report Button */}
          <div className="text-center mt-12 mb-8">
            <button className="inline-block px-6 py-3 rounded-full border border-gray-400 text-gray-800 hover:bg-gray-900 hover:text-white transition">
                          <a href={CONSTANTS.DOCUMENTS.ANNUAL_REPORT} target="_blank" rel="noopener noreferrer">
              Download 2025 Annual Report
            </a>
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default TransformationPart;