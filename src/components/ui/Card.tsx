import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, href, className = "", hover = true }: CardProps) {
  const baseStyles = `bg-white rounded-xl border border-border-light overflow-hidden ${
    hover ? "transition-all duration-300 hover:shadow-lg hover:-translate-y-1" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block ${baseStyles}`}>
        {children}
      </Link>
    );
  }

  return <div className={baseStyles}>{children}</div>;
}

export function CardImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-bg-blue ${className}`}>
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
        <svg className="w-16 h-16 text-primary/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>
    </div>
  );
}

export function CardBody({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
