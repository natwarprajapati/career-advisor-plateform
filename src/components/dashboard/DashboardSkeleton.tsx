import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Skeleton, Card } from "@/ui";

export const DashboardSkeleton: React.FC = () => {
  return (
    <DashboardLayout>
      {/* 1. Welcome Section Skeleton */}
      <div className="mb-8 space-y-5">
        {/* Top greeting bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3.5">
            <Skeleton className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-cyan-400/20 shrink-0" />
            <div className="space-y-2">
              <Skeleton className="h-7 sm:h-8 w-56 sm:w-72 rounded-xl" />
              <Skeleton className="h-4 w-72 sm:w-96 rounded-md bg-muted/60" />
            </div>
          </div>

          <Skeleton className="h-9 w-40 rounded-xl self-start sm:self-auto shrink-0" />
        </div>

        {/* Profile Strength Action Banner Skeleton */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-500/10 via-cyan-500/5 to-transparent border border-sky-500/25 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2.5 flex-1">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-36 rounded-md bg-sky-500/20" />
              <Skeleton className="h-4 w-20 rounded-full bg-sky-500/15" />
            </div>
            <Skeleton className="h-3.5 w-full max-w-xl rounded-md bg-muted/70" />
            <Skeleton className="h-3.5 w-4/5 max-w-lg rounded-md bg-muted/60" />
            <div className="w-full max-w-md h-2 bg-muted/80 rounded-full overflow-hidden mt-1">
              <Skeleton className="h-full w-2/3 bg-sky-500/40 rounded-full" />
            </div>
          </div>

          <Skeleton className="h-9 w-32 rounded-xl shrink-0 bg-sky-500/25 self-start sm:self-auto" />
        </div>

        {/* AI Career Intelligence Active Banner Skeleton */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-500/10 via-cyan-500/5 to-transparent border border-sky-500/20 backdrop-blur-xl flex items-center gap-3.5 shadow-sm">
          <Skeleton className="w-9 h-9 rounded-xl bg-sky-500/20 shrink-0" />
          <div className="space-y-1.5 flex-1">
            <Skeleton className="h-3 w-44 rounded bg-sky-500/20" />
            <Skeleton className="h-4 w-full max-w-2xl rounded-md bg-muted/70" />
          </div>
        </div>
      </div>

      {/* 2. Stats Grid Skeleton (4 Stat Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
        {[
          { label: "Total Resumes", color: "bg-sky-500/15" },
          { label: "Learning Tracks", color: "bg-emerald-500/15" },
          { label: "Job Pipeline", color: "bg-cyan-500/15" },
          { label: "AI Consultations", color: "bg-purple-500/15" },
        ].map((item, index) => (
          <Card
            key={index}
            variant="glass"
            className="p-5 relative overflow-hidden border border-border/70 shadow-sm"
          >
            <div className="flex items-center justify-between mb-3">
              <Skeleton className="h-3.5 w-24 rounded bg-muted/70" />
              <Skeleton className={`w-10 h-10 rounded-xl ${item.color}`} />
            </div>
            <Skeleton className="h-8 w-16 rounded-lg mb-2" />
            <Skeleton className="h-3 w-28 rounded bg-muted/50" />
          </Card>
        ))}
      </div>

      {/* 3. Quick Actions / Modules Skeleton */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-5">
          <Skeleton className="w-5 h-5 rounded bg-sky-500/20" />
          <Skeleton className="h-6 w-48 rounded-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card
              key={index}
              variant="glass"
              className="p-6 h-full flex flex-col justify-between border border-border/80 shadow-sm relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Skeleton className="w-12 h-12 rounded-2xl bg-sky-500/15" />
                </div>
                <Skeleton className="h-5 w-36 rounded-md mb-2 bg-muted/80" />
                <div className="space-y-1.5 mb-4">
                  <Skeleton className="h-3.5 w-full rounded bg-muted/60" />
                  <Skeleton className="h-3.5 w-4/5 rounded bg-muted/60" />
                </div>
              </div>
              <div className="pt-3 border-t border-border/40 flex items-center justify-between">
                <Skeleton className="h-3.5 w-24 rounded bg-sky-500/20" />
                <Skeleton className="w-3.5 h-3.5 rounded bg-sky-500/20" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardSkeleton;
