"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Disable on touch devices or if user prefers reduced motion
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    ) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    gsap.set([dot, ring], { opacity: 0 });

    const xToDot = gsap.quickTo(dot, "x", { duration: 0.02, ease: "none" });
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.02, ease: "none" });
    
    const xToRing = gsap.quickTo(ring, "x", { duration: 0.12, ease: "power2.out" });
    const yToRing = gsap.quickTo(ring, "y", { duration: 0.12, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      xToDot(x - 3);
      yToDot(y - 3);
      xToRing(x - 16);
      yToRing(y - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.closest("button") ||
          target.closest("a") ||
          target.closest("[data-interactive]") ||
          target.classList.contains("interactive"))
      ) {
        setIsHovered(true);
        gsap.to(ring, {
          scale: 1.3,
          borderColor: "rgba(229, 9, 20, 0.8)",
          backgroundColor: "rgba(229, 9, 20, 0.05)",
          duration: 0.2,
          ease: "power2.out"
        });
      } else {
        setIsHovered(false);
        gsap.to(ring, {
          scale: 1,
          borderColor: "rgba(229, 9, 20, 0.3)",
          backgroundColor: "transparent",
          duration: 0.2,
          ease: "power2.out"
        });
      }
    };

    const handleMouseEnter = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
    };

    const handleMouseLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Precision Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[99999] pointer-events-none w-1.5 h-1.5 bg-red-600 rounded-full hidden md:block"
      />

      {/* Gentle Soft Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[99999] pointer-events-none w-8 h-8 border border-red-600/30 rounded-full flex items-center justify-center transition-transform duration-150 ease-out hidden md:block"
      />
    </>
  );
}
