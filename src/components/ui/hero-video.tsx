"use client";

import { useRef, useEffect, useState } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked — poster remains visible
      });
    }
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden rounded-2xl border border-[rgba(79,96,250,0.12)] bg-[#00031C] shadow-2xl shadow-[#4F60FA]/10"
    >
      {/* Browser chrome bar */}
      <div className="flex h-10 items-center gap-3 border-b border-[rgba(79,96,250,0.12)] bg-[#050A29] px-4 sm:h-12">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57] sm:h-3 sm:w-3" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E] sm:h-3 sm:w-3" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#28C840] sm:h-3 sm:w-3" />
        </div>
        <div className="flex flex-1 justify-center">
          <div className="h-5 w-48 rounded-md bg-[#1D217B]/30 sm:h-6 sm:w-64" />
        </div>
      </div>

      {/* Video area */}
      <div className="relative aspect-video">
        {isVisible && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            poster="/videos/hero-chat-poster.webp"
            muted
            loop
            playsInline
            preload="none"
            aria-label="Demo della chat SuperChat per Odoo — interfaccia di messaggistica multi-canale"
          >
            <source src="/videos/hero-chat.webm" type="video/webm" />
            <source src="/videos/hero-chat.mp4" type="video/mp4" />
          </video>
        )}

        {!isVisible && (
          <img
            src="/videos/hero-chat-poster.webp"
            alt="Anteprima demo SuperChat"
            className="absolute inset-0 h-full w-full object-cover"
            width={1280}
            height={720}
          />
        )}
      </div>
    </div>
  );
}
