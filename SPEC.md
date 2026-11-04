# Project Specification: Hema Clinic (`hema-clinic`) — OB/GYN & Endometriosis Website

## 1. Technical Stack & Static Export Rules
- **Project Name:** `hema-clinic`
- **Framework:** Next.js (App Router) with TypeScript
- **Static Export Configuration (`next.config.mjs` / `next.config.ts`):**
  - Must set `output: 'export'` and `images: { unoptimized: true }` so `pnpm build` outputs pure static assets inside `/out`.
  - Do not use Server Actions or dynamic server routes.
- **UI Component Library:** `shadcn/ui` (located in `src/components/ui/`) + `lucide-react` icons.
  - Pre-installed components to use across pages: `Button`, `Card`, `Badge`, `Tabs`, `Accordion`, `Sheet`, `Input`, `Textarea`, `Select`, `Label`, `Separator`.
- **Fonts (`next/font/google`):**
  - Headings (`--font-serif`): `Lora` (weights: 600, 700)
  - Body & UI (`--font-sans`): `Plus Jakarta Sans` (weights: 400, 500, 600, 700)
- **Centralized Config (`src/data/siteConfig.ts`):**
  All doctor and clinic details must live in one file:
  - `doctorName`: "Dr. Hema"
  - `credentials`: "MBBS, MS (OBG), Fellowship in Minimal Access & Laparoscopic Surgery"
  - `designation`: "Consultant Obstetrician, Gynecologist & Endometriosis Excision Specialist"
  - `clinicName`: "Hema Clinic — Women's Care & Laparoscopy Center"
  - `locationShort`: "Chennai, Tamil Nadu"
  - `addressFull`: "123 Medical Avenue, Chennai, Tamil Nadu - 600040"
  - `phoneDisplay`: "+91 98765 43210"
  - `whatsappNumber`: "919876543210"
  - `email`: "appointments@hemaclinic.com"
  - `timings`: "Mon – Sat: 10:00 AM – 1:30 PM & 5:30 PM – 8:30 PM"

---

## 2. Design System & `shadcn/ui` Theme Tokens (`globals.css`)
Configure `src/app/globals.css` so `shadcn/ui` components automatically inherit our warm clinical palette:
- **Background (`--background`):** `#FAF8F5` (Warm Alabaster)
- **Foreground / Primary Text (`--foreground`):** `#1E293B` (Deep Slate)
- **Card Surface (`--card`):** `#FFFFFF` (Pure White)
- **Secondary / Soft Blush Surface (`--secondary` & `--muted`):** `#F4E8E6` (Soft Blush)
- **Muted Text (`--muted-foreground`):** `#475569` (Muted Slate)
- **Primary Brand Accent (`--primary` — Obstetrics / Warmth):** `#D47A72` (Muted Terracotta Rose, foreground `#FFFFFF`)
- **Clinical Surgical Accent (Custom utility / CSS var `--teal` — Laparoscopy):** `#2A6B62` (Deep Sage Teal, foreground `#FFFFFF`)
- **Border & Input (`--border` / `--input`):** `#EEDCD9` (Soft Rose-Beige Border)
- **Border Radius (`--radius`):** `0.875rem` (Soft, approachable rounded corners for cards and buttons)

---

## 3. Global Navigation, Layout & `shadcn/ui` Mapping
1. `/` — Home
2. `/about` — About Dr. Hema
3. `/obstetrics` — Obstetrics & Maternity
4. `/gynecology` — Gynecology & Endometriosis
5. `/resources` — Patient FAQs & Guides
6. `/contact` — Book Appointment / Contact

- **`Navbar.tsx`:** Sticky top bar (`backdrop-blur-md bg-[#FAF8F5]/90 border-b border-[#EEDCD9]`). Desktop links + `shadcn/ui` `Button` for "Book Consultation". Mobile navigation must use `shadcn/ui` `Sheet`, `SheetTrigger`, and `SheetContent` for a smooth slide-out drawer.
- **`WhatsAppFloat.tsx`:** Fixed bottom-right (`bottom-6 right-6 z-50`) floating CTA button linking to `https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Dr.%20Hema,%20I%20would%20like%20to%20book%20a%20consultation.`.

---

## 4. Page-by-Page Structure & Exact Medical Copy

