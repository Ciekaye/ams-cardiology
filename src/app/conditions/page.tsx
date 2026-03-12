import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Activity, Zap, HeartPulse, GitBranch, Shield, ChevronRight, CalendarCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { conditionCardImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Conditions We Treat",
  description:
    "AMS Cardiology diagnoses and treats a wide range of cardiovascular conditions including atrial fibrillation, aortic stenosis, peripheral artery disease, and more.",
};

const iconMap: Record<string, React.ElementType> = {
  Activity,
  Zap,
  HeartPulse,
  GitBranch,
  Shield,
  ShieldCheck: Shield,
  Heart: HeartPulse,
};

export default function ConditionsPage() {
  const conditions = services.filter((s) => s.category === "condition");

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-bold tracking-widest uppercase mb-3 text-accent-light">
            Expert Diagnosis & Treatment
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Conditions We Treat</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Our specialists diagnose and treat a wide range of heart and vascular conditions with
            the latest evidence-based approaches.
          </p>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((condition) => {
              const IconComponent = iconMap[condition.icon] || Activity;
              return (
                <Link
                  key={condition.id}
                  href={`/conditions/${condition.slug}`}
                  className="group bg-white rounded-xl border border-border-light overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={conditionCardImages[condition.id] ?? conditionCardImages["7"]}
                      alt={condition.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                      {condition.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-4">
                      {condition.shortDescription}
                    </p>
                    <span className="inline-flex items-center text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg-warm">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading
            title="Concerned About a Heart Condition?"
            description="Our experienced cardiologists are here to provide expert diagnosis and personalized treatment plans."
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
