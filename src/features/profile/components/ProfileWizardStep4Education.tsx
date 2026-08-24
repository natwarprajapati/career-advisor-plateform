import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, University, BookOpen, Calendar, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/ui";
import { UserProfile } from "@/core/types";
import { DEGREES, GRAD_YEARS } from "../constants";
import { step4Schema, Step4Data } from "../schemas";

interface Step4Props {
  formData: Partial<UserProfile>;
  onChange: (field: string, value: string) => void;
  onValidate?: (isValid: boolean) => void;
}

export const ProfileWizardStep4Education: React.FC<Step4Props> = ({
  formData,
  onChange,
  onValidate,
}) => {
  const {
    register,
    formState: { errors, isValid },
    trigger,
  } = useForm<Step4Data>({
    resolver: zodResolver(step4Schema),
    mode: "onChange",
    defaultValues: {
      education: {
        degree: formData.education?.degree || "",
        institution: formData.education?.institution || "",
        field: formData.education?.field || "",
        gradYear: formData.education?.gradYear || "",
      },
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
          <GraduationCap className="w-5 h-5 text-sky-500" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-foreground">
            Step 4: Education &amp; Qualifications
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Add your highest degree and academic details
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
        {/* Highest Degree */}
        <div className="sm:col-span-2">
          <label
            htmlFor="profile-degree"
            className="block text-xs font-semibold text-foreground mb-1.5"
          >
            Highest Degree <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <GraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70 pointer-events-none" />
            <select
              id="profile-degree"
              {...register("education.degree", {
                onChange: (e) => {
                  onChange("degree", e.target.value);
                  trigger("education.degree");
                },
              })}
              className={`w-full h-11 pl-10 pr-3 rounded-xl border bg-background/80 text-sm text-foreground shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 hover:border-slate-400 dark:hover:border-slate-600 ${
                errors.education?.degree
                  ? "border-rose-500/80 focus:ring-rose-500/40 focus:border-rose-500"
                  : "border-border"
              }`}
            >
              <option value="">Select Highest Degree</option>
              {DEGREES.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          {errors.education?.degree?.message && (
            <p className="flex items-center gap-1 text-xs text-rose-500 font-medium mt-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {errors.education.degree.message}
            </p>
          )}
        </div>

        {/* Institution */}
        <div>
          <label
            htmlFor="profile-institution"
            className="block text-xs font-semibold text-foreground mb-1.5"
          >
            College / University Name <span className="text-rose-500">*</span>
          </label>
          <Input
            id="profile-institution"
            placeholder="e.g. Delhi University / IIT / NIT"
            startIcon={<University className="w-4 h-4 text-sky-500/70" />}
            error={errors.education?.institution?.message}
            {...register("education.institution", {
              onChange: (e) => onChange("institution", e.target.value),
            })}
          />
        </div>

        {/* Field of Study */}
        <div>
          <label
            htmlFor="profile-field"
            className="block text-xs font-semibold text-foreground mb-1.5"
          >
            Field of Study / Branch
          </label>
          <Input
            id="profile-field"
            placeholder="e.g. Computer Science"
            startIcon={<BookOpen className="w-4 h-4 text-sky-500/70" />}
            error={errors.education?.field?.message}
            {...register("education.field", {
              onChange: (e) => onChange("field", e.target.value),
            })}
          />
        </div>

        {/* Graduation Year */}
        <div>
          <label
            htmlFor="profile-gradyear"
            className="block text-xs font-semibold text-foreground mb-1.5"
          >
            Graduation / Passing Year
          </label>
          <div className="relative">
            <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70 pointer-events-none" />
            <select
              id="profile-gradyear"
              {...register("education.gradYear", {
                onChange: (e) => onChange("gradYear", e.target.value),
              })}
              className="w-full h-11 pl-10 pr-3 rounded-xl border border-border bg-background/80 text-sm text-foreground shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 hover:border-slate-400 dark:hover:border-slate-600"
            >
              <option value="">Select Passing Year</option>
              {GRAD_YEARS.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
