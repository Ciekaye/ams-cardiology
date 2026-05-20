import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle, CalendarCheck, Phone, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";
import { conditionImages } from "@/data/images";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.filter((s) => s.category === "condition").map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const condition = services.find((s) => s.slug === slug && s.category === "condition");
  if (!condition) return { title: "Condition Not Found" };
  return {
    title: condition.title,
    description: condition.shortDescription,
  };
}

export default async function ConditionDetailPage({ params }: Props) {
  const { slug } = await params;
  const condition = services.find((s) => s.slug === slug && s.category === "condition");
  if (!condition) notFound();

  const relatedConditions = services
    .filter((s) => s.id !== condition.id && s.category === "condition")
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/conditions" className="inline-flex items-center text-white/70 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Conditions
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{condition.title}</h1>
          <p className="text-lg text-white/70 mt-3 max-w-2xl">{condition.shortDescription}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
                <Image
                  src={conditionImages[condition.id] ?? conditionImages["7"]}
                  alt={condition.title}
                  width={800}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">Understanding {condition.title}</h2>
              <p className="text-text-secondary leading-relaxed text-lg mb-8">
                {condition.fullDescription}
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">Signs & Symptoms</h2>
              <ul className="space-y-3 mb-8">
                {[
                  "Chest pain or discomfort during physical activity",
                  "Shortness of breath or difficulty breathing",
                  "Irregular heartbeat, palpitations, or fluttering",
                  "Dizziness, lightheadedness, or fainting",
                  "Unexplained fatigue or weakness",
                  "Swelling in the legs, ankles, or feet",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">Treatment Options at Vireo Cardiology</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our board-certified cardiologists develop personalized treatment plans based on your
                specific condition, medical history, and lifestyle. Treatment options may include
                lifestyle modifications, medication therapy, minimally invasive procedures, or
                advanced surgical interventions.
              </p>
              <p className="text-text-secondary leading-relaxed">
                With more than a decade of experience and access to the latest cardiovascular technologies,
                our team is uniquely positioned to provide comprehensive care for this condition.
              </p>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-bg-warm rounded-xl border border-border-light p-6">
                  <h3 className="font-bold text-primary-dark mb-4">Get Expert Care</h3>
                  <p className="text-sm text-text-muted mb-6">
                    If you&apos;re experiencing symptoms, schedule a consultation with our cardiologists.
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

                {relatedConditions.length > 0 && (
                  <div className="bg-white rounded-xl border border-border-light p-6">
                    <h3 className="font-bold text-primary-dark mb-4">Related Conditions</h3>
                    <ul className="space-y-3">
                      {relatedConditions.map((rel) => (
                        <li key={rel.id}>
                          <Link
                            href={`/conditions/${rel.slug}`}
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
