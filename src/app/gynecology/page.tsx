import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, getWhatsAppAppointmentUrl } from "@/data/siteConfig";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { EndometriosisTabs } from "@/components/gynecology/EndometriosisTabs";
import {
  Activity,
  CalendarCheck,
  Phone,
  Clock,
  Sparkles,
  ShieldCheck,
  Timer,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Laparoscopy & Endometriosis Excision Surgery | Hema Clinic",
  description:
    "Advanced keyhole laparoscopic surgery, root-cause deep endometriosis excision, and personalized medical care by Dr. Hema at Hema Clinic.",
};

export default function GynecologyPage() {
  const whatsappUrl = getWhatsAppAppointmentUrl(
    "Hello Dr. Hema, I would like to schedule a gynecology / endometriosis evaluation."
  );

  const procedures = [
    "Laparoscopic Ovarian Cystectomy",
    "Fibroid Removal (Myomectomy)",
    "Ectopic Pregnancy Care",
    "Pelvic Adhesiolysis",
    "Total Laparoscopic Hysterectomy (TLH)",
  ];

  return (
    <div className="flex flex-col gap-16 pb-20 md:gap-24 md:pb-28">
      {/* ========================================================= */}
      {/* SECTION 1: PAGE HEADER                                    */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/40 via-background to-background pt-12 md:pt-20 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Badge
              variant="secondary"
              className="rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal border border-teal/20 bg-teal/10"
            >
              Department of Gynecology &amp; Minimal Access Surgery
            </Badge>

            <h1 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-5xl leading-[1.15]">
              Advanced Keyhole Surgery &amp;{" "}
              <span className="text-teal italic font-serif">
                Specialized Endometriosis Care
              </span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Dr. Hema specializes in diagnosing and treating complex pelvic
              conditions using minimally invasive laparoscopy—helping women
              overcome debilitating pain, heavy bleeding, and fertility
              challenges.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 w-full sm:w-auto">
              <Link
                href="/contact"
                className={buttonVariants({
                  size: "lg",
                  className: "gap-2 shadow-md text-base font-semibold",
                })}
              >
                <CalendarCheck className="size-5" />
                <span>Book Gynecological Evaluation</span>
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "gap-2 border-primary/30 text-primary hover:bg-primary/5 text-base font-medium",
                })}
              >
                <Phone className="size-4" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: SECTION A — DIAGNOSTIC & OPERATIVE LAPAROSCOPY */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Description Column */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="w-fit text-xs font-semibold text-teal border border-teal/20 bg-teal/10"
              >
                Section A: Minimal Access Surgery
              </Badge>
              <span className="text-xs text-muted-foreground font-medium">
                High-Definition Keyhole Optics
              </span>
            </div>

            <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
              Minimally Invasive Keyhole Surgery
            </h2>

            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Instead of a large abdominal cut, laparoscopic surgery uses 2 to 3
              tiny keyhole incisions (0.5 cm to 1 cm) and a high-definition camera
              to visualize and treat pelvic conditions with microscopic
              precision.
            </p>

            {/* Patient Advantages (3 items) */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 pt-2">
              <div className="flex flex-col gap-1.5 rounded-xl border border-border/80 bg-card p-3.5 shadow-2xs">
                <div className="flex size-9 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  <ShieldCheck className="size-4" />
                </div>
                <p className="font-serif font-bold text-foreground text-xs sm:text-sm">
                  Minimal Pain &amp; Scars
                </p>
                <p className="text-xs text-muted-foreground">
                  Tiny, barely visible 0.5 cm incisions minimize muscle cutting.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 rounded-xl border border-border/80 bg-card p-3.5 shadow-2xs">
                <div className="flex size-9 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  <Timer className="size-4" />
                </div>
                <p className="font-serif font-bold text-foreground text-xs sm:text-sm">
                  Rapid 5–7 Day Recovery
                </p>
                <p className="text-xs text-muted-foreground">
                  Day-care or 24-hr stay with fast return to active life.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 rounded-xl border border-border/80 bg-card p-3.5 shadow-2xs">
                <div className="flex size-9 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  <Sparkles className="size-4" />
                </div>
                <p className="font-serif font-bold text-foreground text-xs sm:text-sm">
                  Lower Scar Tissue Risk
                </p>
                <p className="text-xs text-muted-foreground">
                  Substantially fewer internal adhesions and infections.
                </p>
              </div>
            </div>
          </div>

          {/* Right Card: Procedures Performed */}
          <div className="lg:col-span-5">
            <Card className="border-border border-t-4 border-t-teal bg-card p-6 shadow-md">
              <CardHeader className="gap-2">
                <div className="flex size-11 items-center justify-center rounded-xl bg-teal/10 text-teal border border-teal/20">
                  <Activity className="size-6" />
                </div>
                <CardTitle className="font-serif text-xl font-bold text-foreground">
                  Procedures Performed
                </CardTitle>
                <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                  Dr. Hema routinely conducts advanced therapeutic and
                  fertility-preserving laparoscopic procedures:
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-3 pt-2">
                <div className="flex flex-wrap gap-2">
                  {procedures.map((proc, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs py-1 px-3 font-semibold border-teal/30 bg-teal/5 text-teal hover:bg-teal/10 transition-colors"
                    >
                      ✓ {proc}
                    </Badge>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-border/70 bg-secondary/30 p-3.5 text-xs text-muted-foreground">
                  <p className="font-semibold text-foreground mb-1">
                    Tissue Preservation Priority
                  </p>
                  <p>
                    Every laparoscopic intervention prioritizes sparing normal
                    ovarian tissue, preserving uterine integrity, and optimizing
                    reproductive capability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: SECTION B — ENDOMETRIOSIS MANAGEMENT HUB       */}
      {/* ========================================================= */}
      <section className="bg-secondary/25 py-16 md:py-24 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Patient Education Intro */}
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Badge
              variant="secondary"
              className="rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10"
            >
              Section B: Endometriosis Hub
            </Badge>

            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A Complete, Step-by-Step Protocol for Endometriosis
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Endometriosis occurs when tissue similar to the inner lining of the
              uterus grows outside it—on the ovaries, pelvic ligaments, bladder,
              or bowel. Every month, this tissue responds to hormones and triggers
              chronic inflammation, severe menstrual cramps, painful
              intercourse, ovarian &lsquo;chocolate&rsquo; cysts
              (endometriomas), and fertility difficulties. Because every
              woman&apos;s life stage and goals differ, Hema Clinic structures
              care across three specialized pathways:
            </p>
          </div>

          {/* Interactive shadcn Tabs Component */}
          <div className="mt-12">
            <EndometriosisTabs />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: APPOINTMENT CTA BANNER                         */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-8 sm:p-12 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="flex flex-col gap-3 lg:col-span-8">
              <Badge
                variant="secondary"
                className="w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal border border-teal/20 bg-teal/10"
              >
                Pelvic Pain Assessment
              </Badge>
              <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Tired of Being Told Severe Period Pain Is Normal?
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base max-w-2xl">
                Accurate diagnosis and root-level excision can transform your
                quality of life. Schedule a dedicated pelvic pain evaluation with
                Dr. Hema at Hema Clinic.
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                <span className="flex items-center gap-1.5">
                  <Clock className="size-4 text-primary" />
                  {siteConfig.timings}
                </span>
                <span className="hidden sm:inline text-border">|</span>
                <span className="flex items-center gap-1.5">
                  <HeartHandshake className="size-4 text-primary" />
                  In-clinic ultrasound &amp; MRI scan review
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
              <Link
                href="/contact"
                className={buttonVariants({
                  size: "lg",
                  className: "w-full justify-center gap-2 shadow-md text-base font-semibold",
                })}
              >
                <CalendarCheck className="size-5" />
                <span>Book Laparoscopic Consult</span>
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "w-full justify-center gap-2 border-primary/30 text-primary hover:bg-primary/5 text-base font-medium",
                })}
              >
                <Phone className="size-4" />
                <span>Quick WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
