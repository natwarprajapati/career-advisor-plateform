import React from "react";
import { Helmet } from "react-helmet-async";
import { Skeleton, Card } from "@/ui";

export const SkillGapSkeleton: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Skill Gap Detection - Loading...</title>
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container-custom py-8 pt-12 md:pt-16 max-w-5xl mx-auto">
          {/* Back link */}
          <div className="flex items-center gap-2 mb-8">
            <Skeleton className="w-4 h-4 rounded" />
            <Skeleton className="h-4 w-36 rounded-md" />
          </div>

          {/* Title & Subtitle */}
          <div className="mb-8 space-y-2">
            <Skeleton className="h-9 md:h-10 w-64 md:w-72 rounded-xl" />
            <Skeleton className="h-4 w-80 md:w-96 rounded-md bg-muted/60" />
          </div>

          {/* Main Input Card Skeleton */}
          <Card className="glass-card p-6 md:p-8 border border-border/80 bg-card shadow-sm space-y-6">
            {/* Current Skills Section */}
            <div className="space-y-2.5">
              <Skeleton className="h-4 w-36 rounded" />
              <div className="flex gap-2">
                <Skeleton className="h-10 flex-1 rounded-xl" />
                <Skeleton className="h-10 w-11 rounded-xl" />
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {[80, 96, 64, 110, 88].map((w, idx) => (
                  <Skeleton key={idx} className="h-6 rounded-md bg-sky-500/15" style={{ width: `${w}px` }} />
                ))}
              </div>
            </div>

            {/* Target Role Section */}
            <div className="space-y-2.5">
              <Skeleton className="h-4 w-28 rounded" />
              <Skeleton className="h-10 w-full rounded-xl" />
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <Skeleton className="h-3.5 w-16 rounded bg-muted/60" />
                {[110, 95, 120, 90, 105].map((w, idx) => (
                  <Skeleton key={idx} className="h-7 rounded-lg bg-muted/60" style={{ width: `${w}px` }} />
                ))}
              </div>
            </div>

            {/* Analyze Action Button */}
            <Skeleton className="h-11 w-full rounded-xl bg-sky-500/25 mt-4" />
          </Card>
        </div>
      </div>
    </>
  );
};

export default SkillGapSkeleton;
