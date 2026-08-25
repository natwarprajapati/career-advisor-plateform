import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Upload, FileCheck, Trash2, Linkedin, Github, Globe, ExternalLink } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@/ui";
import { UserProfile } from "@/core/types";
import { step5Schema, Step5Data } from "../schemas";

interface Step5Props {
  formData: Partial<UserProfile>;
  onChange: (field: keyof UserProfile, value: unknown) => void;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveResume: () => void;
  onValidate?: (isValid: boolean) => void;
}

export const ProfileWizardStep5Resume: React.FC<Step5Props> = ({
  formData,
  onChange,
  onFileUpload,
  onRemoveResume,
  onValidate,
}) => {
  const {
    register,
    formState: { errors, isValid },
    trigger,
  } = useForm<Step5Data>({
    resolver: zodResolver(step5Schema),
    mode: "onChange",
    defaultValues: {
      linkedin_url: formData.linkedin_url || "",
      github_url: formData.github_url || "",
      portfolio_url: formData.portfolio_url || "",
    },
  });

  useEffect(() => {
    onValidate?.(isValid);
  }, [isValid, onValidate]);

  useEffect(() => {
    trigger();
  }, [trigger]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-start gap-3 pb-2 border-b border-border/50">
        <div className="w-9 h-9 rounded-xl bg-sky-500/15 flex items-center justify-center shrink-0 mt-0.5">
          <FileText className="w-5 h-5 text-sky-500" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-foreground">
            Step 5: Resume &amp; Online Presence
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Attach your resume and add professional profile links
          </p>
        </div>
      </div>

      {/* Resume Upload */}
      <div className="space-y-2">
        <label className="block text-xs font-semibold text-foreground">
          Resume Document
        </label>

        {formData.has_uploaded_resume && formData.resume_name ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 rounded-xl border-2 border-emerald-500/40 bg-emerald-500/8 flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center shrink-0">
                <FileCheck className="w-5 h-5 text-emerald-500" />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-xs text-foreground truncate">
                  {formData.resume_name}
                </div>
                <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                  Attached to profile
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {formData.resume_url && (
                <a
                  href={formData.resume_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-sky-500 hover:text-sky-600 flex items-center gap-1 font-medium"
                >
                  View <ExternalLink className="w-3 h-3" />
                </a>
              )}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={onRemoveResume}
                className="text-rose-500 hover:text-rose-600 hover:bg-rose-500/10 gap-1 text-xs"
              >
                <Trash2 className="w-3.5 h-3.5" /> Remove
              </Button>
            </div>
          </motion.div>
        ) : (
          <label
            htmlFor="resume-upload"
            className="border-2 border-dashed border-border hover:border-sky-500 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer bg-background/50 hover:bg-sky-500/5 transition-all text-center group"
          >
            <input
              id="resume-upload"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={onFileUpload}
              className="sr-only"
            />
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 group-hover:bg-sky-500/20 flex items-center justify-center mb-3 transition-colors">
              <Upload className="w-6 h-6 text-sky-500" />
            </div>
            <span className="text-sm font-semibold text-foreground">
              Click to upload Resume
            </span>
            <span className="text-xs text-muted-foreground mt-1">
              PDF or Word format supported
            </span>
            <span className="text-[10px] text-muted-foreground/70 mt-0.5">
              Max recommended size: 5MB
            </span>
          </label>
        )}
      </div>

      {/* Links */}
      <div className="space-y-4 pt-2 border-t border-border/40">
        <p className="text-xs text-muted-foreground font-medium">
          Add professional profile links (optional but highly recommended)
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
          {/* LinkedIn */}
          <div>
            <label
              htmlFor="profile-linkedin"
              className="block text-xs font-semibold text-foreground mb-1.5 flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0a66c2]" />
              LinkedIn URL
            </label>
            <Input
              id="profile-linkedin"
              placeholder="https://linkedin.com/in/username"
              error={errors.linkedin_url?.message}
              {...register("linkedin_url", {
                onChange: (e) => onChange("linkedin_url", e.target.value),
              })}
            />
          </div>

          {/* GitHub */}
          <div>
            <label
              htmlFor="profile-github"
              className="block text-xs font-semibold text-foreground mb-1.5 flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub URL
            </label>
            <Input
              id="profile-github"
              placeholder="https://github.com/username"
              error={errors.github_url?.message}
              {...register("github_url", {
                onChange: (e) => onChange("github_url", e.target.value),
              })}
            />
          </div>

          {/* Portfolio */}
          <div className="sm:col-span-2">
            <label
              htmlFor="profile-portfolio"
              className="block text-xs font-semibold text-foreground mb-1.5 flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5 text-sky-500" />
              Portfolio / Personal Website
            </label>
            <Input
              id="profile-portfolio"
              placeholder="https://myportfolio.com"
              error={errors.portfolio_url?.message}
              {...register("portfolio_url", {
                onChange: (e) => onChange("portfolio_url", e.target.value),
              })}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
