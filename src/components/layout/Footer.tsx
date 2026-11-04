import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Separator } from "@/components/ui/separator";
import {
  Stethoscope,
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
  ShieldAlert,
  ArrowUpRight,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-[#F7F3EE] text-foreground transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Main 4-column grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Clinic & Doctor Identity */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/20">
                <Stethoscope className="size-5" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-foreground">
                  {siteConfig.doctorName}
                </span>
                <p className="text-xs font-medium text-muted-foreground">
                  {siteConfig.clinicShortName}
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-muted-foreground">
              {siteConfig.designation}
            </p>
            <p className="text-xs text-muted-foreground/90 font-medium">
              {siteConfig.credentials}
            </p>

            <div className="mt-2 flex items-center gap-2 rounded-lg border border-border/80 bg-background/80 p-3 text-xs text-muted-foreground shadow-2xs">
              <Heart className="size-4 shrink-0 text-primary" />
              <span>Evidence-based obstetrics & advanced laparoscopic surgery.</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-base font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-primary hover:underline underline-offset-4"
                  >
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 font-medium text-primary transition-colors hover:underline underline-offset-4"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Clinical Specializations */}
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-base font-semibold text-foreground">
              Clinical Specializations
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/obstetrics"
                  className="transition-colors hover:text-primary hover:underline underline-offset-4"
                >
                  Routine Antenatal & Pregnancy Scans
                </Link>
              </li>
              <li>
                <Link
                  href="/obstetrics"
                  className="transition-colors hover:text-primary hover:underline underline-offset-4"
                >
                  Painless Labour (Epidural Analgesia)
                </Link>
              </li>
              <li>
                <Link
                  href="/obstetrics"
                  className="transition-colors hover:text-primary hover:underline underline-offset-4"
                >
                  High-Risk Pregnancy & VBAC Care
                </Link>
              </li>
              <li>
                <Link
                  href="/gynecology"
                  className="transition-colors hover:text-primary hover:underline underline-offset-4"
                >
                  Diagnostic & Operative Laparoscopy
                </Link>
              </li>
              <li>
                <Link
                  href="/gynecology"
                  className="transition-colors hover:text-primary hover:underline underline-offset-4"
                >
                  Endometriosis Excision Surgery
                </Link>
              </li>
              <li>
                <Link
                  href="/gynecology"
                  className="transition-colors hover:text-primary hover:underline underline-offset-4"
                >
                  Fibroids & Ovarian Cyst Treatment
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Clinic Timings & Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-base font-semibold text-foreground">
              Clinic & Appointments
            </h3>
            <div className="flex flex-col gap-3 text-xs text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <MapPin className="size-4 shrink-0 text-primary mt-0.5" />
                <span>{siteConfig.addressFull}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="size-4 shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Consultation Timings:</p>
                  <p>{siteConfig.timings}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-primary" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="mt-1 rounded-md border border-primary/20 bg-primary/5 p-2.5 text-xs text-foreground">
                <span className="font-semibold text-primary">Emergency Support: </span>
                {siteConfig.emergencyNote}
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-8 bg-border" />

        {/* Medical Disclaimer Banner */}
        <div className="rounded-xl border border-border/80 bg-background/60 p-4 text-xs leading-relaxed text-muted-foreground">
          <div className="flex items-start gap-2.5">
            <ShieldAlert className="size-4 shrink-0 text-primary mt-0.5" />
            <p>{siteConfig.medicalDisclaimer}</p>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>© {currentYear} {siteConfig.clinicName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-primary transition-colors">
              About Dr. Hema
            </Link>
            <Link href="/resources" className="hover:text-primary transition-colors">
              Patient Guides
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact & Directions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
