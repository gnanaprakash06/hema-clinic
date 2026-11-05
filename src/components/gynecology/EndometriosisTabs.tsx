"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Pill,
  Scissors,
  Sparkles,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Target,
} from "lucide-react";

export function EndometriosisTabs() {
  const [activeTab, setActiveTab] = React.useState<string>("medical");

  return (
    <div className="w-full">
      <Tabs
        value={activeTab}
        onValueChange={(val) => {
          if (typeof val === "string") setActiveTab(val);
        }}
        className="w-full gap-8"
      >
        {/* Navigation Tabs List */}
        <div className="flex justify-center">
          <TabsList className="grid w-full max-w-2xl grid-cols-3 h-auto p-1.5 bg-secondary/60 rounded-2xl border border-border">
            <TabsTrigger
              value="medical"
              className="flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-semibold rounded-xl transition-all data-active:bg-card data-active:text-primary data-active:shadow-sm"
            >
              <Pill className="size-4 shrink-0 text-primary" />
              <span>1. Medical Care</span>
            </TabsTrigger>
            <TabsTrigger
              value="surgical"
              className="flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-semibold rounded-xl transition-all data-active:bg-card data-active:text-teal data-active:shadow-sm"
            >
              <Scissors className="size-4 shrink-0 text-teal" />
              <span>2. Keyhole Surgery</span>
            </TabsTrigger>
            <TabsTrigger
              value="excision"
              className="flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-semibold rounded-xl transition-all data-active:bg-card data-active:text-primary data-active:shadow-sm"
            >
              <Sparkles className="size-4 shrink-0 text-primary" />
              <span>3. Excision (Gold Standard)</span>
            </TabsTrigger>
          </TabsList>
        </div>

        {/* ========================================================= */}
        {/* TAB 1: MEDICAL MANAGEMENT                                 */}
        {/* ========================================================= */}
        <TabsContent value="medical" className="mt-8 outline-none">
          <motion.div
            key="medical"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Card className="border-border bg-card p-4 sm:p-6 shadow-sm rounded-3xl">
              <CardHeader className="gap-2">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="w-fit text-xs font-semibold text-primary border border-primary/20 bg-primary/10"
                  >
                    Step 01: Non-Surgical Care
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    Conservative Symptom Suppression
                  </span>
                </div>
                <CardTitle className="font-serif text-2xl font-bold text-foreground">
                  Non-Surgical Symptom Control &amp; Hormonal Suppression
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground max-w-3xl">
                  Because estrogen fuels endometriosis growth, medical management
                  stabilizes hormone fluctuations to quiet pelvic inflammation,
                  suppress active bleeding lesions, and prevent disease
                  progression.
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-6 pt-4">
                {/* When It Is Recommended */}
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-xs sm:text-sm text-foreground">
                  <span className="font-semibold text-primary">
                    When It Is Recommended:{" "}
                  </span>
                  Ideal for mild-to-moderate symptoms, adolescents and young women
                  not immediately planning pregnancy, or as long-term maintenance
                  therapy following surgery to prevent recurrence.
                </div>

                {/* Treatment Options Grid */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Tailored Medication Protocols
                  </h4>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-secondary/30 p-4">
                      <CheckCircle2 className="size-5 shrink-0 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground text-xs sm:text-sm">
                          Targeted Anti-Inflammatory Therapy (NSAIDs)
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Relieves prostaglandins that cause acute menstrual
                          cramping and lower pelvic pressure.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-secondary/30 p-4">
                      <CheckCircle2 className="size-5 shrink-0 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground text-xs sm:text-sm">
                          Oral Progestins (such as Dienogest)
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Combined hormonal contraceptives and targeted
                          progestins designed to lighten or pause painful menstrual cycles.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-secondary/30 p-4">
                      <CheckCircle2 className="size-5 shrink-0 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground text-xs sm:text-sm">
                          Levonorgestrel Intrauterine System (LNG-IUD)
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Delivers continuous localized progesterone directly to the
                          uterine cavity, reducing heavy bleeding and pain for up to 5 years.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-secondary/30 p-4">
                      <CheckCircle2 className="size-5 shrink-0 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground text-xs sm:text-sm">
                          Short-Course GnRH Agonists / Antagonists
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Induces temporary ovarian suppression to calm severe,
                          refractory symptoms prior to further surgical or fertility treatment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* ========================================================= */}
        {/* TAB 2: SURGICAL MANAGEMENT                                */}
        {/* ========================================================= */}
        <TabsContent value="surgical" className="mt-8 outline-none">
          <motion.div
            key="surgical"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Card className="border-border bg-card p-4 sm:p-6 shadow-sm rounded-3xl">
              <CardHeader className="gap-2">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="w-fit text-xs font-semibold text-teal border border-teal/20 bg-teal/10"
                  >
                    Step 02: Keyhole Intervention
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    Minimally Invasive Surgery
                  </span>
                </div>
                <CardTitle className="font-serif text-2xl font-bold text-foreground">
                  Minimally Invasive Keyhole Intervention
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground max-w-3xl">
                  Advised when pain persists despite medical therapy, when large
                  ovarian endometriomas (&lsquo;chocolate cysts&rsquo;) are present,
                  when organs are tethered by adhesions, or when you are actively
                  trying to conceive (since hormonal drugs prevent ovulation).
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-6 pt-4">
                <div className="rounded-2xl border border-teal/20 bg-teal/5 p-4 text-xs sm:text-sm text-foreground">
                  <span className="font-semibold text-teal">What It Achieves: </span>
                  Confirms definitive staging via high-definition laparoscopy,
                  gently frees stuck pelvic organs, drains and strips ovarian
                  cysts while protecting healthy egg reserve (AMH), and checks
                  fallopian tube patency.
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-border/80 bg-secondary/30 p-4">
                    <div className="flex size-9 items-center justify-center rounded-xl bg-teal/10 text-teal mb-2">
                      <Target className="size-4" />
                    </div>
                    <h4 className="font-serif font-bold text-foreground text-sm">
                      Definitive Staging
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Visualizes subtle peritoneal implants, pelvic sidewall
                      involvement, and rectovaginal septum nodes with 4K camera magnification.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/80 bg-secondary/30 p-4">
                    <div className="flex size-9 items-center justify-center rounded-xl bg-teal/10 text-teal mb-2">
                      <ShieldCheck className="size-4" />
                    </div>
                    <h4 className="font-serif font-bold text-foreground text-sm">
                      Egg Reserve Protection
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Meticulously cystectomizes ovarian endometriomas while
                      preserving healthy follicular cortex to safeguard anti-Müllerian hormone (AMH).
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/80 bg-secondary/30 p-4">
                    <div className="flex size-9 items-center justify-center rounded-xl bg-teal/10 text-teal mb-2">
                      <Sparkles className="size-4" />
                    </div>
                    <h4 className="font-serif font-bold text-foreground text-sm">
                      Adhesiolysis &amp; Anatomy
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Mobilizes frozen pelvic organs, restores normal anatomical
                      mobility, and improves spontaneous pregnancy chances.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* ========================================================= */}
        {/* TAB 3: LAPAROSCOPIC ENDOMETRIOSIS EXCISION SURGERY        */}
        {/* ========================================================= */}
        <TabsContent value="excision" className="mt-8 outline-none">
          <motion.div
            key="excision"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Card className="border-border border-2 border-primary/30 bg-card p-4 sm:p-6 shadow-md rounded-3xl">
              <CardHeader className="gap-2">
                <div className="flex items-center gap-2">
                  <Badge className="bg-primary text-white text-xs font-semibold">
                    Step 03: The Gold Standard
                  </Badge>
                  <span className="text-xs font-medium text-primary">
                    Root-Level Removal for Long-Term Relief
                  </span>
                </div>
                <CardTitle className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                  Laparoscopic Endometriosis Excision Surgery
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground max-w-3xl">
                  Unlike superficial surface burning, true excision surgery
                  dissects diseased tissue away from normal pelvic planes down to
                  healthy margins—eradicating deep infiltrating lesions at their
                  root.
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-8 pt-4">
                {/* Comparison Section Header */}
                <div>
                  <h4 className="font-serif text-lg font-bold text-foreground mb-1">
                    Why Excision Matters: Surface Ablation vs. True Excision
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Compare why root excision remains the worldwide gold standard
                    for preventing chronic pelvic pain recurrence.
                  </p>
                </div>

                {/* Two Side-by-Side Comparison Cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Surface Ablation Card */}
                  <div className="flex flex-col justify-between rounded-2xl border border-destructive/20 bg-destructive/5 p-5 shadow-2xs">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-destructive">
                          Conventional Approach
                        </span>
                        <XCircle className="size-5 text-destructive" />
                      </div>
                      <h5 className="font-serif text-lg font-bold text-foreground">
                        Surface Ablation (Cauterization)
                      </h5>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        Burns only the visible top layer of the lesion like mowing
                        the top of a weed. Deep roots frequently remain underneath,
                        leading to persistent nerve pain and high recurrence rates.
                      </p>
                    </div>

                    <div className="mt-4 border-t border-destructive/15 pt-3 text-xs text-destructive/90 font-medium">
                      ⚠️ High recurrence rate (40–60% within 2 years); limited deep relief.
                    </div>
                  </div>

                  {/* Laparoscopic Excision Surgery Card */}
                  <div className="flex flex-col justify-between rounded-2xl border-2 border-primary/40 bg-primary/5 p-5 shadow-xs">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                          Hema Clinic Standard
                        </span>
                        <CheckCircle2 className="size-5 text-primary" />
                      </div>
                      <h5 className="font-serif text-lg font-bold text-foreground">
                        Laparoscopic Excision Surgery
                      </h5>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        Meticulously dissects and cuts out the entire endometriosis
                        lesion from its root—including deep infiltrating nodules on
                        the uterosacral ligaments, pelvic sidewalls, bladder, or
                        bowel—while sparing healthy surrounding nerves and blood supply.
                      </p>
                    </div>

                    <div className="mt-4 border-t border-primary/20 pt-3 text-xs text-primary font-semibold">
                      ✓ Maximum pain relief; significantly lower repeat surgery rate.
                    </div>
                  </div>
                </div>

                {/* Clinical Outcomes */}
                <div className="rounded-2xl border border-border/80 bg-secondary/30 p-5">
                  <h5 className="font-serif text-sm font-bold text-foreground mb-3">
                    Proven Clinical Outcomes with Excision:
                  </h5>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div className="flex items-center gap-2.5 text-xs font-medium text-foreground">
                      <CheckCircle2 className="size-4 shrink-0 text-primary" />
                      <span>Substantially greater long-term pain reduction</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-medium text-foreground">
                      <CheckCircle2 className="size-4 shrink-0 text-primary" />
                      <span>Lower rate of repeat surgeries vs. ablation</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-medium text-foreground">
                      <CheckCircle2 className="size-4 shrink-0 text-primary" />
                      <span>Preservation of ovarian reserve &amp; natural fertility</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
