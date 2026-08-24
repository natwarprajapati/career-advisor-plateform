import { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  Building2,
  ExternalLink,
  Heart,
  FileText,
  CheckCircle2,
  Check,
} from 'lucide-react';
import { Button, Card, Input, Badge, Progress } from '@/ui';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Link, useNavigate } from 'react-router-dom';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import { useUser } from '@/contexts/UserContext';
import { CoverLetterModal, JobItem } from '@/components/jobs/CoverLetterModal';

// Available demo jobs dataset
const placeholderJobs: JobItem[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    salary: '$150,000 - $200,000',
    type: 'Full-time',
    posted: '2 days ago',
    matchScore: 92,
    skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
    description:
      'We are looking for a Senior Software Engineer to join our team and help build scalable web applications. You will collaborate with product designers, architect cloud infrastructure, and lead frontend/backend feature delivery.',
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    salary: '$120,000 - $160,000',
    type: 'Full-time',
    posted: '1 day ago',
    matchScore: 88,
    skills: ['Python', 'React', 'PostgreSQL', 'Docker'],
    description:
      'Join our fast-growing startup as a Full Stack Developer. You will work on cutting-edge technology, build RESTful APIs with Python, create rich user interfaces with React, and deploy containerized services.',
  },
  {
    id: '3',
    title: 'Frontend Engineer',
    company: 'DesignStudio',
    location: 'New York, NY',
    salary: '$110,000 - $140,000',
    type: 'Full-time',
    posted: '3 days ago',
    matchScore: 85,
    skills: ['React', 'CSS', 'JavaScript', 'Figma'],
    description:
      'Looking for a creative Frontend Engineer who can bring beautiful designs to life. You will craft pixel-perfect, responsive user interfaces, maintain design systems, and ensure optimal web accessibility.',
  },
  {
    id: '4',
    title: 'Backend Developer',
    company: 'DataCorp',
    location: 'Austin, TX',
    salary: '$130,000 - $170,000',
    type: 'Full-time',
    posted: '5 days ago',
    matchScore: 78,
    skills: ['Java', 'Spring Boot', 'Kubernetes', 'MongoDB'],
    description:
      'We need a skilled Backend Developer to help scale our data infrastructure. You will design distributed microservices, optimize high-throughput database queries, and maintain Kubernetes clusters.',
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'CloudServices',
    location: 'Seattle, WA',
    salary: '$140,000 - $180,000',
    type: 'Full-time',
    posted: '1 week ago',
    matchScore: 72,
    skills: ['AWS', 'Terraform', 'Docker', 'CI/CD'],
    description:
      'Help us build and maintain our cloud infrastructure as a DevOps Engineer. You will automate CI/CD release pipelines, manage infrastructure as code with Terraform, and enhance system observability.',
  },
];

const STORAGE_KEYS = {
  SAVED_JOBS: 'career_nav_saved_jobs',
  APPLIED_JOBS: 'career_nav_applied_jobs',
  COVER_LETTERS: 'career_nav_cover_letters',
  RESUME_NOTES: 'career_nav_resume_notes',
};

