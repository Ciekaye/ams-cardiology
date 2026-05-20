import Image from "next/image";

interface VireoLogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function VireoLogo({ variant = "dark", className = "" }: VireoLogoProps) {
  return (
    <Image
      src="/vireo-logo.png"
      alt="Vireo Cardiology"
      width={1085}
      height={473}
      priority
      className={`w-auto object-contain ${
        // The wordmark is teal; invert to white on dark backgrounds.
        variant === "light" ? "brightness-0 invert" : ""
      } ${className}`}
    />
  );
}
