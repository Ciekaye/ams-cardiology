import { Metadata } from "next";
import { Star, CalendarCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Patient Testimonials",
  description:
    "Read what patients say about their experience at Vireo Cardiology. Real stories from real patients across the Greater Philadelphia area.",
};

const testimonials = [
  {
    quote: "The entire team at Vireo Cardiology made me feel comfortable and well-cared for. Dr. Kim took the time to explain everything thoroughly and answered all my questions.",
    name: "Margaret T.",
    location: "Philadelphia, PA",
    rating: 5,
  },
  {
    quote: "After my heart scare, I was terrified. The staff at Vireo were incredibly compassionate and professional. I felt like I was in the best hands possible throughout my entire treatment.",
    name: "Robert K.",
    location: "Cherry Hill, NJ",
    rating: 5,
  },
  {
    quote: "I've been a patient at Vireo for over 15 years. Their commitment to staying current with the latest technology and treatments gives me confidence in my ongoing care.",
    name: "Susan M.",
    location: "Philadelphia, PA",
    rating: 5,
  },
  {
    quote: "Dr. Klugherz performed my cardiac catheterization and the whole experience was smooth from start to finish. The surgery center is state-of-the-art and the nurses were wonderful.",
    name: "James P.",
    location: "Hatboro, PA",
    rating: 5,
  },
  {
    quote: "The telemedicine option was a game-changer for my follow-up appointments. I was able to consult with my cardiologist from home without the stress of traveling.",
    name: "Linda W.",
    location: "Ambler, PA",
    rating: 5,
  },
  {
    quote: "The cardiac rehab program at Vireo completely changed my recovery. The team was motivating and supportive, and I feel stronger than I have in years.",
    name: "Thomas R.",
    location: "Philadelphia, PA",
    rating: 5,
  },
  {
    quote: "Finding out I had AFib was scary, but Dr. Borge and his team walked me through every step. They explained all my treatment options clearly and I felt empowered to make the right choice.",
    name: "Patricia D.",
    location: "Collegeville, PA",
    rating: 5,
  },
  {
    quote: "From the front desk to the cardiologists, everyone at Vireo is professional and kind. The office is clean, modern, and they respect your time. Highly recommend.",
    name: "William H.",
    location: "Philadelphia, PA",
    rating: 5,
  },
  {
    quote: "Dr. Wright is incredibly thorough and genuinely cares about his patients. He caught something other doctors missed and I'm so grateful I chose Vireo Cardiology.",
    name: "Barbara G.",
    location: "Philadelphia, PA",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-bold tracking-widest uppercase mb-3 text-accent-light">
            Real Patient Stories
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Patient Testimonials</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Hear from the thousands of patients who trust Vireo Cardiology for their heart care.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-bg-warm rounded-xl p-8 border border-border-light hover:shadow-md transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
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

      {/* CTA */}
      <section className="py-16 bg-bg-warm">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading
            title="Experience the Vireo Difference"
            description="Join the thousands of patients who trust Vireo Cardiology for their heart care."
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
