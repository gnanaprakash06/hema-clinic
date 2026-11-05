"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { siteConfig } from "@/data/siteConfig";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Menu,
  Phone,
  Clock,
  CalendarCheck,
  Stethoscope,
  ChevronRight,
  Heart,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur-md transition-colors">
      {/* Top micro-bar for clinical trust & emergency info */}
      <div className="hidden border-b border-border/60 bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5 text-primary" />
              <span>{siteConfig.timings}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Heart className="size-3.5 text-primary" />
              <span>{siteConfig.emergencyNote}</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-primary"
            >
              <Phone className="size-3.5 text-primary" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <span className="text-border">|</span>
            <span className="text-muted-foreground">{siteConfig.locationShort}</span>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Doctor identity */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
            <Stethoscope className="size-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              {siteConfig.doctorName}
            </span>
            <span className="text-xs font-medium text-muted-foreground tracking-wide">
              {siteConfig.clinicShortName} • Women&apos;s Care &amp; Laparoscopy
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with animated active underline/pill */}
        <nav className="hidden items-center gap-1.5 lg:flex" aria-label="Main Navigation">
          {siteConfig.navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {link.title}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-lg bg-secondary/80 -z-10 border border-primary/15"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button with hover lift & subtle shadow pulse */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className={buttonVariants({
              size: "default",
              className:
                "shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 font-semibold gap-2 bg-primary text-white hover:bg-primary/90",
            })}
          >
            <CalendarCheck className="size-4" />
            <span>Book Consultation</span>
          </Link>
        </div>

        {/* Mobile Navigation Drawer (shadcn/ui Sheet) */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: "hidden sm:inline-flex gap-1.5 border-border",
            })}
          >
            <Phone className="size-3.5 text-primary" />
            <span>Call Clinic</span>
          </a>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-lg border-border"
                  aria-label="Open Navigation Menu"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[380px] p-0 flex flex-col">
              <SheetHeader className="border-b border-border p-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <Stethoscope className="size-5" />
                  </div>
                  <div>
                    <SheetTitle className="font-serif text-lg font-bold">
                      {siteConfig.doctorName}
                    </SheetTitle>
                    <SheetDescription className="text-xs text-muted-foreground">
                      {siteConfig.designation}
                    </SheetDescription>
                  </div>
                </div>
              </SheetHeader>

              {/* Mobile Navigation List */}
              <div className="flex-1 overflow-y-auto px-4 py-4">
                <div className="flex flex-col gap-1">
                  {siteConfig.navLinks.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-secondary text-primary font-semibold"
                            : "text-foreground hover:bg-secondary/60"
                        }`}
                      >
                        <span>{link.title}</span>
                        <ChevronRight className="size-4 text-muted-foreground/60" />
                      </Link>
                    );
                  })}
                </div>

                <div className="my-6 rounded-xl border border-border bg-secondary/30 p-4 text-xs text-muted-foreground">
                  <p className="font-semibold text-foreground mb-1">Clinic Timings</p>
                  <p>{siteConfig.timings}</p>
                  <p className="mt-2 text-primary font-medium">{siteConfig.emergencyNote}</p>
                </div>
              </div>

              {/* Mobile Drawer Footer Actions */}
              <div className="border-t border-border p-4 bg-muted/20 flex flex-col gap-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={buttonVariants({
                    className: "w-full justify-center gap-2 shadow-sm font-semibold",
                  })}
                >
                  <CalendarCheck className="size-4" />
                  <span>Book Consultation</span>
                </Link>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className={buttonVariants({
                    variant: "outline",
                    className: "w-full justify-center gap-2",
                  })}
                >
                  <Phone className="size-4 text-primary" />
                  <span>Call {siteConfig.phoneDisplay}</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
