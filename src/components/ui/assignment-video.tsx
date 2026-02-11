"use client";

import { useRef, useEffect, useState } from "react";

export function AssignmentVideo() {
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
      videoRef.current.play().catch(() => {});
    }
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-sm px-6 py-4"
    >
      <div className="relative w-full overflow-hidden rounded-lg border border-[rgba(79,96,250,0.12)]">
        {isVisible ? (
          <video
            ref={videoRef}
            className="block w-full"
            poster="/videos/assignment-poster.webp"
            muted
            loop
            playsInline
            preload="none"
            aria-label="Demo assegnazione lead e conversazioni al team in Odoo"
          >
            <source src="/videos/assignment.webm" type="video/webm" />
            <source src="/videos/assignment.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="/videos/assignment-poster.webp"
            alt="Anteprima schermata assegnazione"
            className="block w-full"
            width={640}
            height={360}
          />
        )}
      </div>
    </div>
  );
}
