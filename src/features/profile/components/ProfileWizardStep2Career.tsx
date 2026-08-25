import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, Clock, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/ui";
import { UserProfile, ExperienceLevel } from "@/core/types";
import { EXPERIENCE_LEVELS } from "../constants";
import { step2Schema, Step2Data } from "../schemas";
import { cn } from "@/lib/utils";

interface Step2Props {
  formData: Partial<UserProfile>;
  onChange: (field: keyof UserProfile, value: unknown) => void;
  onValidate?: (isValid: boolean) => void;
}

const NOTICE_OPTIONS = ["Immediate", "15 Days", "30 Days", "60 Days", "90 Days"];

export const ProfileWizardStep2Career: React.FC<Step2Props> = ({
  formData,
  onChange,
  onValidate,
}) => {
  const {
    register,
    formState: { errors, isValid },
    setValue,
    watch,
    trigger,
  } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    mode: "onChange",
    defaultValues: {
      experience_level: formData.experience_level,
      current_company: formData.current_company || "",
      current_role: formData.current_role || "",
      years_of_experience: formData.years_of_experience ?? 0,
      notice_period: formData.notice_period || "Immediate",
    },
  });

  useEffect(() => {
    onValidate?.(isValid);
  }, [isValid, onValidate]);

  useEffect(() => {
    trigger();
  }, [trigger]);

  const experienceLevel = watch("experience_level");
  const isExperienced = Boolean(experienceLevel && experienceLevel !== "fresher");

  const handleSelectLevel = (level: ExperienceLevel) => {
    onChange("experience_level", level);
    setValue("experience_level", level);
    trigger("experience_level");
  };

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
          <Briefcase className="w-5 h-5 text-sky-500" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-foreground">
            Step 2: Career &amp; Experience Level
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Select your current career stage and work details
          </p>
        </div>
      </div>

      {/* Experience Level Selector */}
      <div>
        <label className="block text-xs font-semibold text-foreground mb-2">
          Experience Level <span className="text-rose-500">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {EXPERIENCE_LEVELS.map((level) => {
            const isSelected = experienceLevel === level.id;
            return (
              <button
                key={level.id}
                type="button"
                onClick={() => handleSelectLevel(level.id)}
                className={cn(
                  "relative p-3.5 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer group",
                  isSelected
                    ? "border-sky-500 bg-sky-500/10 shadow-sm shadow-sky-500/20"
                    : "border-border bg-card hover:border-sky-400/50 hover:bg-sky-500/5"
                )}
              >
                {isSelected && (
                  <motion.div
                    layoutId="career-level-indicator"
                    className="absolute top-2 right-2 w-2 h-2 rounded-full bg-sky-500"
                  />
                )}
                <div
                  className={cn(
                    "font-semibold text-xs mb-0.5 transition-colors",
                    isSelected ? "text-sky-600 dark:text-sky-400" : "text-foreground group-hover:text-sky-500"
                  )}
                >
                  {level.label}
                </div>
                <div className="text-[11px] text-muted-foreground">{level.sub}</div>
              </button>
            );
          })}
        </div>
        {errors.experience_level?.message && (
          <p className="flex items-center gap-1 text-xs text-rose-500 font-medium mt-1.5">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            {errors.experience_level.message}
          </p>
        )}
      </div>

      {/* Experienced fields */}
      {isExperienced && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5 pt-4 border-t border-border/40"
        >
          {/* Company Name */}
          <div>
            <label
              htmlFor="profile-company"
              className="block text-xs font-semibold text-foreground mb-1.5"
            >
              Company Name
            </label>
            <Input
              id="profile-company"
              placeholder="e.g. Infosys, TCS, Startup"
              startIcon={<Building2 className="w-4 h-4 text-sky-500/70" />}
              error={errors.current_company?.message}
              {...register("current_company", {
                onChange: (e) => onChange("current_company", e.target.value),
              })}
            />
          </div>

          {/* Current Role */}
          <div>
            <label
              htmlFor="profile-role"
              className="block text-xs font-semibold text-foreground mb-1.5"
            >
              Current Designation / Role
            </label>
            <Input
              id="profile-role"
              placeholder="e.g. Frontend Engineer"
              startIcon={<Briefcase className="w-4 h-4 text-sky-500/70" />}
              error={errors.current_role?.message}
              {...register("current_role", {
                onChange: (e) => onChange("current_role", e.target.value),
              })}
            />
          </div>

          {/* Years of Experience */}
          <div>
            <label
              htmlFor="profile-years"
              className="block text-xs font-semibold text-foreground mb-1.5"
            >
              Years of Experience
            </label>
            <Input
              id="profile-years"
              type="number"
              step="0.5"
              min="0"
              max="50"
              placeholder="e.g. 3"
              error={errors.years_of_experience?.message}
              {...register("years_of_experience", {
                valueAsNumber: true,
                onChange: (e) =>
                  onChange("years_of_experience", parseFloat(e.target.value) || 0),
              })}
            />
          </div>

          {/* Notice Period */}
          <div>
            <label
              htmlFor="profile-notice"
              className="block text-xs font-semibold text-foreground mb-1.5"
            >
              Notice Period
            </label>
            <div className="relative">
              <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70 pointer-events-none" />
              <select
                id="profile-notice"
                {...register("notice_period", {
                  onChange: (e) => onChange("notice_period", e.target.value),
                })}
                className="w-full h-11 pl-10 pr-3 rounded-xl border border-border bg-background/80 text-sm text-foreground shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 hover:border-slate-400 dark:hover:border-slate-600"
              >
                {NOTICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