const JobMatching = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [savedJobs, setSavedJobs] = useState<string[]>([]);
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);
  const [jobCoverLetters, setJobCoverLetters] = useState<Record<string, string>>({});
  const [jobResumeNotes, setJobResumeNotes] = useState<Record<string, string>>({});

  // Modal state
  const [selectedCoverLetterJob, setSelectedCoverLetterJob] = useState<JobItem | null>(null);
  const [isCoverLetterModalOpen, setIsCoverLetterModalOpen] = useState(false);

  const { toast } = useToast();
  const { userProfile, isLoading } = useUser();
  const navigate = useNavigate();

  // Redirect to home and open GetStartedModal if not authenticated
  useEffect(() => {
    if (!isLoading && !userProfile) {
      navigate('/?getStarted=true', { replace: true, state: { fromDashboard: true } });
    }
  }, [userProfile, isLoading, navigate]);

  // Load initial local data
  useEffect(() => {
    try {
      const storedSaved = localStorage.getItem(STORAGE_KEYS.SAVED_JOBS);
      if (storedSaved) setSavedJobs(JSON.parse(storedSaved));

      const storedApplied = localStorage.getItem(STORAGE_KEYS.APPLIED_JOBS);
      if (storedApplied) setAppliedJobs(JSON.parse(storedApplied));

      const storedCoverLetters = localStorage.getItem(STORAGE_KEYS.COVER_LETTERS);
      if (storedCoverLetters) setJobCoverLetters(JSON.parse(storedCoverLetters));

      const storedResumeNotes = localStorage.getItem(STORAGE_KEYS.RESUME_NOTES);
      if (storedResumeNotes) setJobResumeNotes(JSON.parse(storedResumeNotes));
    } catch {
      // Ignored for privacy
    }
  }, []);

  // Fetch applied jobs from Supabase dynamically
  const fetchAppliedJobsFromDB = useCallback(async () => {
    if (!userProfile) return;

    try {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('user_profile_id', userProfile.id);

      if (error) throw error;

      if (data && data.length > 0) {
        const dbAppliedIds: string[] = [];
        const dbCoverLetters: Record<string, string> = {};

        data.forEach((dbJob) => {
          // Match by title & company against placeholder jobs
          const matched = placeholderJobs.find(
            (p) =>
              p.title.toLowerCase() === dbJob.job_title.toLowerCase() &&
              p.company.toLowerCase() === dbJob.company.toLowerCase()
          );

          if (matched) {
            dbAppliedIds.push(matched.id);
            if (dbJob.cover_letter) {
              dbCoverLetters[matched.id] = dbJob.cover_letter;
            }
          }
        });

        // Merge applied jobs
        setAppliedJobs((prev) => {
          const combined = Array.from(new Set([...prev, ...dbAppliedIds]));
          localStorage.setItem(STORAGE_KEYS.APPLIED_JOBS, JSON.stringify(combined));
          return combined;
        });

        // Merge cover letters
        if (Object.keys(dbCoverLetters).length > 0) {
          setJobCoverLetters((prev) => {
            const merged = { ...prev, ...dbCoverLetters };
            localStorage.setItem(STORAGE_KEYS.COVER_LETTERS, JSON.stringify(merged));
            return merged;
          });
        }
      }
    } catch {
      // Silent error fallback
    }
  }, [userProfile]);

  useEffect(() => {
    if (userProfile) {
      fetchAppliedJobsFromDB();
    }
  }, [userProfile, fetchAppliedJobsFromDB]);

  const userSkills = userProfile?.skills || [];

  const dynamicJobs: JobItem[] = placeholderJobs.map((job) => {
    if (userSkills.length > 0) {
      const userSkillsLower = userSkills.map((s) => s.toLowerCase());
      const matchedCount = job.skills.filter((s) =>
        userSkillsLower.some((us) => us.includes(s.toLowerCase()) || s.toLowerCase().includes(us))
      ).length;
      const calculatedScore = Math.min(
        Math.max(Math.round((matchedCount / job.skills.length) * 100), 50),
        98
      );
      return { ...job, matchScore: calculatedScore };
    }
    return job;
  });

  const filteredJobs = dynamicJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleSaveJob = (jobId: string) => {
    setSavedJobs((prev) => {
      const isSaved = prev.includes(jobId);
      const next = isSaved ? prev.filter((id) => id !== jobId) : [...prev, jobId];
      localStorage.setItem(STORAGE_KEYS.SAVED_JOBS, JSON.stringify(next));

      toast({
        title: isSaved ? 'Job removed' : 'Job saved',
        description: isSaved
          ? 'Job removed from your saved list'
          : 'Job added to your saved list',
      });
      return next;
    });
  };

  // Open modal for a specific job
  const handleOpenCoverLetterModal = (job: JobItem) => {
    setSelectedCoverLetterJob(job);
    setIsCoverLetterModalOpen(true);
  };

  // Save cover letter for that specific job
  const handleSaveCoverLetter = async (
    jobId: string,
    coverLetter: string,
    resumeNotes: string
  ) => {
    // 1. Update per-job cover letter state
    const nextLetters = { ...jobCoverLetters, [jobId]: coverLetter };
    setJobCoverLetters(nextLetters);
    localStorage.setItem(STORAGE_KEYS.COVER_LETTERS, JSON.stringify(nextLetters));

    // 2. Update per-job resume notes
    const nextNotes = { ...jobResumeNotes, [jobId]: resumeNotes };
    setJobResumeNotes(nextNotes);
    localStorage.setItem(STORAGE_KEYS.RESUME_NOTES, JSON.stringify(nextNotes));

    // 3. If user applied to this job in Supabase, update the record
    const targetJob = placeholderJobs.find((j) => j.id === jobId);
    if (userProfile && targetJob && appliedJobs.includes(jobId)) {
      try {
        await supabase
          .from('jobs')
          .update({ cover_letter: coverLetter })
          .eq('user_profile_id', userProfile.id)
          .eq('job_title', targetJob.title)
          .eq('company', targetJob.company);
      } catch {
        // Silent error fallback
      }
    }
  };

  // Apply to job (with this job's specific cover letter)
  const handleEasyApply = async (job: JobItem, coverLetterOverride?: string) => {
    if (!userProfile) {
      toast({
        title: 'Profile required',
        description: 'Please set your name on the home page first to track your applications.',
        variant: 'destructive',
      });
      return;
    }

    const specificCoverLetter =
      coverLetterOverride !== undefined
        ? coverLetterOverride
        : jobCoverLetters[job.id] || null;

    try {
      const { error } = await supabase.from('jobs').insert({
        user_profile_id: userProfile.id,
        job_title: job.title,
        company: job.company,
        description: job.description,
        cover_letter: specificCoverLetter || null,
        status: 'applied',
      });

      if (error) throw error;

      // Update state and persistence
      const nextApplied = Array.from(new Set([...appliedJobs, job.id]));
      setAppliedJobs(nextApplied);
      localStorage.setItem(STORAGE_KEYS.APPLIED_JOBS, JSON.stringify(nextApplied));

      toast({
        title: 'Application Submitted!',
        description: `Successfully applied to ${job.title} at ${job.company}${specificCoverLetter ? ' with tailored cover letter' : ''
          }. Tracked in Dashboard.`,
      });
    } catch {
      // Local fallback
      const nextApplied = Array.from(new Set([...appliedJobs, job.id]));
      setAppliedJobs(nextApplied);
      localStorage.setItem(STORAGE_KEYS.APPLIED_JOBS, JSON.stringify(nextApplied));

      toast({
        title: 'Application saved locally',
        description: `Application to ${job.title} at ${job.company} recorded.`,
      });
    }
  };

  const getMatchColor = (score: number) => {
    if (score >= 85) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-orange-600';
  };
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full"
        />
      </div>
    );
  }

  if (!userProfile) return null;

  return (
    <>
      <Helmet>
        <title>Job Matching - AI Career Navigator</title>
        <meta
          name="description"
          content="Find jobs that match your skills and experience with AI-powered matching."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {userProfile && <DashboardNavbar />}
        <div className={`container-custom py-8 ${userProfile ? 'pt-24' : ''}`}>
          <Link
            to={userProfile ? '/dashboard' : '/'}
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {userProfile ? 'Back to Dashboard' : 'Back to Home'}
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2 tracking-tight">Job Matching</h1>
                <p className="text-sm text-muted-foreground font-medium">
                  AI-matched jobs based on your skills and experience with personalized cover letters
                </p>
              </div>
              <Badge variant="glow" className="mt-4 md:mt-0 py-1.5 px-3">
                {placeholderJobs.length} jobs available
              </Badge>
            </div>

            {/* Search Bar */}
            <Card className="glass-card p-4 mb-6 border border-border/80">
              <div className="flex gap-4">
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search jobs by title, company, location, or skill..."
                  className="flex-1"
                />
                <Button variant="secondary" className="font-semibold">Search</Button>
              </div>
            </Card>

            {/* Info Banner */}
            <Card className="glass-card p-4 sm:p-5 mb-6 bg-gradient-to-r from-sky-500/10 via-cyan-500/10 to-transparent border border-sky-500/30">
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                <strong className="text-foreground font-bold">Cover Letter Generator:</strong> Click &quot;Cover
                Letter&quot; on any job to generate and save a tailored cover letter customized specifically
                for that role. Your letters are saved per job and automatically submitted with Easy Apply.
              </p>
            </Card>

            {/* Job List */}
            <div className="space-y-4">
              {filteredJobs.map((job, index) => {
                const hasCoverLetter = Boolean(jobCoverLetters[job.id]?.trim());
                const isJobApplied = appliedJobs.includes(job.id);
                const isJobSaved = savedJobs.includes(job.id);

                return (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="glass-card-hover p-6 border border-border/80">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-lg font-bold text-foreground hover:text-sky-500 transition-colors cursor-pointer">
                                {job.title}
                              </h3>
                              <div className="flex items-center gap-2 text-muted-foreground mt-1 text-xs sm:text-sm font-medium">
                                <Building2 className="w-4 h-4 text-sky-500" />
                                <span>{job.company}</span>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => toggleSaveJob(job.id)}
                              aria-label={isJobSaved ? 'Remove from saved' : 'Save job'}
                            >
                              <Heart
                                className={`w-5 h-5 transition-colors ${isJobSaved ? 'fill-red-500 text-red-500' : 'text-muted-foreground hover:text-red-500'
                                  }`}
                              />
                            </Button>
                          </div>

                          <div className="flex flex-wrap gap-4 mt-3 text-xs sm:text-sm text-muted-foreground font-medium">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-sky-500" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
                              {job.salary}
                            </span>
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-3.5 h-3.5 text-sky-500" />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                              {job.posted}
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-2 mt-3">
                            {job.skills.map((skill) => (
                              <Badge key={skill} variant="primary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Right side match & action buttons */}
                        <div className="flex flex-col items-center lg:items-end gap-3">
                          <div className="text-center lg:text-right">
                            <p className="text-sm text-muted-foreground">Match Score</p>
                            <p className={`text-2xl font-bold ${getMatchColor(job.matchScore)}`}>
                              {job.matchScore}%
                            </p>
                            <Progress value={job.matchScore} className="w-24 h-2 mt-1" />
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {/* Per-job Cover Letter Button */}
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleOpenCoverLetterModal(job)}
                              className={`gap-1.5 ${hasCoverLetter
                                  ? 'border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5'
                                  : ''
                                }`}
                            >
                              {hasCoverLetter ? (
                                <>
                                  <Check className="w-4 h-4 text-emerald-500" />
                                  <span>Cover Letter Saved</span>
                                </>
                              ) : (
                                <>
                                  <FileText className="w-4 h-4" />
                                  <span>Cover Letter</span>
                                </>
                              )}
                            </Button>

                            {/* Easy Apply / Applied dynamic Button */}
                            <Button
                              size="sm"
                              className="btn-primary gap-1.5"
                              onClick={() => handleEasyApply(job)}
                              disabled={isJobApplied}
                            >
                              {isJobApplied ? (
                                <>
                                  <span>Applied</span>
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                </>
                              ) : (
                                <>
                                  <span>Easy Apply</span>
                                  <ExternalLink className="w-4 h-4" />
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {filteredJobs.length === 0 && (
              <Card className="glass-card p-12 text-center">
                <Briefcase className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">No jobs found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria</p>
              </Card>
            )}
          </motion.div>
        </div>

        {/* Dedicated Per-Job Cover Letter Modal */}
        <CoverLetterModal
          isOpen={isCoverLetterModalOpen}
          onClose={() => setIsCoverLetterModalOpen(false)}
          job={selectedCoverLetterJob}
          savedCoverLetter={
            selectedCoverLetterJob ? jobCoverLetters[selectedCoverLetterJob.id] || '' : ''
          }
          savedResumeNotes={
            selectedCoverLetterJob ? jobResumeNotes[selectedCoverLetterJob.id] || '' : ''
          }
          onSave={handleSaveCoverLetter}
          onApply={handleEasyApply}
          isApplied={
            selectedCoverLetterJob ? appliedJobs.includes(selectedCoverLetterJob.id) : false
          }
        />
      </div>
    </>
  );
};

export default JobMatching;
