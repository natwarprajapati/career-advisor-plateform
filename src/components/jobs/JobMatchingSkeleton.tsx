import React from "react";
import { Helmet } from "react-helmet-async";
import { Skeleton, Card } from "@/ui";

export const JobMatchingSkeleton: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Job Matching - Loading...</title>
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container-custom py-8 pt-12 md:pt-16 max-w-5xl mx-auto">
          {/* Back link */}
          <div className="flex items-center gap-2 mb-8">
            <Skeleton className="w-4 h-4 rounded" />
            <Skeleton className="h-4 w-36 rounded-md" />
          </div>

          {/* Header Title, Subtitle & Badge */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="space-y-2">
              <Skeleton className="h-9 md:h-10 w-56 md:w-64 rounded-xl" />
              <Skeleton className="h-4 w-72 md:w-96 rounded-md bg-muted/60" />
            </div>
            <Skeleton className="h-8 w-32 rounded-xl bg-sky-500/15 shrink-0" />
          </div>

          {/* Search Bar Skeleton */}
          <Card className="glass-card p-4 mb-6 border border-border/80 bg-card">
            <div className="flex gap-4">
              <Skeleton className="h-10 flex-1 rounded-xl" />
              <Skeleton className="h-10 w-24 rounded-xl" />
            </div>
          </Card>

          {/* Info Banner Skeleton */}
          <Card className="glass-card p-4 sm:p-5 mb-6 bg-gradient-to-r from-sky-500/10 via-cyan-500/5 to-transparent border border-sky-500/25">
            <div className="space-y-2">
              <Skeleton className="h-3.5 w-44 rounded bg-sky-500/25" />
              <Skeleton className="h-3.5 w-full rounded bg-muted/70" />
              <Skeleton className="h-3.5 w-4/5 rounded bg-muted/60" />
            </div>
          </Card>

          {/* Job List Cards Skeleton */}
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} className="p-6 border border-border/80 bg-card shadow-sm space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1.5">
                        <Skeleton className="h-5 w-56 sm:w-72 rounded-md" />
                        <div className="flex items-center gap-2">
                          <Skeleton className="w-4 h-4 rounded bg-sky-500/20" />
                          <Skeleton className="h-3.5 w-32 rounded" />
                        </div>
                      </div>
                      <Skeleton className="w-8 h-8 rounded-lg bg-muted/60" />
                    </div>

                    <div className="flex flex-wrap gap-4 pt-1">
                      <Skeleton className="h-3.5 w-28 rounded bg-muted/60" />
                      <Skeleton className="h-3.5 w-32 rounded bg-muted/60" />
                      <Skeleton className="h-3.5 w-20 rounded bg-muted/60" />
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <Skeleton className="h-3 w-full rounded bg-muted/60" />
                      <Skeleton className="h-3 w-5/6 rounded bg-muted/60" />
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {[60, 75, 65, 80].map((w, idx) => (
                        <Skeleton key={idx} className="h-6 rounded-md bg-muted/60" style={{ width: `${w}px` }} />
                      ))}
                    </div>
                  </div>

                  {/* Right Side: Score & Action Buttons */}
                  <div className="flex lg:flex-col items-center lg:items-end justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-border/40 shrink-0">
                    <div className="flex items-center gap-2">
                      <Skeleton className="w-10 h-10 rounded-full bg-emerald-500/15" />
                      <div className="space-y-1 hidden sm:block">
                        <Skeleton className="h-3.5 w-16 rounded" />
                        <Skeleton className="h-2.5 w-12 rounded bg-muted/60" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Skeleton className="h-9 w-28 rounded-xl" />
                      <Skeleton className="h-9 w-28 rounded-xl bg-sky-500/25" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobMatchingSkeleton;
