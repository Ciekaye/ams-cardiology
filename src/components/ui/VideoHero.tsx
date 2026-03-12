"use client";

import { useEffect, useRef, useState } from "react";

interface VideoHeroProps {
  videoUrl: string;
  eyebrow?: string;
  headline: string;
  subheadline: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
}

export default function VideoHero({
  videoUrl,
  eyebrow,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Ensure video plays on mobile devices
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/video-poster.jpg"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content - Left Aligned */}
      <div className="relative h-full flex items-start pt-32 md:pt-36 lg:pt-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            {/* Fade-in and slide-up animated content */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {/* Eyebrow Text */}
              {eyebrow && (
                <div className="mb-6">
                  <span className="inline-block text-sm md:text-base font-semibold tracking-wider uppercase text-accent-light bg-accent-light/10 backdrop-blur-sm px-4 py-2 rounded-full border border-accent-light/30">
                    {eyebrow}
                  </span>
                </div>
              )}
              
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                {headline}
              </h1>
              
              {/* Subheadline */}
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-10 max-w-xl">
                {subheadline}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={primaryCTA.href}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-secondary hover:bg-secondary-light text-white text-base md:text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  {primaryCTA.text}
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                
                <a
                  href={secondaryCTA.href}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white text-base md:text-lg font-semibold rounded-lg border-2 border-white/40 hover:border-white/60 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {secondaryCTA.text}
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-8 sm:left-12 lg:left-16 animate-bounce hidden md:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs uppercase tracking-wider font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
