"use client";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect, useRef } from "react";

interface LocomotiveWrapperProps {
  children: React.ReactNode;
}

const LocomotiveWrapper: React.FC<LocomotiveWrapperProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true, // Enable smooth scrolling
        multiplier: 1, // Adjust scrolling speed
      } as any);

      // Clean up the scroll instance on unmount
      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default LocomotiveWrapper;
