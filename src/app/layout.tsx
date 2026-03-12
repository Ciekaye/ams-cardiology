import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "#1 Cardiologists | Montgomery County, PA | AMS Cardiology",
    template: "%s | AMS Cardiology",
  },
  description:
    "AMS Cardiology provides the highest level of cardiovascular care to the people of Montgomery County, PA. Over 40 years of trusted expertise from skilled & experienced cardiologists.",
  keywords: [
    "cardiologist",
    "cardiology",
    "heart doctor",
    "Montgomery County PA",
    "Philadelphia cardiologist",
    "AMS Cardiology",
    "heart care",
    "cardiovascular",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amscardiology.com",
    siteName: "AMS Cardiology",
    title: "#1 Cardiologists | Montgomery County, PA | AMS Cardiology",
    description:
      "AMS Cardiology provides the highest level of cardiovascular care to the people of Montgomery County, PA.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <UtilityBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
