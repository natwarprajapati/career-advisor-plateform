import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Briefcase, Building2, Calendar, Trash2, FileText, Save, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';
import { supabase } from '@/integrations/supabase/client';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import {
  Button,
  Card,
  Badge,
  EmptyState,
  Spinner,
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalFooter,
  ModalClose
} from '@/design-system';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface Job {
  id: string;
  job_title: string;
  company: string;
  description: string | null;
  cover_letter: string | null;
  applied_at: string;
  status: string | null;
}

const JobsList = () => {
  const { userProfile, isLoading } = useUser();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [editedCoverLetter, setEditedCoverLetter] = useState('');
  const [isSavingCoverLetter, setIsSavingCoverLetter] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (!isLoading && !userProfile) {
      navigate('/?getStarted=true', { replace: true, state: { fromDashboard: true } });
    }
  }, [userProfile, isLoading, navigate]);

  const fetchJobs = useCallback(async () => {
    if (!userProfile) return;

    try {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('user_profile_id', userProfile.id)
        .order('applied_at', { ascending: false });

      if (error) throw error;
      setJobs(data || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  }, [userProfile]);

  useEffect(() => {
    if (userProfile) {
      fetchJobs();
    }
  }, [userProfile, fetchJobs]);

  const handleOpenCoverLetter = (job: Job) => {
    setSelectedJob(job);
    setEditedCoverLetter(job.cover_letter || '');
    setIsCopied(false);
  };

  const handleSaveCoverLetter = async () => {
    if (!selectedJob) return;
    setIsSavingCoverLetter(true);
    try {
      const { error } = await supabase
        .from('jobs')
        .update({ cover_letter: editedCoverLetter })
        .eq('id', selectedJob.id);

      if (error) throw error;

      setJobs((prev) =>
        prev.map((j) => (j.id === selectedJob.id ? { ...j, cover_letter: editedCoverLetter } : j))
      );
      setSelectedJob((prev) => (prev ? { ...prev, cover_letter: editedCoverLetter } : null));

      const storedLetters = localStorage.getItem('career_nav_cover_letters');
      if (storedLetters) {
        try {
          const parsed = JSON.parse(storedLetters);
          parsed[selectedJob.id] = editedCoverLetter;
          localStorage.setItem('career_nav_cover_letters', JSON.stringify(parsed));
        } catch {
          // ignore
        }
      }

      toast({
        title: 'Cover letter updated',
        description: 'Changes have been saved successfully.',
      });
    } catch (error) {
      console.error('Error updating cover letter:', error);
      toast({
        title: 'Update failed',
        description: 'Failed to update cover letter.',
        variant: 'destructive',
      });
    } finally {
      setIsSavingCoverLetter(false);
    }
  };

  const handleCopy = async () => {
    if (!editedCoverLetter) return;
    await navigator.clipboard.writeText(editedCoverLetter);
    setIsCopied(true);
    toast({ title: 'Copied to clipboard' });
    setTimeout(() => setIsCopied(false), 2000);
  };

  const deleteJob = async (id: string) => {
    try {
      const { error } = await supabase.from('jobs').delete().eq('id', id);
      if (error) throw error;
      setJobs((prev) => prev.filter((j) => j.id !== id));
      toast({ title: 'Job removed successfully' });
    } catch (error) {
      console.error('Delete job error:', error);
      toast({ title: 'Failed to remove job', variant: 'destructive' });
    }
  };

  const getStatusBadge = (status: string | null) => {
    switch (status) {
      case 'applied':
        return <Badge variant="primary" dot size="sm">Applied</Badge>;
      case 'interviewing':
        return <Badge variant="warning" dot size="sm">Interviewing</Badge>;
      case 'offered':
        return <Badge variant="success" dot size="sm">Offered</Badge>;
      case 'rejected':
        return <Badge variant="destructive" dot size="sm">Rejected</Badge>;
      default:
        return <Badge variant="secondary" size="sm">{status || 'Applied'}</Badge>;
    }
  };

  if (isLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Spinner size="lg" label="Loading Applied Jobs..." />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Applied Jobs - Dashboard</title>
      </Helmet>

      <DashboardLayout>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">Applied Jobs</h1>
            <p className="text-muted-foreground text-sm">
              Track your job applications and review tailored cover letters
            </p>
          </div>
          <Button variant="primary" onClick={() => navigate('/jobs')} leftIcon={<Briefcase className="w-4 h-4" />}>
            Find Jobs
          </Button>
        </div>

        {jobs.length === 0 ? (
          <EmptyState
            icon={<Briefcase className="w-8 h-8 text-sky-500" />}
            title="No Applications Tracked Yet"
            description="Start browsing AI-matched jobs tailored to your skills profile and save applications with custom cover letters."
            actionLabel="Browse Jobs"
            actionIcon={<Briefcase className="w-4 h-4" />}
            onAction={() => navigate('/jobs')}
          />
        ) : (
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <Card
                  variant="glass"
                  hover="lift"
                  className="p-5 md:p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-500/20 flex items-center justify-center flex-shrink-0 text-sky-500 shadow-sm">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-base md:text-lg">
                          {job.job_title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1 text-xs sm:text-sm">
                          <Building2 className="w-3.5 h-3.5 text-sky-500/70" />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 mt-3">
                          {getStatusBadge(job.status)}
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3.5 h-3.5" />
                            Applied: {new Date(job.applied_at).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      {job.cover_letter && (
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => handleOpenCoverLetter(job)}
                          leftIcon={<FileText className="w-4 h-4" />}
                        >
                          View Cover Letter
                        </Button>
                      )}
                      <button
                        onClick={() => deleteJob(job.id)}
                        className="p-2 rounded-lg text-muted-foreground hover:text-rose-500 hover:bg-rose-500/10 transition-colors"
                        aria-label="Delete job application"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </DashboardLayout>

      {/* Cover Letter Edit & View Modal */}
      <Modal open={!!selectedJob} onOpenChange={(open) => !open && setSelectedJob(null)}>
        <ModalContent size="lg">
          <ModalHeader>
            <ModalTitle>
              Cover Letter — {selectedJob?.job_title} at {selectedJob?.company}
            </ModalTitle>
          </ModalHeader>

          <div className="space-y-3 mt-2 flex-1">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Edit and save updates to your saved cover letter:</span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 text-sky-500 hover:text-sky-400 font-semibold"
              >
                {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                {isCopied ? 'Copied' : 'Copy Text'}
              </button>
            </div>

            <Textarea
              value={editedCoverLetter}
              onChange={(e) => setEditedCoverLetter(e.target.value)}
              placeholder="No cover letter text..."
              className="min-h-[260px] font-sans text-xs sm:text-sm leading-relaxed p-4 bg-background/80"
            />
          </div>

          <ModalFooter>
            <ModalClose asChild>
              <Button variant="ghost" size="sm">
                Close
              </Button>
            </ModalClose>
            <Button
              onClick={handleSaveCoverLetter}
              isLoading={isSavingCoverLetter}
              variant="primary"
              size="sm"
              leftIcon={<Save className="w-4 h-4" />}
            >
              Save Changes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default JobsList;
