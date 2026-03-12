import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Stethoscope,
  MapPin,
  UserCircle,
  ArrowRight,
  FileText,
  CreditCard,
  Video,
  ChevronRight,
  Star,
  CalendarCheck,
  Phone,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoHero from "@/components/ui/VideoHero";
import { physicians } from "@/data/physicians";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { blogPosts } from "@/data/blog";
import { homeSectionImages, getPhysicianPortrait, getLocationImage, getBlogImage } from "@/data/images";

export default function Home() {
  const featuredPhysicians = physicians.slice(0, 4);
  const featuredServices = services.filter((s) => s.category === "procedure").slice(0, 4);
  const featuredBlog = blogPosts.slice(0, 3);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <VideoHero
        videoUrl="https://amscardiology.com/wp-content/uploads/2025/04/AMS-Cardiology-New-1.mp4"
        headline="Expert Heart Care with Modern Technology"
        subheadline="Providing comprehensive cardiology services focused on prevention, diagnosis, and advanced treatment with 19+ board-certified specialists."
        primaryCTA={{
          text: "Book Appointment",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Our Services",
          href: "/services"
        }}
      />

      {/* ===== QUICK ACCESS CARDS ===== */}
      <section className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: UserCircle, title: "Find a Doctor", desc: "Browse our physicians", href: "/physicians", color: "from-blue-500 to-blue-600" },
              { icon: Stethoscope, title: "Our Services", desc: "Procedures & testing", href: "/services", color: "from-teal-500 to-teal-600" },
              { icon: MapPin, title: "Locations", desc: "4 convenient offices", href: "/locations", color: "from-indigo-500 to-indigo-600" },
              { icon: Heart, title: "Patient Portal", desc: "Access your records", href: "https://mycw14.eclinicalweb.com/portal751/jsp/100mp/login_otp.jsp", color: "from-rose-500 to-rose-600" },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl border border-border-light p-5 md:p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-11 h-11 bg-gradient-to-br ${card.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <card.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-text-primary text-sm md:text-base mb-1">{card.title}</h3>
                <p className="text-xs md:text-sm text-text-muted">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT / TRUST SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-bold tracking-widest uppercase mb-3 text-accent">
                About AMS Cardiology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6 leading-tight">
                Celebrating Over 40 Years of Helping Hearts
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Since the 1970s, AMS Cardiology has been one of the leading cardiologist groups in the
                Greater Philadelphia Area. Our mission is to help your heart with superb patient
                satisfaction and state-of-the-art cardiovascular care.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Our physicians, nurse practitioners, and physician assistants are lifelong learners on
                the cutting edge of cardiovascular medicine. We treat patients with the respect,
                empathy, and professionalism they deserve.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { number: "19+", label: "Board-Certified Cardiologists" },
                  { number: "40+", label: "Years of Excellence" },
                  { number: "4", label: "Convenient Locations" },
                  { number: "100K+", label: "Patients Served" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-bg-blue rounded-xl">
                    <p className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</p>
                    <p className="text-xs md:text-sm text-text-muted mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Button href="/about" variant="outline">
                Learn About Our Mission
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={homeSectionImages.aboutTrust}
                  alt="Healthcare team collaboration"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-6 bg-primary text-white rounded-xl shadow-xl p-5 max-w-[200px]">
                <p className="text-sm font-bold">Leading Practice</p>
                <p className="text-xs text-white/70 mt-1">Greater Philadelphia Area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="Comprehensive Care"
            title="Procedures & Diagnostic Testing"
            description="From advanced cardiac imaging to interventional procedures, our team offers a full spectrum of cardiovascular services."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => {
              const serviceImages: Record<string, string> = {
                "1": "1628348068343-c6a848d2b6dd",
                "2": "1551076805-e1869033e561",
                "3": "1559757175-5700dde675bc",
                "4": "1584515933487-779824d29309",
              };
              const imageId = serviceImages[service.id] || serviceImages["1"];
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group bg-white rounded-xl border border-border-light overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-40 relative overflow-hidden bg-gray-100">
                    <Image
                      src={`https://images.unsplash.com/photo-${imageId}?w=600&h=400&fit=crop&q=80`}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-4">
                      {service.shortDescription.slice(0, 100)}...
                    </p>
                    <span className="inline-flex items-center text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Button href="/services" variant="outline">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* ===== PHYSICIANS PREVIEW ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="Our Experts"
            title="Meet Our Cardiologists"
            description="Our team of experienced, board-certified cardiologists is dedicated to providing the highest standard of heart care."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPhysicians.map((doc) => (
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
          <div className="text-center mt-10">
            <Button href="/physicians" variant="outline">
              View All Physicians
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* ===== LOCATIONS PREVIEW ===== */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="Convenient Access"
            title="Our Locations"
            description="Choose from 4 convenient offices across the Philadelphia region for your cardiology care."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc) => (
              <Link
                key={loc.id}
                href={`/locations/${loc.slug}`}
                className="group bg-white rounded-xl border border-border-light overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-40 relative overflow-hidden">
                  <Image
                    src={getLocationImage(loc.id, "card")}
                    alt={loc.name}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block text-xs font-bold uppercase tracking-wide text-accent mb-2">
                    {loc.type}
                  </span>
                  <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors mb-2">
                    {loc.name}
                  </h3>
                  <p className="text-sm text-text-muted mb-3">
                    {loc.address}<br />
                    {loc.city}, {loc.state} {loc.zip}
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    {loc.phone}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PATIENT RESOURCES ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="For Our Patients"
            title="Patient Resources"
            description="We make it easy to manage your care with convenient online tools and resources."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: UserCircle,
                title: "Patient Portal",
                desc: "Access your medical records, test results, and communicate with your care team securely online.",
                href: "https://mycw14.eclinicalweb.com/portal751/jsp/100mp/login_otp.jsp",
                cta: "Login Now",
                external: true,
              },
              {
                icon: FileText,
                title: "Patient Forms",
                desc: "Download and complete new patient forms before your visit to save time at check-in.",
                href: "/patient-resources",
                cta: "Get Forms",
                external: false,
              },
              {
                icon: CreditCard,
                title: "Pay My Bill",
                desc: "Conveniently pay your bill online through our secure payment portal.",
                href: "https://healowpay.com/HealowPay/jsp/healow/login.jsp",
                cta: "Pay Now",
                external: true,
              },
              {
                icon: Video,
                title: "Telemedicine",
                desc: "Connect with your cardiologist from home through our secure telemedicine platform.",
                href: "/telemedicine",
                cta: "Learn More",
                external: false,
              },
            ].map((resource) => (
              <div key={resource.title} className="bg-bg-warm rounded-xl p-6 border border-border-light hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">{resource.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-4">{resource.desc}</p>
                {resource.external ? (
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-accent hover:text-primary transition-colors"
                  >
                    {resource.cta} <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                ) : (
                  <Link
                    href={resource.href}
                    className="inline-flex items-center text-sm font-semibold text-accent hover:text-primary transition-colors"
                  >
                    {resource.cta} <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOG PREVIEW ===== */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="Stay Informed"
            title="Latest from the AMS Blog"
            description="Expert insights and educational content from our cardiology team to help you stay heart-healthy."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {featuredBlog.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl border border-border-light overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={getBlogImage(post.id, "card")}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wide text-accent">
                      {post.category}
                    </span>
                    <span className="text-xs text-text-muted">{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border-light">
                    <span className="text-xs text-text-muted">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                      Read <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/blog" variant="outline">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="Patient Testimonials"
            title="What Our Patients Say"
            description="Hear from the thousands of patients who trust AMS Cardiology for their heart care."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The entire team at AMS Cardiology made me feel comfortable and well-cared for. Dr. Cohen took the time to explain everything thoroughly and answered all my questions.",
                name: "Margaret T.",
                location: "Horsham, PA",
              },
              {
                quote: "After my heart scare, I was terrified. The staff at AMS were incredibly compassionate and professional. I felt like I was in the best hands possible throughout my entire treatment.",
                name: "Robert K.",
                location: "North Wales, PA",
              },
              {
                quote: "I've been a patient at AMS for over 15 years. Their commitment to staying current with the latest technology and treatments gives me confidence in my ongoing care.",
                name: "Susan M.",
                location: "Lansdale, PA",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-bg-warm rounded-xl p-8 border border-border-light"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-text-secondary leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-text-primary text-sm">{testimonial.name}</p>
                  <p className="text-xs text-text-muted">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CARDIAC REHAB HIGHLIGHT ===== */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-bold tracking-widest uppercase mb-3 text-accent-light">
                Now Open
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Stronger Hearts Start Here
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Recover with confidence in our brand-new Intensive Cardiac Rehab Center. Our program
                combines supervised exercise, nutrition counseling, and emotional support under one
                roof to help you build lasting heart-healthy habits.
              </p>
              <Button href="/services/cardiac-rehab" variant="white" size="lg">
                Learn About Cardiac Rehab
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={homeSectionImages.cardiacRehab}
                alt="Cardiac rehabilitation center with exercise equipment"
                width={800}
                height={450}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== APPOINTMENT CTA ===== */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Heart className="w-12 h-12 text-secondary mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Your Heart Health Is Our Priority
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you need a routine cardiac evaluation or specialized treatment, our team is here
            for you. Request an appointment today and take the first step toward a healthier heart.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="secondary" size="lg">
              <CalendarCheck className="w-5 h-5 mr-2" />
              Request an Appointment
            </Button>
            <Button href="tel:+12155171000" variant="outline" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Call 215-517-1000
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
