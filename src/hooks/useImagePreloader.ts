"use client";
import { useState, useEffect, useRef } from 'react';

// Global image cache to prevent duplicate loading
const globalImageCache = new Map<string, HTMLImageElement>();
const loadingPromises = new Map<string, Promise<HTMLImageElement>>();

export const useImagePreloader = (imageSources: string[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const loadImage = (src: string): Promise<HTMLImageElement> => {
      // Return cached image if already loaded
      if (globalImageCache.has(src)) {
        return Promise.resolve(globalImageCache.get(src)!);
      }

      // Return existing loading promise if already loading
      if (loadingPromises.has(src)) {
        return loadingPromises.get(src)!;
      }

      // Create new loading promise
      const loadingPromise = new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        
        img.onload = () => {
          globalImageCache.set(src, img);
          loadingPromises.delete(src);
          resolve(img);
        };
        
        img.onerror = () => {
          loadingPromises.delete(src);
          reject(new Error(`Failed to load image: ${src}`));
        };
        
        img.src = src;
      });

      loadingPromises.set(src, loadingPromise);
      return loadingPromise;
    };

    const loadAllImages = async () => {
      try {
        const uniqueSources = [...new Set(imageSources)]; // Remove duplicates
        const loadPromises = uniqueSources.map(src => 
          loadImage(src).then(img => ({ src, success: true, img }))
            .catch(error => ({ src, success: false, error }))
        );

        const results = await Promise.allSettled(loadPromises);
        
        if (mountedRef.current) {
          const successfulLoads = new Set<string>();
          
          results.forEach((result) => {
            if (result.status === 'fulfilled' && result.value.success) {
              successfulLoads.add(result.value.src);
            }
          });

          setLoadedImages(successfulLoads);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error preloading images:', error);
        if (mountedRef.current) {
          setIsLoading(false);
        }
      }
    };

    if (imageSources.length > 0) {
      loadAllImages();
    } else {
      setIsLoading(false);
    }
  }, [imageSources]);

  return {
    loadedImages,
    isLoading,
    isImageLoaded: (src: string) => loadedImages.has(src),
    getCachedImage: (src: string) => globalImageCache.get(src),
  };
};