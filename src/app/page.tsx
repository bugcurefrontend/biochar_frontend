import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LazyComponent from "../components/LazyComponent";
import TransformationPart from "../components/TransformationPart";
import Brands from "../components/Brands";
import FormAndFaq from "../components/FormAndFaq";
import Footer from "../components/Footer";
import WhyUs from "../components/WhyUs";

// Loading fallback component
const LoadingFallback = ({ minHeight = "200px" }: { minHeight?: string }) => (
  <div 
    className="flex items-center justify-center bg-gray-50"
    style={{ minHeight }}
  >
    <div className="flex items-center space-x-2 text-gray-500">
      <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
      <span className="text-sm">Loading...</span>
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      {/* First 2 components - load immediately */}
      <Header />
      <Hero />
      
      {/* Lazy load remaining components */}
      <LazyComponent 
        fallback={<LoadingFallback minHeight="400px" />}
        minHeight="400px"
      >
        <WhyUs />
      </LazyComponent>

      <LazyComponent 
        fallback={<LoadingFallback minHeight="600px" />}
        minHeight="600px"
      >
        <TransformationPart />
      </LazyComponent>

      <LazyComponent 
        fallback={<LoadingFallback minHeight="200px" />}
        minHeight="200px"
      >
        <Brands />
      </LazyComponent>

      <LazyComponent 
        fallback={<LoadingFallback minHeight="500px" />}
        minHeight="500px"
      >
        <FormAndFaq />
      </LazyComponent>

      <LazyComponent 
        fallback={<LoadingFallback minHeight="150px" />}
        minHeight="150px"
      >
        <Footer />
      </LazyComponent>
    </>
  );
}