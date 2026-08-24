import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Save,
  Copy,
  Check,
  Building2,
  MapPin,
  Briefcase,
  ExternalLink,
  CheckCircle2,
  FileEdit,
  User,
  RotateCcw,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { aiService } from '@/services/ai';
import { useUser } from '@/contexts/UserContext';

export interface JobItem {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  posted: string;
  matchScore: number;
  skills: string[];
  description: string;
}

interface CoverLetterModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: JobItem | null;
  savedCoverLetter?: string;
  savedResumeNotes?: string;
  onSave: (jobId: string, coverLetter: string, resumeNotes: string) => Promise<void> | void;
  onApply?: (job: JobItem, coverLetter: string) => Promise<void> | void;
  isApplied?: boolean;
}

export const CoverLetterModal = ({
  isOpen,
  onClose,
  job,
  savedCoverLetter = '',
  savedResumeNotes = '',
  onSave,
  onApply,
  isApplied = false,
}: CoverLetterModalProps) => {
  const { userProfile } = useUser();
  const { toast } = useToast();

  const [coverLetterText, setCoverLetterText] = useState('');
  const [resumeNotes, setResumeNotes] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Sync state whenever dialog opens or selected job changes
  useEffect(() => {
    if (isOpen && job) {
      setCoverLetterText(savedCoverLetter || '');
      setResumeNotes(
        savedResumeNotes ||
          (userProfile?.name
            ? `Experienced software professional (${userProfile.name}) specializing in modern web architecture, scalable services, and agile engineering.`
            : '')
      );
      setIsCopied(false);
    }
  }, [isOpen, job, savedCoverLetter, savedResumeNotes, userProfile]);

  if (!job) return null;

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const generated = await aiService.generateCoverLetter({
        resumeData: resumeNotes || `Full-stack engineer with expertise in ${job.skills.join(', ')}`,
        jobTitle: job.title,
        companyName: job.company,
        jobDescription: job.description,
        skills: job.skills,
        candidateName: userProfile?.name || 'Applicant',
      });

      if (generated) {
        setCoverLetterText(generated);
        toast({
          title: 'Cover letter generated!',
          description: `Customized for ${job.title} at ${job.company}. Click Save to keep changes.`,
        });
      }
    } catch {
      toast({
        title: 'Generation failed',
        description: 'Could not generate cover letter. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSave = async () => {
    if (!coverLetterText.trim()) {
      toast({
        title: 'Empty Cover Letter',
        description: 'Please generate or write a cover letter before saving.',
        variant: 'destructive',
      });
      return;
    }

    setIsSaving(true);
    try {
      await onSave(job.id, coverLetterText.trim(), resumeNotes.trim());
      toast({
        title: 'Cover Letter Saved!',
        description: `Successfully saved cover letter for ${job.title}.`,
      });
    } catch {
      toast({
        title: 'Save failed',
        description: 'Could not save cover letter.',
        variant: 'destructive',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleCopy = async () => {
    if (!coverLetterText) return;
    await navigator.clipboard.writeText(coverLetterText);
    setIsCopied(true);
    toast({
      title: 'Copied to Clipboard!',
      description: 'Cover letter copied successfully.',
    });
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleQuickApply = async () => {
    if (!onApply) return;
    // Auto save first if text exists
    if (coverLetterText.trim()) {
      await onSave(job.id, coverLetterText.trim(), resumeNotes.trim());
    }
    await onApply(job, coverLetterText.trim());
  };

  const wordCount = coverLetterText.trim() ? coverLetterText.trim().split(/\s+/).length : 0;
  const isModified = coverLetterText.trim() !== (savedCoverLetter || '').trim();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col p-6 gap-6 glass-card">
        {/* Header with Job Context */}
        <DialogHeader className="space-y-3 pb-3 border-b border-border/40">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <DialogTitle className="text-xl font-bold text-primary flex items-center gap-2">
                <FileEdit className="w-5 h-5 text-secondary" />
                Cover Letter for {job.title}
              </DialogTitle>
              <DialogDescription className="flex items-center gap-3 text-muted-foreground mt-1 text-sm">
                <span className="flex items-center gap-1 font-medium text-foreground">
                  <Building2 className="w-4 h-4 text-primary" />
                  {job.company}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {job.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5" />
                  {job.type}
                </span>
              </DialogDescription>
            </div>

            <div className="flex items-center gap-2">
              {isApplied ? (
                <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/30 gap-1 py-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Applied
                </Badge>
              ) : (
                <Badge variant="secondary" className="gap-1 py-1">
                  Match: {job.matchScore}%
                </Badge>
              )}
            </div>
          </div>

          {/* Job Skills preview */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-xs font-medium text-muted-foreground mr-1">Target Skills:</span>
            {job.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs py-0.5 px-2 bg-secondary/5 border-secondary/20">
                {skill}
              </Badge>
            ))}
          </div>
        </DialogHeader>

        {/* Modal Body */}
        <div className="space-y-5">
          {/* Candidate Background & Experience Notes */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="resume-notes" className="text-sm font-semibold flex items-center gap-1.5 text-foreground">
                <User className="w-4 h-4 text-primary" />
                Candidate Background & Highlights
              </Label>
              <span className="text-xs text-muted-foreground">Used by AI to personalize your letter</span>
            </div>
            <Textarea
              id="resume-notes"
              value={resumeNotes}
              onChange={(e) => setResumeNotes(e.target.value)}
              placeholder="Enter your key experience, achievements, or paste resume summary to guide AI generation..."
              className="min-h-[85px] text-sm bg-background/50 border-border/60 resize-y"
            />
          </div>

          {/* Primary AI Generation Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-secondary/10 border border-secondary/20">
            <div className="text-xs text-muted-foreground">
              {coverLetterText ? (
                <span>AI will rewrite and tailor the letter for <strong>{job.company}</strong></span>
              ) : (
                <span>Click generate to build an ATS-optimized cover letter for this role</span>
              )}
            </div>
            <Button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="btn-primary gap-2 text-sm shadow-md flex-shrink-0"
            >
              {isGenerating ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                  />
                  <span>Generating tailored letter...</span>
                </>
              ) : coverLetterText ? (
                <>
                  <RotateCcw className="w-4 h-4" />
                  <span>Regenerate Cover Letter</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Cover Letter</span>
                </>
              )}
            </Button>
          </div>

          {/* Cover Letter Content Area */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Label htmlFor="cover-letter-text" className="text-sm font-semibold text-foreground">
                  Cover Letter Document
                </Label>
                {savedCoverLetter && !isModified && (
                  <Badge variant="outline" className="text-[11px] px-2 py-0.5 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                    Saved
                  </Badge>
                )}
                {isModified && coverLetterText && (
                  <Badge variant="outline" className="text-[11px] px-2 py-0.5 bg-amber-500/10 text-amber-600 border-amber-500/20">
                    Unsaved changes
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{wordCount} words</span>
                {coverLetterText && (
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1 text-primary hover:text-secondary font-medium transition-colors"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    {isCopied ? 'Copied' : 'Copy'}
                  </button>
                )}
              </div>
            </div>

            <Textarea
              id="cover-letter-text"
              value={coverLetterText}
              onChange={(e) => setCoverLetterText(e.target.value)}
              placeholder="Click 'Generate Cover Letter' above or start typing your cover letter here..."
              className="min-h-[260px] font-sans text-sm leading-relaxed p-4 bg-background/60 border-border/80 rounded-xl"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <DialogFooter className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-border/40">
          <Button variant="ghost" onClick={onClose} className="w-full sm:w-auto">
            Close
          </Button>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
            {/* Dedicated Save Button */}
            <Button
              onClick={handleSave}
              disabled={isSaving || !coverLetterText.trim()}
              variant="outline"
              className="gap-2 border-primary/40 hover:bg-primary/10 text-primary w-full sm:w-auto font-medium"
            >
              {isSaving ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full"
                  />
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Cover Letter</span>
                </>
              )}
            </Button>

            {/* Quick Apply / Update Action */}
            {onApply && (
              <Button
                onClick={handleQuickApply}
                disabled={isApplied}
                className="btn-primary gap-2 w-full sm:w-auto"
              >
                {isApplied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Applied to {job.company}</span>
                  </>
                ) : (
                  <>
                    <span>Apply with Cover Letter</span>
                    <ExternalLink className="w-4 h-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
