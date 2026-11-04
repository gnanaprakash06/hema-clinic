"use client";

import * as React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  CalendarCheck,
  Send,
  CheckCircle2,
  Clock,
  Shield,
  MessageSquare,
} from "lucide-react";

export function AppointmentForm() {
  const [patientName, setPatientName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [consultationType, setConsultationType] = React.useState(
    siteConfig.consultationTypes[0]
  );
  const [preferredDate, setPreferredDate] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!patientName.trim() || !phone.trim()) {
      return;
    }

    const messageLines = [
      `Hello Dr. Hema, I would like to book an appointment at ${siteConfig.clinicShortName}:`,
      ``,
      `• Patient Name: ${patientName.trim()}`,
      `• Contact Number: ${phone.trim()}`,
      `• Consultation Type: ${consultationType}`,
      `• Preferred Date: ${preferredDate || "Earliest Available Slot"}`,
      `• Additional Notes: ${notes.trim() || "None provided"}`,
    ];

    const fullMessage = messageLines.join("\n");
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;

    setSubmitted(true);

    // Open WhatsApp in a new tab
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Card className="border-border border-t-4 border-t-primary bg-card shadow-lg">
      <CardHeader className="gap-2 border-b border-border/60 pb-5">
        <div className="flex items-center gap-2.5">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
            <CalendarCheck className="size-5" />
          </div>
          <div>
            <CardTitle className="font-serif text-xl font-bold text-foreground sm:text-2xl">
              Book a Consultation
            </CardTitle>
            <CardDescription className="text-xs text-muted-foreground">
              Direct appointment scheduling with Dr. Hema via WhatsApp.
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-6">
        {submitted ? (
          <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="size-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground">
              WhatsApp Chat Launched
            </h3>
            <p className="text-xs text-muted-foreground max-w-sm">
              We&apos;ve opened WhatsApp with your appointment request. If the tab
              didn&apos;t open automatically, click the button below to send your
              details to our front desk team.
            </p>
            <Button
              type="button"
              className="mt-2 gap-2 bg-[#25D366] text-white hover:bg-[#20ba5a]"
              onClick={() => {
                const messageLines = [
                  `Hello Dr. Hema, I would like to book an appointment at ${siteConfig.clinicShortName}:`,
                  ``,
                  `• Patient Name: ${patientName.trim()}`,
                  `• Contact Number: ${phone.trim()}`,
                  `• Consultation Type: ${consultationType}`,
                  `• Preferred Date: ${preferredDate || "Earliest Available Slot"}`,
                  `• Additional Notes: ${notes.trim() || "None provided"}`,
                ];
                window.open(
                  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(messageLines.join("\n"))}`,
                  "_blank"
                );
              }}
            >
              <MessageSquare className="size-4" />
              <span>Open WhatsApp Chat</span>
            </Button>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="text-xs text-primary underline underline-offset-4 mt-2"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Patient Name */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="patient-name" className="text-xs font-semibold text-foreground">
                Patient Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="patient-name"
                required
                type="text"
                placeholder="e.g. Priya Sharma"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="h-9 text-sm"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="phone-number" className="text-xs font-semibold text-foreground">
                Mobile Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone-number"
                required
                type="tel"
                placeholder="e.g. +91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-9 text-sm"
              />
            </div>

            {/* Consultation Type Select */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="consultation-type" className="text-xs font-semibold text-foreground">
                Consultation Type <span className="text-destructive">*</span>
              </Label>
              <Select
                value={consultationType}
                onValueChange={(val) => {
                  if (typeof val === "string") {
                    setConsultationType(val);
                  }
                }}
              >
                <SelectTrigger id="consultation-type" className="w-full h-9 text-sm">
                  <SelectValue placeholder="Select consultation type" />
                </SelectTrigger>
                <SelectContent>
                  {siteConfig.consultationTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Preferred Date */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="preferred-date" className="text-xs font-semibold text-foreground">
                Preferred Date (Optional)
              </Label>
              <Input
                id="preferred-date"
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="h-9 text-sm"
              />
            </div>

            {/* Additional Notes */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="notes" className="text-xs font-semibold text-foreground">
                Additional Notes or Symptoms (Optional)
              </Label>
              <Textarea
                id="notes"
                rows={3}
                placeholder="Mention gestational week, ongoing pain symptoms, scan history, or specific doctor questions..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="text-sm min-h-20"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="mt-2 w-full justify-center gap-2 font-semibold shadow-md"
            >
              <Send className="size-4" />
              <span>Confirm &amp; Message on WhatsApp</span>
            </Button>

            {/* Privacy & Time Note */}
            <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground border-t border-border/60 pt-3">
              <span className="flex items-center gap-1">
                <Clock className="size-3.5 text-primary" />
                Response within 30–60 mins
              </span>
              <span className="flex items-center gap-1">
                <Shield className="size-3.5 text-teal" />
                Confidential &amp; Private
              </span>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
