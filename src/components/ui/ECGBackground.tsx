"use client";

export default function ECGBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep navy gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#1a3a5c]" />
      
      {/* Animated gradient mesh overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="gradient-mesh" />
      </div>
      
      {/* Ambient glow orbs */}
      <div className="absolute inset-0">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="glow-orb glow-orb-3" />
      </div>
      
      {/* Ultra-subtle ECG line accent - very low opacity */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="ecg-subtle"
            d="M 0 50 L 40 50 L 43 35 L 46 65 L 49 25 L 52 50 L 55 48 L 100 48"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </defs>
        <g className="ecg-subtle-line">
          <use href="#ecg-subtle" x="0" y="60%" />
        </g>
      </svg>
      
      {/* Fine medical-tech grid texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 0.5px, transparent 0.5px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 0.5px, transparent 0.5px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Soft light sweep effect */}
      <div className="light-sweep" />
      
      {/* Vignette for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        @keyframes ecg-drift {
          0% {
            transform: translateX(-10%);
          }
          100% {
            transform: translateX(110%);
          }
        }

        @keyframes light-sweep {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        .gradient-mesh {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.1) 0%,
            rgba(147, 51, 234, 0.05) 25%,
            rgba(59, 130, 246, 0.08) 50%,
            rgba(16, 185, 129, 0.04) 75%,
            rgba(59, 130, 246, 0.1) 100%
          );
          background-size: 400% 400%;
          animation: gradient-shift 20s ease infinite;
          will-change: background-position;
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          animation: glow-pulse 8s ease-in-out infinite;
          will-change: opacity, transform;
        }

        .glow-orb-1 {
          top: 10%;
          right: 15%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%);
          animation-delay: 0s;
          animation-duration: 12s;
        }

        .glow-orb-2 {
          bottom: 20%;
          left: 10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%);
          animation-delay: 4s;
          animation-duration: 14s;
        }

        .glow-orb-3 {
          top: 50%;
          left: 50%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%);
          animation-delay: 8s;
          animation-duration: 16s;
        }

        .ecg-subtle-line {
          animation: ecg-drift 60s linear infinite;
          will-change: transform;
        }

        .light-sweep {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 40%;
          height: 200%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.03) 50%,
            transparent 100%
          );
          animation: light-sweep 15s ease-in-out infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .gradient-mesh,
          .glow-orb,
          .ecg-subtle-line,
          .light-sweep {
            animation: none;
          }
        }

        @media (max-width: 768px) {
          .glow-orb {
            filter: blur(60px);
          }
          .glow-orb-1,
          .glow-orb-2,
          .glow-orb-3 {
            width: 300px;
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
}
