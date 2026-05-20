"use client";

import { useState } from "react";
import Link from "next/link";
import VireoLogo from "@/components/ui/VireoLogo";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { mainNavigation } from "@/data/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 shadow-md bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <VireoLogo variant="dark" className="h-11 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavigation.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-brand-charcoal hover:text-[#0F4C5C] transition-colors rounded-lg hover:bg-brand-mist"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-brand-mist py-2 min-w-[240px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-brand-charcoal hover:text-[#0F4C5C] hover:bg-brand-mist transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+15550143782"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-brand-charcoal hover:text-[#0F4C5C] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">(555) 014-3782</span>
            </a>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all"
              style={{ backgroundColor: '#E36F6F', color: '#FFFFFF' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C95757'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E36F6F'}
            >
              Request Appointment
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-brand-charcoal hover:text-[#0F4C5C] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-brand-mist">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {mainNavigation.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => {
                    if (!item.children) setMobileOpen(false);
                  }}
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-brand-charcoal hover:text-[#0F4C5C] hover:bg-brand-mist rounded-lg transition-colors"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>
                {item.children && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 text-sm text-brand-charcoal hover:text-[#0F4C5C] hover:bg-brand-mist rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-3 border-t border-brand-mist mt-4">
              <a
                href="tel:+15550143782"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#0F4C5C]"
              >
                <Phone className="w-4 h-4" />
                (555) 014-3782
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-4 py-3 rounded-full font-semibold transition-colors"
                style={{ backgroundColor: '#E36F6F', color: '#FFFFFF' }}
              >
                Request Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
