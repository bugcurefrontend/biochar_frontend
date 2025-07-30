"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

const TransfomationPart = () => {
  return (
    <>
      <section id="ourImpact" className="bg-[#e9edf2] py-6 md:px-7">
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
                Turn carbon into community
              </button>
            </div>
          </div>
        </div>
        {/* ─────────────── Testimonial card – mobile (≤ md) ─────────────── */}
        <article className="bg-gray-900 text-white rounded-xl mt-8 p-6 mx-6 overflow-hidden md:hidden">
          {/* Image + “Before” tag */}
          <div className="relative">
            <Image
              src="/girl.png" // replace with actual path
              alt="Girl before transformation"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 right-2 bg-black/80 text-xs px-3 py-1 rounded">
              Before
            </span>
          </div>

          {/* Quote */}
          <div className=" py-6">
            <p className="font-serif text-lg leading-relaxed">
              “Vision, ingenuity, and labor have transformed what was once harsh
              and depleted land into a lush green campus, with rainforest full
              of thriving, endemic, and endangered species, medicinal and edible
              plants, and organic farms. Kanha Shanti Vanam has become a
              testament to harmony with nature.”
            </p>

            <div className="text-lg py-4 text-gray-300">
              <p className="">Patricia Scotland</p>
              <p className="">Secretary General, Commonwealth</p>
            </div>
          </div>
        </article>
        {/* ─────────────── Testimonial Card – Desktop (≥ md) ─────────────── */}
        <div className="hidden md:flex mt-16 bg-gray-900 text-white rounded-xl overflow-hidden">
          {/* Left – Before image */}
          <div className="md:w-1/2 flex flex-col">
            {/* After image */}
            <div className="relative">
              <Image
                src="/testimonile/video.jpg"
                alt="Girl after transformation"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right – After image + Content */}
          <div className="md:w-1/2 flex flex-col relative ">
            <div className="p-8 space-y-4">
              <p className="font-serif text-lg leading-relaxed">
                “Vision, ingenuity, and labor have transformed what was once
                harsh and depleted land into a lush green campus, with
                rainforest full of thriving, endemic, and endangered species,
                medicinal and edible plants, and organic farms. Kanha Shanti
                Vanam has become a testament to harmony with nature.”
              </p>
            </div>

            {/* Content */}
            <div className="p-8 space-y-4">
              <div className="text-sm font-normal text-gray-300">
                <p className="">Patricia Scotland</p>
                <p className="text-gray-300">Secretary General, Commonwealth</p>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed pt-4">
                Water table has increased from 1,200 feet below ground to 300
                feet below ground. Over 150,000 trees have been grown on barren
                land, in a period of 6 years. Multiple rainforests grown on poor
                soil in a semi-arid land with low annual rainfall, considered
                impossible by experts.
              </p>
            </div>
          </div>
        </div>

        {/* ─────────── Mobile-only stats card (≤ md) ─────────── */}
        <div className="md:hidden my-8 space-y-6 mx-6">
          {/* Image banner */}
          <Image
            src="/farmer.png"
            alt="Aerial view of farmland"
            width={800}
            height={450}
            className="w-full h-48 object-cover rounded-xl"
          />

          {/* Stat card */}
          <div className="bg-white rounded-2xl shadow px-8 py-12 text-center">
            <h3 className="font-roboto font-semibold text-5xl leading-none mb-6">
              18 Million
              <br />
              farmers
            </h3>
            <p className="text-sm text-gray-600">
              Direct access through partner network
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow px-8 py-12 text-center">
            <h3 className="font-roboto font-semibold text-5xl leading-none mb-6">
              18 Million
              <br />
              farmers
            </h3>
            <p className="text-sm text-gray-600">
              Direct access through partner network
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow px-8 py-12 text-center">
            <h3 className="font-roboto font-semibold text-5xl leading-none mb-6">
              18 Million
              <br />
              farmers
            </h3>
            <p className="text-sm text-gray-600">
              Direct access through partner network
            </p>
          </div>
          <div className="relative bg-[#08141f] text-white rounded-2xl px-6 py-10">
            <span className="absolute top-6 right-6 bg-black text-xs px-3 py-1 rounded">
              Current
            </span>
            <h3 className="font-roboto font-semibold text-5xl leading-none mb-6">
              3,216
              <br />
              credits
            </h3>
            <p className="text-sm text-gray-300">From 20 sites across India</p>
          </div>
          <div className="relative bg-[#08141f] text-white rounded-2xl px-6 py-10">
            <span className="absolute top-6 right-6 bg-black text-xs px-3 py-1 rounded">
              Current
            </span>

            <h3 className="font-roboto font-semibold text-5xl leading-none mb-6">
              3,216
              <br />
              credits
            </h3>
            <p className="text-sm text-gray-300">From 20 sites across India</p>
          </div>
        </div>

        {/* ─────────── Desktop / Tablet block (≥ md) ─────────── */}
        <div
          className="hidden md:grid mt-16 gap-6 md:px-0  
                max-w-[1440px] mx-auto              
                grid-cols-[2fr_1fr]"
        >
          {/* 2-column grid 2:1 */}
          {/* Left : hero image + two dark stats */}
          <div className="grid grid-rows-[auto_auto] gap-6">
            {/* Hero image */}
            <Image
              src="/farmer.png"
              alt="Farmer in field"
              width={1500}
              height={900}
              className="w-full h-full object-cover rounded-xl lg:h-[70vh]"
            />

            {/* Two dark cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="relative bg-[#08141f] text-white rounded-2xl px-6 py-5">
                <span className="absolute top-6 right-6 bg-black text-xs px-3 py-1 rounded">
                  Current
                </span>
                <h3 className="font-roboto font-semibold text-5xl leading-none mb-6">
                  <CountUp end={3000} duration={2} />+ <br /> Farmers Engaged
                </h3>
                <p className="text-sm text-gray-300">
                  Farmer trials underway with 460 farmers across 8 districts
                </p>
              </div>

              <div className="relative bg-[#08141f] text-white rounded-2xl px-6 py-5">
                <span className="absolute top-6 right-6 bg-black text-xs px-3 py-1 rounded">
                  Current
                </span>
                <h3 className="font-roboto font-semibold text-5xl leading-none mb-6">
                  <CountUp end={3216} duration={2} /> <br />
                  Carbon Credits Issued
                </h3>
                <p className="text-sm text-gray-300">
                  Verified through rigorous standards and audits
                </p>
              </div>
            </div>
          </div>
          {/* Right : three white stat cards */}
          <div className="flex flex-col space-y-6 w-full">
            <div className="bg-white rounded-2xl shadow px-8 py-12">
              <h3 className="text-4xl font-roboto font-semibold leading-tight mb-4">
                <CountUp end={2} duration={2} />+ Million <br /> Carbon Credits
              </h3>
              <p className="text-sm text-gray-600">
                Projected long-term carbon drawdown
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow px-8 py-12">
              <h3 className="text-4xl font-roboto font-semibold leading-tight mb-4">
                <CountUp end={100000} duration={2} />+ <br /> Villages Reached
              </h3>
              <p className="text-sm text-gray-600">
                Decentralized biochar units catalyzing rural livelihoods
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow px-8 py-12">
              <h3 className="text-4xl font-roboto font-semibold leading-tight mb-4">
                <CountUp end={18} duration={2} /> Million <br /> Farmers
                Empowered
              </h3>
              <p className="text-sm text-gray-600">
                Scalable model for regenerative agriculture across India
              </p>
              <p className="text-sm text-gray-600">By 2030</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TransfomationPart;
