"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { blobColors } from "@/lib/theme";

interface MousePosition {
  x: number;
  y: number;
}

export default function ParallaxBackground() {
  const { theme } = useTheme();
  const colorSet = theme === "dark" ? blobColors.dark : blobColors.light;
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const targetMousePos = useRef<MousePosition>({ x: 0, y: 0 });
  const frameRef = useRef<number>();

  // Screen size detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse movement animation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetMousePos.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };

    const animate = () => {
      setMousePos(prev => ({
        x: prev.x + (targetMousePos.current.x - prev.x) * (isMobile ? 0.05 : 0.1),
        y: prev.y + (targetMousePos.current.y - prev.y) * (isMobile ? 0.05 : 0.1)
      }));
      
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isMobile]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className={cn(
          "absolute rounded-full mix-blend-multiply filter blur-xl opacity-70",
          colorSet[0],
          "w-[200px] h-[200px] top-[5%] left-[10%]",
          "md:w-[400px] md:h-[400px] md:top-10 md:left-1/4",
          isMobile ? "animate-blob-slow" : "animate-blob"
        )}
        style={{
          transform: `translate3d(${mousePos.x * (isMobile ? 10 : 20)}px, ${mousePos.y * (isMobile ? 10 : 20)}px, 0)`,
        }}
      />
      <div
        className={cn(
          "absolute rounded-full mix-blend-multiply filter blur-xl opacity-70",
          colorSet[1],
          "w-[150px] h-[150px] top-[40%] left-[50%]",
          "md:w-[300px] md:h-[300px] md:top-1/2 md:left-2/3",
          isMobile ? "animate-blob-slow" : "animate-blob"
        )}
        style={{
          transform: `translate3d(${mousePos.x * (isMobile ? -7 : -15)}px, ${mousePos.y * (isMobile ? -7 : -15)}px, 0)`,
        }}
      />
      <div
        className={cn(
          "absolute rounded-full mix-blend-multiply filter blur-xl opacity-70",
          colorSet[2],
          "w-[250px] h-[250px] top-[20%] left-[5%]",
          "md:w-[500px] md:h-[500px] md:top-1/4 md:left-0",
          isMobile ? "animate-blob-slow" : "animate-blob"
        )}
        style={{
          transform: `translate3d(${mousePos.x * (isMobile ? 5 : 10)}px, ${mousePos.y * (isMobile ? 5 : 10)}px, 0)`,
        }}
      />
    </div>
  );
} 