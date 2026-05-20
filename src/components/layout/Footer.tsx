import Link from "next/link";
import VireoLogo from "@/components/ui/VireoLogo";
import { Phone, MapPin, Mail, Facebook, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#0F4C5C' }}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <VireoLogo variant="light" className="h-11 w-auto" />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Modern heart care, rooted in trust. Vireo Cardiology provides evidence-based cardiovascular care to the Greater Philadelphia area.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/80">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Physicians", href: "/physicians" },
                { label: "Services", href: "/services" },
                { label: "Conditions", href: "/conditions" },
                { label: "Locations", href: "/locations" },
                { label: "Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-[#E36F6F] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/80">
              Patient Resources
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Patient Portal", href: "#", external: true },
                { label: "Pay My Bill", href: "#", external: true },
                { label: "Telemedicine", href: "/telemedicine" },
                { label: "Patient Forms", href: "/patient-resources" },
                { label: "Request Appointment", href: "/contact" },
                { label: "Clinical Trials", href: "/clinical-trials" },
                { label: "Cardiac Rehab", href: "/services/cardiac-rehab" },
              ].map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#E36F6F] text-sm transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-white/70 hover:text-[#E36F6F] text-sm transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/80">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+15550143782" className="flex items-start gap-3 text-white/70 hover:text-[#E36F6F] transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">(555) 014-3782</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">
                    1234 Chestnut Street, Suite 500<br />
                    Philadelphia, PA 19107
                  </span>
                </div>
              </li>
              <li>
                <a href="mailto:info@vireocardiology.com" className="flex items-start gap-3 text-white/70 hover:text-[#E36F6F] transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">info@vireocardiology.com</span>
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <p className="text-xs text-white/70 mb-1 font-medium">Office Hours</p>
              <p className="text-sm text-white/90">Mon – Fri: 8:00 AM – 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Vireo Cardiology. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-white/50 hover:text-[#E36F6F] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/50 hover:text-[#E36F6F] transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-xs text-white/50 hover:text-[#E36F6F] transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