### PAGE 1: Home (`/`)
**SEO Title:** `Dr. Hema | Hema Clinic — Obstetrician, Painless Labour & Endometriosis Specialist`
**SEO Description:** `Compassionate maternity care, high-risk pregnancy management, painless epidural delivery, and advanced laparoscopic endometriosis excision surgery at Hema Clinic.`

#### 1.1 Hero Section
- **Component:** `Badge` (`variant="secondary"`) -> `Comprehensive Maternity & Advanced Keyhole Surgery`
- **Headline:** `Compassionate Care for Motherhood. Precision Relief for Endometriosis.`
- **Subheadline:** `Whether you are preparing to welcome a new life or seeking lasting relief from chronic pelvic pain, Dr. Hema combines evidence-based obstetrics with advanced laparoscopic surgery tailored to your body.`
- **Primary CTA:** `Button` (`size="lg"`) -> `Book a Consultation` (Routes to `/contact`)
- **Secondary CTA:** `Button` (`variant="outline"`, `size="lg"`) -> `Explore Specialties`
- **Quick Trust Strip (4 items with Lucide icons):**
  - `Safe Normal & Painless Delivery`
  - `High-Risk Pregnancy Care`
  - `Keyhole Laparoscopic Surgery`
  - `Root-Cause Endometriosis Excision`

#### 1.2 Dual Clinical Pillars Section
Render using two side-by-side `shadcn/ui` `Card` components with top accent borders:
- **Pillar Card 1: Obstetrics & Maternity (`border-t-4 border-[#D47A72]`)**
  - **`CardHeader` (`Badge` + `CardTitle` + `CardDescription`):**
    - Title: `Obstetrics & Childbirth Care`
    - Description: `Complete guidance from pre-conception and routine antenatal scans to specialized high-risk pregnancy protocols and comfortable, painless epidural labour.`
  - **`CardContent` Bullet Highlights:** `Routine Pregnancy Care`, `High-Risk Pregnancy Monitoring`, `Safe Labour & VBAC Support`, `Painless Labour (Epidural)`
  - **`CardFooter`:** `Button` (`variant="ghost"`) -> `Explore Maternity Care` (`/obstetrics`)
- **Pillar Card 2: Gynecology & Endometriosis (`border-t-4 border-[#2A6B62]`)**
  - **`CardHeader` (`Badge` + `CardTitle` + `CardDescription`):**
    - Title: `Laparoscopy & Endometriosis Center`
    - Description: `Minimally invasive keyhole treatments and comprehensive medical-to-surgical endometriosis care focused on long-term pain relief and organ preservation.`
  - **`CardContent` Bullet Highlights:** `Diagnostic & Operative Laparoscopy`, `Endometriosis Medical Management`, `Fertility-Preserving Keyhole Surgery`, `Laparoscopic Excision Surgery`
  - **`CardFooter`:** `Button` (`variant="ghost"`) -> `Explore Gynecology & Endometriosis` (`/gynecology`)

#### 1.3 Why Patients Trust Hema Clinic (4 `Card` Grid)
1. **Unrushed 1-on-1 Consultations:** `We take time to listen to your symptoms, explain scan reports clearly, and build a treatment plan without medical jargon.`
2. **Mother-Baby First Birthing Philosophy:** `Respectful maternity care prioritizing safe natural birth whenever possible, backed by 24/7 high-dependency obstetric readiness.`
3. **Excision Over Surface Burning:** `For deep endometriosis, we perform root-level laparoscopic excision rather than superficial ablation, lowering recurrence and protecting fertility.`
4. **Faster Scar-Minimal Recovery:** `Advanced keyhole techniques use tiny 0.5 cm incisions so you return home—and back to your routine—within days, not weeks.`

#### 1.4 Patient Stories (3 `Card` Testimonials)
- **Quote 1 (Painless Labour):** `"As a first-time mother, I was terrified of labour pain. Our birth plan with Dr. Hema included painless epidural delivery, and I was able to stay calm, rested, and fully present when my baby arrived."` — *Priya S., First-Time Mother*
- **Quote 2 (Endometriosis Excision):** `"After years of being told severe period pain was normal, I finally got an accurate diagnosis and laparoscopic excision surgery at Hema Clinic. I am now pain-free for the first time in eight years."` — *Ananya R., Endometriosis Patient*
- **Quote 3 (High-Risk Pregnancy):** `"Managing gestational diabetes and blood pressure made my pregnancy stressful, but Dr. Hema's close monitoring and reassuring checkups helped me deliver a healthy baby safely."` — *Meera K., High-Risk Maternity Care*

---

