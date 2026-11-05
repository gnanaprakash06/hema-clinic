import Image from "next/image";
import Link from "next/link";
import {
  siteConfig,
  clinicImages,
  getWhatsAppAppointmentUrl,
} from "@/data/siteConfig";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  FloatingCard,
  HoverLiftCard,
} from "@/components/ui/motion-primitives";
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
  Award,
  Phone,
} from "lucide-react";

export default function HomePage() {
  const whatsappUrl = getWhatsAppAppointmentUrl();

  return (
    <div className="flex flex-col gap-16 pb-20 md:gap-24 md:pb-28">
      {/* ========================================================= */}
      {/* SECTION 1: ASYMMETRIC SPLIT HERO WITH IMAGERY             */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#F4E8E6] via-[#FAF8F5] to-[#FAF8F5] pt-10 pb-16 md:pt-16 md:pb-24 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column (7 cols): Editorial Content */}
            <div className="flex flex-col items-start gap-6 lg:col-span-7">
              <FadeIn delay={0.1}>
                <Badge
                  variant="secondary"
                  className="rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10"
                >
                  Comprehensive Maternity &amp; Advanced Keyhole Surgery
                </Badge>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.12]">
                  Compassionate Care for Motherhood.{" "}
                  <span className="text-primary italic font-serif">
                    Precision Relief
                  </span>{" "}
                  for Endometriosis.
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg max-w-2xl">
                  Whether you are preparing to welcome a new life or seeking
                  lasting relief from chronic pelvic pain, Dr. Hema combines
                  evidence-based obstetrics with advanced laparoscopic surgery
                  tailored to your body.
                </p>
              </FadeIn>

              {/* Action Buttons */}
              <FadeIn delay={0.4} className="w-full sm:w-auto">
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Link
                    href="/contact"
                    className={buttonVariants({
                      size: "lg",
                      className:
                        "gap-2 px-6 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all text-base font-semibold bg-primary text-white hover:bg-primary/90",
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
                        "group gap-2 px-5 border-border hover:bg-secondary/70 text-base font-medium",
                    })}
                  >
                    <span>Explore Specialties</span>
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </FadeIn>

              {/* Quick Doctor Summary Callout */}
              <FadeIn delay={0.5}>
                <div className="flex items-center gap-3 rounded-2xl border border-border/80 bg-white/80 backdrop-blur-xs p-3.5 text-xs text-muted-foreground shadow-2xs">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Award className="size-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">
                      {siteConfig.doctorName}
                    </span>{" "}
                    — {siteConfig.credentials}
                    <p className="text-muted-foreground/80 mt-0.5">
                      Consultations at {siteConfig.clinicShortName}, {siteConfig.locationShort}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column (5 cols): Framed Image with Glassmorphism Overlays */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.3} direction="left" className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Framed Hero Image */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:h-[540px] w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-secondary/50 group">
                  <Image
                    src={clinicImages.heroDoctor}
                    alt="Dr. Hema Consulting with Maternity Patient"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle lighting gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />

                  {/* Doctor Experience Badge in Corner */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-primary text-white shadow-md font-semibold text-xs px-3 py-1">
                      15+ Years Experience
                    </Badge>
                  </div>

                  {/* Bottom Stats Banner inside Image */}
                  <div className="absolute bottom-4 inset-x-4 z-10 rounded-xl bg-white/90 backdrop-blur-md p-3 border border-white/60 shadow-md">
                    <div className="grid grid-cols-2 divide-x divide-border text-center">
                      <div className="px-2">
                        <p className="font-serif text-lg font-bold text-primary">2,500+</p>
                        <p className="text-[10px] font-medium text-muted-foreground uppercase">Safe Births</p>
                      </div>
                      <div className="px-2">
                        <p className="font-serif text-lg font-bold text-teal">1,200+</p>
                        <p className="text-[10px] font-medium text-muted-foreground uppercase">Keyhole Surgeries</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Glassmorphism Badge 1: Top-Left */}
                <FloatingCard
                  duration={4.5}
                  yOffset={8}
                  className="absolute -top-6 -left-4 sm:-left-8 z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 backdrop-blur-md p-3.5 shadow-xl max-w-xs"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <HeartHandshake className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">Safe &amp; Painless Birth</p>
                    <p className="text-[11px] text-muted-foreground">24/7 Epidural &amp; Maternity Suite</p>
                  </div>
                </FloatingCard>

                {/* Floating Glassmorphism Badge 2: Bottom-Right */}
                <FloatingCard
                  duration={5}
                  delay={1}
                  yOffset={-8}
                  className="absolute -bottom-6 -right-4 sm:-right-8 z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 backdrop-blur-md p-3.5 shadow-xl max-w-xs"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal/15 text-teal">
                    <Sparkles className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">Keyhole Excision</p>
                    <p className="text-[11px] text-muted-foreground">0.5 cm Scar-Minimal Laparoscopy</p>
                  </div>
                </FloatingCard>
              </FadeIn>
            </div>
          </div>

          {/* Quick Trust Strip (4 items with Stagger animation) */}
          <div className="mt-14 lg:mt-20 border-t border-border/80 pt-8 pb-4">
            <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Trust Item 1 */}
              <StaggerItem>
                <HoverLiftCard>
                  <div className="flex items-start gap-3.5 rounded-2xl border border-border/60 bg-white/80 backdrop-blur-xs p-4 shadow-xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Baby className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        Safe Normal &amp; Painless Delivery
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        Continuous fetal tracking &amp; comfortable epidural labour.
                      </p>
                    </div>
                  </div>
                </HoverLiftCard>
              </StaggerItem>

              {/* Trust Item 2 */}
              <StaggerItem>
                <HoverLiftCard>
                  <div className="flex items-start gap-3.5 rounded-2xl border border-border/60 bg-white/80 backdrop-blur-xs p-4 shadow-xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <ShieldCheck className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        High-Risk Pregnancy Care
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        Proactive surveillance for GDM, hypertension, twins &amp; VBAC.
                      </p>
                    </div>
                  </div>
                </HoverLiftCard>
              </StaggerItem>

              {/* Trust Item 3 */}
              <StaggerItem>
                <HoverLiftCard>
                  <div className="flex items-start gap-3.5 rounded-2xl border border-border/60 bg-white/80 backdrop-blur-xs p-4 shadow-xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                      <Activity className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        Keyhole Laparoscopic Surgery
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        0.5 cm micro-incisions with minimal pain and 24-hr discharge.
                      </p>
                    </div>
                  </div>
                </HoverLiftCard>
              </StaggerItem>

              {/* Trust Item 4 */}
              <StaggerItem>
                <HoverLiftCard>
                  <div className="flex items-start gap-3.5 rounded-2xl border border-border/60 bg-white/80 backdrop-blur-xs p-4 shadow-xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                      <Target className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        Root-Cause Endometriosis Excision
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        Complete surgical removal over superficial surface burning.
                      </p>
                    </div>
                  </div>
                </HoverLiftCard>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: DUAL CLINICAL PILLARS — EDITORIAL SPLIT CARDS   */}
      {/* ========================================================= */}
      <section id="specialties" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto flex max-w-2xl flex-col items-center text-center">
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
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Pillar Card 1: Obstetrics & Maternity */}
            <FadeIn delay={0.15}>
              <HoverLiftCard yOffset={8}>
                <Card className="flex flex-col justify-between border-border overflow-hidden bg-card shadow-md hover:shadow-xl transition-all group">
                  {/* Visual Image Header */}
                  <div className="h-64 overflow-hidden relative w-full">
                    <Image
                      src={clinicImages.maternityCare}
                      alt="Obstetrics and Maternity Care at Hema Clinic"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-primary text-white text-xs font-semibold shadow-md">
                        Obstetrics &amp; Childbirth
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="font-serif text-2xl font-bold text-white drop-shadow-xs">
                        Obstetrics &amp; Childbirth Care
                      </h3>
                      <p className="text-xs text-white/90 mt-1 line-clamp-1">
                        From first positive test to postpartum joy
                      </p>
                    </div>
                  </div>

                  <CardHeader className="gap-2 pt-5">
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
                    <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {[
                        "Routine Pregnancy Care",
                        "High-Risk Pregnancy Monitoring",
                        "Safe Labour & VBAC Support",
                        "Painless Labour (Epidural)",
                      ].map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2.5 rounded-lg border border-border/70 bg-secondary/30 p-2.5 text-xs font-medium text-foreground"
                        >
                          <CheckCircle2 className="size-4 shrink-0 text-primary" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-2">
                    <Link
                      href="/obstetrics"
                      className={buttonVariants({
                        variant: "ghost",
                        className:
                          "w-full justify-between group/btn text-primary font-semibold hover:bg-primary/10 hover:text-primary",
                      })}
                    >
                      <span>Explore Maternity Care</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              </HoverLiftCard>
            </FadeIn>

            {/* Pillar Card 2: Gynecology & Endometriosis */}
            <FadeIn delay={0.25}>
              <HoverLiftCard yOffset={8}>
                <Card className="flex flex-col justify-between border-border overflow-hidden bg-card shadow-md hover:shadow-xl transition-all group">
                  {/* Visual Image Header */}
                  <div className="h-64 overflow-hidden relative w-full">
                    <Image
                      src={clinicImages.laparoscopySurgery}
                      alt="Advanced Laparoscopy Surgery at Hema Clinic"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-teal text-white text-xs font-semibold shadow-md">
                        Surgical Gynecology
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="font-serif text-2xl font-bold text-white drop-shadow-xs">
                        Laparoscopy &amp; Endometriosis Center
                      </h3>
                      <p className="text-xs text-white/90 mt-1 line-clamp-1">
                        Gold-standard excision &amp; organ-sparing keyhole surgery
                      </p>
                    </div>
                  </div>

                  <CardHeader className="gap-2 pt-5">
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
                    <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {[
                        "Diagnostic & Operative Laparoscopy",
                        "Endometriosis Medical Management",
                        "Fertility-Preserving Keyhole Surgery",
                        "Laparoscopic Excision Surgery",
                      ].map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2.5 rounded-lg border border-border/70 bg-teal/5 p-2.5 text-xs font-medium text-foreground"
                        >
                          <CheckCircle2 className="size-4 shrink-0 text-teal" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-2">
                    <Link
                      href="/gynecology"
                      className={buttonVariants({
                        variant: "ghost",
                        className:
                          "w-full justify-between group/btn text-teal font-semibold hover:bg-teal/10 hover:text-teal",
                      })}
                    >
                      <span>Explore Gynecology &amp; Endometriosis</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              </HoverLiftCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: WHY PATIENTS TRUST US — ASYMMETRIC BENTO GRID   */}
      {/* ========================================================= */}
      <section className="bg-secondary/30 py-16 md:py-24 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <Badge
              variant="secondary"
              className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10"
            >
              The Hema Clinic Standard
            </Badge>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Patients Trust Hema Clinic
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              A healthcare experience grounded in clinical precision, empathetic
              listening, and personalized treatment plans.
            </p>
          </FadeIn>

          {/* Bento Grid Layout (12 columns) */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Bento Card 1: 7 cols — Image Background + Glass Overlay */}
            <FadeIn delay={0.1} className="md:col-span-7">
              <HoverLiftCard className="h-full">
                <div className="relative h-full min-h-[300px] rounded-3xl overflow-hidden shadow-lg border border-border group flex flex-col justify-end p-6 sm:p-8">
                  <Image
                    src={clinicImages.clinicInterior}
                    alt="Hema Clinic Consultation Suite"
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Dark gradient for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-950/30" />

                  <div className="relative z-10 flex flex-col gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/30">
                      <Clock className="size-5" />
                    </div>
                    <Badge className="w-fit bg-primary text-white text-xs font-semibold">
                      Unrushed Care
                    </Badge>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      Unrushed 1-on-1 Consultations
                    </h3>
                    <p className="text-sm leading-relaxed text-white/90 max-w-xl">
                      We take time to listen to your symptoms, explain scan
                      reports clearly, and build a treatment plan without medical
                      jargon.
                    </p>
                  </div>
                </div>
              </HoverLiftCard>
            </FadeIn>

            {/* Bento Card 2: 5 cols — Terracotta Rose Accent Card */}
            <FadeIn delay={0.2} className="md:col-span-5">
              <HoverLiftCard className="h-full">
                <div className="h-full min-h-[300px] rounded-3xl bg-[#D47A72] text-white p-6 sm:p-8 flex flex-col justify-between shadow-lg">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md text-white border border-white/30">
                    <HeartHandshake className="size-6" />
                  </div>
                  <div className="flex flex-col gap-2 pt-6">
                    <Badge className="w-fit bg-white/20 text-white text-xs font-semibold border-white/30">
                      Birthing Philosophy
                    </Badge>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      Mother-Baby First Birthing Philosophy
                    </h3>
                    <p className="text-sm leading-relaxed text-white/90">
                      Respectful maternity care prioritizing safe natural birth
                      whenever possible, backed by 24/7 high-dependency
                      obstetric readiness.
                    </p>
                  </div>
                </div>
              </HoverLiftCard>
            </FadeIn>

            {/* Bento Card 3: 5 cols — Sage Teal Accent Card */}
            <FadeIn delay={0.3} className="md:col-span-5">
              <HoverLiftCard className="h-full">
                <div className="h-full min-h-[300px] rounded-3xl bg-[#2A6B62] text-white p-6 sm:p-8 flex flex-col justify-between shadow-lg">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md text-white border border-white/30">
                    <Sparkles className="size-6" />
                  </div>
                  <div className="flex flex-col gap-2 pt-6">
                    <Badge className="w-fit bg-white/20 text-white text-xs font-semibold border-white/30">
                      Root Excision
                    </Badge>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      Excision Over Surface Burning
                    </h3>
                    <p className="text-sm leading-relaxed text-white/90">
                      For deep endometriosis, we perform root-level laparoscopic
                      excision rather than superficial ablation, lowering
                      recurrence and protecting fertility.
                    </p>
                  </div>
                </div>
              </HoverLiftCard>
            </FadeIn>

            {/* Bento Card 4: 7 cols — Soft Blush Warm Card with Badges */}
            <FadeIn delay={0.4} className="md:col-span-7">
              <HoverLiftCard className="h-full">
                <div className="h-full min-h-[300px] rounded-3xl bg-[#F4E8E6] text-foreground border border-[#EEDCD9] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                      <Timer className="size-6" />
                    </div>
                    <Badge className="bg-primary/15 text-primary border-primary/25 font-semibold text-xs">
                      Keyhole Precision
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-3 pt-6">
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      Faster Scar-Minimal Recovery
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Advanced keyhole techniques use tiny 0.5 cm incisions so
                      you return home—and back to your routine—within days, not
                      weeks.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="rounded-lg bg-white/90 px-3 py-1.5 text-xs font-semibold text-foreground border border-border shadow-2xs">
                        ✓ 0.5 cm Micro Incisions
                      </span>
                      <span className="rounded-lg bg-white/90 px-3 py-1.5 text-xs font-semibold text-foreground border border-border shadow-2xs">
                        ✓ 24-Hour Hospital Stay
                      </span>
                      <span className="rounded-lg bg-white/90 px-3 py-1.5 text-xs font-semibold text-foreground border border-border shadow-2xs">
                        ✓ Return in 5–7 Days
                      </span>
                    </div>
                  </div>
                </div>
              </HoverLiftCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: PATIENT STORIES (TESTIMONIALS)                 */}
      {/* ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <Badge
              variant="secondary"
              className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10"
            >
              Real Patient Experiences
            </Badge>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Patient Stories of Comfort &amp; Healing
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Real experiences from women and mothers who found reassurance,
              safe delivery, and freedom from pelvic pain at Hema Clinic.
            </p>
          </FadeIn>

          {/* 3 Card Testimonial Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {siteConfig.patientStories.map((story, idx) => (
              <FadeIn key={story.author} delay={0.15 * (idx + 1)}>
                <HoverLiftCard className="h-full">
                  <Card className="flex h-full flex-col justify-between border-border bg-card shadow-sm hover:shadow-md transition-shadow relative p-2">
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

                    <CardFooter className="border-t border-border/60 bg-secondary/20 pt-4 flex items-center justify-between rounded-b-xl">
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
                </HoverLiftCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FINAL CONSULTATION CTA BANNER                             */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#FAF0ED] via-[#FBF5F2] to-[#EEF5F3] border border-border p-8 sm:p-12 lg:p-16 shadow-md">
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
                    className:
                      "w-full justify-center gap-2 shadow-md hover:shadow-lg text-base font-semibold bg-primary text-white hover:bg-primary/90",
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
                    className:
                      "w-full justify-center gap-2 border-primary/30 text-primary hover:bg-primary/5 text-base font-medium",
                  })}
                >
                  <Phone className="size-4" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
