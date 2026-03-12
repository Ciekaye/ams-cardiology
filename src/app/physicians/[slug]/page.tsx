import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { UserCircle, ArrowLeft, MapPin, Award, BookOpen, CalendarCheck, Phone, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { physicians } from "@/data/physicians";
import { getPhysicianPortrait } from "@/data/images";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return physicians.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doctor = physicians.find((d) => d.slug === slug);
  if (!doctor) return { title: "Physician Not Found" };
  return {
    title: `${doctor.name}, ${doctor.credentials}`,
    description: doctor.bio,
  };
}

export default async function PhysicianDetailPage({ params }: Props) {
  const { slug } = await params;
  const doctor = physicians.find((d) => d.slug === slug);
  if (!doctor) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/physicians" className="inline-flex items-center text-white/70 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Physicians
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {doctor.name}, {doctor.credentials}
          </h1>
          <p className="text-lg text-white/70 mt-2">{doctor.specialties.join(" • ")}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-white rounded-xl border border-border-light overflow-hidden shadow-sm">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      src={getPhysicianPortrait(doctor.id)}
                      alt={`Dr. ${doctor.name}`}
                      width={400}
                      height={533}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <Button href="/contact" variant="secondary" className="w-full">
                      <CalendarCheck className="w-4 h-4 mr-2" />
                      Request Appointment
                    </Button>
                    <Button href="tel:+12155171000" variant="outline" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Call 215-517-1000
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-accent" />
                  About
                </h2>
                <p className="text-text-secondary leading-relaxed text-lg">{doctor.bio}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-accent" />
                  Specialties
                </h2>
                <div className="flex flex-wrap gap-2">
                  {doctor.specialties.map((spec) => (
                    <span key={spec} className="inline-block bg-bg-blue text-primary text-sm font-medium px-4 py-2 rounded-lg">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {doctor.boardCertifications && (
                <div>
                  <h2 className="text-2xl font-bold text-primary-dark mb-4">Board Certifications</h2>
                  <ul className="space-y-2">
                    {doctor.boardCertifications.map((cert) => (
                      <li key={cert} className="flex items-center gap-3 text-text-secondary">
                        <div className="w-2 h-2 bg-accent rounded-full shrink-0" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {doctor.education && (
                <div>
                  <h2 className="text-2xl font-bold text-primary-dark mb-4">Education & Training</h2>
                  <ul className="space-y-2">
                    {doctor.education.map((edu) => (
                      <li key={edu} className="flex items-center gap-3 text-text-secondary">
                        <div className="w-2 h-2 bg-accent rounded-full shrink-0" />
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h2 className="text-2xl font-bold text-primary-dark mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-accent" />
                  Locations
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "Welsh Road – Main Office", address: "500 Welsh Road, Suite 100, Horsham, PA" },
                    { name: "North Wales Office", address: "1180 Welsh Road, Suite 100, North Wales, PA" },
                  ].map((loc) => (
                    <Link
                      key={loc.name}
                      href="/locations"
                      className="p-4 bg-bg-warm rounded-lg border border-border-light hover:shadow-md transition-all flex items-start gap-3"
                    >
                      <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-text-primary text-sm">{loc.name}</p>
                        <p className="text-xs text-text-muted mt-1">{loc.address}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Physicians */}
      <section className="py-16 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary-dark mb-8">Other Physicians</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {physicians
              .filter((d) => d.slug !== slug)
              .slice(0, 4)
              .map((doc) => (
                <Link
                  key={doc.id}
                  href={`/physicians/${doc.slug}`}
                  className="group bg-white rounded-xl border border-border-light p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors text-sm">
                    {doc.name}, {doc.credentials}
                  </h3>
                  <p className="text-xs text-text-muted mt-1 line-clamp-2">{doc.specialties.join(", ")}</p>
                  <span className="inline-flex items-center text-xs font-semibold text-accent mt-2 group-hover:text-primary transition-colors">
                    View Profile <ChevronRight className="w-3 h-3 ml-1" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
