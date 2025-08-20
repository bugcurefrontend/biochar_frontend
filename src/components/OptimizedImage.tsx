"use client";
import Image from "next/image";
import { useImagePreloader } from "../hooks/useImagePreloader";
import { getAllUniqueImages } from "../data/slideImages";
import { useMemo } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  priority = false
}) => {
  // Use our centralized image cache
  const allImages = useMemo(() => getAllUniqueImages(), []);
  const { isImageLoaded } = useImagePreloader(allImages);

  // If image is loaded in our cache, use it directly
  if (isImageLoaded(src)) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        style={{ 
          objectFit: 'cover',
          transition: 'opacity 0.3s ease'
        }}
        priority={priority}
      />
    );
  }

  // Show loading placeholder while image loads
  return (
    <div 
      className={`bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center animate-pulse ${className}`}
      style={{ width: '100%', height: '100%' }}
    >
      <div className="text-center">
        <div className="w-8 h-8 mb-2 mx-auto bg-gray-300 rounded animate-pulse"></div>
        <span className="text-gray-400 text-sm">Loading...</span>
      </div>
    </div>
  );
};