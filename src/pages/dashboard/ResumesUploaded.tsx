import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Upload, FileText, Calendar, Trash2, ExternalLink, Loader2, Sparkles } from 'lucide-react';
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
  file_url: string | null;
  created_at: string;
}

const ResumesUploaded = () => {
  const { userProfile, isLoading } = useUser();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadingFileName, setUploadingFileName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
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
        .eq('type', 'uploaded')
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

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !userProfile) return;

    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      toast({ title: 'Please upload a valid PDF file', variant: 'destructive' });
      return;
    }

    setUploading(true);
    setUploadingFileName(file.name);

    toast({
      title: 'Uploading Resume...',
      description: `Saving "${file.name}" to your account.`,
    });

    try {
      const fileName = `${userProfile.id}/${Date.now()}_${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from('resumes')
        .getPublicUrl(fileName);

      const { error: insertError } = await supabase
        .from('resumes')
        .insert({
          user_profile_id: userProfile.id,
          title: file.name.replace(/\.pdf$/i, ''),
          type: 'uploaded',
          file_url: urlData.publicUrl,
        });

      if (insertError) throw insertError;

      toast({
        title: 'Resume Uploaded! 🎉',
        description: `"${file.name}" has been uploaded successfully.`,
      });

      await fetchResumes();
    } catch {
      toast({ title: 'Failed to upload resume', variant: 'destructive' });
    } finally {
      setUploading(false);
      setUploadingFileName('');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const deleteResume = async (id: string) => {
    try {
      const { error } = await supabase.from('resumes').delete().eq('id', id);
      if (error) throw error;
      setResumes((prev) => prev.filter((r) => r.id !== id));
      toast({ title: 'Resume deleted successfully' });
    } catch {
      toast({ title: 'Failed to delete resume', variant: 'destructive' });
    }
  };

  if (isLoading || loading) {
    return (
      <>
        <Helmet>
          <title>Uploaded Resumes - Dashboard</title>
        </Helmet>
        <ResumesSkeleton />
      </>
    );
  }

  // Uploading Skeleton Card Component
  const UploadingCard = (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
    >
      <Card
        variant="glass"
        className="p-5 border-2 border-sky-500/40 bg-sky-500/5 shadow-lg shadow-sky-500/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/40 text-sky-500 flex items-center justify-center shadow-sm">
              <Loader2 className="w-5 h-5 animate-spin" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1 bg-sky-500/15 px-2 py-0.5 rounded-full border border-sky-500/30">
              <Sparkles className="w-3 h-3 animate-pulse" /> Uploading...
            </span>
          </div>

          <h3 className="font-bold text-foreground mb-1 truncate">
            {uploadingFileName.replace(/\.pdf$/i, '') || 'Uploading Resume...'}
          </h3>

          <div className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
            <FileText className="w-3.5 h-3.5 text-sky-500" />
            <span>Processing document & storage...</span>
          </div>

          <div className="w-full h-2 bg-muted/80 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-500 rounded-full animate-pulse w-4/5 transition-all duration-300" />
          </div>
        </div>
      </Card>
    </motion.div>
  );

  return (
    <>
      <Helmet>
        <title>Uploaded Resumes - Dashboard</title>
      </Helmet>

      <DashboardLayout>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">Uploaded Resumes</h1>
            <p className="text-muted-foreground text-sm">Your stored PDF resumes for instant ATS diagnostic audits</p>
          </div>
          <div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".pdf"
              disabled={uploading}
              className="hidden"
            />
            <Button
              variant="primary"
              onClick={() => fileInputRef.current?.click()}
              isLoading={uploading}
              disabled={uploading}
              leftIcon={<Upload className="w-4 h-4" />}
            >
              {uploading ? 'Uploading...' : 'Upload PDF'}
            </Button>
          </div>
        </div>

        {/* When Empty and Uploading */}
        {resumes.length === 0 && uploading && (
          <div className="max-w-md mx-auto my-6">
            {UploadingCard}
          </div>
        )}

        {/* When Empty and Not Uploading */}
        {resumes.length === 0 && !uploading && (
          <EmptyState
            icon={<Upload className="w-8 h-8 text-sky-500" />}
            title="No Resumes Uploaded Yet"
            description="Upload an existing PDF resume to analyze ATS keyword metrics, section health, and role readiness."
            actionLabel="Upload PDF Resume"
            actionIcon={<Upload className="w-4 h-4" />}
            onAction={() => fileInputRef.current?.click()}
          />
        )}

        {/* When Resumes exist */}
        {resumes.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {uploading && UploadingCard}
            </AnimatePresence>

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
                  className="p-5 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 flex items-center justify-center">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-1">
                        {resume.file_url && (
                          <a
                            href={resume.file_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-muted-foreground hover:text-sky-500 rounded-lg hover:bg-sky-500/10 transition-colors"
                            title="View PDF"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        <button
                          onClick={() => deleteResume(resume.id)}
                          className="p-2 text-muted-foreground hover:text-rose-500 rounded-lg hover:bg-rose-500/10 transition-colors"
                          title="Delete Resume"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <h3 className="font-bold text-foreground mb-1.5 truncate">{resume.title}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      Uploaded: {new Date(resume.created_at).toLocaleDateString()}
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

export default ResumesUploaded;
