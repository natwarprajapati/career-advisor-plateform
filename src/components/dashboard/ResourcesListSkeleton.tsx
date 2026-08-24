import React from "react";
import { Helmet } from "react-helmet-async";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Skeleton, Card } from "@/ui";

export const ResourcesListSkeleton: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Learning Resources - Dashboard</title>
      </Helmet>

      <DashboardLayout>
        {/* Header Skeleton */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
          <div className="space-y-2">
            <Skeleton className="h-8 md:h-9 w-56 md:w-64 rounded-xl" />
            <Skeleton className="h-4 w-72 sm:w-96 rounded-md bg-muted/60" />
          </div>
          <Skeleton className="h-10 w-36 rounded-xl self-start sm:self-auto shrink-0 bg-emerald-500/20" />
        </div>

        {/* Topic Group Skeleton 1 */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2">
            <Skeleton className="w-5 h-5 rounded bg-emerald-500/20" />
            <Skeleton className="h-6 w-44 rounded-lg" />
            <Skeleton className="h-5 w-16 rounded-full bg-muted/60" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card
                key={index}
                variant="glass"
                className="p-5 flex flex-col justify-between border border-border/80 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Skeleton className="w-10 h-10 rounded-xl bg-emerald-500/15" />
                    <Skeleton className="w-7 h-7 rounded-lg bg-muted/60" />
                  </div>
                  <Skeleton className="h-5 w-4/5 rounded-md mb-2 bg-muted/90" />
                  <div className="space-y-1.5 mb-3">
                    <Skeleton className="h-3.5 w-full rounded bg-muted/60" />
                    <Skeleton className="h-3.5 w-3/4 rounded bg-muted/60" />
                  </div>
                  <div className="flex items-center gap-2 pt-2 border-t border-border/40">
                    <Skeleton className="w-3.5 h-3.5 rounded bg-muted/60" />
                    <Skeleton className="h-3 w-28 rounded bg-muted/60" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Topic Group Skeleton 2 */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Skeleton className="w-5 h-5 rounded bg-emerald-500/20" />
            <Skeleton className="h-6 w-36 rounded-lg" />
            <Skeleton className="h-5 w-16 rounded-full bg-muted/60" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card
                key={index}
                variant="glass"
                className="p-5 flex flex-col justify-between border border-border/80 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Skeleton className="w-10 h-10 rounded-xl bg-emerald-500/15" />
                    <Skeleton className="w-7 h-7 rounded-lg bg-muted/60" />
                  </div>
                  <Skeleton className="h-5 w-4/5 rounded-md mb-2 bg-muted/90" />
                  <div className="space-y-1.5 mb-3">
                    <Skeleton className="h-3.5 w-full rounded bg-muted/60" />
                    <Skeleton className="h-3.5 w-3/4 rounded bg-muted/60" />
                  </div>
                  <div className="flex items-center gap-2 pt-2 border-t border-border/40">
                    <Skeleton className="w-3.5 h-3.5 rounded bg-muted/60" />
                    <Skeleton className="h-3 w-28 rounded bg-muted/60" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default ResourcesListSkeleton;
