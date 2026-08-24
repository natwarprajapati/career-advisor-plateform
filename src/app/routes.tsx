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

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <Spinner size="lg" label="Loading..." />
  </div>
);

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/resume-screening" element={<ResumeScreening />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/resources" element={<ResourceChat />} />
        <Route path="/skill-gap" element={<SkillGap />} />
        <Route path="/jobs" element={<JobMatching />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/profile" element={<Navigate to="/dashboard/profile" replace />} />
        <Route path="/dashboard/resumes/created" element={<ResumesCreated />} />
        <Route path="/dashboard/resumes/uploaded" element={<ResumesUploaded />} />
        <Route path="/dashboard/resources" element={<ResourcesList />} />
        <Route path="/dashboard/jobs" element={<JobsList />} />
        <Route path="/dashboard/chat-history" element={<ChatHistoryList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
