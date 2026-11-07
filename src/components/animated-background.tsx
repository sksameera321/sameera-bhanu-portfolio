"use client";
import React, { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 bg-[#09090b] overflow-hidden pointer-events-none">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      
      {/* Subtle Mouse Follow Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.15] blur-[120px] pointer-events-none transition-transform duration-300 ease-out"
        style={{
          background: "radial-gradient(circle, #e11d48 0%, transparent 70%)",
          left: `${mousePos.x - 300}px`,
          top: `${mousePos.y - 300}px`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
