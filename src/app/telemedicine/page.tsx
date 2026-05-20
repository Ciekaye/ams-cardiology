import { Metadata } from "next";
import Image from "next/image";
import { Video, CheckCircle, Monitor, Shield, Clock, Phone, CalendarCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { telemedicineImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Telemedicine",
  description:
    "Connect with your Vireo Cardiology cardiologist from home through our secure, HIPAA-compliant telemedicine platform.",
};

export default function TelemedicinePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-bold tracking-widest uppercase mb-3 text-accent-light">
            Virtual Care
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Telemedicine</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Connect with your cardiologist from the comfort of home through our secure,
            HIPAA-compliant video platform.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="Why Telemedicine"
            title="Heart Care From Home"
            description="Our telemedicine service makes it easy to stay connected with your cardiologist without leaving home."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Video, title: "Video Visits", desc: "Face-to-face consultations with your cardiologist via secure video." },
              { icon: Shield, title: "HIPAA Compliant", desc: "Your health information is protected with enterprise-grade security." },
              { icon: Clock, title: "Convenient", desc: "No travel time or waiting rooms. Connect from anywhere." },
              { icon: Monitor, title: "Easy to Use", desc: "Simple technology that works on any smartphone, tablet, or computer." },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-bg-warm rounded-xl border border-border-light p-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">{benefit.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="Getting Started"
            title="How Telemedicine Works"
            description="Three simple steps to connect with your cardiologist virtually."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Schedule", desc: "Call our office at (555) 014-3782 or submit an online request to schedule your telemedicine visit." },
              { step: "2", title: "Prepare", desc: "You'll receive a link and instructions before your appointment. Have your medication list and questions ready." },
              { step: "3", title: "Connect", desc: "At your appointment time, click the link to join the video call with your cardiologist." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appropriate Visits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-primary-dark mb-6">
                Telemedicine Is Ideal For
              </h2>
              <ul className="space-y-3">
                {[
                  "Follow-up appointments after procedures",
                  "Medication management and adjustments",
                  "Reviewing test results and lab work",
                  "Discussing symptoms and concerns",
                  "Pre-operative consultations",
                  "Chronic condition management",
                  "Second opinions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={telemedicineImages.hero}
                alt="Doctor on telemedicine video call"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for a Virtual Visit?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Schedule your telemedicine appointment today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="white" size="lg">
              <CalendarCheck className="w-5 h-5 mr-2" />
              Request Appointment
            </Button>
            <Button href="tel:+15550143782" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Phone className="w-5 h-5 mr-2" />
              Call (555) 014-3782
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
