import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Phone, Clock, CalendarCheck, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { locations } from "@/data/locations";
import { getLocationImage } from "@/data/images";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) return { title: "Location Not Found" };
  return {
    title: `${location.name} - ${location.city}, ${location.state}`,
    description: location.description,
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) notFound();

  const otherLocations = locations.filter((l) => l.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/locations" className="inline-flex items-center text-white/70 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Locations
          </Link>
          <span className="inline-block text-xs font-bold uppercase tracking-wide text-accent-light mb-2">
            {location.type}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{location.name}</h1>
          <p className="text-lg text-white/70 mt-2">
            {location.city}, {location.state} {location.zip}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
                <Image
                  src={getLocationImage(location.id, "detail")}
                  alt={location.name}
                  width={800}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">About This Location</h2>
              <p className="text-text-secondary leading-relaxed text-lg mb-8">
                {location.description}
              </p>

              {location.services && (
                <>
                  <h2 className="text-2xl font-bold text-primary-dark mb-4">Services Available</h2>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {location.services.map((service) => (
                      <span
                        key={service}
                        className="inline-block bg-bg-blue text-primary text-sm font-medium px-4 py-2 rounded-lg"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-bg-warm rounded-xl border border-border-light p-6">
                  <h3 className="font-bold text-primary-dark mb-4">Location Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-text-secondary font-medium">{location.address}</p>
                        <p className="text-text-muted text-sm">
                          {location.city}, {location.state} {location.zip}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary shrink-0" />
                      <a href={`tel:+1${location.phone.replace(/-/g, "")}`} className="text-text-secondary hover:text-primary transition-colors">
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-text-secondary">{location.hours}</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Button href="/contact" variant="secondary" className="w-full">
                      <CalendarCheck className="w-4 h-4 mr-2" />
                      Request Appointment
                    </Button>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        `${location.address}, ${location.city}, ${location.state} ${location.zip}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-all text-base"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="py-16 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary-dark mb-8">Other Locations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherLocations.map((loc) => (
              <Link
                key={loc.id}
                href={`/locations/${loc.slug}`}
                className="group bg-white rounded-xl border border-border-light p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="inline-block text-xs font-bold uppercase tracking-wide text-accent mb-2">
                  {loc.type}
                </span>
                <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors mb-2">
                  {loc.name}
                </h3>
                <p className="text-sm text-text-muted">
                  {loc.address}, {loc.city}, {loc.state} {loc.zip}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-accent mt-3 group-hover:text-primary transition-colors">
                  View Details <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