### PAGE 2: About Dr. Hema (`/about`)
**SEO Title:** `About Dr. Hema | OB/GYN & Laparoscopic Surgeon at Hema Clinic`

#### 2.1 Doctor Bio & Philosophy
- **Headline:** `Dedicated to Every Stage of a Woman's Health Journey`
- **Lead Paragraph:** `Dr. Hema is a specialist Obstetrician, Gynecologist, and Minimal Access Laparoscopic Surgeon known for combining warm, reassuring maternity support with high-precision surgical care for complex gynecological conditions.`
- **Clinical Approach (3 `Card` components):**
  1. **Listen Without Dismissal:** `Chronic pelvic pain and heavy bleeding are never brushed off as 'just bad periods.' Every symptom deserves a thorough root-cause evaluation.`
  2. **Conservative First, Surgical When Necessary:** `Not every condition requires the operating room. Whenever safe and effective, we begin with targeted medical management before recommending surgery.`
  3. **Precision Keyhole Technique:** `When surgery is indicated, minimally invasive laparoscopy ensures maximum tissue preservation, minimal blood loss, and rapid recovery.`
- **Credentials & Training Placeholders (Editable in `siteConfig.ts`):**
  - `MBBS — [Medical College / University Name]`
  - `MS / DNB in Obstetrics & Gynecology — [Institution Name]`
  - `Fellowship in Minimal Access & Advanced Laparoscopic Surgery`
  - `Specialized Training in Deep Infiltrating Endometriosis Excision`

---

### PAGE 3: Obstetrics & Maternity (`/obstetrics`)
**SEO Title:** `Obstetrics, High-Risk Pregnancy & Painless Labour | Hema Clinic`

#### 3.1 Page Header
- **Component:** `Badge` -> `Department of Obstetrics`
- **Headline:** `Safe, Supported, and Joyful Motherhood`
- **Intro:** `Every pregnancy is unique. Whether yours is a smooth first-time journey or requires close medical supervision, Hema Clinic provides personalized care from your first positive test to postnatal recovery.`

#### 3.2 Core Obstetric Services (Detailed `Card` Sections)

##### Service 1: Routine Pregnancy Care (Antenatal Care)
- **Overview:** `Structured trimester-by-trimester care designed to track your baby's development and keep you feeling confident and healthy throughout pregnancy.`
- **What Is Included:**
  - `Pre-conception counseling and early viability assessments`
  - `Trimester-wise anomaly, growth, and Doppler ultrasound tracking`
  - `Customized prenatal nutrition, iron/calcium supplementation, and safe exercise guidance`
  - `Third-trimester birth preparation and breastfeeding readiness`

##### Service 2: High-Risk Pregnancy Management
- **Overview:** `A high-risk diagnosis does not mean you cannot have a safe, healthy delivery—it simply means you and your baby need proactive, closer surveillance.`
- **Conditions We Manage (Render each as a `Badge` inside a `Card`):**
  - `Gestational Diabetes Mellitus (GDM)`
  - `Thyroid Disorders in Pregnancy`
  - `Pregnancy-Induced Hypertension (PIH) & Preeclampsia`
  - `Twin or Multiple Pregnancies`
  - `Previous Cesarean Section & VBAC Evaluation`
  - `Recurrent Pregnancy Loss or Cervical Insufficiency`
  - `Placenta Previa & Fetal Growth Restriction (IUGR)`
- **Our Protocol:** `Frequent maternal-fetal monitoring, multidisciplinary coordination with endocrinologists and neonatologists, and carefully timed delivery planning.`

##### Service 3: Labour & Delivery Care
- **Overview:** `Calm, evidence-based intrapartum care in a fully equipped birthing suite with continuous fetal heart monitoring.`
- **Key Highlights:**
  - `Active support for Normal Vaginal Delivery with upright birthing positions`
  - `Carefully monitored VBAC (Vaginal Birth After Cesarean) for eligible mothers`
  - `Gentle, family-centered planned and emergency Cesarean sections when medically required`

