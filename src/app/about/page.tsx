import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  siteConfig,
  clinicImages,
  getWhatsAppAppointmentUrl,
} from "@/data/siteConfig";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HoverLiftCard,
} from "@/components/ui/motion-primitives";
import {
  HeartHandshake,
  ShieldCheck,
  Activity,
  Award,
  GraduationCap,
  CalendarCheck,
  Phone,
  Clock,
  Sparkles,
  MapPin,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Dr. Hema | OB/GYN & Laparoscopic Surgeon at Hema Clinic",
  description:
    "Learn about Dr. Hema's background, clinical philosophy, and expertise in compassionate maternity care and minimally invasive laparoscopic endometriosis excision.",
};

export default function AboutPage() {
  const whatsappUrl = getWhatsAppAppointmentUrl(
    "Hello Dr. Hema, I would like to schedule a consultation at Hema Clinic."
  );

  return (
    <div className="flex flex-col gap-16 pb-20 md:gap-24 md:pb-28">
      {/* ========================================================= */}
      {/* SECTION 1: EDITORIAL BIOGRAPHY WITH STICKY ARCH PORTRAIT  */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#F4E8E6] via-[#FAF8F5] to-[#FAF8F5] pt-10 pb-16 md:pt-16 md:pb-24 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Column (5 cols): Sticky Arch/Rounded Portrait Frame */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <FadeIn delay={0.2} direction="right">
                <div className="relative mx-auto max-w-sm lg:max-w-none">
                  {/* Arch Framed Doctor Portrait */}
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:h-[540px] w-full rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white bg-secondary/50 group">
                    <Image
                      src={clinicImages.doctorPortrait}
                      alt="Dr. Hema - Consultant Obstetrician & Laparoscopic Surgeon"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Experience Badge */}
                    <div className="absolute top-8 right-6 z-10">
                      <Badge className="bg-primary text-white shadow-lg font-semibold text-xs px-3 py-1.5 border border-white/40">
                        15+ Years Mastery
                      </Badge>
                    </div>

                    {/* Bottom Details Card over image */}
                    <div className="absolute bottom-4 inset-x-4 z-10 rounded-2xl bg-white/90 backdrop-blur-md p-4 border border-white/60 shadow-lg">
                      <h2 className="font-serif text-xl font-bold text-foreground">
                        {siteConfig.doctorName}
                      </h2>
                      <p className="text-xs font-semibold text-primary mt-0.5">
                        {siteConfig.designation}
                      </p>
                      <p className="text-[11px] text-muted-foreground mt-1">
                        {siteConfig.credentials}
                      </p>
                    </div>
                  </div>

                  {/* Practice Quick Card below portrait */}
                  <div className="mt-6 rounded-2xl border border-border/80 bg-white/90 backdrop-blur-xs p-4 shadow-sm flex flex-col gap-2.5 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building className="size-4 shrink-0 text-primary" />
                      <span className="font-medium text-foreground">{siteConfig.clinicName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4 shrink-0 text-primary" />
                      <span>{siteConfig.addressFull}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="size-4 shrink-0 text-primary" />
                      <span>{siteConfig.timings}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column (7 cols): Scrolling Biography & Narrative */}
            <div className="flex flex-col gap-8 lg:col-span-7">
              <FadeIn delay={0.1}>
                <Badge
                  variant="secondary"
                  className="rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10"
                >
                  Meet Your Specialist
                </Badge>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-5xl leading-[1.15]">
                  Dedicated to Every Stage of a{" "}
                  <span className="text-primary italic font-serif">
                    Woman&apos;s Health Journey
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Dr. Hema is a specialist Obstetrician, Gynecologist, and Minimal
                  Access Laparoscopic Surgeon known for combining warm,
                  reassuring maternity support with high-precision surgical care
                  for complex gynecological conditions.
                </p>
              </FadeIn>

              <FadeIn delay={0.35}>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  With comprehensive clinical training in advanced keyhole surgery
                  and high-risk pregnancy protocols, she provides personalized,
                  evidence-based healthcare that respects each patient&apos;s
                  unique body, birthing wishes, and long-term wellness goals.
                </p>
              </FadeIn>

              {/* Action Buttons */}
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Link
                    href="/contact"
                    className={buttonVariants({
                      size: "lg",
                      className:
                        "gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all font-semibold bg-primary text-white hover:bg-primary/90",
                    })}
                  >
                    <CalendarCheck className="size-5" />
                    <span>Book a Consultation</span>
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
                    <span>WhatsApp Query</span>
                  </a>
                </div>
              </FadeIn>

              {/* Clinical Achievements Cards */}
              <FadeIn delay={0.45}>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="rounded-2xl border border-border/80 bg-white/80 p-4 text-center shadow-xs">
                    <p className="font-serif text-3xl font-bold text-primary">2,500+</p>
                    <p className="text-xs font-medium text-muted-foreground mt-1">Safe Deliveries Supported</p>
                  </div>
                  <div className="rounded-2xl border border-border/80 bg-white/80 p-4 text-center shadow-xs">
                    <p className="font-serif text-3xl font-bold text-teal">1,200+</p>
                    <p className="text-xs font-medium text-muted-foreground mt-1">Laparoscopic Procedures</p>
                  </div>
                </div>
              </FadeIn>

              {/* ======================================================= */}
              {/* 3-PILLAR CLINICAL PHILOSOPHY (STAGGER CONTAINER)        */}
              {/* ======================================================= */}
              <div className="pt-6 border-t border-border/60">
                <FadeIn delay={0.2}>
                  <Badge
                    variant="secondary"
                    className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10 mb-3"
                  >
                    Clinical Philosophy
                  </Badge>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Our Guiding Clinical Approach
                  </h3>
                </FadeIn>

                <StaggerContainer className="mt-6 flex flex-col gap-4">
                  {/* Pillar 1 */}
                  <StaggerItem>
                    <HoverLiftCard>
                      <Card className="border-border border-l-4 border-l-primary bg-card p-4 shadow-xs">
                        <div className="flex items-start gap-4">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <HeartHandshake className="size-6" />
                          </div>
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-primary">
                              Pillar 01
                            </span>
                            <h4 className="font-serif text-lg font-bold text-foreground mt-0.5">
                              Listen Without Dismissal
                            </h4>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                              Chronic pelvic pain and heavy bleeding are never
                              brushed off as &lsquo;just bad periods.&rsquo;
                              Every symptom deserves a thorough root-cause
                              evaluation.
                            </p>
                          </div>
                        </div>
                      </Card>
                    </HoverLiftCard>
                  </StaggerItem>

                  {/* Pillar 2 */}
                  <StaggerItem>
                    <HoverLiftCard>
                      <Card className="border-border border-l-4 border-l-primary/70 bg-card p-4 shadow-xs">
                        <div className="flex items-start gap-4">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <ShieldCheck className="size-6" />
                          </div>
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-primary">
                              Pillar 02
                            </span>
                            <h4 className="font-serif text-lg font-bold text-foreground mt-0.5">
                              Conservative First, Surgical When Necessary
                            </h4>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                              Not every condition requires the operating room.
                              Whenever safe and effective, we begin with targeted
                              medical management before recommending surgery.
                            </p>
                          </div>
                        </div>
                      </Card>
                    </HoverLiftCard>
                  </StaggerItem>

                  {/* Pillar 3 */}
                  <StaggerItem>
                    <HoverLiftCard>
                      <Card className="border-border border-l-4 border-l-teal bg-card p-4 shadow-xs">
                        <div className="flex items-start gap-4">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                            <Activity className="size-6" />
                          </div>
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-teal">
                              Pillar 03
                            </span>
                            <h4 className="font-serif text-lg font-bold text-foreground mt-0.5">
                              Precision Keyhole Technique
                            </h4>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                              When surgery is indicated, minimally invasive
                              laparoscopy ensures maximum tissue preservation,
                              minimal blood loss, and rapid recovery.
                            </p>
                          </div>
                        </div>
                      </Card>
                    </HoverLiftCard>
                  </StaggerItem>
                </StaggerContainer>
              </div>

              {/* ======================================================= */}
              {/* VERTICAL TIMELINE FOR CREDENTIALS                       */}
              {/* ======================================================= */}
              <div className="pt-6 border-t border-border/60">
                <FadeIn delay={0.2}>
                  <Badge
                    variant="secondary"
                    className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10 mb-3"
                  >
                    Academic Background
                  </Badge>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Medical Credentials &amp; Training Timeline
                  </h3>
                </FadeIn>

                <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/20 space-y-8">
                  {/* Timeline Item 1 */}
                  <FadeIn delay={0.1} className="relative">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1 size-5 rounded-full bg-primary border-4 border-white shadow-xs" />
                    <div className="rounded-2xl border border-border/80 bg-white/90 p-4 shadow-xs">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="size-4 text-primary" />
                        <span className="text-xs font-semibold text-primary uppercase">Medical Degree</span>
                      </div>
                      <h4 className="font-serif text-base font-bold text-foreground mt-1">
                        MBBS — Bachelor of Medicine &amp; Bachelor of Surgery
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Renowned Medical University, Chennai
                      </p>
                    </div>
                  </FadeIn>

                  {/* Timeline Item 2 */}
                  <FadeIn delay={0.2} className="relative">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1 size-5 rounded-full bg-primary border-4 border-white shadow-xs" />
                    <div className="rounded-2xl border border-border/80 bg-white/90 p-4 shadow-xs">
                      <div className="flex items-center gap-2">
                        <Award className="size-4 text-primary" />
                        <span className="text-xs font-semibold text-primary uppercase">Postgraduate Specialization</span>
                      </div>
                      <h4 className="font-serif text-base font-bold text-foreground mt-1">
                        MS in Obstetrics &amp; Gynecology (OBG)
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Premier Post-Graduate Institute of Obstetrics &amp; Gynecology
                      </p>
                    </div>
                  </FadeIn>

                  {/* Timeline Item 3 */}
                  <FadeIn delay={0.3} className="relative">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1 size-5 rounded-full bg-teal border-4 border-white shadow-xs" />
                    <div className="rounded-2xl border border-border/80 bg-white/90 p-4 shadow-xs">
                      <div className="flex items-center gap-2">
                        <Sparkles className="size-4 text-teal" />
                        <span className="text-xs font-semibold text-teal uppercase">Surgical Fellowship</span>
                      </div>
                      <h4 className="font-serif text-base font-bold text-foreground mt-1">
                        Fellowship in Minimal Access &amp; Advanced Laparoscopy (FMAS)
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        World Association of Laparoscopic Surgeons
                      </p>
                    </div>
                  </FadeIn>

                  {/* Timeline Item 4 */}
                  <FadeIn delay={0.4} className="relative">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1 size-5 rounded-full bg-teal border-4 border-white shadow-xs" />
                    <div className="rounded-2xl border border-border/80 bg-white/90 p-4 shadow-xs">
                      <div className="flex items-center gap-2">
                        <Activity className="size-4 text-teal" />
                        <span className="text-xs font-semibold text-teal uppercase">Subspecialty Training</span>
                      </div>
                      <h4 className="font-serif text-base font-bold text-foreground mt-1">
                        Specialized Training in Deep Infiltrating Endometriosis Excision
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Pelvic Pain &amp; Advanced Excision Center
                      </p>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FINAL CONSULTATION CTA BANNER                             */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-8 sm:p-12 lg:p-14 shadow-sm">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="flex flex-col gap-3 lg:col-span-8">
                <Badge
                  variant="secondary"
                  className="w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10"
                >
                  In-Person &amp; Video Consultations
                </Badge>
                <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Ready to Discuss Your Symptoms or Birthing Plan?
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base max-w-2xl">
                  Dr. Hema offers detailed, private consultations to review your
                  previous scans, discuss painful period symptoms, or structure your
                  upcoming pregnancy journey.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
                <Link
                  href="/contact"
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "w-full justify-center gap-2 shadow-md hover:shadow-lg font-semibold bg-primary text-white hover:bg-primary/90",
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
                  <span>Contact via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
