"use client";
import React, { ReactNode, useEffect, useState, useRef } from 'react';

interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
  minHeight?: string;
}

const LazyComponent: React.FC<LazyComponentProps> = ({
  children,
  fallback = null,
  className = '',
  minHeight = '200px'
}) => {
  const [shouldRender, setShouldRender] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div 
      ref={elementRef} 
      className={className}
      style={{ minHeight: shouldRender ? 'auto' : minHeight }}
    >
      {shouldRender ? children : fallback}
    </div>
  );
};

export default LazyComponent;