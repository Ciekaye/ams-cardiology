"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, Mail, CalendarCheck, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { locations } from "@/data/locations";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-bold tracking-widest uppercase mb-3 text-accent-light">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Request an Appointment
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Take the first step toward better heart health. Fill out the form below or call us
            directly to schedule your appointment.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-border-light p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-primary-dark mb-2">
                  <CalendarCheck className="w-6 h-6 inline-block mr-2 text-accent" />
                  Appointment Request Form
                </h2>
                <p className="text-text-muted mb-8">
                  Please fill out the form below and our team will contact you to confirm your appointment.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-primary-dark mb-2">Thank You!</h3>
                    <p className="text-text-muted max-w-md mx-auto">
                      Your appointment request has been submitted. Our team will contact you within
                      1 business day to confirm your appointment.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-text-primary mb-2">
                          First Name <span className="text-secondary">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-4 py-3 border border-border-light rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-text-primary mb-2">
                          Last Name <span className="text-secondary">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-4 py-3 border border-border-light rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                          Email <span className="text-secondary">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-border-light rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-text-primary mb-2">
                          Phone <span className="text-secondary">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full px-4 py-3 border border-border-light rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="(215) 555-0123"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="location" className="block text-sm font-semibold text-text-primary mb-2">
                          Preferred Location
                        </label>
                        <select
                          id="location"
                          name="location"
                          className="w-full px-4 py-3 border border-border-light rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all bg-white"
                        >
                          <option value="">Select a location</option>
                          {locations.map((loc) => (
                            <option key={loc.id} value={loc.name}>
                              {loc.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="visitType" className="block text-sm font-semibold text-text-primary mb-2">
                          Visit Type
                        </label>
                        <select
                          id="visitType"
                          name="visitType"
                          className="w-full px-4 py-3 border border-border-light rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all bg-white"
                        >
                          <option value="">Select visit type</option>
                          <option value="new">New Patient</option>
                          <option value="returning">Returning Patient</option>
                          <option value="telemedicine">Telemedicine</option>
                          <option value="second-opinion">Second Opinion</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-border-light rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                        placeholder="Please share any relevant information about your visit (reason for appointment, referring physician, insurance, etc.)"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-secondary hover:bg-secondary-light text-white text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                      >
                        <CalendarCheck className="w-5 h-5 mr-2" />
                        Submit Appointment Request
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-primary text-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">Call Us Directly</h3>
                <a
                  href="tel:+12155171000"
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors text-lg font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  215-517-1000
                </a>
                <p className="text-white/60 text-sm mt-2">Mon – Fri: 8:00 AM – 5:00 PM</p>
              </div>

              <div className="bg-bg-warm rounded-xl border border-border-light p-6">
                <h3 className="font-bold text-primary-dark mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://mycw14.eclinicalweb.com/portal751/jsp/100mp/login_otp.jsp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-text-secondary hover:text-primary transition-colors"
                    >
                      Patient Portal →
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://healowpay.com/HealowPay/jsp/healow/login.jsp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-text-secondary hover:text-primary transition-colors"
                    >
                      Pay My Bill →
                    </a>
                  </li>
                  <li>
                    <Link href="/patient-resources" className="text-sm text-text-secondary hover:text-primary transition-colors">
                      Patient Forms →
                    </Link>
                  </li>
                  <li>
                    <Link href="/telemedicine" className="text-sm text-text-secondary hover:text-primary transition-colors">
                      Telemedicine →
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-bg-warm rounded-xl border border-border-light p-6">
                <h3 className="font-bold text-primary-dark mb-4">Our Main Office</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span className="text-sm text-text-secondary">
                      500 Welsh Road, Suite 100<br />
                      Horsham, PA 19044
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-text-secondary">Mon – Fri: 8:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-text-secondary">info@amscardiology.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary-dark mb-8 text-center">
            All Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc) => (
              <div key={loc.id} className="bg-white rounded-xl border border-border-light p-5">
                <span className="inline-block text-xs font-bold uppercase tracking-wide text-accent mb-2">
                  {loc.type}
                </span>
                <h3 className="font-bold text-text-primary text-sm mb-2">{loc.name}</h3>
                <p className="text-xs text-text-muted mb-1">{loc.address}</p>
                <p className="text-xs text-text-muted">
                  {loc.city}, {loc.state} {loc.zip}
                </p>
                <a
                  href={`tel:+1${loc.phone.replace(/-/g, "")}`}
                  className="text-xs text-primary font-semibold mt-2 inline-block"
                >
                  {loc.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
