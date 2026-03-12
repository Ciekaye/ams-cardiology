"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Heart, Phone } from "lucide-react";
import { mainNavigation } from "@/data/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: '#0f2a3f' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-32 h-10">
              <Image
                src="/AMS-Logo-redWhite.webp"
                alt="AMS Cardiology"
                fill
                className="object-contain"
                priority
              />
            </div>
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
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-border-light py-2 min-w-[240px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-text-secondary hover:text-primary hover:bg-bg-blue transition-colors"
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
              href="tel:+12155171000"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">215-517-1000</span>
            </a>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-secondary hover:bg-secondary-light text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Request Appointment
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white/90 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border-light">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {mainNavigation.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => {
                    if (!item.children) setMobileOpen(false);
                  }}
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-text-secondary hover:text-primary hover:bg-bg-blue rounded-lg transition-colors"
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
                        className="block px-4 py-2 text-sm text-text-muted hover:text-primary hover:bg-bg-blue rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-3 border-t border-border-light mt-4">
              <a
                href="tel:+12155171000"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary"
              >
                <Phone className="w-4 h-4" />
                215-517-1000
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-4 py-3 bg-secondary hover:bg-secondary-light text-white font-semibold rounded-lg transition-colors"
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
