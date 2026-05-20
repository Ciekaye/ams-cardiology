import { Metadata } from "next";
import Image from "next/image";
import { Heart, Award, Users, Building2, Shield, CheckCircle, ArrowRight, CalendarCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "Vireo Cardiology provides evidence-based cardiovascular care to the Greater Philadelphia Area. Learn about our mission and commitment to heart care.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-bold tracking-widest uppercase mb-3 text-accent-light">
            About Vireo Cardiology
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Mission</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Modern heart care, rooted in trust. We are committed to delivering exceptional cardiovascular care with compassion and expertise.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6 leading-tight">
                Modern Heart Care, Rooted in Trust
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Vireo Cardiology provides evidence-based cardiovascular care to the Greater Philadelphia Area. Our mission is to help your heart with superb patient satisfaction.
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                Vireo Cardiology, a comprehensive cardiovascular practice, is committed to preventing and treating all aspects of cardiovascular disease. As one of the most well-respected groups in the Philadelphia region, Vireo Cardiology brings the latest state-of-the-art cardiovascular care to our patients.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Understanding the rapid growth of cardiology, our physicians, nurse practitioners and
                physician assistants are lifelong learners on the &ldquo;cutting edge&rdquo; of cardiovascular
                medicine. Our mission is to treat patients with the respect, empathy and professionalism
                that they deserve.
              </p>
            </div>
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={aboutImages.mission}
                  alt="Medical team discussion"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-xl shadow-xl p-6">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm text-white/70">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="Our Values"
            title="Why Choose Vireo Cardiology"
            description="We are committed to delivering the highest standard of cardiovascular care with compassion, integrity, and excellence."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Expert Physicians",
                desc: "19+ board-certified cardiologists with subspecialties spanning every area of cardiovascular medicine.",
              },
              {
                icon: Award,
                title: "Proven Excellence",
                desc: "More than a decade of trusted cardiovascular care in the Greater Philadelphia region.",
              },
              {
                icon: Building2,
                title: "Advanced Facilities",
                desc: "State-of-the-art surgery center, PET/CT imaging, and dedicated cardiac rehab center.",
              },
              {
                icon: Users,
                title: "Patient-Centered Care",
                desc: "We treat every patient with the respect, empathy, and professionalism they deserve.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-xl border border-border-light p-6">
                <div className="w-12 h-12 bg-bg-blue rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">{value.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "19+", label: "Board-Certified Cardiologists", icon: Users },
              { number: "10+", label: "Years Serving the Community", icon: Award },
              { number: "4", label: "Convenient Locations", icon: Building2 },
              { number: "100K+", label: "Patients Served", icon: Heart },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-bg-blue rounded-xl">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.number}</p>
                <p className="text-sm text-text-muted mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={aboutImages.whySetsUsApart}
                alt="Physician reviewing cardiac scans"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <span className="inline-block text-sm font-bold tracking-widest uppercase mb-3 text-accent">
                What Sets Us Apart
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6 leading-tight">
                Comprehensive Heart Care Under One Roof
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Full spectrum of cardiovascular services from diagnosis to treatment",
                  "On-site surgery center for interventional procedures",
                  "Advanced PET/CT and cardiac imaging capabilities",
                  "Dedicated Intensive Cardiac Rehabilitation Center",
                  "Telemedicine appointments available for patient convenience",
                  "Clinical trials offering access to cutting-edge treatments",
                  "Same-week appointments for timely cardiac evaluations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/services" variant="outline">
                Explore Our Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience the Vireo Difference?
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Schedule your appointment with one of our experienced cardiologists today.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            <CalendarCheck className="w-5 h-5 mr-2" />
            Request an Appointment
          </Button>
        </div>
      </section>
    </>
  );
}
