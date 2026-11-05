export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export interface TrustItem {
  title: string;
  description: string;
  icon: string;
}

export interface ClinicalPillar {
  id: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  href: string;
  ctaText: string;
  accentColor: string;
  themeVar: "primary" | "teal";
}

export interface TrustReason {
  title: string;
  description: string;
  icon: string;
}

export interface PatientStory {
  quote: string;
  author: string;
  role: string;
  tag: string;
  condition: string;
  rating: number;
}

export interface CredentialItem {
  degree: string;
  institution: string;
  year?: string;
}

export const siteConfig = {
  doctorName: "Dr. Hema",
  doctorFullName: "Dr. Hema, MS (OBG)",
  credentials: "MBBS, MS (OBG), Fellowship in Minimal Access & Laparoscopic Surgery",
  designation: "Consultant Obstetrician, Gynecologist & Endometriosis Excision Specialist",
  clinicName: "Hema Clinic — Women's Care & Laparoscopy Center",
  clinicShortName: "Hema Clinic",
  tagline: "Compassionate Care for Motherhood. Precision Relief for Endometriosis.",
  locationShort: "Chennai, Tamil Nadu",
  addressFull: "123 Medical Avenue, Chennai, Tamil Nadu - 600040",
  phoneDisplay: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsappNumber: "919876543210",
  email: "appointments@hemaclinic.com",
  timings: "Mon – Sat: 10:00 AM – 1:30 PM & 5:30 PM – 8:30 PM",
  emergencyNote: "24/7 Labour Room & High-Dependency Obstetric Support Available",
  medicalDisclaimer:
    "Medical Disclaimer: The information provided on this website is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult Dr. Hema or a qualified healthcare provider regarding your health conditions.",

  doctorCredentials: [
    {
      degree: "MBBS",
      institution: "Renowned Medical University, Chennai",
    },
    {
      degree: "MS in Obstetrics & Gynecology",
      institution: "Premier Post-Graduate Institute of Obstetrics & Gynecology",
    },
    {
      degree: "Fellowship in Minimal Access Surgery (FMAS)",
      institution: "World Association of Laparoscopic Surgeons",
    },
    {
      degree: "Advanced Training in Deep Infiltrating Endometriosis Excision",
      institution: "Specialized Pelvic Pain & Advanced Laparoscopy Center",
    },
  ] as CredentialItem[],

  navLinks: [
    { title: "Home", href: "/" },
    { title: "About Dr. Hema", href: "/about" },
    { title: "Obstetrics & Maternity", href: "/obstetrics" },
    { title: "Gynecology & Endometriosis", href: "/gynecology" },
    { title: "Patient FAQs", href: "/resources" },
    { title: "Contact", href: "/contact" },
  ] as NavItem[],

  trustStrip: [
    {
      title: "Safe Normal & Painless Delivery",
      description: "Gentle birthing support with low-dose mobile epidural options.",
      icon: "Baby",
    },
    {
      title: "High-Risk Pregnancy Care",
      description: "Intensive surveillance for GDM, hypertension, twins & VBAC.",
      icon: "ShieldCheck",
    },
    {
      title: "Keyhole Laparoscopic Surgery",
      description: "0.5 cm micro-incisions, minimal pain, and rapid 24-hr recovery.",
      icon: "Activity",
    },
    {
      title: "Root-Cause Endometriosis Excision",
      description: "Meticulous excision over surface ablation to preserve fertility.",
      icon: "Target",
    },
  ] as TrustItem[],

  clinicalPillars: [
    {
      id: "obstetrics",
      badge: "Maternity & Birthing Care",
      title: "Obstetrics & Childbirth Care",
      description:
        "Complete guidance from pre-conception and routine antenatal scans to specialized high-risk pregnancy protocols and comfortable, painless epidural labour.",
      highlights: [
        "Routine Pregnancy Care",
        "High-Risk Pregnancy Monitoring",
        "Safe Labour & VBAC Support",
        "Painless Labour (Epidural)",
      ],
      href: "/obstetrics",
      ctaText: "Explore Maternity Care",
      accentColor: "#D47A72",
      themeVar: "primary",
    },
    {
      id: "gynecology",
      badge: "Minimally Invasive Surgery",
      title: "Laparoscopy & Endometriosis Center",
      description:
        "Minimally invasive keyhole treatments and comprehensive medical-to-surgical endometriosis care focused on long-term pain relief and organ preservation.",
      highlights: [
        "Diagnostic & Operative Laparoscopy",
        "Endometriosis Medical Management",
        "Fertility-Preserving Keyhole Surgery",
        "Laparoscopic Excision Surgery",
      ],
      href: "/gynecology",
      ctaText: "Explore Gynecology & Endometriosis",
      accentColor: "#2A6B62",
      themeVar: "teal",
    },
  ] as ClinicalPillar[],

  whyTrustReasons: [
    {
      title: "Unrushed 1-on-1 Consultations",
      description:
        "We take time to listen to your symptoms, explain scan reports clearly, and build a treatment plan without medical jargon.",
      icon: "Clock",
    },
    {
      title: "Mother-Baby First Birthing Philosophy",
      description:
        "Respectful maternity care prioritizing safe natural birth whenever possible, backed by 24/7 high-dependency obstetric readiness.",
      icon: "HeartHandshake",
    },
    {
      title: "Excision Over Surface Burning",
      description:
        "For deep endometriosis, we perform root-level laparoscopic excision rather than superficial ablation, lowering recurrence and protecting fertility.",
      icon: "Sparkles",
    },
    {
      title: "Faster Scar-Minimal Recovery",
      description:
        "Advanced keyhole techniques use tiny 0.5 cm incisions so you return home—and back to your routine—within days, not weeks.",
      icon: "Timer",
    },
  ] as TrustReason[],

  patientStories: [
    {
      quote:
        "As a first-time mother, I was terrified of labour pain. Our birth plan with Dr. Hema included painless epidural delivery, and I was able to stay calm, rested, and fully present when my baby arrived.",
      author: "Priya S.",
      role: "First-Time Mother",
      tag: "Painless Labour",
      condition: "Safe Epidural Delivery",
      rating: 5,
    },
    {
      quote:
        "After years of being told severe period pain was normal, I finally got an accurate diagnosis and laparoscopic excision surgery at Hema Clinic. I am now pain-free for the first time in eight years.",
      author: "Ananya R.",
      role: "Endometriosis Patient",
      tag: "Endometriosis Excision",
      condition: "Deep Pelvic Excision Surgery",
      rating: 5,
    },
    {
      quote:
        "Managing gestational diabetes and blood pressure made my pregnancy stressful, but Dr. Hema's close monitoring and reassuring checkups helped me deliver a healthy baby safely.",
      author: "Meera K.",
      role: "High-Risk Maternity Care",
      tag: "High-Risk Pregnancy",
      condition: "Gestational Diabetes & Safe Delivery",
      rating: 5,
    },
  ] as PatientStory[],

  consultationTypes: [
    "Routine Pregnancy Checkup",
    "High-Risk Pregnancy Consultation",
    "Painless Labour Counseling",
    "Laparoscopy / General Gynecology",
    "Endometriosis Medical/Surgical Evaluation",
  ],
};

export function getWhatsAppAppointmentUrl(customText?: string): string {
  const defaultMessage = "Hello Dr. Hema, I would like to book a consultation.";
  const text = customText?.trim() || defaultMessage;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const clinicImages = {
  heroDoctor:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=85",
  maternityCare:
    "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
  painlessLabour:
    "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=80",
  highRiskPregnancy:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
  laparoscopySurgery:
    "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80",
  endometriosisCare:
    "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1000&q=80",
  doctorPortrait:
    "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1000&q=85",
  clinicInterior:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
};
