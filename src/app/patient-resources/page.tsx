import { Metadata } from "next";
import { UserCircle, FileText, CreditCard, Video, Phone, ClipboardList, ShieldCheck, CalendarCheck, ExternalLink } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Patient Resources",
  description:
    "Access patient resources at Vireo Cardiology including patient portal, forms, billing, telemedicine, and preparation guides.",
};

export default function PatientResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-bold tracking-widest uppercase mb-3 text-accent-light">
            For Our Patients
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Patient Resources</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Everything you need to manage your care, from online portals to preparation guides.
          </p>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: UserCircle,
                title: "Patient Portal",
                desc: "Access your medical records, view test results, request prescription refills, and communicate with your care team securely online.",
                cta: "Login to Portal",
                href: "https://mycw14.eclinicalweb.com/portal751/jsp/100mp/login_otp.jsp",
                external: true,
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: CreditCard,
                title: "Pay My Bill",
                desc: "Conveniently pay your bill online through our secure payment portal. View statements and manage your account.",
                cta: "Pay Now",
                href: "https://healowpay.com/HealowPay/jsp/healow/login.jsp",
                external: true,
                color: "from-green-500 to-green-600",
              },
              {
                icon: Video,
                title: "Telemedicine",
                desc: "Connect with your cardiologist from the comfort of home through our secure, HIPAA-compliant telemedicine platform.",
                cta: "Learn More",
                href: "/telemedicine",
                external: false,
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: FileText,
                title: "New Patient Forms",
                desc: "Download and complete your new patient paperwork before your first visit to save time at check-in.",
                cta: "Download Forms",
                href: "#forms",
                external: false,
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: ClipboardList,
                title: "First Visit Preparation",
                desc: "Learn what to bring and how to prepare for your first appointment at Vireo Cardiology for a smooth experience.",
                cta: "View Guide",
                href: "#first-visit",
                external: false,
                color: "from-teal-500 to-teal-600",
              },
              {
                icon: ShieldCheck,
                title: "Insurance & Billing",
                desc: "Information about accepted insurance plans, billing procedures, and financial assistance options.",
                cta: "View Details",
                href: "#billing",
                external: false,
                color: "from-indigo-500 to-indigo-600",
              },
            ].map((resource) => (
              <div
                key={resource.title}
                className="bg-white rounded-xl border border-border-light overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-8">
                  <div className={`w-14 h-14 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center mb-5`}>
                    <resource.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-3">{resource.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-6">{resource.desc}</p>
                  {resource.external ? (
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-light text-white text-sm font-semibold rounded-lg transition-colors"
                    >
                      {resource.cta}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <a
                      href={resource.href}
                      className="inline-flex items-center px-5 py-2.5 bg-primary hover:bg-primary-light text-white text-sm font-semibold rounded-lg transition-colors"
                    >
                      {resource.cta}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First Visit Section */}
      <section id="first-visit" className="py-20 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="Your First Visit"
            title="Preparing for Your Appointment"
            description="Here's what to expect and what to bring when you visit Vireo Cardiology for the first time."
          />
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-xl font-bold text-primary-dark mb-4">What to Bring</h3>
              <ul className="space-y-3">
                {[
                  "Photo ID and insurance card(s)",
                  "List of current medications and dosages",
                  "Completed new patient forms (if not submitted online)",
                  "Referral from your primary care physician (if required)",
                  "Previous cardiac test results or records",
                  "List of questions for your cardiologist",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary-dark mb-4">What to Expect</h3>
              <ul className="space-y-3">
                {[
                  "Registration and insurance verification at check-in",
                  "Vital signs assessment by our nursing staff",
                  "Comprehensive evaluation by your cardiologist",
                  "Diagnostic testing if recommended (ECG, echo, etc.)",
                  "Discussion of findings and personalized treatment plan",
                  "Scheduling of follow-up appointments as needed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section id="forms" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="Patient Forms"
            title="Downloadable Forms"
            description="Save time by completing your paperwork before your visit."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "New Patient Registration Form", type: "PDF" },
              { name: "Medical History Questionnaire", type: "PDF" },
              { name: "HIPAA Privacy Authorization", type: "PDF" },
              { name: "Insurance Information Form", type: "PDF" },
              { name: "Medication List Template", type: "PDF" },
              { name: "Patient Rights & Responsibilities", type: "PDF" },
            ].map((form) => (
              <div
                key={form.name}
                className="flex items-center gap-4 p-5 bg-bg-warm rounded-xl border border-border-light hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-text-primary text-sm truncate">{form.name}</p>
                  <p className="text-xs text-text-muted mt-0.5">{form.type} Document</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Billing Section */}
      <section id="billing" className="py-20 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="Insurance & Billing"
            title="Billing Information"
            description="We accept most major insurance plans and are committed to making your care accessible."
          />
          <div className="max-w-3xl mx-auto bg-white rounded-xl border border-border-light p-8">
            <p className="text-text-secondary leading-relaxed mb-6">
              Vireo Cardiology accepts most major insurance plans. If you have questions about whether
              we accept your plan, please contact our billing department at (555) 014-3782. We also offer
              convenient online bill pay through our secure portal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="https://healowpay.com/HealowPay/jsp/healow/login.jsp"
                variant="secondary"
                external
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Pay My Bill Online
              </Button>
              <Button href="tel:+15550143782" variant="outline">
                <Phone className="w-4 h-4 mr-2" />
                Call Billing Department
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Additional Assistance?</h2>
          <p className="text-lg text-white/80 mb-8">
            Our team is here to help with any questions about your care or account.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="white" size="lg">
              <CalendarCheck className="w-5 h-5 mr-2" />
              Contact Us
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
