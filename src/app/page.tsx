import Link from "next/link";
import { siteConfig, getWhatsAppAppointmentUrl } from "@/data/siteConfig";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Baby,
  ShieldCheck,
  Activity,
  Target,
  Clock,
  HeartHandshake,
  Sparkles,
  Timer,
  CheckCircle2,
  ArrowRight,
  CalendarCheck,
  Quote,
  Star,
  Check,
  Award,
  Stethoscope,
  Phone,
} from "lucide-react";

export default function HomePage() {
  const whatsappUrl = getWhatsAppAppointmentUrl();

  return (
    <div className="flex flex-col gap-16 pb-20 md:gap-24 md:pb-28">
      {/* ========================================================= */}
      {/* SECTION 1: HERO & TRUST STRIP                            */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-linear-to-b from-secondary/40 via-background to-background pt-12 md:pt-20 lg:pt-24 border-b border-border/40">
        {/* Subtle decorative background circles */}
        <div
          className="pointer-events-none absolute -top-24 right-0 size-96 rounded-full bg-primary/5 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-48 -left-20 size-80 rounded-full bg-teal/5 blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content Column */}
            <div className="flex flex-col items-start gap-6 lg:col-span-7">
              {/* Clinical Badge */}
              <Badge
                variant="secondary"
                className="rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10"
              >
                Comprehensive Maternity &amp; Advanced Keyhole Surgery
              </Badge>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-5xl xl:text-6xl leading-[1.15]">
                Compassionate Care for Motherhood.{" "}
                <span className="text-primary italic font-serif">
                  Precision Relief
                </span>{" "}
                for Endometriosis.
              </h1>

              {/* Subheadline */}
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg max-w-2xl">
                Whether you are preparing to welcome a new life or seeking
                lasting relief from chronic pelvic pain, Dr. Hema combines
                evidence-based obstetrics with advanced laparoscopic surgery
                tailored to your body.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "gap-2 px-6 shadow-md hover:shadow-lg transition-all text-base font-semibold",
                  })}
                >
                  <CalendarCheck className="size-5" />
                  <span>Book a Consultation</span>
                </Link>

                <a
                  href="#specialties"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className:
                      "gap-2 px-5 border-border hover:bg-secondary/70 text-base font-medium",
                  })}
                >
                  <span>Explore Specialties</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>

              {/* Quick Doctor Summary Callout */}
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-border/80 bg-card/80 p-3.5 text-xs text-muted-foreground shadow-xs">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Award className="size-5" />
                </div>
                <div>
                  <span className="font-semibold text-foreground">
                    {siteConfig.doctorName}
                  </span>{" "}
                  — {siteConfig.credentials}
                  <p className="text-muted-foreground/80">
                    Consultations at {siteConfig.clinicShortName}, {siteConfig.locationShort}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Doctor Feature Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md rounded-2xl border border-border bg-card p-6 shadow-xl lg:max-w-none">
                <div className="absolute -top-3 right-6">
                  <Badge className="bg-primary text-white shadow-sm font-semibold">
                    15+ Years Clinical Expertise
                  </Badge>
                </div>

                <div className="flex flex-col gap-5 pt-2">
                  <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                    <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20">
                      <Stethoscope className="size-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-foreground">
                        {siteConfig.doctorName}
                      </h3>
                      <p className="text-xs text-primary font-medium">
                        Obstetrician &amp; Laparoscopic Surgeon
                      </p>
                    </div>
                  </div>

                  <p className="text-xs leading-relaxed text-muted-foreground">
                    &ldquo;My philosophy is simple: listen without dismissal,
                    prioritize normal birthing whenever medically safe, and treat
                    severe pelvic pain down to its roots with microscopic precision.&rdquo;
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="rounded-xl border border-border/80 bg-secondary/40 p-3 text-center">
                      <p className="font-serif text-2xl font-bold text-primary">
                        2,500+
                      </p>
                      <p className="text-[11px] font-medium text-muted-foreground">
                        Safe Deliveries Supported
                      </p>
                    </div>
                    <div className="rounded-xl border border-border/80 bg-secondary/40 p-3 text-center">
                      <p className="font-serif text-2xl font-bold text-teal">
                        1,200+
                      </p>
                      <p className="text-[11px] font-medium text-muted-foreground">
                        Minimally Invasive Surgeries
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Check className="size-4 text-primary" />
                      <span>Low-dose walking epidurals for painless delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="size-4 text-teal" />
                      <span>Full root excision for deep endometriosis lesions</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({
                        variant: "outline",
                        className:
                          "w-full justify-center gap-2 text-xs font-semibold border-primary/30 hover:bg-primary/5 text-primary",
                      })}
                    >
                      <Phone className="size-3.5" />
                      <span>Quick Query via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Trust Strip (4 items with Lucide icons) */}
          <div className="mt-14 lg:mt-20 border-t border-border/80 pt-8 pb-10">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Trust Item 1 */}
              <div className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4 transition-all hover:bg-card hover:shadow-xs">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Baby className="size-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-foreground">
                    Safe Normal &amp; Painless Delivery
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Continuous fetal tracking &amp; comfortable epidural labour.
                  </p>
                </div>
              </div>

              {/* Trust Item 2 */}
              <div className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4 transition-all hover:bg-card hover:shadow-xs">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ShieldCheck className="size-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-foreground">
                    High-Risk Pregnancy Care
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Proactive surveillance for GDM, hypertension, twins &amp; VBAC.
                  </p>
                </div>
              </div>

              {/* Trust Item 3 */}
              <div className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4 transition-all hover:bg-card hover:shadow-xs">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  <Activity className="size-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-foreground">
                    Keyhole Laparoscopic Surgery
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    0.5 cm micro-incisions with minimal pain and 24-hr discharge.
                  </p>
                </div>
              </div>

              {/* Trust Item 4 */}
              <div className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/60 p-4 transition-all hover:bg-card hover:shadow-xs">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  <Target className="size-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-foreground">
                    Root-Cause Endometriosis Excision
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Complete surgical removal over superficial surface burning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: DUAL CLINICAL PILLARS                          */}
      {/* ========================================================= */}
      <section id="specialties" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <Badge
              variant="secondary"
              className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10"
            >
              Dual Clinical Pillars
            </Badge>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Two Centers of Specialized Clinical Care
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Integrating compassionate, family-centered maternity with
              high-precision surgical gynecology for lifelong health and vitality.
            </p>
          </div>

          {/* Side-by-side Dual Pillar Cards */}
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Pillar Card 1: Obstetrics & Maternity */}
            <Card className="flex flex-col justify-between border-border border-t-4 border-t-[#D47A72] bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="gap-2">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="w-fit text-xs font-semibold text-primary border border-primary/20 bg-primary/10"
                  >
                    Obstetrics &amp; Maternity
                  </Badge>
                  <span className="text-xs font-medium text-muted-foreground">
                    Pillar 01
                  </span>
                </div>
                <CardTitle className="font-serif text-2xl font-bold text-foreground">
                  Obstetrics &amp; Childbirth Care
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  Complete guidance from pre-conception and routine antenatal
                  scans to specialized high-risk pregnancy protocols and
                  comfortable, painless epidural labour.
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Key Obstetric Offerings
                </p>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    "Routine Pregnancy Care",
                    "High-Risk Pregnancy Monitoring",
                    "Safe Labour & VBAC Support",
                    "Painless Labour (Epidural)",
                  ].map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2.5 rounded-lg border border-border/60 bg-secondary/30 p-2.5 text-xs font-medium text-foreground"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-muted-foreground italic pt-2">
                  &ldquo;A birthing plan that honors your choices, supported by 24/7
                  maternal-fetal monitoring readiness.&rdquo;
                </p>
              </CardContent>

              <CardFooter className="pt-2">
                <Link
                  href="/obstetrics"
                  className={buttonVariants({
                    variant: "ghost",
                    className:
                      "w-full justify-between group text-primary font-semibold hover:bg-primary/10 hover:text-primary",
                  })}
                >
                  <span>Explore Maternity Care</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>

            {/* Pillar Card 2: Gynecology & Endometriosis */}
            <Card className="flex flex-col justify-between border-border border-t-4 border-t-[#2A6B62] bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="gap-2">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="w-fit text-xs font-semibold text-teal border border-teal/20 bg-teal/10"
                  >
                    Gynecology &amp; Minimal Access
                  </Badge>
                  <span className="text-xs font-medium text-muted-foreground">
                    Pillar 02
                  </span>
                </div>
                <CardTitle className="font-serif text-2xl font-bold text-foreground">
                  Laparoscopy &amp; Endometriosis Center
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  Minimally invasive keyhole treatments and comprehensive
                  medical-to-surgical endometriosis care focused on long-term pain
                  relief and organ preservation.
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Specialized Surgical Services
                </p>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    "Diagnostic & Operative Laparoscopy",
                    "Endometriosis Medical Management",
                    "Fertility-Preserving Keyhole Surgery",
                    "Laparoscopic Excision Surgery",
                  ].map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2.5 rounded-lg border border-border/60 bg-teal/5 p-2.5 text-xs font-medium text-foreground"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-teal" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-muted-foreground italic pt-2">
                  &ldquo;Complete laparoscopic excision down to lesion roots—never
                  leaving deep disease behind.&rdquo;
                </p>
              </CardContent>

              <CardFooter className="pt-2">
                <Link
                  href="/gynecology"
                  className={buttonVariants({
                    variant: "ghost",
                    className:
                      "w-full justify-between group text-teal font-semibold hover:bg-teal/10 hover:text-teal",
                  })}
                >
                  <span>Explore Gynecology &amp; Endometriosis</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: WHY PATIENTS TRUST HEMA CLINIC                */}
      {/* ========================================================= */}
      <section className="bg-secondary/30 py-16 md:py-20 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <Badge
              variant="secondary"
              className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10"
            >
              Our Philosophy
            </Badge>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Patients Trust Hema Clinic
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Healthcare built on deep clinical attention, empathetic
              communication, and evidence-backed medical standards.
            </p>
          </div>

          {/* 4 Card Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <Card className="flex flex-col justify-between border-border bg-card p-2 shadow-2xs hover:shadow-md transition-shadow">
              <CardHeader className="gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <Clock className="size-5" />
                </div>
                <CardTitle className="font-serif text-lg font-bold text-foreground">
                  Unrushed 1-on-1 Consultations
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  We take time to listen to your symptoms, explain scan reports
                  clearly, and build a treatment plan without medical jargon.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Card 2 */}
            <Card className="flex flex-col justify-between border-border bg-card p-2 shadow-2xs hover:shadow-md transition-shadow">
              <CardHeader className="gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <HeartHandshake className="size-5" />
                </div>
                <CardTitle className="font-serif text-lg font-bold text-foreground">
                  Mother-Baby First Birthing Philosophy
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  Respectful maternity care prioritizing safe natural birth
                  whenever possible, backed by 24/7 high-dependency obstetric
                  readiness.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Card 3 */}
            <Card className="flex flex-col justify-between border-border bg-card p-2 shadow-2xs hover:shadow-md transition-shadow">
              <CardHeader className="gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl bg-teal/10 text-teal border border-teal/20">
                  <Sparkles className="size-5" />
                </div>
                <CardTitle className="font-serif text-lg font-bold text-foreground">
                  Excision Over Surface Burning
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  For deep endometriosis, we perform root-level laparoscopic
                  excision rather than superficial ablation, lowering recurrence
                  and protecting fertility.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Card 4 */}
            <Card className="flex flex-col justify-between border-border bg-card p-2 shadow-2xs hover:shadow-md transition-shadow">
              <CardHeader className="gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl bg-teal/10 text-teal border border-teal/20">
                  <Timer className="size-5" />
                </div>
                <CardTitle className="font-serif text-lg font-bold text-foreground">
                  Faster Scar-Minimal Recovery
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  Advanced keyhole techniques use tiny 0.5 cm incisions so you
                  return home—and back to your routine—within days, not weeks.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: PATIENT STORIES (TESTIMONIALS)                 */}
      {/* ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <Badge
              variant="secondary"
              className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10"
            >
              Patient Testimonials
            </Badge>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Patient Stories of Comfort &amp; Healing
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Real experiences from women and mothers who found reassurance,
              safe delivery, and freedom from pelvic pain at Hema Clinic.
            </p>
          </div>

          {/* 3 Card Testimonial Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {siteConfig.patientStories.map((story) => (
              <Card
                key={story.author}
                className="flex flex-col justify-between border-border bg-card shadow-sm hover:shadow-md transition-shadow relative"
              >
                <CardHeader className="gap-3">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className="text-[11px] font-semibold text-primary border border-primary/20 bg-primary/10"
                    >
                      {story.tag}
                    </Badge>
                    <div className="flex text-amber-500" aria-label="5 out of 5 stars">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="size-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  <Quote className="size-8 text-primary/30 mt-1" />

                  <blockquote className="text-sm leading-relaxed text-foreground/90 italic">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                </CardHeader>

                <CardFooter className="border-t border-border/60 bg-secondary/20 pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-serif font-bold text-foreground text-sm">
                      {story.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {story.role}
                    </p>
                  </div>
                  <span className="text-[11px] font-medium text-primary">
                    Verified Patient
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FINAL CONSULTATION CTA BANNER                             */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-[#FAF0ED] via-[#FBF5F2] to-[#EEF5F3] border border-border p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="flex flex-col gap-4 lg:col-span-8">
              <Badge
                variant="secondary"
                className="w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10"
              >
                Schedule Your Visit
              </Badge>
              <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to Experience Compassionate, Evidence-Based Care?
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base max-w-2xl">
                Whether you have questions regarding birth plans, painless
                delivery, ultrasound scans, or severe menstrual pain, Dr. Hema
                and our dedicated clinical team are here for you.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  <Clock className="size-4 text-primary" />
                  {siteConfig.timings}
                </span>
                <span className="hidden sm:inline text-border">|</span>
                <span className="flex items-center gap-1.5">
                  <HeartHandshake className="size-4 text-primary" />
                  {siteConfig.emergencyNote}
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
                <span>Book Appointment Online</span>
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "w-full justify-center gap-2 border-primary/30 text-primary hover:bg-primary/5 text-base font-medium",
                })}
              >
                <Phone className="size-4" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