##### Service 4 (Featured Spotlight `Card`): Painless Labour (Epidural Analgesia)
- **Component:** `Badge` -> `Comfort in Childbirth`
- **Headline:** `Experience the Joy of Birth Without Overwhelming Pain`
- **Copy:** `Painless labour uses targeted epidural analgesia administered by an experienced obstetric anesthesiologist during active labour. It blocks pain signals from the lower spine while allowing you to remain fully awake, alert, and able to push effectively when it is time to meet your baby.`
- **Key Benefits Grid (4 mini `Card` blocks):**
  - `Conserves Maternal Energy: Prevents exhaustion during prolonged labour so you have strength for delivery.`
  - `Lowers Stress Hormones: Promotes better blood flow and oxygen delivery to your baby.`
  - `Adjustable & Safe: Dosage can be fine-tuned throughout labour and does not make your baby drowsy.`
  - `Myth Fact-Check: Modern epidurals do not cause permanent backache and do not automatically lead to a C-section.`

---

### PAGE 4: Gynecology & Endometriosis (`/gynecology`)
**SEO Title:** `Laparoscopy & Endometriosis Excision Surgery | Hema Clinic`

#### 4.1 Page Header
- **Component:** `Badge` -> `Department of Gynecology & Minimal Access Surgery`
- **Headline:** `Advanced Keyhole Surgery & Specialized Endometriosis Care`
- **Intro:** `Dr. Hema specializes in diagnosing and treating complex pelvic conditions using minimally invasive laparoscopy—helping women overcome debilitating pain, heavy bleeding, and fertility challenges.`

#### 4.2 Section A: Diagnostic & Operative Laparoscopy (`Card` Layout)
- **Headline:** `Minimally Invasive Keyhole Surgery`
- **Copy:** `Instead of a large abdominal cut, laparoscopic surgery uses 2 to 3 tiny keyhole incisions (0.5 cm to 1 cm) and a high-definition camera to visualize and treat pelvic conditions with microscopic precision.`
- **Patient Advantages:**
  - `Minimal post-operative pain and tiny, barely visible scars`
  - `Day-care or 24-hour hospital stay with return to routine life in 5–7 days`
  - `Significantly lower risk of infection and internal scar tissue (adhesions)`
- **Procedures Performed (Render as `Badge` items):** `Laparoscopic Ovarian Cystectomy`, `Fibroid Removal (Myomectomy)`, `Ectopic Pregnancy Care`, `Pelvic Adhesiolysis`, `Total Laparoscopic Hysterectomy (TLH)`.

#### 4.3 Section B: Comprehensive Endometriosis Management Hub (`shadcn/ui` `Tabs`)
- **Headline:** `A Complete, Step-by-Step Protocol for Endometriosis`
- **Patient Education Intro:** `Endometriosis occurs when tissue similar to the inner lining of the uterus grows outside it—on the ovaries, pelvic ligaments, bladder, or bowel. Every month, this tissue responds to hormones and triggers chronic inflammation, severe menstrual cramps, painful intercourse, ovarian 'chocolate' cysts (endometriomas), and fertility difficulties. Because every woman's life stage and goals differ, Hema Clinic structures care across three specialized pathways:`

*(Implement using `shadcn/ui` `Tabs`, `TabsList`, `TabsTrigger`, and `TabsContent`)*

##### `TabsContent value="medical"` — 1. Medical Management
- **Subtitle:** `Non-Surgical Symptom Control & Hormonal Suppression`
- **When It Is Recommended:** `Ideal for mild-to-moderate symptoms, adolescents and young women not immediately planning pregnancy, or as long-term maintenance therapy to prevent recurrence.`
- **How It Works:** `Because estrogen fuels endometriosis growth, medical management stabilizes hormone fluctuations to quiet pelvic inflammation and pause lesion progression.`
- **Treatment Options:**
  - `Targeted Anti-Inflammatory Therapy (NSAIDs) for acute pain flare-ups`
  - `Oral Progestins (such as Dienogest) and Combined Hormonal Contraceptives to lighten or pause painful periods`
  - `Levonorgestrel Intrauterine System (LNG-IUD) for localized uterine and pelvic pain relief`
  - `Short-course GnRH Agonists/Antagonists for severe refractory symptoms`

##### `TabsContent value="surgical"` — 2. Surgical Management
- **Subtitle:** `Minimally Invasive Keyhole Intervention`
- **When It Is Recommended:** `Advised when pain persists despite medical therapy, when large ovarian endometriomas ('chocolate cysts') are present, when organs are tethered by adhesions, or when you are actively trying to conceive (since hormonal drugs prevent ovulation).`
- **What It Achieves:** `Confirms definitive staging via high-definition laparoscopy, gently frees stuck pelvic organs, drains and strips ovarian cysts while protecting healthy egg reserve (AMH), and checks fallopian tube patency.`

