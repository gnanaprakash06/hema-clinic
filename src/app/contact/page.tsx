import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
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
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/40 via-background to-background pt-12 md:pt-20 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
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
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: 2-COLUMN CONTACT LAYOUT                        */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Clinic Contact Details & Map (5 cols) */}
          <div className="flex flex-col gap-8 lg:col-span-5">
            <Card className="border-border bg-card p-6 shadow-sm">
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
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-3.5 text-xs text-foreground">
                  <div className="flex items-start gap-2">
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
                        "w-full justify-center gap-2 shadow-sm font-semibold text-sm",
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
                      className: "w-full justify-center gap-2 border-border text-xs text-muted-foreground hover:text-foreground",
                    })}
                  >
                    <Mail className="size-3.5 text-primary" />
                    <span>{siteConfig.email}</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps Container */}
            <Card className="overflow-hidden border-border bg-card shadow-sm">
              <div className="relative h-56 w-full bg-secondary/50 flex flex-col items-center justify-center p-6 text-center border-b border-border">
                <div className="flex size-12 items-center justify-center rounded-full bg-card text-primary shadow-sm mb-3">
                  <MapPin className="size-6" />
                </div>
                <h4 className="font-serif font-bold text-foreground text-sm">
                  {siteConfig.clinicShortName} Location
                </h4>
                <p className="text-xs text-muted-foreground max-w-xs mt-1">
                  123 Medical Avenue, Chennai, Tamil Nadu - 600040
                </p>
                <div className="mt-3">
                  <Badge variant="outline" className="text-[11px] bg-card text-foreground">
                    Valet &amp; Patient Parking Available
                  </Badge>
                </div>
              </div>

              <div className="p-4 bg-card flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="size-4 text-teal" />
                  <span>Accessible Entrance</span>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                    className: "gap-1.5 text-primary font-semibold hover:bg-primary/10",
                  })}
                >
                  <Navigation className="size-3.5" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </Card>
          </div>

          {/* Right Column: Appointment Form (7 cols) */}
          <div className="lg:col-span-7">
            <AppointmentForm />
          </div>
        </div>
      </section>
    </div>
  );
}
