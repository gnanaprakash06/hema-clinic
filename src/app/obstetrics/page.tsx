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
import {
  Card,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  FadeIn,
  HoverLiftCard,
} from "@/components/ui/motion-primitives";
import {
  HeartHandshake,
  Sparkles,
  CheckCircle2,
  CalendarCheck,
  Phone,
  Zap,
  Activity,
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
      {/* SECTION 1: EDITORIAL PAGE HEADER                          */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#F4E8E6] via-[#FAF8F5] to-[#FAF8F5] pt-10 pb-16 md:pt-16 md:pb-24 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto flex max-w-3xl flex-col items-center text-center">
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
                  className:
                    "gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all font-semibold bg-primary text-white hover:bg-primary/90",
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
          </FadeIn>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: ZIG-ZAG EDITORIAL MATERNITY SERVICES           */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 md:gap-24">
          {/* Service 1: Routine Pregnancy Care (Text Left, Image Right) */}
          <FadeIn>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="flex flex-col gap-4 lg:col-span-7">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="w-fit text-xs font-semibold text-primary border border-primary/20 bg-primary/10"
                  >
                    Service 01
                  </Badge>
                  <span className="text-xs text-muted-foreground">Antenatal Care</span>
                </div>

                <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Routine Pregnancy Care (Antenatal Care)
                </h2>

                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Structured trimester-by-trimester care designed to track your
                  baby&apos;s development and keep you feeling confident and
                  healthy throughout pregnancy.
                </p>

                <div className="rounded-2xl border border-border/80 bg-white/80 p-5 shadow-xs">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    What Is Included:
                  </p>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs sm:text-sm text-foreground">
                    {[
                      "Pre-conception counseling and early viability assessments",
                      "Trimester-wise anomaly, growth, and Doppler ultrasound tracking",
                      "Customized prenatal nutrition, iron/calcium supplementation, and safe exercise guidance",
                      "Third-trimester birth preparation and breastfeeding readiness",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 shrink-0 text-primary mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5">
                <HoverLiftCard>
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:h-[380px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-secondary/40 group">
                    <Image
                      src={clinicImages.maternityCare}
                      alt="Routine Pregnancy Scans & Maternal Care at Hema Clinic"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                      <p className="font-serif font-bold text-sm">Gentle Antenatal Guidance</p>
                      <p className="text-[11px] text-white/80">Every ultrasound and test clearly explained.</p>
                    </div>
                  </div>
                </HoverLiftCard>
              </div>
            </div>
          </FadeIn>

          {/* Service 2: High-Risk Pregnancy Management (Zig-Zag: Image Left, Text Right) */}
          <FadeIn>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="order-2 lg:order-1 lg:col-span-5">
                <HoverLiftCard>
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:h-[380px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-secondary/40 group">
                    <Image
                      src={clinicImages.highRiskPregnancy}
                      alt="High-Risk Pregnancy Monitoring & Ultrasound"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                      <p className="font-serif font-bold text-sm">Specialized Maternal-Fetal Surveillance</p>
                      <p className="text-[11px] text-white/80">Proactive surveillance for mother &amp; baby safety.</p>
                    </div>
                  </div>
                </HoverLiftCard>
              </div>

              <div className="order-1 lg:order-2 flex flex-col gap-4 lg:col-span-7">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="w-fit text-xs font-semibold text-primary border border-primary/20 bg-primary/10"
                  >
                    Service 02
                  </Badge>
                  <span className="text-xs text-muted-foreground">Advanced Surveillance</span>
                </div>

                <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
                  High-Risk Pregnancy Management
                </h2>

                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  A high-risk diagnosis does not mean you cannot have a safe,
                  healthy delivery—it simply means you and your baby need
                  proactive, closer surveillance.
                </p>

                <div className="flex flex-col gap-3 rounded-2xl border border-border/80 bg-white/80 p-5 shadow-xs">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Conditions We Proactively Manage:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {highRiskConditions.map((cond, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs font-medium border-border/90 bg-secondary/40 text-foreground py-1 px-2.5"
                      >
                        {cond}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-2 rounded-xl border border-primary/20 bg-primary/5 p-3 text-xs text-foreground">
                    <span className="font-semibold text-primary">Our Protocol: </span>
                    Frequent maternal-fetal monitoring, multidisciplinary coordination
                    with endocrinologists and neonatologists, and carefully timed
                    delivery planning.
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Service 3: Labour & Delivery Care */}
          <FadeIn>
            <Card className="border-border border-t-4 border-t-primary bg-card p-6 shadow-md">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
                <div className="md:col-span-7 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="w-fit text-xs font-semibold text-primary border border-primary/20 bg-primary/10"
                    >
                      Service 03
                    </Badge>
                    <span className="text-xs text-muted-foreground">Intrapartum Care</span>
                  </div>
                  <CardTitle className="font-serif text-2xl font-bold text-foreground">
                    Labour &amp; Delivery Care
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    Calm, evidence-based intrapartum care in a fully equipped
                    birthing suite with continuous fetal heart monitoring.
                  </CardDescription>

                  <ul className="flex flex-col gap-2.5 pt-2 text-xs sm:text-sm text-foreground">
                    {[
                      "Active support for Normal Vaginal Delivery with upright birthing positions",
                      "Carefully monitored VBAC (Vaginal Birth After Cesarean) for eligible mothers",
                      "Gentle, family-centered planned and emergency Cesarean sections when medically required",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 shrink-0 text-primary mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-5 flex flex-col gap-3">
                  <div className="rounded-2xl border border-primary/20 bg-secondary/40 p-4 flex flex-col gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                      <HeartHandshake className="size-4" />
                      <span>24/7 Obstetric &amp; NICU Readiness</span>
                    </div>
                    <p>
                      Supported by round-the-clock neonatal resuscitation teams,
                      pediatricians, and blood-bank partnerships for maximum safety.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className={buttonVariants({
                      className: "w-full justify-center gap-2 font-semibold bg-primary text-white",
                    })}
                  >
                    <CalendarCheck className="size-4" />
                    <span>Plan Your Birth with Dr. Hema</span>
                  </Link>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SERVICE 4: PAINLESS LABOUR SPOTLIGHT WITH CURATED IMAGE   */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-[#F4E8E6] via-white to-[#F4E8E6] p-6 sm:p-10 lg:p-12 shadow-xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Framed Painless Labour Image */}
              <div className="lg:col-span-5">
                <HoverLiftCard>
                  <div className="relative aspect-[4/3] sm:aspect-[1/1] lg:h-[440px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-secondary/50 group">
                    <Image
                      src={clinicImages.painlessLabour}
                      alt="Comfort and Painless Delivery Experience at Hema Clinic"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-primary text-white shadow-md text-xs font-semibold">
                        Comfort in Childbirth
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                      <p className="font-serif font-bold text-base">Gentle Epidural Analgesia</p>
                      <p className="text-xs text-white/90">Pain relief without losing sensory pushing control.</p>
                    </div>
                  </div>
                </HoverLiftCard>
              </div>

              {/* Right Column: Benefits Grid & Clinical Myth-Check */}
              <div className="flex flex-col gap-6 lg:col-span-7">
                <div className="flex flex-col gap-2">
                  <Badge
                    variant="secondary"
                    className="w-fit rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10"
                  >
                    Featured Specialty
                  </Badge>

                  <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Experience the Joy of Birth Without Overwhelming Pain
                  </h2>

                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Painless labour uses targeted epidural analgesia administered
                    by an experienced obstetric anesthesiologist during active
                    labour. It blocks pain signals from the lower spine while
                    allowing you to remain fully awake, alert, and able to push
                    effectively when it is time to meet your baby.
                  </p>
                </div>

                {/* 4 Benefit Cards Grid with HoverLift */}
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  {/* Benefit 1 */}
                  <HoverLiftCard>
                    <div className="rounded-2xl border border-border/80 bg-white/90 p-4 shadow-2xs h-full">
                      <div className="flex items-center gap-2 mb-1">
                        <Zap className="size-4 text-primary" />
                        <h3 className="font-serif text-sm font-bold text-foreground">
                          Conserves Maternal Energy
                        </h3>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Prevents exhaustion during prolonged labour so you have
                        strength for delivery.
                      </p>
                    </div>
                  </HoverLiftCard>

                  {/* Benefit 2 */}
                  <HoverLiftCard>
                    <div className="rounded-2xl border border-border/80 bg-white/90 p-4 shadow-2xs h-full">
                      <div className="flex items-center gap-2 mb-1">
                        <Heart className="size-4 text-primary" />
                        <h3 className="font-serif text-sm font-bold text-foreground">
                          Lowers Stress Hormones
                        </h3>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Promotes better blood flow and oxygen delivery to your
                        baby during contractions.
                      </p>
                    </div>
                  </HoverLiftCard>

                  {/* Benefit 3 */}
                  <HoverLiftCard>
                    <div className="rounded-2xl border border-border/80 bg-white/90 p-4 shadow-2xs h-full">
                      <div className="flex items-center gap-2 mb-1">
                        <Activity className="size-4 text-primary" />
                        <h3 className="font-serif text-sm font-bold text-foreground">
                          Adjustable &amp; Safe
                        </h3>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Dosage can be fine-tuned throughout labour and does not
                        make your baby drowsy.
                      </p>
                    </div>
                  </HoverLiftCard>

                  {/* Benefit 4 */}
                  <HoverLiftCard>
                    <div className="rounded-2xl border border-border/80 bg-white/90 p-4 shadow-2xs h-full">
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="size-4 text-teal" />
                        <h3 className="font-serif text-sm font-bold text-foreground">
                          Myth Fact-Check
                        </h3>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Modern epidurals do not cause permanent backache and do
                        not automatically lead to a C-section.
                      </p>
                    </div>
                  </HoverLiftCard>
                </div>

                {/* Doctor Note Callout */}
                <div className="rounded-2xl border border-primary/20 bg-white/80 p-4 text-xs text-muted-foreground">
                  <span className="font-semibold text-primary">Dr. Hema&apos;s Advice: </span>
                  &ldquo;A birth plan with epidural pain relief allows mothers to
                  relax, rest, and celebrate their baby&apos;s arrival with energy
                  and presence.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ========================================================= */}
      {/* FINAL CONSULTATION CTA BANNER                             */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
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
                  <span>Quick WhatsApp Consultation</span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
