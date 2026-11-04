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
  Baby,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
  CalendarCheck,
  Phone,
  Zap,
  Activity,
  AlertCircle,
  Clock,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Obstetrics, High-Risk Pregnancy & Painless Labour | Hema Clinic",
  description:
    "Compassionate maternity care, high-risk pregnancy surveillance, normal delivery support, and painless epidural labour with Dr. Hema at Hema Clinic.",
};

export default function ObstetricsPage() {
  const whatsappUrl = getWhatsAppAppointmentUrl(
    "Hello Dr. Hema, I would like to book an obstetrics / pregnancy consultation."
  );

  const highRiskConditions = [
    "Gestational Diabetes Mellitus (GDM)",
    "Thyroid Disorders in Pregnancy",
    "Pregnancy-Induced Hypertension (PIH) & Preeclampsia",
    "Twin or Multiple Pregnancies",
    "Previous Cesarean Section & VBAC Evaluation",
    "Recurrent Pregnancy Loss or Cervical Insufficiency",
    "Placenta Previa & Fetal Growth Restriction (IUGR)",
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
              className="rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10"
            >
              Department of Obstetrics
            </Badge>

            <h1 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-5xl leading-[1.15]">
              Safe, Supported, and{" "}
              <span className="text-primary italic font-serif">
                Joyful Motherhood
              </span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Every pregnancy is unique. Whether yours is a smooth first-time
              journey or requires close medical supervision, Hema Clinic
              provides personalized care from your first positive test to
              postnatal recovery.
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
                <span>Book Pregnancy Consultation</span>
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
                <span>WhatsApp Appointment</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: CORE OBSTETRIC SERVICES (SERVICES 1 - 3)       */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Service 1: Routine Pregnancy Care */}
          <Card className="flex flex-col justify-between border-border border-t-4 border-t-primary bg-card shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                <Baby className="size-6" />
              </div>
              <Badge
                variant="secondary"
                className="w-fit text-[11px] font-semibold text-primary border border-primary/20 bg-primary/10"
              >
                Service 01
              </Badge>
              <CardTitle className="font-serif text-xl font-bold text-foreground">
                Routine Pregnancy Care (Antenatal Care)
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                Structured trimester-by-trimester care designed to track your
                baby&apos;s development and keep you feeling confident and
                healthy throughout pregnancy.
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-3 pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                What Is Included:
              </p>
              <ul className="flex flex-col gap-2.5 text-xs text-foreground/90">
                {[
                  "Pre-conception counseling and early viability assessments",
                  "Trimester-wise anomaly, growth, and Doppler ultrasound tracking",
                  "Customized prenatal nutrition, iron/calcium supplementation, and safe exercise guidance",
                  "Third-trimester birth preparation and breastfeeding readiness",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-primary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Service 2: High-Risk Pregnancy Management */}
          <Card className="flex flex-col justify-between border-border border-t-4 border-t-primary/80 bg-card shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                <ShieldCheck className="size-6" />
              </div>
              <Badge
                variant="secondary"
                className="w-fit text-[11px] font-semibold text-primary border border-primary/20 bg-primary/10"
              >
                Service 02
              </Badge>
              <CardTitle className="font-serif text-xl font-bold text-foreground">
                High-Risk Pregnancy Management
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                A high-risk diagnosis does not mean you cannot have a safe,
                healthy delivery—it simply means you and your baby need
                proactive, closer surveillance.
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-3 pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Conditions We Manage:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {highRiskConditions.map((cond, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="text-[11px] font-medium border-border/80 bg-secondary/40 text-foreground"
                  >
                    {cond}
                  </Badge>
                ))}
              </div>
              <div className="mt-2 rounded-lg border border-border/70 bg-secondary/20 p-2.5 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Our Protocol: </span>
                Frequent maternal-fetal monitoring, multidisciplinary
                coordination with endocrinologists and neonatologists, and
                carefully timed delivery planning.
              </div>
            </CardContent>
          </Card>

          {/* Service 3: Labour & Delivery Care */}
          <Card className="flex flex-col justify-between border-border border-t-4 border-t-primary/60 bg-card shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                <HeartHandshake className="size-6" />
              </div>
              <Badge
                variant="secondary"
                className="w-fit text-[11px] font-semibold text-primary border border-primary/20 bg-primary/10"
              >
                Service 03
              </Badge>
              <CardTitle className="font-serif text-xl font-bold text-foreground">
                Labour &amp; Delivery Care
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                Calm, evidence-based intrapartum care in a fully equipped
                birthing suite with continuous fetal heart monitoring.
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-3 pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Key Birthing Highlights:
              </p>
              <ul className="flex flex-col gap-2.5 text-xs text-foreground/90">
                {[
                  "Active support for Normal Vaginal Delivery with upright birthing positions",
                  "Carefully monitored VBAC (Vaginal Birth After Cesarean) for eligible mothers",
                  "Gentle, family-centered planned and emergency Cesarean sections when medically required",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-primary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-2 rounded-lg border border-primary/20 bg-primary/5 p-2.5 text-xs text-foreground">
                <span className="font-semibold text-primary">24/7 Readiness: </span>
                Equipped with emergency neonatal resuscitation and maternal high-dependency backup.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SERVICE 4: FEATURED SPOTLIGHT CARD — PAINLESS LABOUR      */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border-2 border-primary/30 bg-gradient-to-b from-[#FFFDFB] via-[#FCF8F5] to-[#F9EFEA] p-6 sm:p-10 lg:p-12 shadow-md">
          {/* Top Header */}
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10"
              >
                Comfort in Childbirth
              </Badge>
              <Badge className="bg-primary text-white text-[11px] font-semibold">
                Featured Specialty
              </Badge>
            </div>

            <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
              Experience the Joy of Birth Without Overwhelming Pain
            </h2>

            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Painless labour uses targeted epidural analgesia administered by
              an experienced obstetric anesthesiologist during active labour. It
              blocks pain signals from the lower spine while allowing you to
              remain fully awake, alert, and able to push effectively when it is
              time to meet your baby.
            </p>
          </div>

          {/* Key Benefits 4-Card Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Benefit 1 */}
            <Card className="border-border bg-card p-2 shadow-2xs hover:shadow-sm transition-shadow">
              <CardHeader className="gap-2">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Zap className="size-5" />
                </div>
                <CardTitle className="font-serif text-base font-bold text-foreground">
                  Conserves Maternal Energy
                </CardTitle>
                <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                  Prevents exhaustion during prolonged labour so you have
                  strength for delivery and holding your newborn.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Benefit 2 */}
            <Card className="border-border bg-card p-2 shadow-2xs hover:shadow-sm transition-shadow">
              <CardHeader className="gap-2">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Heart className="size-5" />
                </div>
                <CardTitle className="font-serif text-base font-bold text-foreground">
                  Lowers Stress Hormones
                </CardTitle>
                <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                  Promotes better blood flow and maternal oxygen delivery to
                  your baby during strong contractions.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Benefit 3 */}
            <Card className="border-border bg-card p-2 shadow-2xs hover:shadow-sm transition-shadow">
              <CardHeader className="gap-2">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Activity className="size-5" />
                </div>
                <CardTitle className="font-serif text-base font-bold text-foreground">
                  Adjustable &amp; Safe
                </CardTitle>
                <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                  Dosage can be fine-tuned throughout labour and does not make
                  your baby drowsy or affect Apgar scores.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Benefit 4 (Myth Fact-Check) */}
            <Card className="border-border bg-card p-2 shadow-2xs hover:shadow-sm transition-shadow">
              <CardHeader className="gap-2">
                <div className="flex size-10 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  <Sparkles className="size-5" />
                </div>
                <CardTitle className="font-serif text-base font-bold text-foreground">
                  Myth Fact-Check
                </CardTitle>
                <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                  Modern epidurals do not cause permanent backache and do not
                  automatically lead to a C-section.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Detailed Myth vs Fact Callout */}
          <div className="mt-8 rounded-2xl border border-primary/20 bg-background/80 p-5 shadow-xs">
            <div className="flex items-start gap-3">
              <AlertCircle className="size-5 shrink-0 text-primary mt-0.5" />
              <div className="flex flex-col gap-1.5">
                <p className="font-serif font-bold text-foreground text-sm">
                  Dr. Hema&apos;s Clinical Perspective on Epidurals
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  &ldquo;Labour pain can be intense, but every mother has the
                  right to choose pain relief. We use modern, ultra-low dose
                  walking epidural regimens that allow you to maintain leg
                  strength and sensory awareness while eliminating debilitating
                  pain. It transforms the delivery room into a calm, joyful
                  space for you and your family.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: APPOINTMENT CTA BANNER                         */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-secondary/40 border border-border p-8 sm:p-12 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="flex flex-col gap-3 lg:col-span-8">
              <Badge
                variant="secondary"
                className="w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10"
              >
                Antenatal Consultation
              </Badge>
              <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Start Your Antenatal Care with Dr. Hema
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base max-w-2xl">
                Have you recently received a positive pregnancy test? Book your
                first trimester ultrasound scan and pre-conception / antenatal
                counseling visit today.
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                <span className="flex items-center gap-1.5">
                  <Clock className="size-4 text-primary" />
                  {siteConfig.timings}
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
                  className:
                    "w-full justify-center gap-2 border-primary/30 text-primary hover:bg-primary/5 text-base font-medium",
                })}
              >
                <Phone className="size-4" />
                <span>Quick WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
