import { Phone, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function UtilityBar() {
  return (
    <div className="text-white text-sm hidden md:block" style={{ backgroundColor: '#ca0c10' }}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-10">
        <div className="flex items-center gap-6">
          <a href="tel:+12155171000" className="flex items-center gap-1.5 hover:text-accent-light transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>215-517-1000</span>
          </a>
          <a
            href="https://mycw14.eclinicalweb.com/portal751/jsp/100mp/login_otp.jsp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-accent-light transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Patient Portal</span>
          </a>
          <a
            href="https://healowpay.com/HealowPay/jsp/healow/login.jsp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-light transition-colors"
          >
            Pay My Bill
          </a>
          <Link href="/telemedicine" className="hover:text-accent-light transition-colors">
            Telemedicine
          </Link>
        </div>
      </div>
    </div>
  );
}
