import React from "react";
import { Helmet } from "react-helmet-async";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Skeleton, Card } from "@/ui";

export const ChatHistoryListSkeleton: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Chat History - Dashboard</title>
      </Helmet>

      <DashboardLayout>
        {/* Header Skeleton */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
          <div className="space-y-2">
            <Skeleton className="h-8 md:h-9 w-48 md:w-56 rounded-xl" />
            <Skeleton className="h-4 w-72 sm:w-96 rounded-md bg-muted/60" />
          </div>
          <Skeleton className="h-10 w-44 rounded-xl self-start sm:self-auto shrink-0 bg-purple-500/20" />
        </div>

        {/* Chat History Rows Skeleton */}
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <Card
              key={index}
              variant="glass"
              className="p-5 flex items-center justify-between border border-border/80 shadow-sm"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0 pr-4">
                <Skeleton className="w-10 h-10 rounded-xl bg-purple-500/15 shrink-0" />
                <div className="space-y-2 flex-1 min-w-0">
                  <Skeleton className="h-4 w-52 sm:w-80 rounded-md" />
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-3.5 h-3.5 rounded bg-muted/60" />
                    <Skeleton className="h-3 w-36 rounded bg-muted/60" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Skeleton className="w-8 h-8 rounded-lg bg-muted/60" />
                <Skeleton className="h-8 w-24 rounded-lg bg-muted/70 hidden sm:block" />
              </div>
            </Card>
          ))}
        </div>
      </DashboardLayout>
    </>
  );
};

export default ChatHistoryListSkeleton;
