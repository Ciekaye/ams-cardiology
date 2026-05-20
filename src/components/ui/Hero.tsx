"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

interface HeroStat {
  value: string;
  label: string;
}

interface HeroProps {
  /* Calmer imaging/hospital photo. Source: Unsplash (photo-1576091160550-2173dba999ef) */
  imageUrl: string;
  eyebrow?: string;
  headline: string;
  subheadline: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA: { text: string; href: string };
  stats?: HeroStat[];
}

/* Split "100K+" -> { num: 100, suffix: "K+" }, "19+" -> { num: 19, suffix: "+" } */
function parseStat(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/* One-time count-up on mount. Renders the final value on the server (no hydration
   mismatch); animates from 0 on the client unless reduced motion is requested. */
function CountUpStat({ value, label }: HeroStat) {
  const { num, suffix } = parseStat(value);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let raf = 0;
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(`${Math.round(eased * num)}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [num, suffix]);

  return (
    <div className="text-center">
      <p className="text-3xl md:text-4xl font-bold tracking-tight text-white tabular-nums">
        {display}
      </p>
      <p className="mt-1 text-xs md:text-sm text-white/70 leading-snug">{label}</p>
    </div>
  );
}

export default function Hero({
  imageUrl,
  eyebrow,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  stats,
}: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero relative h-screen min-h-[700px] w-full overflow-hidden"
    >
      {/* Background image with a slow Ken-Burns zoom (the single continuous accent) */}
      <div className="kenburns absolute inset-0" aria-hidden="true">
        <Image src={imageUrl} alt="" fill priority sizes="100vw" className="object-cover" />
      </div>

      {/* Layered atmosphere (all static) */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(120deg, rgba(10,55,66,0.90) 0%, rgba(15,76,92,0.68) 50%, rgba(10,55,66,0.90) 100%)",
        }}
      />
      {/* Soft coral glow for warmth + depth */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 18%, rgba(227,111,111,0.22) 0%, transparent 70%)",
        }}
      />
      {/* Center darkening for legible white text + bottom vignette to blend into next section */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(10,55,66,0.35) 0%, transparent 65%), linear-gradient(to bottom, transparent 55%, rgba(10,55,66,0.65) 100%)",
        }}
      />

      {/* Content — centered */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-24">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out motion-reduce:transition-none ${
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

          {/* Premium headline — Inter, bold + tight */}
          <h1 className="font-sans font-bold lg:font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
            {headline}
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-10 max-w-xl mx-auto">
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

          {/* Quiet stat row */}
          {stats && stats.length > 0 && (
            <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto border-t border-white/15 pt-8">
              {stats.map((stat) => (
                <CountUpStat key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Animated ECG pulse line along the bottom edge — draws in once on load */}
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
        .kenburns :global(img) {
          transform-origin: center;
          animation: kenburns 24s ease-in-out infinite alternate;
          will-change: transform;
        }
        @keyframes kenburns {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.08);
          }
        }

        .ecg-pulse path {
          stroke-dasharray: 1600;
          stroke-dashoffset: 1600;
          animation: ecg-draw 4s linear 0.3s infinite;
          filter: drop-shadow(0 0 6px rgba(227, 111, 111, 0.5));
        }
        @keyframes ecg-draw {
          from {
            stroke-dashoffset: 1600;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .kenburns :global(img) {
            animation: none;
          }
          .ecg-pulse path {
            animation: none;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}
