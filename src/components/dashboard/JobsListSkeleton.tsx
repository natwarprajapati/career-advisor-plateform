import React from "react";
import { Helmet } from "react-helmet-async";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Skeleton, Card } from "@/ui";

export const JobsListSkeleton: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Applied Jobs - Dashboard</title>
      </Helmet>

      <DashboardLayout>
        {/* Header Skeleton */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
          <div className="space-y-2">
            <Skeleton className="h-8 md:h-9 w-48 md:w-56 rounded-xl" />
            <Skeleton className="h-4 w-72 sm:w-96 rounded-md bg-muted/60" />
          </div>
          <Skeleton className="h-10 w-44 rounded-xl self-start sm:self-auto shrink-0 bg-sky-500/20" />
        </div>

        {/* Applied Jobs List Skeleton */}
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <Card
              key={index}
              variant="glass"
              className="p-5 md:p-6 border border-border/80 shadow-sm space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <Skeleton className="w-9 h-9 rounded-xl bg-cyan-500/15 shrink-0" />
                    <div className="space-y-1">
                      <Skeleton className="h-5 w-52 sm:w-64 rounded-md" />
                      <div className="flex items-center gap-2">
                        <Skeleton className="w-3.5 h-3.5 rounded bg-muted/60" />
                        <Skeleton className="h-3 w-32 rounded bg-muted/60" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center">
                  <Skeleton className="h-6 w-20 rounded-full bg-cyan-500/15" />
                  <Skeleton className="w-8 h-8 rounded-lg bg-muted/60" />
                </div>
              </div>

              {/* Cover Letter Snippet Box Skeleton */}
              <div className="p-3.5 rounded-xl bg-muted/40 border border-border/50 space-y-2">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-3.5 w-28 rounded bg-sky-500/20" />
                  <Skeleton className="h-6 w-24 rounded-lg" />
                </div>
                <Skeleton className="h-3 w-full rounded bg-muted/60" />
                <Skeleton className="h-3 w-4/5 rounded bg-muted/60" />
              </div>

              {/* Date Row */}
              <div className="flex items-center justify-between pt-2 border-t border-border/40 text-xs">
                <div className="flex items-center gap-1.5">
                  <Skeleton className="w-3.5 h-3.5 rounded bg-muted/60" />
                  <Skeleton className="h-3 w-28 rounded bg-muted/60" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </DashboardLayout>
    </>
  );
};

export default JobsListSkeleton;
