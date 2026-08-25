import React from "react";
import { Helmet } from "react-helmet-async";
import { Skeleton, Card } from "@/ui";

export const ResumeBuilderSkeleton: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Resume Builder - Loading...</title>
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container-custom py-8 pt-12 md:pt-16">
          {/* 1. Top Navigation Bar Skeleton */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Skeleton className="w-4 h-4 rounded" />
              <Skeleton className="h-4 w-32 rounded-md" />
            </div>

            <div className="flex items-center gap-2">
              <Skeleton className="h-9 w-20 rounded-xl" />
              <Skeleton className="h-9 w-32 rounded-xl bg-sky-500/20" />
            </div>
          </div>

          {/* 2. Header Title & Subtitle Skeleton */}
          <div className="mb-8 space-y-2">
            <Skeleton className="h-9 md:h-10 w-64 md:w-72 rounded-xl" />
            <Skeleton className="h-4 w-72 md:w-96 rounded-md bg-muted/60" />
          </div>

          {/* 3. Two-Column Builder Layout Skeleton */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column: Form Editor Panel Skeleton */}
            <Card className="glass-card p-6 border border-border/80 bg-card shadow-sm space-y-6">
              {/* Tab Pills */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-1.5 p-1 bg-muted/50 rounded-xl">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className={`h-8 rounded-lg ${i === 0 ? 'bg-sky-500/25' : 'bg-muted/80'}`} />
                ))}
              </div>

              {/* Form Input Fields */}
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Skeleton className="h-3.5 w-20 rounded" />
                    <Skeleton className="h-10 w-full rounded-xl" />
                  </div>
                  <div className="space-y-1.5">
                    <Skeleton className="h-3.5 w-16 rounded" />
                    <Skeleton className="h-10 w-full rounded-xl" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Skeleton className="h-3.5 w-16 rounded" />
                    <Skeleton className="h-10 w-full rounded-xl" />
                  </div>
                  <div className="space-y-1.5">
                    <Skeleton className="h-3.5 w-20 rounded" />
                    <Skeleton className="h-10 w-full rounded-xl" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Skeleton className="h-3.5 w-28 rounded" />
                  <Skeleton className="h-10 w-full rounded-xl" />
                </div>
              </div>

              {/* AI Generation Box Skeleton */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-sky-500/10 via-cyan-500/5 to-transparent border border-sky-500/25 space-y-3">
                <div className="flex items-center gap-2">
                  <Skeleton className="w-5 h-5 rounded-lg bg-sky-500/25" />
                  <Skeleton className="h-4 w-40 rounded bg-sky-500/20" />
                </div>
                <Skeleton className="h-20 w-full rounded-xl bg-card/60" />
                <Skeleton className="h-9 w-36 rounded-xl bg-sky-500/20" />
              </div>
            </Card>

            {/* Right Column: Live Resume Preview Document Skeleton */}
            <Card className="p-6 md:p-8 bg-card border border-border/80 shadow-md space-y-6">
              {/* Document Header */}
              <div className="text-center space-y-2 pb-4 border-b border-border/60">
                <Skeleton className="h-7 w-48 rounded mx-auto" />
                <Skeleton className="h-3.5 w-72 max-w-full rounded mx-auto bg-muted/70" />
              </div>

              {/* Section 1: Professional Summary */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-36 rounded bg-sky-500/20" />
                <div className="space-y-1.5 pt-1">
                  <Skeleton className="h-3 w-full rounded bg-muted/60" />
                  <Skeleton className="h-3 w-full rounded bg-muted/60" />
                  <Skeleton className="h-3 w-4/5 rounded bg-muted/60" />
                </div>
              </div>

              {/* Section 2: Work Experience */}
              <div className="space-y-3">
                <Skeleton className="h-4 w-44 rounded bg-sky-500/20" />
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-3.5 w-40 rounded" />
                    <Skeleton className="h-3 w-24 rounded bg-muted/60" />
                  </div>
                  <Skeleton className="h-3 w-32 rounded bg-muted/60" />
                  <div className="space-y-1 pl-3 border-l-2 border-border/60">
                    <Skeleton className="h-2.5 w-full rounded bg-muted/50" />
                    <Skeleton className="h-2.5 w-5/6 rounded bg-muted/50" />
                  </div>
                </div>
              </div>

              {/* Section 3: Education */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-28 rounded bg-sky-500/20" />
                <div className="flex items-center justify-between pt-1">
                  <Skeleton className="h-3.5 w-36 rounded" />
                  <Skeleton className="h-3 w-20 rounded bg-muted/60" />
                </div>
                <Skeleton className="h-3 w-48 rounded bg-muted/60" />
              </div>

              {/* Section 4: Skills */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-24 rounded bg-sky-500/20" />
                <div className="flex flex-wrap gap-2 pt-1">
                  {[64, 80, 56, 92, 72, 60, 88].map((w, idx) => (
                    <Skeleton key={idx} className="h-6 rounded-md bg-muted/60" style={{ width: `${w}px` }} />
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeBuilderSkeleton;
