import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Activity, Zap, HeartPulse, GitBranch, Scan, Shield, Dumbbell, ChevronRight, CalendarCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services & Procedures",
  description:
    "Vireo Cardiology offers comprehensive cardiovascular services including echocardiography, electrophysiology, interventional cardiology, PET/CT imaging, and cardiac rehabilitation.",
};

const iconMap: Record<string, React.ElementType> = {
  Activity,
  Zap,
  HeartPulse,
  GitBranch,
  Scan,
  Shield,
  ShieldCheck: Shield,
  Dumbbell,
  Heart: HeartPulse,
};

export default function ServicesPage() {
  const procedures = services.filter((s) => s.category === "procedure");
  const conditions = services.filter((s) => s.category === "condition");
  const rehab = services.filter((s) => s.category === "rehab");

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-bold tracking-widest uppercase mb-3 text-accent-light">
            Comprehensive Care
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            From advanced diagnostic imaging to interventional procedures and cardiac rehabilitation,
            we offer a full spectrum of cardiovascular services.
          </p>
        </div>
      </section>

      {/* Procedures */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="Procedures & Testing"
            title="Diagnostic & Interventional Services"
            description="State-of-the-art diagnostic and interventional cardiovascular procedures performed by our expert team."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedures.map((service) => {
              const IconComponent = iconMap[service.icon] || Activity;
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group bg-white rounded-xl border border-border-light p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-bg-blue rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <IconComponent className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">{service.shortDescription}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="Conditions We Treat"
            title="Cardiovascular Conditions"
            description="Our specialists diagnose and treat a wide range of heart and vascular conditions."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((service) => {
              const IconComponent = iconMap[service.icon] || Activity;
              return (
                <Link
                  key={service.id}
                  href={`/conditions/${service.slug}`}
                  className="group bg-white rounded-xl border border-border-light p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-bg-blue rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <IconComponent className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">{service.shortDescription}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cardiac Rehab */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-bold tracking-widest uppercase mb-3 text-accent-light">
                Cardiac Rehabilitation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {rehab[0]?.title || "Intensive Cardiac Rehab Center"}
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                {rehab[0]?.fullDescription ||
                  "Our comprehensive rehabilitation program helps patients recover from cardiac events with supervised exercise, nutrition counseling, and emotional support."}
              </p>
              <Button href="/services/cardiac-rehab" variant="white" size="lg">
                Learn More
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="w-full aspect-video bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center">
              <Dumbbell className="w-16 h-16 text-white/30" strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg-warm">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading
            title="Have Questions About Our Services?"
            description="Contact our team to learn more about our cardiovascular services or to schedule an appointment."
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
