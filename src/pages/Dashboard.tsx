import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  FileText,
  BookOpen,
  Briefcase,
  MessageSquare,
  Target,
  Upload,
  Sparkles,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { StatCard, Spinner, Card } from '@/ui';
import { supabase } from '@/integrations/supabase/client';
import TypewriterText from '@/components/dashboard/TypewriterText';

interface DashboardStats {
  resumesCount: number;
  resourcesCount: number;
  jobsCount: number;
  chatsCount: number;
}

const featureCards = [
  {
    title: 'Resume Screening',
    description: 'Upload and analyze your resume with AI ATS diagnostics',
    icon: Upload,
    href: '/resume-screening',
    gradient: 'from-blue-500 to-cyan-500',
    tag: 'ATS Scorer',
  },
  {
    title: 'Resume Builder',
    description: 'Create ATS-optimized resumes with live PDF export',
    icon: FileText,
    href: '/resume-builder',
    gradient: 'from-purple-500 to-pink-500',
    tag: 'AI Wizard',
  },
  {
    title: 'Skill Gap Analysis',
    description: 'Identify skills to develop and get phased roadmaps',
    icon: Target,
    href: '/skill-gap',
    gradient: 'from-amber-500 to-orange-500',
    tag: 'Roadmap',
  },
  {
    title: 'Learning Resources',
    description: 'Get personalized learning paths and curated courses',
    icon: BookOpen,
    href: '/resources',
    gradient: 'from-emerald-500 to-teal-500',
    tag: 'Courses',
  },
  {
    title: 'Job Matching',
    description: 'Find jobs that match your profile and generate tailored cover letters',
    icon: Briefcase,
    href: '/jobs',
    gradient: 'from-indigo-500 to-purple-500',
    tag: 'Recommendations',
  },
  {
    title: 'Career Chat',
    description: 'Consult with your AI career advisor on strategy and interviews',
    icon: MessageSquare,
    href: '/resources',
    gradient: 'from-pink-500 to-rose-500',
    tag: 'AI Mentor',
  },
];

