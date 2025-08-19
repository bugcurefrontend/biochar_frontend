"use client";
import { useImagePreloader } from "../hooks/useImagePreloader";
import { getAllUniqueImages } from "../data/slideImages";
import { useMemo } from "react";

// This component loads ALL images once globally
export const GlobalImagePreloader = () => {
  const allImages = useMemo(() => getAllUniqueImages(), []);
  
  // Load all images once when this component mounts
  useImagePreloader(allImages);
  
  // This component doesn't render anything
  return null;
};