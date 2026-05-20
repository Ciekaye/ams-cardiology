import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle, CalendarCheck, Phone, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";
import { serviceImages } from "@/data/images";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services
    .filter((s) => s.category === "procedure" || s.category === "rehab")
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedServices = services
    .filter((s) => s.id !== service.id && s.category === service.category)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/services" className="inline-flex items-center text-white/70 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Services
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h1>
          <p className="text-lg text-white/70 mt-3 max-w-2xl">{service.shortDescription}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
                <Image
                  src={serviceImages[service.id] ?? serviceImages["1"]}
                  alt={service.title}
                  width={800}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">Overview</h2>
              <p className="text-text-secondary leading-relaxed text-lg mb-8">
                {service.fullDescription}
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">What to Expect</h2>
              <ul className="space-y-3 mb-8">
                {[
                  "Initial consultation and evaluation with your cardiologist",
                  "Detailed explanation of the procedure and expected outcomes",
                  "Pre-procedure preparation instructions and guidelines",
                  "The procedure performed by our experienced specialists",
                  "Post-procedure care and follow-up appointments",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">Why Choose Vireo Cardiology</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                At Vireo Cardiology, our team of board-certified specialists uses the most advanced
                technology and techniques available to provide exceptional patient outcomes. With more
                than a decade of experience, we are trusted leaders in cardiovascular care.
              </p>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-bg-warm rounded-xl border border-border-light p-6">
                  <h3 className="font-bold text-primary-dark mb-4">Schedule a Consultation</h3>
                  <p className="text-sm text-text-muted mb-6">
                    Speak with one of our cardiologists about whether this service is right for you.
                  </p>
                  <div className="space-y-3">
                    <Button href="/contact" variant="secondary" className="w-full">
                      <CalendarCheck className="w-4 h-4 mr-2" />
                      Request Appointment
                    </Button>
                    <Button href="tel:+15550143782" variant="outline" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Call (555) 014-3782
                    </Button>
                  </div>
                </div>

                {relatedServices.length > 0 && (
                  <div className="bg-white rounded-xl border border-border-light p-6">
                    <h3 className="font-bold text-primary-dark mb-4">Related Services</h3>
                    <ul className="space-y-3">
                      {relatedServices.map((rel) => (
                        <li key={rel.id}>
                          <Link
                            href={`/services/${rel.slug}`}
                            className="flex items-center justify-between text-sm text-text-secondary hover:text-primary transition-colors"
                          >
                            <span>{rel.title}</span>
                            <ChevronRight className="w-4 h-4 shrink-0" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
