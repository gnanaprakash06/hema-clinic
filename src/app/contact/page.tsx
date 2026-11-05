import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig, clinicImages } from "@/data/siteConfig";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { AppointmentForm } from "@/components/contact/AppointmentForm";
import {
  FadeIn,
  HoverLiftCard,
} from "@/components/ui/motion-primitives";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Heart,
  Navigation,
  Building,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Book an Appointment | Dr. Hema — Hema Clinic",
  description:
    "Contact Hema Clinic to schedule an appointment with Dr. Hema for maternity care, high-risk pregnancy, painless delivery, or endometriosis excision surgery in Chennai.",
};

export default function ContactPage() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${siteConfig.clinicName}, ${siteConfig.addressFull}`
  )}`;

  return (
    <div className="flex flex-col gap-16 pb-20 md:gap-24 md:pb-28">
      {/* ========================================================= */}
      {/* SECTION 1: HEADER                                         */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#F4E8E6] via-[#FAF8F5] to-[#FAF8F5] pt-10 pb-16 md:pt-16 md:pb-24 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Badge
              variant="secondary"
              className="rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10"
            >
              Contact &amp; Appointments
            </Badge>

            <h1 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-5xl leading-[1.15]">
              We Are Here for Your{" "}
              <span className="text-primary italic font-serif">
                Health &amp; Well-Being
              </span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Reach out to Dr. Hema and the clinical team for compassionate
              maternity consultations, high-risk pregnancy evaluations, or
              advanced laparoscopic endometriosis care.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: 2-COLUMN CONTACT LAYOUT                        */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Clinic Contact Details & Map (5 cols) */}
          <div className="flex flex-col gap-8 lg:col-span-5">
            <FadeIn delay={0.1}>
              <Card className="border-border bg-card p-6 shadow-md rounded-3xl">
                <CardHeader className="gap-2 border-b border-border/60 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                      <Building className="size-5" />
                    </div>
                    <div>
                      <CardTitle className="font-serif text-xl font-bold text-foreground">
                        {siteConfig.clinicShortName}
                      </CardTitle>
                      <CardDescription className="text-xs text-muted-foreground">
                        {siteConfig.clinicName}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col gap-5 pt-6">
                  {/* Address */}
                  <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary mt-0.5">
                      <MapPin className="size-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Clinic Address</p>
                      <p className="text-muted-foreground mt-0.5 leading-relaxed">
                        {siteConfig.addressFull}
                      </p>
                    </div>
                  </div>

                  {/* Timings */}
                  <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary mt-0.5">
                      <Clock className="size-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Consultation Timings</p>
                      <p className="text-muted-foreground mt-0.5 leading-relaxed">
                        {siteConfig.timings}
                      </p>
                      <p className="text-[11px] text-muted-foreground/80 mt-0.5">
                        Sunday: By emergency obstetric appointment only
                      </p>
                    </div>
                  </div>

                  {/* Emergency Labour Room Note */}
                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-xs text-foreground">
                    <div className="flex items-start gap-2.5">
                      <Heart className="size-4 shrink-0 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold text-primary">Emergency Support</p>
                        <p className="text-muted-foreground mt-0.5">
                          {siteConfig.emergencyNote}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Direct Phone Call Button */}
                  <div className="flex flex-col gap-2.5 pt-2">
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className={buttonVariants({
                        size: "lg",
                        className:
                          "w-full justify-center gap-2 shadow-sm font-semibold text-sm bg-primary text-white hover:bg-primary/90",
                      })}
                    >
                      <Phone className="size-4" />
                      <span>Call {siteConfig.phoneDisplay}</span>
                    </a>

                    <a
                      href={`mailto:${siteConfig.email}`}
                      className={buttonVariants({
                        variant: "outline",
                        size: "default",
                        className:
                          "w-full justify-center gap-2 border-border text-xs text-muted-foreground hover:text-foreground",
                      })}
                    >
                      <Mail className="size-3.5 text-primary" />
                      <span>{siteConfig.email}</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Google Maps / Facility Container */}
            <FadeIn delay={0.2}>
              <HoverLiftCard>
                <Card className="overflow-hidden border-border bg-card shadow-md rounded-3xl">
                  {/* Photo Banner */}
                  <div className="relative h-48 w-full overflow-hidden group">
                    <Image
                      src={clinicImages.clinicInterior}
                      alt="Hema Clinic Chennai Location"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                      <div className="flex items-center gap-2">
                        <div className="flex size-7 items-center justify-center rounded-lg bg-primary text-white">
                          <MapPin className="size-4" />
                        </div>
                        <h4 className="font-serif font-bold text-sm">
                          {siteConfig.clinicShortName}
                        </h4>
                      </div>
                      <p className="text-xs text-white/90 mt-1 line-clamp-1">
                        123 Medical Avenue, Chennai - 600040
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-card flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <ShieldCheck className="size-4 text-teal" />
                      <span>Valet &amp; Patient Parking</span>
                    </div>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                        className:
                          "gap-1.5 text-primary font-semibold hover:bg-primary/10",
                      })}
                    >
                      <Navigation className="size-3.5" />
                      <span>Get Driving Directions</span>
                    </a>
                  </div>
                </Card>
              </HoverLiftCard>
            </FadeIn>
          </div>

          {/* Right Column: Appointment Form (7 cols) */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} direction="left">
              <AppointmentForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
