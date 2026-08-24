import React from "react";
import { Helmet } from "react-helmet-async";
import { Skeleton, Card } from "@/ui";

export const ResourceChatSkeleton: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Learning Resources Chat - Loading...</title>
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container-custom py-8 pt-12 md:pt-16 max-w-4xl mx-auto">
          {/* Back link */}
          <div className="flex items-center gap-2 mb-8">
            <Skeleton className="w-4 h-4 rounded" />
            <Skeleton className="h-4 w-36 rounded-md" />
          </div>

          {/* Title & Subtitle */}
          <div className="mb-8 space-y-2">
            <Skeleton className="h-9 md:h-10 w-72 md:w-80 rounded-xl" />
            <Skeleton className="h-4 w-80 md:w-96 rounded-md bg-muted/60" />
          </div>

          {/* Main Chat Grid */}
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Left Sidebar: Skills & Topics Skeleton */}
            <Card className="glass-card p-4 lg:col-span-1 h-fit border border-border/80 bg-card space-y-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Skeleton className="w-4 h-4 rounded bg-sky-500/20" />
                  <Skeleton className="h-4 w-24 rounded" />
                </div>
                <Skeleton className="h-3 w-36 rounded bg-muted/60" />
              </div>

              <div className="flex gap-1.5">
                <Skeleton className="h-8 flex-1 rounded-lg" />
                <Skeleton className="h-8 w-8 rounded-lg" />
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {[55, 70, 60].map((w, idx) => (
                  <Skeleton key={idx} className="h-5 rounded bg-sky-500/15" style={{ width: `${w}px` }} />
                ))}
              </div>

              <div className="pt-3 border-t border-border/50 space-y-2">
                <Skeleton className="h-3 w-28 rounded bg-muted/70" />
                <div className="space-y-1.5">
                  {[120, 140, 110, 130].map((w, idx) => (
                    <Skeleton key={idx} className="h-7 w-full rounded-lg bg-muted/60" />
                  ))}
                </div>
              </div>
            </Card>

            {/* Right Panel: Chat Messages & Input Skeleton */}
            <Card className="glass-card p-4 lg:col-span-3 border border-border/80 bg-card shadow-sm flex flex-col h-[560px]">
              {/* Chat Header */}
              <div className="flex items-center justify-between pb-3 border-b border-border/60 mb-4">
                <div className="flex items-center gap-2.5">
                  <Skeleton className="w-9 h-9 rounded-xl bg-sky-500/20 shrink-0" />
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-36 rounded" />
                    <Skeleton className="h-2.5 w-24 rounded bg-muted/60" />
                  </div>
                </div>
                <Skeleton className="h-6 w-20 rounded-full bg-emerald-500/15" />
              </div>

              {/* Chat Message Bubbles */}
              <div className="flex-1 space-y-4 overflow-hidden pr-2">
                {/* Bot Greeting */}
                <div className="flex items-start gap-3">
                  <Skeleton className="w-8 h-8 rounded-xl bg-sky-500/20 shrink-0" />
                  <div className="p-3.5 rounded-2xl rounded-tl-sm bg-muted/50 border border-border/60 max-w-md space-y-2">
                    <Skeleton className="h-3.5 w-64 rounded" />
                    <Skeleton className="h-3 w-52 rounded bg-muted/60" />
                  </div>
                </div>

                {/* User Message */}
                <div className="flex items-start justify-end gap-3">
                  <div className="p-3.5 rounded-2xl rounded-tr-sm bg-sky-500/15 border border-sky-500/30 max-w-sm space-y-1.5">
                    <Skeleton className="h-3.5 w-48 rounded bg-sky-500/30" />
                  </div>
                  <Skeleton className="w-8 h-8 rounded-xl bg-muted/80 shrink-0" />
                </div>

                {/* Bot Response */}
                <div className="flex items-start gap-3">
                  <Skeleton className="w-8 h-8 rounded-xl bg-sky-500/20 shrink-0" />
                  <div className="p-3.5 rounded-2xl rounded-tl-sm bg-muted/50 border border-border/60 max-w-lg space-y-2">
                    <Skeleton className="h-3.5 w-full rounded" />
                    <Skeleton className="h-3.5 w-4/5 rounded" />
                    <Skeleton className="h-3 w-3/4 rounded bg-muted/60" />
                  </div>
                </div>
              </div>

              {/* Bottom Input Area */}
              <div className="pt-3 border-t border-border/60 flex gap-2">
                <Skeleton className="h-10 flex-1 rounded-xl" />
                <Skeleton className="h-10 w-24 rounded-xl bg-sky-500/25" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourceChatSkeleton;