const Dashboard = () => {
  const { userProfile, isLoading, profileCompletion } = useUser();
  const navigate = useNavigate();
  const [stats, setStats] = useState<DashboardStats>({
    resumesCount: 0,
    resourcesCount: 0,
    jobsCount: 0,
    chatsCount: 0,
  });

  useEffect(() => {
    if (!isLoading && !userProfile) {
      navigate('/?getStarted=true', { replace: true, state: { fromDashboard: true } });
    }
  }, [userProfile, isLoading, navigate]);

  const fetchStats = useCallback(async () => {
    if (!userProfile) return;

    try {
      const [resumes, resources, jobs, chats] = await Promise.all([
        supabase.from('resumes').select('id', { count: 'exact' }).eq('user_profile_id', userProfile.id),
        supabase.from('resources').select('id', { count: 'exact' }).eq('user_profile_id', userProfile.id),
        supabase.from('jobs').select('id', { count: 'exact' }).eq('user_profile_id', userProfile.id),
        supabase.from('chat_history').select('id', { count: 'exact' }).eq('user_profile_id', userProfile.id),
      ]);

      const localApplied = localStorage.getItem('career_nav_applied_jobs');
      const localAppliedCount = localApplied ? JSON.parse(localApplied).length : 0;

      setStats({
        resumesCount: resumes.count || 0,
        resourcesCount: resources.count || 0,
        jobsCount: jobs.count || localAppliedCount || 0,
        chatsCount: chats.count || 0,
      });
    } catch {
      const localApplied = localStorage.getItem('career_nav_applied_jobs');
      const localAppliedCount = localApplied ? JSON.parse(localApplied).length : 0;
      setStats((prev) => ({
        ...prev,
        jobsCount: localAppliedCount,
      }));
    }
  }, [userProfile]);

  useEffect(() => {
    if (userProfile) {
      fetchStats();
    }
  }, [userProfile, fetchStats]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Spinner size="xl" label="Loading Career Dashboard..." variant="primary" />
      </div>
    );
  }

  if (!userProfile) return null;

  const displayName = userProfile.name && userProfile.name !== 'Candidate' && userProfile.name !== 'User'
    ? userProfile.name
    : userProfile.phone || 'User';

  return (
    <>
      <Helmet>
        <title>Dashboard - AI Career Navigator</title>
        <meta name="description" content="Your personalized career dashboard" />
      </Helmet>

      <DashboardLayout>
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-sky-500/25 shrink-0"
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  Welcome back, {displayName}!
                </h1>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Here is your career progress overview & AI intelligence summary.
                </p>
              </div>
            </div>

            <Link
              to="/dashboard/profile"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/80 hover:border-sky-500/50 text-xs font-semibold text-foreground hover:text-sky-500 transition-all shadow-sm shrink-0"
            >
              <span>Profile Setup ({profileCompletion}%)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Profile Strength Action Banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-500/15 via-cyan-500/10 to-transparent border border-sky-500/30 backdrop-blur-md mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                  Step-Wise Profile Setup
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-700 dark:text-sky-300">
                  {profileCompletion}% Complete
                </span>
              </div>
              <p className="text-xs text-foreground font-medium">
                {profileCompletion === 100
                  ? "🎉 All-Star Profile! Your career details, skills, education, and resume are completely configured."
                  : "Complete your step-wise career details (Personal info, Career stage, Skills, Education & Resume) to unlock precision job matching."}
              </p>
              <div className="w-full max-w-md h-2 bg-muted/80 rounded-full overflow-hidden mt-2">
                <div
                  className="h-full bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full transition-all duration-500"
                  style={{ width: `${profileCompletion}%` }}
                />
              </div>
            </div>

            <Link
              to="/dashboard/profile"
              className="btn-primary py-2 px-4 text-xs font-semibold inline-flex items-center justify-center gap-1.5 shrink-0 shadow-md shadow-sky-500/20"
            >
              {profileCompletion === 100 ? "Manage Profile" : "Complete Steps"}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-500/10 via-cyan-500/10 to-transparent border border-sky-500/20 backdrop-blur-xl flex items-center gap-3.5 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-500 shrink-0">
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mb-0.5">
                AI Career Intelligence Active
              </span>
              <TypewriterText text="Your personalized career path is optimized. Explore skill gap roadmap, tailor resumes, and discover high-match jobs." />
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10"
        >
          <StatCard
            title="Total Resumes"
            value={stats.resumesCount}
            icon={<FileText className="w-5 h-5" />}
            gradient="sky"
            subtitle="Uploaded & generated"
            onClick={() => navigate('/dashboard/resumes/created')}
          />
          <StatCard
            title="Learning Tracks"
            value={stats.resourcesCount}
            icon={<BookOpen className="w-5 h-5" />}
            gradient="emerald"
            subtitle="Active skill modules"
            onClick={() => navigate('/dashboard/resources')}
          />
          <StatCard
            title="Job Pipeline"
            value={stats.jobsCount}
            icon={<Briefcase className="w-5 h-5" />}
            gradient="cyan"
            subtitle="Tracked applications"
            onClick={() => navigate('/dashboard/jobs')}
          />
          <StatCard
            title="AI Consultations"
            value={stats.chatsCount}
            icon={<MessageSquare className="w-5 h-5" />}
            gradient="purple"
            subtitle="Mentor sessions"
            onClick={() => navigate('/dashboard/chat-history')}
          />
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-sky-500" />
            AI Career Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Link to={card.href} className="block h-full group">
                  <Card hover="lift" className="p-6 h-full flex flex-col justify-between border border-border/80">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${card.gradient} flex items-center justify-center text-white shadow-md`}>
                          <card.icon className="w-6 h-6" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-1.5 group-hover:text-sky-500 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                        {card.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-sky-500 text-xs font-semibold pt-2 border-t border-border/40">
                      Launch module
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
