"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "action">("default");
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on non-touch devices
    if (typeof window !== "undefined") {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      setIsTouchDevice(isTouch);
      if (isTouch) return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("a, button, [data-cursor]");
      
      if (interactiveEl) {
        const customCursor = interactiveEl.getAttribute("data-cursor");
        if (customCursor) {
          setCursorText(customCursor.toUpperCase());
          setCursorVariant("action");
        } else {
          setCursorText("");
          setCursorVariant("hover");
        }
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer context ring / pill */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none transition-colors duration-200"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorVariant === "action" ? 84 : cursorVariant === "hover" ? 48 : 28,
          height: cursorVariant === "action" ? 84 : cursorVariant === "hover" ? 48 : 28,
          backgroundColor:
            cursorVariant === "action"
              ? "var(--brand)"
              : cursorVariant === "hover"
              ? "rgba(230, 69, 0, 0.15)"
              : "transparent",
          borderColor:
            cursorVariant === "action"
              ? "transparent"
              : cursorVariant === "hover"
              ? "var(--brand)"
              : "rgba(150, 150, 150, 0.35)",
          borderWidth: cursorVariant === "action" ? 0 : 1.5,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {cursorVariant === "action" && cursorText && (
          <span className="text-[10px] font-mono font-bold tracking-wider text-white select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center pinpoint dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-brand pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorVariant === "action" ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
