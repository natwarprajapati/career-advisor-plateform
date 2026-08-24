import React from "react";
import { Helmet } from "react-helmet-async";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Skeleton, Card } from "@/ui";

export const ProfileSkeleton: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>My Profile & Career Details - Dashboard</title>
      </Helmet>

      <DashboardLayout>
        <div className="max-w-5xl mx-auto space-y-6 pb-12">
          {/* 1. Header Card Skeleton */}
          <div className="relative p-6 sm:p-8 rounded-3xl border border-border/60 bg-gradient-to-br from-card via-card/90 to-sky-500/5 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Skeleton className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-cyan-400/20 shrink-0" />
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-7 sm:h-8 w-44 sm:w-56 rounded-xl" />
                    <Skeleton className="h-5 w-16 rounded-full bg-sky-500/20" />
                  </div>
                  <Skeleton className="h-4 w-60 sm:w-80 rounded-md bg-muted/70" />
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <Skeleton className="h-3.5 w-24 rounded-md bg-muted/60" />
                    <Skeleton className="h-3.5 w-28 rounded-md bg-muted/60" />
                    <Skeleton className="h-3.5 w-36 rounded-md bg-muted/60" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
                <Skeleton className="h-8 w-28 rounded-xl" />
              </div>
            </div>

            {/* Profile Completion Progress Bar Skeleton */}
            <div className="mt-6 pt-4 border-t border-border/50">
              <div className="flex items-center justify-between text-xs mb-2">
                <Skeleton className="h-4 w-36 rounded bg-sky-500/20" />
                <Skeleton className="h-3.5 w-28 rounded bg-muted/60" />
              </div>
              <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
                <Skeleton className="h-full w-2/3 bg-gradient-to-r from-sky-500/40 to-cyan-400/40 rounded-full" />
              </div>
            </div>
          </div>

          {/* 2. Overview Section Skeleton Cards */}
          <div className="space-y-6">
            {/* Card 1: Work & Career Details Skeleton */}
            <Card className="p-6 border border-border/80 bg-card shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-4 h-4 rounded bg-sky-500/20" />
                    <Skeleton className="h-5 w-44 rounded-md" />
                  </div>
                  <Skeleton className="h-3.5 w-52 rounded bg-muted/60" />
                </div>
                <Skeleton className="h-7 w-16 rounded-lg" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="p-3 bg-muted/40 rounded-xl space-y-1.5 border border-border/40">
                    <Skeleton className="h-3 w-20 rounded bg-muted/70" />
                    <Skeleton className="h-4 w-28 rounded bg-muted/90" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Card 2: Key Skills & Domain Skeleton */}
            <Card className="p-6 border border-border/80 bg-card shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-4 h-4 rounded bg-sky-500/20" />
                    <Skeleton className="h-5 w-40 rounded-md" />
                  </div>
                  <Skeleton className="h-3.5 w-56 rounded bg-muted/60" />
                </div>
                <Skeleton className="h-7 w-16 rounded-lg" />
              </div>

              <div className="mb-4 space-y-1.5">
                <Skeleton className="h-3 w-12 rounded bg-muted/70" />
                <Skeleton className="h-6 w-24 rounded-md bg-sky-500/20" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-3 w-12 rounded bg-muted/70" />
                <div className="flex flex-wrap gap-2">
                  {[80, 96, 64, 112, 88, 72, 128].map((w, idx) => (
                    <Skeleton key={idx} className="h-7 rounded-lg bg-muted/60" style={{ width: `${w}px` }} />
                  ))}
                </div>
              </div>
            </Card>

            {/* Card 3: Education & Degree Skeleton */}
            <Card className="p-6 border border-border/80 bg-card shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-4 h-4 rounded bg-sky-500/20" />
                    <Skeleton className="h-5 w-40 rounded-md" />
                  </div>
                  <Skeleton className="h-3.5 w-60 rounded bg-muted/60" />
                </div>
                <Skeleton className="h-7 w-16 rounded-lg" />
              </div>

              <div className="p-4 bg-muted/40 rounded-xl space-y-2 border border-border/40">
                <Skeleton className="h-4 w-48 rounded bg-muted/90" />
                <Skeleton className="h-3.5 w-72 rounded bg-muted/60" />
              </div>
            </Card>

            {/* Card 4: Resume & Online Profiles Skeleton */}
            <Card className="p-6 border border-border/80 bg-card shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-4 h-4 rounded bg-sky-500/20" />
                    <Skeleton className="h-5 w-48 rounded-md" />
                  </div>
                  <Skeleton className="h-3.5 w-56 rounded bg-muted/60" />
                </div>
                <Skeleton className="h-7 w-16 rounded-lg" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-muted/40 rounded-xl border border-border/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Skeleton className="w-5 h-5 rounded bg-sky-500/20 shrink-0" />
                    <div className="space-y-1">
                      <Skeleton className="h-3.5 w-32 rounded" />
                      <Skeleton className="h-2.5 w-20 rounded bg-muted/60" />
                    </div>
                  </div>
                  <Skeleton className="h-3.5 w-12 rounded bg-sky-500/20" />
                </div>

                <div className="p-4 bg-muted/40 rounded-xl border border-border/60 flex flex-col justify-center gap-2">
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-4 h-4 rounded bg-sky-500/20 shrink-0" />
                    <Skeleton className="h-3.5 w-28 rounded" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-4 h-4 rounded bg-muted/70 shrink-0" />
                    <Skeleton className="h-3.5 w-28 rounded" />
                  </div>
                </div>
              </div>
            </Card>

            {/* 3. Action Modules Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {[
                { color: "bg-blue-500/15" },
                { color: "bg-indigo-500/15" },
                { color: "bg-amber-500/15" },
              ].map((mod, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-border/80 bg-card space-y-2"
                >
                  <Skeleton className={`w-8 h-8 rounded-lg ${mod.color}`} />
                  <Skeleton className="h-4 w-28 rounded" />
                  <Skeleton className="h-3 w-40 rounded bg-muted/60" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default ProfileSkeleton;
