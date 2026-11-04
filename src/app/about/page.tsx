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
import {
  Stethoscope,
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
      {/* SECTION 1: HERO & DOCTOR BIOGRAPHY                        */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/40 via-background to-background pt-12 md:pt-20 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Bio Column */}
            <div className="flex flex-col items-start gap-6 lg:col-span-7">
              <Badge
                variant="secondary"
                className="rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10"
              >
                Meet Your Specialist
              </Badge>

              <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-5xl leading-[1.15]">
                Dedicated to Every Stage of a{" "}
                <span className="text-primary italic font-serif">
                  Woman&apos;s Health Journey
                </span>
              </h1>

              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Dr. Hema is a specialist Obstetrician, Gynecologist, and Minimal
                Access Laparoscopic Surgeon known for combining warm,
                reassuring maternity support with high-precision surgical care
                for complex gynecological conditions.
              </p>

              <p className="text-sm leading-relaxed text-muted-foreground">
                With comprehensive clinical training in advanced keyhole surgery
                and high-risk pregnancy protocols, she provides personalized,
                evidence-based healthcare that respects each patient&apos;s
                unique body, birthing wishes, and long-term wellness goals.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className={buttonVariants({
                    size: "lg",
                    className: "gap-2 shadow-md text-base font-semibold",
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
            </div>

            {/* Right Profile Summary Card */}
            <div className="lg:col-span-5">
              <Card className="border-border bg-card p-6 shadow-xl">
                <div className="flex flex-col gap-6">
                  {/* Doctor Avatar & Headline */}
                  <div className="flex items-center gap-4 border-b border-border/60 pb-5">
                    <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 shadow-xs">
                      <Stethoscope className="size-8" />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl font-bold text-foreground">
                        {siteConfig.doctorName}
                      </h2>
                      <p className="text-xs font-semibold text-primary">
                        {siteConfig.designation}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {siteConfig.credentials}
                      </p>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-border/70 bg-secondary/30 p-3 text-center">
                      <p className="font-serif text-2xl font-bold text-primary">
                        15+
                      </p>
                      <p className="text-[11px] font-medium text-muted-foreground">
                        Years of Experience
                      </p>
                    </div>
                    <div className="rounded-xl border border-border/70 bg-secondary/30 p-3 text-center">
                      <p className="font-serif text-2xl font-bold text-teal">
                        2,500+
                      </p>
                      <p className="text-[11px] font-medium text-muted-foreground">
                        Safe Deliveries Supported
                      </p>
                    </div>
                  </div>

                  {/* Practice Details */}
                  <div className="flex flex-col gap-2.5 text-xs text-muted-foreground">
                    <div className="flex items-start gap-2.5">
                      <Building className="size-4 shrink-0 text-primary mt-0.5" />
                      <span>{siteConfig.clinicName}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <MapPin className="size-4 shrink-0 text-primary mt-0.5" />
                      <span>{siteConfig.addressFull}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock className="size-4 shrink-0 text-primary mt-0.5" />
                      <span>{siteConfig.timings}</span>
                    </div>
                  </div>

                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-3 text-xs text-foreground">
                    <span className="font-semibold text-primary">
                      Emergency Coverage:{" "}
                    </span>
                    {siteConfig.emergencyNote}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: 3-PILLAR CLINICAL PHILOSOPHY                   */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <Badge
            variant="secondary"
            className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10"
          >
            Clinical Philosophy
          </Badge>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Guiding Clinical Approach
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Three core principles ensure every patient receives empathetic,
            accurate, and scientifically grounded care.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Principle 1 */}
          <Card className="flex flex-col justify-between border-border border-t-4 border-t-primary bg-card p-2 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                <HeartHandshake className="size-6" />
              </div>
              <Badge
                variant="secondary"
                className="w-fit text-[11px] font-semibold text-primary border border-primary/20 bg-primary/10"
              >
                Pillar 01
              </Badge>
              <CardTitle className="font-serif text-xl font-bold text-foreground">
                Listen Without Dismissal
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                Chronic pelvic pain and heavy bleeding are never brushed off as
                &lsquo;just bad periods.&rsquo; Every symptom deserves a thorough
                root-cause evaluation.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="rounded-lg bg-secondary/40 p-3 text-xs text-muted-foreground">
                We dedicate unrushed consultation time to take your full health
                history, review diagnostic scans, and validate your experiences.
              </div>
            </CardContent>
          </Card>

          {/* Principle 2 */}
          <Card className="flex flex-col justify-between border-border border-t-4 border-t-primary/70 bg-card p-2 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                <ShieldCheck className="size-6" />
              </div>
              <Badge
                variant="secondary"
                className="w-fit text-[11px] font-semibold text-primary border border-primary/20 bg-primary/10"
              >
                Pillar 02
              </Badge>
              <CardTitle className="font-serif text-xl font-bold text-foreground">
                Conservative First, Surgical When Necessary
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                Not every condition requires the operating room. Whenever safe
                and effective, we begin with targeted medical management before
                recommending surgery.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="rounded-lg bg-secondary/40 p-3 text-xs text-muted-foreground">
                Non-invasive symptom relief, lifestyle adjustments, and hormonal
                therapies are prioritized to support your fertility and daily comfort.
              </div>
            </CardContent>
          </Card>

          {/* Principle 3 */}
          <Card className="flex flex-col justify-between border-border border-t-4 border-t-teal bg-card p-2 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-teal/10 text-teal border border-teal/20">
                <Activity className="size-6" />
              </div>
              <Badge
                variant="secondary"
                className="w-fit text-[11px] font-semibold text-teal border border-teal/20 bg-teal/10"
              >
                Pillar 03
              </Badge>
              <CardTitle className="font-serif text-xl font-bold text-foreground">
                Precision Keyhole Technique
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                When surgery is indicated, minimally invasive laparoscopy
                ensures maximum tissue preservation, minimal blood loss, and
                rapid recovery.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="rounded-lg bg-teal/5 p-3 text-xs text-muted-foreground">
                Micro-incisions (0.5 cm) minimize abdominal trauma, allowing
                most patients to return home within 24 to 48 hours.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: CREDENTIALS & SPECIALIZED TRAINING             */}
      {/* ========================================================= */}
      <section className="bg-secondary/30 py-16 md:py-20 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <Badge
              variant="secondary"
              className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10"
            >
              Academic Background
            </Badge>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Medical Credentials &amp; Surgical Certifications
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Formal qualifications and international fellowships in obstetrics,
              gynecological laparoscopy, and deep infiltrating endometriosis excision.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Qualification 1 */}
            <Card className="border-border bg-card shadow-xs">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <GraduationCap className="size-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <Badge
                    variant="outline"
                    className="w-fit text-[11px] font-semibold text-primary border-primary/30"
                  >
                    Medical Degree
                  </Badge>
                  <CardTitle className="font-serif text-lg font-bold text-foreground">
                    MBBS — Bachelor of Medicine &amp; Bachelor of Surgery
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground">
                    Renowned Medical University, Chennai • Comprehensive clinical training in general medicine, surgery, and preventive care.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            {/* Qualification 2 */}
            <Card className="border-border bg-card shadow-xs">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <Award className="size-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <Badge
                    variant="outline"
                    className="w-fit text-[11px] font-semibold text-primary border-primary/30"
                  >
                    Postgraduate Specialization
                  </Badge>
                  <CardTitle className="font-serif text-lg font-bold text-foreground">
                    MS in Obstetrics &amp; Gynecology (OBG)
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground">
                    Premier Post-Graduate Institute of Obstetrics &amp; Gynecology • High-risk labour management, normal delivery protocols &amp; obstetric emergencies.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            {/* Qualification 3 */}
            <Card className="border-border bg-card shadow-xs">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal border border-teal/20">
                  <Sparkles className="size-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <Badge
                    variant="outline"
                    className="w-fit text-[11px] font-semibold text-teal border-teal/30"
                  >
                    Surgical Fellowship
                  </Badge>
                  <CardTitle className="font-serif text-lg font-bold text-foreground">
                    Fellowship in Minimal Access &amp; Advanced Laparoscopy (FMAS)
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground">
                    World Association of Laparoscopic Surgeons • Micro-surgical keyhole methods for cystectomies, myomectomies &amp; hysterectomies.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            {/* Qualification 4 */}
            <Card className="border-border bg-card shadow-xs">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal border border-teal/20">
                  <Activity className="size-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <Badge
                    variant="outline"
                    className="w-fit text-[11px] font-semibold text-teal border-teal/30"
                  >
                    Subspecialty Training
                  </Badge>
                  <CardTitle className="font-serif text-lg font-bold text-foreground">
                    Specialized Training in Deep Infiltrating Endometriosis Excision
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground">
                    Pelvic Pain &amp; Advanced Excision Center • Mastery in radical laparoscopic excision of deep pelvic lesions and nerve-sparing protocols.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: CALL TO ACTION BANNER                          */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
      </section>
    </div>
  );
}