##### `TabsContent value="excision"` — 3. Laparoscopic Endometriosis Excision Surgery
- **Subtitle:** `Root-Level Removal for Long-Term Relief (The Gold Standard)`
- **Why Excision Matters (Two side-by-side comparison `Card` blocks):**
  - **Surface Ablation (Cauterization):** `Burns only the visible top layer of the lesion. Deep roots frequently remain underneath, leading to persistent nerve pain and high recurrence rates.`
  - **Laparoscopic Excision Surgery (Hema Clinic Standard):** `Meticulously dissects and cuts out the entire endometriosis lesion from its root—including deep infiltrating nodules on the uterosacral ligaments, pelvic sidewalls, bladder, or bowel—while sparing healthy surrounding nerves and blood supply.`
- **Clinical Outcomes:**
  - `Substantially greater long-term reduction in menstrual and chronic pelvic pain`
  - `Lower rate of repeat surgeries compared to surface ablation`
  - `Preservation of ovarian reserve and natural fertility potential`

---

### PAGE 5: Patient FAQs & Guides (`/resources`)
**SEO Title:** `Patient FAQs: Painless Delivery, Pregnancy & Endometriosis | Hema Clinic`

#### 5.1 Interactive FAQ Accordions (`shadcn/ui` `Accordion`)
Use `Accordion type="single" collapsible` inside two category `Card` containers:

**Category 1: Pregnancy & Painless Labour FAQs**
1. **Q: When should I book my first pregnancy checkup?**
   `A: Schedule your first antenatal visit as soon as you have a positive home pregnancy test (typically around 6 to 8 weeks from your last period) to confirm fetal heartbeat, dating, and baseline blood work.`
2. **Q: Will getting an epidural for painless labour slow down my delivery or cause lifelong back pain?**
   `A: No. Modern low-dose 'walking' or mobile epidurals relieve contraction pain while keeping your pelvic muscles responsive enough to push effectively. While mild soreness at the injection site can last 1–2 days, clinical studies confirm epidurals do not cause chronic back pain.`
3. **Q: Can I still have a normal delivery if my pregnancy is labeled high-risk?**
   `A: Yes, many women with gestational diabetes, thyroid conditions, or controlled hypertension have safe vaginal deliveries with close fetal monitoring and timely induction when appropriate.`

**Category 2: Endometriosis & Laparoscopy FAQs**
1. **Q: Does every patient with endometriosis need surgery right away?**
   `A: No. Treatment depends on your symptoms, ultrasound/MRI findings, and fertility goals. Many patients achieve strong symptom relief with medical management first, reserving laparoscopic excision for persistent pain, deep nodules, or fertility optimization.`
2. **Q: What is the difference between laparoscopic excision and ablation for endometriosis?**
   `A: Ablation burns the surface of a lesion like trimming the top of a weed, leaving the root behind. Laparoscopic excision carefully removes the entire lesion down to healthy tissue, offering more complete pain relief and lower recurrence.`
3. **Q: How soon can I return to work after laparoscopic endometriosis surgery?**
   `A: Most patients walk the same evening, return home within 24 to 48 hours, and resume desk work or daily routines within 7 to 10 days.`

---

### PAGE 6: Contact & Appointments (`/contact`)
**SEO Title:** `Book an Appointment | Dr. Hema — Hema Clinic`

#### 6.1 Contact Layout
- **Left Column (`Card`):** Clinic address, consultation timings from `siteConfig.ts`, emergency labour room note, direct phone call `Button`, and embedded Google Maps container.
- **Right Column (Static WhatsApp Appointment Form inside `Card`):**
  - Build using `shadcn/ui` `Label`, `Input`, `Select` (`SelectTrigger`, `SelectValue`, `SelectContent`, `SelectItem`), `Textarea`, and `Button`:
    - `Patient Name` (`Input`, required)
    - `Phone Number` (`Input type="tel"`, required)
    - `Consultation Type` (`Select` with options: `Routine Pregnancy Checkup`, `High-Risk Pregnancy Consultation`, `Painless Labour Counseling`, `Laparoscopy / General Gynecology`, `Endometriosis Medical/Surgical Evaluation`)
    - `Preferred Date` (`Input type="date"`)
    - `Additional Notes` (`Textarea`, optional)
  - **Submission Behavior:** Constructs a formatted WhatsApp URL (`https://wa.me/${siteConfig.whatsappNumber}?text=...`) and opens it in a new tab.
