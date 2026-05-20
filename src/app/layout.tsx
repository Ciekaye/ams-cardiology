import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import DisclaimerBanner from "@/components/layout/DisclaimerBanner";
import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vireocardiology.com"),
  title: {
    default: "Modern Heart Care | Montgomery County, PA | Vireo Cardiology",
    template: "%s | Vireo Cardiology",
  },
  description:
    "Vireo Cardiology provides modern, evidence-based cardiovascular care to the people of Montgomery County, PA. Modern heart care, rooted in trust.",
  keywords: [
    "cardiologist",
    "cardiology",
    "heart doctor",
    "Montgomery County PA",
    "Philadelphia cardiologist",
    "Vireo Cardiology",
    "heart care",
    "cardiovascular",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vireocardiology.com",
    siteName: "Vireo Cardiology",
    title: "Modern Heart Care | Montgomery County, PA | Vireo Cardiology",
    description:
      "Vireo Cardiology provides modern, evidence-based cardiovascular care to the people of Montgomery County, PA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Heart Care | Vireo Cardiology",
    description:
      "Modern, evidence-based cardiovascular care for the Greater Philadelphia area. Modern heart care, rooted in trust.",
  },
};

// Fictional MedicalBusiness data for a portfolio case study.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Vireo Cardiology",
  description: "Modern heart care, rooted in trust.",
  url: "https://vireocardiology.com",
  telephone: "+1-555-014-3782",
  email: "info@vireocardiology.com",
  medicalSpecialty: "Cardiovascular",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1234 Chestnut Street, Suite 500",
    addressLocality: "Philadelphia",
    addressRegion: "PA",
    postalCode: "19107",
    addressCountry: "US",
  },
  areaServed: "Greater Philadelphia Area",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <DisclaimerBanner />
        <UtilityBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
