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
import { StatCard, Spinner, Card } from '@/design-system';
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
  const { userProfile, isLoading } = useUser();
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
    } catch (error) {
      console.warn('Error fetching stats from Supabase, using local fallback:', error);
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
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-sky-500/25"
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Welcome back, {userProfile.name}!
              </h1>
              <p className="text-muted-foreground text-sm">
                Here is your career progress overview & AI intelligence summary.
              </p>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-500/10 via-cyan-500/10 to-transparent border border-sky-500/20 backdrop-blur-md">
            <TypewriterText text="Welcome to AI Career Navigator!" />
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
