import React from "react";
import { Skeleton, Card } from "@/ui";

export const HomeFallback: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 1. Landing Navbar Skeleton */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo Skeleton */}
            <div className="flex items-center gap-3">
              <Skeleton className="w-10 h-10 rounded-xl bg-sky-500/20" />
              <Skeleton className="h-6 w-36 rounded-lg" />
            </div>

            {/* Desktop Navigation Links Skeleton */}
            <div className="hidden md:flex items-center gap-8">
              <Skeleton className="h-4 w-14 rounded-md" />
              <Skeleton className="h-4 w-18 rounded-md" />
              <Skeleton className="h-4 w-16 rounded-md" />
              <Skeleton className="h-4 w-14 rounded-md" />
            </div>

            {/* CTA Button Skeleton */}
            <div className="hidden md:block">
              <Skeleton className="h-10 w-32 rounded-xl bg-sky-500/20" />
            </div>

            {/* Mobile Menu Icon Skeleton */}
            <div className="md:hidden">
              <Skeleton className="h-9 w-9 rounded-lg" />
            </div>
          </div>
        </div>
      </header>

      {/* 2. Hero Section Skeleton */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
        <div className="container-custom relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* Badge Skeleton */}
              <Skeleton className="h-8 w-60 rounded-full bg-sky-500/10 border border-sky-500/20" />

              {/* Main Heading Skeleton (3 lines) */}
              <div className="space-y-3 w-full max-w-xl">
                <Skeleton className="h-10 sm:h-12 w-4/5 rounded-xl mx-auto lg:mx-0" />
                <Skeleton className="h-10 sm:h-12 w-full rounded-xl" />
                <Skeleton className="h-10 sm:h-12 w-3/5 rounded-xl mx-auto lg:mx-0 bg-sky-500/20" />
              </div>

              {/* Subheading / Description Skeleton */}
              <div className="space-y-2 w-full max-w-lg pt-2">
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-11/12 rounded-md mx-auto lg:mx-0" />
                <Skeleton className="h-4 w-3/4 rounded-md mx-auto lg:mx-0" />
              </div>

              {/* CTA Action Buttons Skeleton */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto justify-center lg:justify-start">
                <Skeleton className="h-12 w-full sm:w-44 rounded-xl bg-sky-500/25" />
                <Skeleton className="h-12 w-full sm:w-36 rounded-xl" />
              </div>

              {/* Stats Counters Skeleton */}
              <div className="flex flex-wrap gap-8 pt-8 justify-center lg:justify-start">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="space-y-1.5 text-center lg:text-left">
                    <Skeleton className="h-7 w-16 rounded-md mx-auto lg:mx-0" />
                    <Skeleton className="h-3.5 w-24 rounded-md" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Preview Column */}
            <div className="grid gap-4 w-full max-w-lg mx-auto lg:max-w-none">
              {/* Main Featured ATS Preview Card Skeleton */}
              <Card
                variant="glass"
                className="p-6 md:p-8 rounded-3xl border border-border/70 shadow-lg space-y-6"
              >
                <div className="flex items-start gap-4">
                  <Skeleton className="w-14 h-14 rounded-2xl bg-sky-500/20 shrink-0" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-6 w-48 rounded-lg" />
                    <Skeleton className="h-3.5 w-full rounded-md" />
                    <Skeleton className="h-3.5 w-4/5 rounded-md" />
                  </div>
                </div>

                {/* Score Preview Box Skeleton */}
                <div className="p-4 bg-muted/60 dark:bg-slate-900/60 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-40 rounded-md" />
                    <Skeleton className="h-5 w-12 rounded-md bg-sky-500/20" />
                  </div>
                  <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                    <Skeleton className="h-full w-4/5 bg-sky-500/40 rounded-full" />
                  </div>
                </div>
              </Card>

              {/* Secondary 2-Column Cards Skeleton */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Card
                  variant="glass"
                  className="p-5 rounded-2xl border border-border/60 space-y-3"
                >
                  <Skeleton className="w-12 h-12 rounded-xl bg-sky-500/15" />
                  <Skeleton className="h-5 w-32 rounded-md" />
                  <Skeleton className="h-3.5 w-full rounded-md" />
                  <Skeleton className="h-3.5 w-3/4 rounded-md" />
                </Card>

                <Card
                  variant="glass"
                  className="p-5 rounded-2xl border border-border/60 space-y-3"
                >
                  <Skeleton className="w-12 h-12 rounded-xl bg-sky-500/15" />
                  <Skeleton className="h-5 w-28 rounded-md" />
                  <Skeleton className="h-3.5 w-full rounded-md" />
                  <Skeleton className="h-3.5 w-4/5 rounded-md" />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeFallback;
