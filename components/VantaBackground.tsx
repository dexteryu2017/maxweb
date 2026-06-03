"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    VANTA: {
      BIRDS: (opts: Record<string, unknown>) => { destroy: () => void };
    };
    THREE: unknown;
  }
}

export default function VantaBackground() {
  const vantaRef = useRef<{ destroy: () => void } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const initVanta = () => {
    if (
      typeof window !== "undefined" &&
      window.VANTA?.BIRDS &&
      containerRef.current &&
      !vantaRef.current
    ) {
      vantaRef.current = window.VANTA.BIRDS({
        el: containerRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x050510,
        color1: 0x00f5ff,
        color2: 0xbf00ff,
        colorMode: "lerp",
        birdSize: 1.2,
        wingSpan: 30.0,
        speedLimit: 4.0,
        separation: 60.0,
        alignment: 40.0,
        cohesion: 30.0,
        quantity: 3.0,
      });
    }
  };

  useEffect(() => {
    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
        vantaRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // three.js loaded, now load vanta
        }}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
        strategy="afterInteractive"
        onLoad={initVanta}
      />
      <div
        ref={containerRef}
        id="vanta-bg"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
    </>
  );
}
