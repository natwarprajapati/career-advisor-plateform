import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FileText, Plus, Calendar, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';
import { supabase } from '@/integrations/supabase/client';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { ResumesSkeleton } from '@/components/dashboard';
import { Button, Card, EmptyState } from '@/ui';
import { useToast } from '@/hooks/use-toast';

interface Resume {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
}

const ResumesCreated = () => {
  const { userProfile, isLoading } = useUser();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (!isLoading && !userProfile) {
      navigate('/?getStarted=true', { replace: true, state: { fromDashboard: true } });
    }
  }, [userProfile, isLoading, navigate]);

  const fetchResumes = useCallback(async () => {
    if (!userProfile) return;

    try {
      const { data, error } = await supabase
        .from('resumes')
        .select('*')
        .eq('user_profile_id', userProfile.id)
        .eq('type', 'created')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setResumes(data || []);
    } catch {
      // Silent error fallback
    } finally {
      setLoading(false);
    }
  }, [userProfile]);

  useEffect(() => {
    if (userProfile) {
      fetchResumes();
    }
  }, [userProfile, fetchResumes]);

  const deleteResume = async (id: string) => {
    try {
      const { error } = await supabase.from('resumes').delete().eq('id', id);
      if (error) throw error;
      setResumes((prev) => prev.filter((r) => r.id !== id));
      toast({ title: 'Resume deleted successfully' });
    } catch (error) {
      toast({ title: 'Failed to delete resume', variant: 'destructive' });
    }
  };

  if (isLoading || loading) {
    return (
      <>
        <Helmet>
          <title>Created Resumes - Dashboard</title>
        </Helmet>
        <ResumesSkeleton />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Created Resumes - Dashboard</title>
      </Helmet>

      <DashboardLayout>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">Created Resumes</h1>
            <p className="text-muted-foreground text-sm">ATS-optimized resumes you have built with AI wizard</p>
          </div>
          <Button
            variant="primary"
            leftIcon={<Plus className="w-4 h-4" />}
            onClick={() => navigate('/resume-builder')}
          >
            Create New Resume
          </Button>
        </div>

        {resumes.length === 0 ? (
          <EmptyState
            icon={<FileText className="w-8 h-8 text-sky-500" />}
            title="No Resumes Created Yet"
            description="Start building your first ATS-friendly resume draft with our step-by-step AI wizard and export to PDF."
            actionLabel="Create Resume"
            actionIcon={<Plus className="w-4 h-4" />}
            onAction={() => navigate('/resume-builder')}
          />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resumes.map((resume, index) => (
              <motion.div
                key={resume.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  variant="glass"
                  hover="lift"
                  className="p-5 cursor-pointer flex flex-col justify-between group"
                  onClick={() => navigate(`/resume-builder?id=${resume.id}`)}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-500 flex items-center justify-center">
                        <FileText className="w-5 h-5" />
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteResume(resume.id);
                        }}
                        className="p-2 text-muted-foreground hover:text-rose-500 rounded-lg hover:bg-rose-500/10 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <h3 className="font-bold text-foreground mb-1.5 truncate">{resume.title}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      Created: {new Date(resume.created_at).toLocaleDateString()}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </DashboardLayout>
    </>
  );
};

export default ResumesCreated;
