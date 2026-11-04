import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

const fontSerif = Lora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.doctorName} | ${siteConfig.clinicShortName} — Obstetrician, Painless Labour & Endometriosis Specialist`,
  description:
    "Compassionate maternity care, high-risk pregnancy management, painless epidural delivery, and advanced laparoscopic endometriosis excision surgery at Hema Clinic.",
  keywords: [
    "Dr. Hema",
    "Hema Clinic",
    "Obstetrician Chennai",
    "Gynecologist Chennai",
    "Endometriosis Excision",
    "Painless Labour",
    "Epidural Normal Delivery",
    "High-Risk Pregnancy",
    "Laparoscopic Surgery",
  ],
  authors: [{ name: siteConfig.doctorName }],
  openGraph: {
    title: `${siteConfig.doctorName} | ${siteConfig.clinicShortName}`,
    description:
      "Compassionate maternity care, high-risk pregnancy management, painless epidural delivery, and advanced laparoscopic endometriosis excision surgery.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-primary/20 selection:text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
