"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

interface HeroProps {
  /* Calmer imaging/hospital photo. Source: Unsplash (photo-1576091160550-2173dba999ef) */
  imageUrl: string;
  eyebrow?: string;
  headline: string;
  subheadline: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA: { text: string; href: string };
}

export default function Hero({
  imageUrl,
  eyebrow,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src={imageUrl}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Teal gradient overlay (~55–65% opacity) for legible white text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, rgba(10,55,66,0.78) 0%, rgba(15,76,92,0.62) 45%, rgba(15,76,92,0.55) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative h-full flex items-start pt-32 md:pt-36 lg:pt-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <div
              className={`transition-all duration-1000 ease-out motion-reduce:transition-none ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              {eyebrow && (
                <div className="mb-6">
                  <span className="inline-block text-sm md:text-base font-semibold tracking-wider uppercase text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                    {eyebrow}
                  </span>
                </div>
              )}

              <h1 className="font-serif font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] mb-6">
                {headline}
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-10 max-w-xl">
                {subheadline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={primaryCTA.href}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-brand-coral hover:bg-brand-coralDark text-white text-base md:text-lg font-semibold rounded-full shadow-xl transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-teal"
                >
                  {primaryCTA.text}
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <Link
                  href={secondaryCTA.href}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/10 text-white text-base md:text-lg font-semibold rounded-full border-2 border-white/70 hover:border-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-teal"
                >
                  {secondaryCTA.text}
                  <ChevronRight className="w-5 h-5 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated ECG pulse line along the bottom edge */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none" aria-hidden="true">
        <svg
          className="ecg-pulse w-full h-16 md:h-20"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 40 H420 l18 0 l10 -26 l14 52 l12 -64 l12 70 l10 -32 H560 l18 0 l10 -26 l14 52 l12 -64 l12 70 l10 -32 H1200"
            stroke="#E36F6F"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <style jsx>{`
        .ecg-pulse path {
          stroke-dasharray: 1600;
          stroke-dashoffset: 1600;
          animation: ecg-draw 4s linear infinite;
          filter: drop-shadow(0 0 6px rgba(227, 111, 111, 0.5));
        }
        @keyframes ecg-draw {
          0% {
            stroke-dashoffset: 1600;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .ecg-pulse path {
            animation: none;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}
