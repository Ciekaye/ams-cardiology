import { Metadata } from "next";
import Image from "next/image";
import { UserCircle, CalendarCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { appPortraits } from "@/data/images";

export const metadata: Metadata = {
  title: "Advanced Practice Professionals",
  description:
    "Meet the dedicated Nurse Practitioners and Physician Assistants at Vireo Cardiology who provide exceptional cardiovascular care.",
};

const practitioners = [
  { name: "Sarah Mitchell", credentials: "CRNP", specialty: "Cardiology" },
  { name: "Jennifer Adams", credentials: "PA-C", specialty: "Cardiology" },
  { name: "Michael Torres", credentials: "CRNP", specialty: "Electrophysiology" },
  { name: "Emily Chen", credentials: "PA-C", specialty: "Interventional Cardiology" },
  { name: "David Williams", credentials: "CRNP", specialty: "Heart Failure" },
  { name: "Rachel Foster", credentials: "PA-C", specialty: "General Cardiology" },
];

export default function AdvancedPracticePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-bold tracking-widest uppercase mb-3 text-accent-light">
            Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nurse Practitioners & Physician Assistants
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Our advanced practice professionals work alongside our cardiologists to deliver
            exceptional, patient-centered cardiovascular care.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Meet Our Advanced Practice Professionals"
            description="Dedicated healthcare professionals committed to providing compassionate, high-quality cardiac care."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practitioners.map((person) => (
              <div
                key={person.name}
                className="bg-white rounded-xl border border-border-light overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={appPortraits[practitioners.indexOf(person)] ?? appPortraits[0]}
                    alt={person.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-text-primary">
                    {person.name}, {person.credentials}
                  </h3>
                  <p className="text-sm text-text-muted mt-1">{person.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg-warm">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading
            title="Schedule Your Visit"
            description="Our team is ready to provide you with comprehensive cardiovascular care."
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
