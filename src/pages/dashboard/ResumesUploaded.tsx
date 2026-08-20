import { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Upload, FileText, Calendar, Trash2, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';
import { supabase } from '@/integrations/supabase/client';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button, Card, EmptyState, Spinner } from '@/design-system';
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
    } catch (error) {
      console.error('Error fetching resumes:', error);
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

    if (file.type !== 'application/pdf') {
      toast({ title: 'Please upload a valid PDF file', variant: 'destructive' });
      return;
    }

    setUploading(true);
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
          title: file.name.replace('.pdf', ''),
          type: 'uploaded',
          file_url: urlData.publicUrl,
        });

      if (insertError) throw insertError;

      toast({ title: 'Resume uploaded successfully!' });
      fetchResumes();
    } catch (error) {
      console.error('Upload error:', error);
      toast({ title: 'Failed to upload resume', variant: 'destructive' });
    } finally {
      setUploading(false);
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
    } catch (error) {
      toast({ title: 'Failed to delete resume', variant: 'destructive' });
    }
  };

  if (isLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Spinner size="lg" label="Loading Uploaded Resumes..." />
      </div>
    );
  }

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
              className="hidden"
            />
            <Button
              variant="primary"
              onClick={() => fileInputRef.current?.click()}
              isLoading={uploading}
              leftIcon={<Upload className="w-4 h-4" />}
            >
              Upload PDF
            </Button>
          </div>
        </div>

        {resumes.length === 0 ? (
          <EmptyState
            icon={<Upload className="w-8 h-8 text-sky-500" />}
            title="No Resumes Uploaded Yet"
            description="Upload an existing PDF resume to analyze ATS keyword metrics, section health, and role readiness."
            actionLabel="Upload PDF Resume"
            actionIcon={<Upload className="w-4 h-4" />}
            onAction={() => fileInputRef.current?.click()}
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
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        <button
                          onClick={() => deleteResume(resume.id)}
                          className="p-2 text-muted-foreground hover:text-rose-500 rounded-lg hover:bg-rose-500/10 transition-colors"
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
