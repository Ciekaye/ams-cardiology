import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, ChevronRight, CalendarCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { locations } from "@/data/locations";
import { getLocationImage } from "@/data/images";

export const metadata: Metadata = {
  title: "Our Locations",
  description:
    "Find an AMS Cardiology office near you. We have 4 convenient locations across the Philadelphia region in Horsham and North Wales, PA.",
};

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-bold tracking-widest uppercase mb-3 text-accent-light">
            Convenient Access
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Locations</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Choose from 4 convenient offices across the Philadelphia region for your cardiology care.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="bg-white rounded-xl border border-border-light overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src={getLocationImage(loc.id, "card")}
                    alt={loc.name}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block text-xs font-bold uppercase tracking-wide text-accent mb-2">
                    {loc.type}
                  </span>
                  <h2 className="text-xl font-bold text-primary-dark mb-3">{loc.name}</h2>
                  <p className="text-text-muted mb-1">{loc.description}</p>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-text-secondary font-medium">{loc.address}</p>
                        <p className="text-text-muted text-sm">
                          {loc.city}, {loc.state} {loc.zip}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary shrink-0" />
                      <a href={`tel:+1${loc.phone.replace(/-/g, "")}`} className="text-text-secondary hover:text-primary transition-colors">
                        {loc.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-text-secondary">{loc.hours}</span>
                    </div>
                  </div>

                  {loc.services && (
                    <div className="mt-6 pt-6 border-t border-border-light">
                      <p className="text-sm font-bold text-text-primary mb-2">Services Available:</p>
                      <div className="flex flex-wrap gap-2">
                        {loc.services.map((service) => (
                          <span
                            key={service}
                            className="text-xs bg-bg-blue text-primary font-medium px-3 py-1 rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Button href="/contact" variant="secondary" size="sm">
                      <CalendarCheck className="w-4 h-4 mr-2" />
                      Request Appointment
                    </Button>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        `${loc.address}, ${loc.city}, ${loc.state} ${loc.zip}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-accent hover:text-primary transition-colors"
                    >
                      Get Directions <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Contact */}
      <section className="py-16 bg-bg-warm">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading
            title="Need Help Finding the Right Location?"
            description="Call our main office and we'll help you find the most convenient location for your needs."
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="tel:+12155171000" variant="primary" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Call 215-517-1000
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us Online
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
