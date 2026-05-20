import { Phone, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function UtilityBar() {
  return (
    <div className="text-white text-sm hidden md:block" style={{ backgroundColor: '#0F4C5C' }}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-10">
        <div className="flex items-center gap-6">
          <a href="tel:+15550143782" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>(555) 014-3782</span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Patient Portal</span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 transition-colors"
          >
            Pay My Bill
          </a>
          <Link href="/telemedicine" className="hover:text-white/80 transition-colors">
            Telemedicine
          </Link>
        </div>
      </div>
    </div>
  );
}
