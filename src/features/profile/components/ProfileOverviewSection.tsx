import React from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Cpu,
  GraduationCap,
  FileText,
  Edit3,
  ExternalLink,
  Linkedin,
  Github,
  Upload,
  Target,
} from "lucide-react";
import { Card, Button, Badge } from "@/ui";
import { UserProfile } from "@/core/types";

interface ProfileOverviewSectionProps {
  formData: Partial<UserProfile>;
  onEditStep: (stepId: number) => void;
}

export const ProfileOverviewSection: React.FC<ProfileOverviewSectionProps> = ({
  formData,
  onEditStep,
}) => {
  return (
    <div className="space-y-6">
      {/* Card 1: Work & Career Details */}
      <Card className="p-6 border border-border/80 bg-card">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-bold text-foreground flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-sky-500" />
              Work & Career Details
            </h2>
            <p className="text-xs text-muted-foreground">
              Current stage, company, and role
            </p>
          </div>
          <Button
            onClick={() => onEditStep(2)}
            variant="ghost"
            size="sm"
            className="text-sky-500 hover:text-sky-600 gap-1 text-xs"
          >
            <Edit3 className="w-3.5 h-3.5" /> Edit
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-muted/40 rounded-xl">
            <span className="text-muted-foreground block mb-1 font-medium">
              Experience Level
            </span>
            <span className="font-bold text-foreground capitalize">
              {formData.experience_level || "Fresher"}
            </span>
          </div>
          <div className="p-3 bg-muted/40 rounded-xl">
            <span className="text-muted-foreground block mb-1 font-medium">
              Company
            </span>
            <span className="font-bold text-foreground">
              {formData.current_company || "Not Added"}
            </span>
          </div>
          <div className="p-3 bg-muted/40 rounded-xl">
            <span className="text-muted-foreground block mb-1 font-medium">
              Designation
            </span>
            <span className="font-bold text-foreground">
              {formData.current_role || "Not Added"}
            </span>
          </div>
          <div className="p-3 bg-muted/40 rounded-xl">
            <span className="text-muted-foreground block mb-1 font-medium">
              Notice Period
            </span>
            <span className="font-bold text-foreground">
              {formData.notice_period || "Immediate"}
            </span>
          </div>
        </div>
      </Card>

      {/* Card 2: Key Skills & Domain */}
      <Card className="p-6 border border-border/80 bg-card">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-bold text-foreground flex items-center gap-2">
              <Cpu className="w-4 h-4 text-sky-500" />
              Key Skills & Domain
            </h2>
            <p className="text-xs text-muted-foreground">
              Evaluated by our AI matching engine
            </p>
          </div>
          <Button
            onClick={() => onEditStep(3)}
            variant="ghost"
            size="sm"
            className="text-sky-500 hover:text-sky-600 gap-1 text-xs"
          >
            <Edit3 className="w-3.5 h-3.5" /> Edit
          </Button>
        </div>

        {formData.domain && (
          <div className="mb-3">
            <span className="text-xs text-muted-foreground block mb-1 font-medium">
              Track
            </span>
            <Badge variant="glow" className="text-xs">
              {formData.domain}
            </Badge>
          </div>
        )}

        <div>
          <span className="text-xs text-muted-foreground block mb-2 font-medium">
            Skills
          </span>
          {formData.skills && formData.skills.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-muted text-foreground border border-border/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-xs text-muted-foreground italic">
              No skills added yet.
            </p>
          )}
        </div>
      </Card>

      {/* Card 3: Education */}
      <Card className="p-6 border border-border/80 bg-card">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-bold text-foreground flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-sky-500" />
              Education & Degree
            </h2>
            <p className="text-xs text-muted-foreground">
              College and academic qualifications
            </p>
          </div>
          <Button
            onClick={() => onEditStep(4)}
            variant="ghost"
            size="sm"
            className="text-sky-500 hover:text-sky-600 gap-1 text-xs"
          >
            <Edit3 className="w-3.5 h-3.5" /> Edit
          </Button>
        </div>

        {formData.education?.degree ? (
          <div className="p-4 bg-muted/40 rounded-xl space-y-1 text-xs">
            <div className="font-bold text-sm text-foreground">
              {formData.education.degree}
            </div>
            <div className="text-muted-foreground">
              {formData.education.institution || "University"}
              {formData.education.field && ` • ${formData.education.field}`}
              {formData.education.gradYear && ` • Batch ${formData.education.gradYear}`}
            </div>
          </div>
        ) : (
          <p className="text-xs text-muted-foreground italic">
            No education details added.
          </p>
        )}
      </Card>

      {/* Card 4: Resume & Links */}
      <Card className="p-6 border border-border/80 bg-card">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-bold text-foreground flex items-center gap-2">
              <FileText className="w-4 h-4 text-sky-500" />
              Resume & Online Profiles
            </h2>
            <p className="text-xs text-muted-foreground">
              Attached resume document and URLs
            </p>
          </div>
          <Button
            onClick={() => onEditStep(5)}
            variant="ghost"
            size="sm"
            className="text-sky-500 hover:text-sky-600 gap-1 text-xs"
          >
            <Edit3 className="w-3.5 h-3.5" /> Edit
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-muted/40 rounded-xl border border-border/60 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-sky-500 shrink-0" />
              <div>
                <div className="font-semibold text-foreground truncate max-w-[160px]">
                  {formData.resume_name || "No resume uploaded"}
                </div>
                <div className="text-[10px] text-muted-foreground">
                  {formData.has_uploaded_resume
                    ? "Verified"
                    : "Upload to enable ATS scoring"}
                </div>
              </div>
            </div>
            {formData.resume_url && (
              <a
                href={formData.resume_url}
                target="_blank"
                rel="noreferrer"
                className="text-sky-500 hover:underline flex items-center gap-0.5 font-semibold"
              >
                View <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          <div className="p-4 bg-muted/40 rounded-xl border border-border/60 flex flex-col justify-center gap-2">
            {formData.linkedin_url ? (
              <a
                href={formData.linkedin_url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sky-600 dark:text-sky-400 hover:underline font-medium"
              >
                <Linkedin className="w-4 h-4 shrink-0" /> LinkedIn Profile
              </a>
            ) : (
              <span className="text-muted-foreground flex items-center gap-2">
                <Linkedin className="w-4 h-4 shrink-0" /> No LinkedIn linked
              </span>
            )}

            {formData.github_url ? (
              <a
                href={formData.github_url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-foreground hover:underline font-medium"
              >
                <Github className="w-4 h-4 shrink-0" /> GitHub Profile
              </a>
            ) : (
              <span className="text-muted-foreground flex items-center gap-2">
                <Github className="w-4 h-4 shrink-0" /> No GitHub linked
              </span>
            )}
          </div>
        </div>
      </Card>

      {/* Action Modules */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <Link to="/resume-screening" className="block group">
          <div className="p-4 rounded-xl border border-border/80 bg-card hover:bg-sky-500/5 hover:border-sky-500/40 transition-all">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center mb-2">
              <Upload className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-xs text-foreground group-hover:text-sky-500 transition-colors">
              Screen Resume
            </h3>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              Check your ATS score & keyword match
            </p>
          </div>
        </Link>

        <Link to="/jobs" className="block group">
          <div className="p-4 rounded-xl border border-border/80 bg-card hover:bg-sky-500/5 hover:border-sky-500/40 transition-all">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-2">
              <Briefcase className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-xs text-foreground group-hover:text-sky-500 transition-colors">
              Explore Matched Jobs
            </h3>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              Find jobs matching your skills
            </p>
          </div>
        </Link>

        <Link to="/skill-gap" className="block group">
          <div className="p-4 rounded-xl border border-border/80 bg-card hover:bg-sky-500/5 hover:border-sky-500/40 transition-all">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center mb-2">
              <Target className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-xs text-foreground group-hover:text-sky-500 transition-colors">
              Skill Gap Roadmap
            </h3>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              Bridge skills for target roles
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
