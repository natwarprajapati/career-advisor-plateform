import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Spinner } from "@/ui";

// Route-level code splitting
const Index = lazy(() => import("@/pages/Index"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const ResumeScreening = lazy(() => import("@/pages/ResumeScreening"));
const ResumeBuilder = lazy(() => import("@/pages/ResumeBuilder"));
const ResourceChat = lazy(() => import("@/pages/ResourceChat"));
const SkillGap = lazy(() => import("@/pages/SkillGap"));
const JobMatching = lazy(() => import("@/pages/JobMatching"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Profile = lazy(() => import("@/pages/dashboard/Profile"));
const ResumesCreated = lazy(() => import("@/pages/dashboard/ResumesCreated"));
const ResumesUploaded = lazy(() => import("@/pages/dashboard/ResumesUploaded"));
const ResourcesList = lazy(() => import("@/pages/dashboard/ResourcesList"));
const JobsList = lazy(() => import("@/pages/dashboard/JobsList"));
const ChatHistoryList = lazy(() => import("@/pages/dashboard/ChatHistoryList"));

import { ProtectedRoute } from "@/features/auth";
import { HomeFallback } from "@/components/home";
import {
  DashboardSkeleton,
  ProfileSkeleton,
  ResumesSkeleton,
  ResourcesListSkeleton,
  JobsListSkeleton,
  ChatHistoryListSkeleton
} from "@/components/dashboard";
import { ResumeBuilderSkeleton } from "@/components/resume-builder";
import { SkillGapSkeleton } from "@/components/skill-gap";
import { ResourceChatSkeleton } from "@/components/resources";
import { JobMatchingSkeleton } from "@/components/jobs";

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <Spinner size="lg" label="Loading..." />
  </div>
);

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<HomeFallback />}>
              <Index />
            </Suspense>
          }
        />
        <Route path="/resume-screening" element={<ResumeScreening />} />
        <Route
          path="/resume-builder"
          element={
            <Suspense fallback={<ResumeBuilderSkeleton />}>
              <ResumeBuilder />
            </Suspense>
          }
        />
        <Route
          path="/resources"
          element={
            <Suspense fallback={<ResourceChatSkeleton />}>
              <ResourceChat />
            </Suspense>
          }
        />
        <Route
          path="/skill-gap"
          element={
            <Suspense fallback={<SkillGapSkeleton />}>
              <SkillGap />
            </Suspense>
          }
        />
        <Route
          path="/jobs"
          element={
            <Suspense fallback={<JobMatchingSkeleton />}>
              <JobMatching />
            </Suspense>
          }
        />
        
        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Suspense fallback={<DashboardSkeleton />}>
                <Dashboard />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/profile"
          element={
            <ProtectedRoute>
              <Suspense fallback={<ProfileSkeleton />}>
                <Profile />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route path="/profile" element={<Navigate to="/dashboard/profile" replace />} />
        <Route
          path="/dashboard/resumes/created"
          element={
            <ProtectedRoute>
              <Suspense fallback={<ResumesSkeleton />}>
                <ResumesCreated />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/resumes/uploaded"
          element={
            <ProtectedRoute>
              <Suspense fallback={<ResumesSkeleton />}>
                <ResumesUploaded />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/resources"
          element={
            <ProtectedRoute>
              <Suspense fallback={<ResourcesListSkeleton />}>
                <ResourcesList />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/jobs"
          element={
            <ProtectedRoute>
              <Suspense fallback={<JobsListSkeleton />}>
                <JobsList />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/chat-history"
          element={
            <ProtectedRoute>
              <Suspense fallback={<ChatHistoryListSkeleton />}>
                <ChatHistoryList />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
