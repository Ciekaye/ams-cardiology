import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { UserCircle, ChevronRight, CalendarCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { physicians } from "@/data/physicians";
import { getPhysicianPortrait } from "@/data/images";

export const metadata: Metadata = {
  title: "Our Physicians",
  description:
    "Meet our team of 19+ board-certified cardiologists at AMS Cardiology, serving Montgomery County and the Greater Philadelphia area.",
};

export default function PhysiciansPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-bold tracking-widest uppercase mb-3 text-accent-light">
            Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Cardiologists</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Our team of experienced, board-certified cardiologists is dedicated to providing the
            highest standard of cardiovascular care.
          </p>
        </div>
      </section>

      {/* Physicians Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {physicians.map((doc) => (
              <Link
                key={doc.id}
                href={`/physicians/${doc.slug}`}
                className="group bg-white rounded-xl border border-border-light overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={getPhysicianPortrait(doc.id)}
                    alt={`Dr. ${doc.name}`}
                    width={400}
                    height={533}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors">
                    {doc.name}, {doc.credentials}
                  </h3>
                  <p className="text-sm text-text-muted mt-1 line-clamp-2">
                    {doc.specialties.join(", ")}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-accent mt-3 group-hover:text-primary transition-colors">
                    View Profile <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg-warm">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading
            title="Schedule an Appointment"
            description="Ready to see one of our expert cardiologists? Request an appointment today."
          />
          <Button href="/contact" variant="secondary" size="lg">
            <CalendarCheck className="w-5 h-5 mr-2" />
            Request an Appointment
          </Button>
        </div>
      </section>
    </>
  );
}
