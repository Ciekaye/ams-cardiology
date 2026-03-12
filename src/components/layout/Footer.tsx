import Link from "next/link";
import Image from "next/image";
import { Heart, Phone, MapPin, Mail, Facebook, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <div className="relative w-32 h-10">
                <Image
                  src="/AMS-Logo-redWhite.webp"
                  alt="AMS Cardiology"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Celebrating over 40 years of helping hearts. AMS Cardiology is committed to preventing
              and treating all aspects of cardiovascular disease in the Greater Philadelphia area.
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
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-300">
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
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-300">
              Patient Resources
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Patient Portal", href: "https://mycw14.eclinicalweb.com/portal751/jsp/100mp/login_otp.jsp", external: true },
                { label: "Pay My Bill", href: "https://healowpay.com/HealowPay/jsp/healow/login.jsp", external: true },
                { label: "Telemedicine", href: "/telemedicine" },
                { label: "Patient Forms", href: "/patient-resources" },
                { label: "Request Appointment", href: "/contact" },
                { label: "Clinical Trials", href: "/clinical-trials" },
                { label: "Cardiac Rehab", href: "/services/cardiac-rehab" },
              ].map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-300">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+12155171000" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">215-517-1000</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">
                    500 Welsh Road, Suite 100<br />
                    Horsham, PA 19044
                  </span>
                </div>
              </li>
              <li>
                <a href="mailto:info@amscardiology.com" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-sm">info@amscardiology.com</span>
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <p className="text-xs text-gray-400 mb-1 font-medium">Office Hours</p>
              <p className="text-sm text-gray-300">Mon – Fri: 8:00 AM – 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} AMS Cardiology. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
