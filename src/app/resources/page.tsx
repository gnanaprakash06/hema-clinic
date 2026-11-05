import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppAppointmentUrl } from "@/data/siteConfig";
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
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  FadeIn,
  HoverLiftCard,
} from "@/components/ui/motion-primitives";
import {
  Baby,
  Activity,
  ShieldCheck,
  Sparkles,
  Zap,
  CalendarCheck,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Patient FAQs: Painless Delivery, Pregnancy & Endometriosis | Hema Clinic",
  description:
    "Frequently asked questions regarding painless labour, epidural delivery, high-risk pregnancy monitoring, and laparoscopic endometriosis excision surgery at Hema Clinic.",
};

export default function ResourcesPage() {
  const whatsappUrl = getWhatsAppAppointmentUrl(
    "Hello Dr. Hema, I have a question regarding an appointment / procedure."
  );

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
              Patient Resources &amp; Guides
            </Badge>

            <h1 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-5xl leading-[1.15]">
              Empowering You with{" "}
              <span className="text-primary italic font-serif">
                Evidence-Based Answers
              </span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Clear, clinical, and compassionate guidance to help you make
              informed decisions about your pregnancy journey, birthing options,
              and advanced laparoscopic treatments.
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
                <span>Ask Dr. Hema a Question</span>
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
                <span>Quick WhatsApp Help</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: QUICK PATIENT GUIDES (3-CARD GRID)            */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <Badge
            variant="secondary"
            className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10"
          >
            Clinical Handbooks
          </Badge>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Quick Patient Guides
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Essential clinical takeaways on the three most common procedures and
            care pathways at Hema Clinic.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Guide 1: Epidural Safety */}
          <FadeIn delay={0.1}>
            <HoverLiftCard className="h-full">
              <Card className="flex h-full flex-col justify-between border-border border-t-4 border-t-primary bg-card p-4 shadow-sm hover:shadow-md transition-shadow rounded-3xl">
                <CardHeader className="gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <Zap className="size-5" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className="w-fit text-[11px] font-semibold text-primary border border-primary/20 bg-primary/10"
                    >
                      Maternity Guide
                    </Badge>
                    <span className="text-xs text-muted-foreground">Guide 01</span>
                  </div>
                  <CardTitle className="font-serif text-xl font-bold text-foreground">
                    Epidural Safety &amp; Painless Labour
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    Targeted epidural analgesia relieves uterine contraction pain
                    while preserving maternal pelvic sensation and pushing stamina.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2 pt-2">
                  <div className="rounded-2xl bg-secondary/40 p-4 text-xs text-muted-foreground flex flex-col gap-2">
                    <p className="font-semibold text-foreground">Key Clinical Takeaways:</p>
                    <p>• Mobile low-dose formulations allow active pushing.</p>
                    <p>• Does not cause chronic, long-term backache.</p>
                    <p>• Promotes better oxygenation to the baby by lowering stress hormones.</p>
                  </div>
                </CardContent>
              </Card>
            </HoverLiftCard>
          </FadeIn>

          {/* Guide 2: High-Risk Pregnancy Monitoring */}
          <FadeIn delay={0.2}>
            <HoverLiftCard className="h-full">
              <Card className="flex h-full flex-col justify-between border-border border-t-4 border-t-primary/70 bg-card p-4 shadow-sm hover:shadow-md transition-shadow rounded-3xl">
                <CardHeader className="gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <ShieldCheck className="size-5" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className="w-fit text-[11px] font-semibold text-primary border border-primary/20 bg-primary/10"
                    >
                      High-Risk Protocol
                    </Badge>
                    <span className="text-xs text-muted-foreground">Guide 02</span>
                  </div>
                  <CardTitle className="font-serif text-xl font-bold text-foreground">
                    High-Risk Pregnancy Surveillance
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    Proactive protocols for gestational diabetes, hypertension,
                    thyroid disorders, twin gestations, and previous C-section (VBAC).
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2 pt-2">
                  <div className="rounded-2xl bg-secondary/40 p-4 text-xs text-muted-foreground flex flex-col gap-2">
                    <p className="font-semibold text-foreground">Key Clinical Takeaways:</p>
                    <p>• Multidisciplinary coordination with neonatologists &amp; endocrinologists.</p>
                    <p>• Serial Doppler ultrasound tracking for fetal growth safety.</p>
                    <p>• Safe vaginal delivery remains achievable with proactive monitoring.</p>
                  </div>
                </CardContent>
              </Card>
            </HoverLiftCard>
          </FadeIn>

          {/* Guide 3: Excision vs. Ablation */}
          <FadeIn delay={0.3}>
            <HoverLiftCard className="h-full">
              <Card className="flex h-full flex-col justify-between border-border border-t-4 border-t-teal bg-card p-4 shadow-sm hover:shadow-md transition-shadow rounded-3xl">
                <CardHeader className="gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-teal/10 text-teal border border-teal/20">
                    <Sparkles className="size-5" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className="w-fit text-[11px] font-semibold text-teal border border-teal/20 bg-teal/10"
                    >
                      Surgical Guide
                    </Badge>
                    <span className="text-xs text-muted-foreground">Guide 03</span>
                  </div>
                  <CardTitle className="font-serif text-xl font-bold text-foreground">
                    Endometriosis: Excision vs. Ablation
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    Why root-level excision of deep pelvic lesions delivers lasting
                    relief compared to superficial surface cautery.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2 pt-2">
                  <div className="rounded-2xl bg-teal/5 p-4 text-xs text-muted-foreground flex flex-col gap-2">
                    <p className="font-semibold text-foreground">Key Clinical Takeaways:</p>
                    <p>• Dissects lesions down to healthy margins, removing deep roots.</p>
                    <p>• Significantly lower rate of repeat surgeries within 2 to 5 years.</p>
                    <p>• Preserves ovarian reserve (AMH) and restores natural pelvic anatomy.</p>
                  </div>
                </CardContent>
              </Card>
            </HoverLiftCard>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: INTERACTIVE FAQS ACCORDIONS                    */}
      {/* ========================================================= */}
      <section className="bg-secondary/25 py-16 md:py-24 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <Badge
              variant="secondary"
              className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10"
            >
              Frequently Asked Questions
            </Badge>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Doctor Answers to Common Concerns
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Select any question below to read detailed clinical explanations
              from Dr. Hema.
            </p>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 items-start">
            {/* Category 1: Pregnancy & Painless Labour FAQs */}
            <FadeIn delay={0.15}>
              <Card className="border-border bg-card p-4 sm:p-6 shadow-sm rounded-3xl">
                <CardHeader className="gap-2 border-b border-border/60 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                      <Baby className="size-5" />
                    </div>
                    <div>
                      <CardTitle className="font-serif text-xl font-bold text-foreground">
                        Pregnancy &amp; Painless Labour
                      </CardTitle>
                      <CardDescription className="text-xs text-muted-foreground">
                        Antenatal visits, epidural facts, and high-risk pregnancy.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-4">
                  <Accordion defaultValue={["preg-1"]} className="w-full">
                    {/* Q1 */}
                    <AccordionItem value="preg-1" className="border-b border-border/60 py-2">
                      <AccordionTrigger className="text-left font-serif font-semibold text-foreground text-sm hover:text-primary transition-colors">
                        When should I book my first pregnancy checkup?
                      </AccordionTrigger>
                      <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2">
                        Schedule your first antenatal visit as soon as you have a
                        positive home pregnancy test (typically around 6 to 8 weeks
                        from your last period) to confirm fetal heartbeat, dating,
                        and baseline blood work.
                      </AccordionContent>
                    </AccordionItem>

                    {/* Q2 */}
                    <AccordionItem value="preg-2" className="border-b border-border/60 py-2">
                      <AccordionTrigger className="text-left font-serif font-semibold text-foreground text-sm hover:text-primary transition-colors">
                        Will getting an epidural for painless labour slow down my delivery or cause lifelong back pain?
                      </AccordionTrigger>
                      <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2">
                        No. Modern low-dose &lsquo;walking&rsquo; or mobile epidurals
                        relieve contraction pain while keeping your pelvic muscles
                        responsive enough to push effectively. While mild soreness
                        at the injection site can last 1–2 days, clinical studies
                        confirm epidurals do not cause chronic back pain.
                      </AccordionContent>
                    </AccordionItem>

                    {/* Q3 */}
                    <AccordionItem value="preg-3" className="border-none py-2">
                      <AccordionTrigger className="text-left font-serif font-semibold text-foreground text-sm hover:text-primary transition-colors">
                        Can I still have a normal delivery if my pregnancy is labeled high-risk?
                      </AccordionTrigger>
                      <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2">
                        Yes, many women with gestational diabetes, thyroid
                        conditions, or controlled hypertension have safe vaginal
                        deliveries with close fetal monitoring and timely induction
                        when appropriate.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Category 2: Endometriosis & Laparoscopy FAQs */}
            <FadeIn delay={0.25}>
              <Card className="border-border bg-card p-4 sm:p-6 shadow-sm rounded-3xl">
                <CardHeader className="gap-2 border-b border-border/60 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-teal/10 text-teal border border-teal/20">
                      <Activity className="size-5" />
                    </div>
                    <div>
                      <CardTitle className="font-serif text-xl font-bold text-foreground">
                        Endometriosis &amp; Laparoscopy
                      </CardTitle>
                      <CardDescription className="text-xs text-muted-foreground">
                        Excision vs. ablation, recovery, and fertility care.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-4">
                  <Accordion defaultValue={["endo-1"]} className="w-full">
                    {/* Q1 */}
                    <AccordionItem value="endo-1" className="border-b border-border/60 py-2">
                      <AccordionTrigger className="text-left font-serif font-semibold text-foreground text-sm hover:text-teal transition-colors">
                        Does every patient with endometriosis need surgery right away?
                      </AccordionTrigger>
                      <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2">
                        No. Treatment depends on your symptoms, ultrasound/MRI
                        findings, and fertility goals. Many patients achieve strong
                        symptom relief with medical management first, reserving
                        laparoscopic excision for persistent pain, deep nodules, or
                        fertility optimization.
                      </AccordionContent>
                    </AccordionItem>

                    {/* Q2 */}
                    <AccordionItem value="endo-2" className="border-b border-border/60 py-2">
                      <AccordionTrigger className="text-left font-serif font-semibold text-foreground text-sm hover:text-teal transition-colors">
                        What is the difference between laparoscopic excision and ablation for endometriosis?
                      </AccordionTrigger>
                      <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2">
                        Ablation burns the surface of a lesion like trimming the
                        top of a weed, leaving the root behind. Laparoscopic
                        excision carefully removes the entire lesion down to
                        healthy tissue, offering more complete pain relief and
                        lower recurrence.
                      </AccordionContent>
                    </AccordionItem>

                    {/* Q3 */}
                    <AccordionItem value="endo-3" className="border-none py-2">
                      <AccordionTrigger className="text-left font-serif font-semibold text-foreground text-sm hover:text-teal transition-colors">
                        How soon can I return to work after laparoscopic endometriosis surgery?
                      </AccordionTrigger>
                      <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2">
                        Most patients walk the same evening, return home within 24
                        to 48 hours, and resume desk work or daily routines within 7
                        to 10 days.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: CALL TO ACTION BANNER                          */}
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
                  Have a Personal Question?
                </Badge>
                <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Every Woman&apos;s Body Deserves Individual Answers
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base max-w-2xl">
                  Online FAQs provide general guidance, but nothing replaces an
                  in-depth clinical conversation. Bring your questions and scan
                  reports to a private consultation with Dr. Hema.
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
                      "w-full justify-center gap-2 border-primary/30 text-primary hover:bg-primary/5 text-base font-medium",
                  })}
                >
                  <Phone className="size-4" />
                  <span>Message Dr. Hema</span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
