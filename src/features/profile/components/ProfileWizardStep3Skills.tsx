import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Plus, X, AlertCircle, Tag } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@/ui";
import { UserProfile } from "@/core/types";
import { DOMAINS, POPULAR_SKILLS } from "../constants";
import { step3Schema, Step3Data } from "../schemas";
import { cn } from "@/lib/utils";

interface Step3Props {
  formData: Partial<UserProfile>;
  onChange: (field: keyof UserProfile, value: unknown) => void;
  onValidate?: (isValid: boolean) => void;
}

export const ProfileWizardStep3Skills: React.FC<Step3Props> = ({
  formData,
  onChange,
  onValidate,
}) => {
  const [newSkillInput, setNewSkillInput] = useState("");

  const {
    formState: { errors, isValid },
    setValue,
    trigger,
    watch,
  } = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    mode: "onChange",
    defaultValues: {
      domain: formData.domain || "",
      skills: formData.skills || [],
    },
  });

  useEffect(() => {
    onValidate?.(isValid);
  }, [isValid, onValidate]);

  useEffect(() => {
    setValue("domain", formData.domain || "");
    setValue("skills", formData.skills || []);
    trigger("skills");
  }, [formData, setValue, trigger]);

  const skills = watch("skills") || [];

  const handleAddSkill = (skill: string) => {
    const trimmed = skill.trim();
    if (!trimmed) return;
    const current = formData.skills || [];
    if (!current.some((s) => s.toLowerCase() === trimmed.toLowerCase())) {
      const updated = [...current, trimmed];
      onChange("skills", updated);
      setValue("skills", updated);
      trigger("skills");
    }
    setNewSkillInput("");
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    const updated = (formData.skills || []).filter((s) => s !== skillToRemove);
    onChange("skills", updated);
    setValue("skills", updated);
    trigger("skills");
  };

  const suggestions = POPULAR_SKILLS.filter(
    (s) => !(formData.skills || []).includes(s)
  ).slice(0, 10);

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
          <Cpu className="w-5 h-5 text-sky-500" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-foreground">
            Step 3: Key Skills &amp; Domain Track
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Add core skills to calibrate AI job matching and skill gap insights
          </p>
        </div>
      </div>

      {/* Domain */}
      <div>
        <label
          htmlFor="profile-domain"
          className="block text-xs font-semibold text-foreground mb-1.5"
        >
          Primary Industry / Domain
        </label>
        <select
          id="profile-domain"
          value={formData.domain || ""}
          onChange={(e) => {
            onChange("domain", e.target.value);
            setValue("domain", e.target.value);
          }}
          className="w-full h-11 px-3 rounded-xl border border-border bg-background/80 text-sm text-foreground shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 hover:border-slate-400 dark:hover:border-slate-600"
        >
          <option value="">Select Domain Track</option>
          {DOMAINS.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      {/* Skills Input */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-semibold text-foreground">
            Core Skills <span className="text-rose-500">*</span>
          </label>
          <span
            className={cn(
              "text-[10px] font-medium tabular-nums",
              skills.length === 0 ? "text-rose-400" : "text-muted-foreground"
            )}
          >
            {skills.length} skill{skills.length !== 1 ? "s" : ""} added
          </span>
        </div>

        {/* Input Row */}
        <div className="flex gap-2">
          <Input
            placeholder="Type a skill and press Enter or click Add"
            value={newSkillInput}
            startIcon={<Tag className="w-4 h-4" />}
            onChange={(e) => setNewSkillInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddSkill(newSkillInput);
              }
            }}
            className="flex-1"
          />
          <Button
            type="button"
            onClick={() => handleAddSkill(newSkillInput)}
            variant="secondary"
            size="default"
            className="text-xs px-4 shrink-0 h-11"
            disabled={!newSkillInput.trim()}
          >
            <Plus className="w-3.5 h-3.5" /> Add
          </Button>
        </div>

        {/* Validation error */}
        {errors.skills && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1 text-xs text-rose-500 font-medium"
          >
            <AlertCircle className="w-3 h-3 shrink-0" />
            {errors.skills.message}
          </motion.p>
        )}

        {/* Selected Chips */}
        <AnimatePresence>
          {skills.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-wrap gap-2 p-3 rounded-xl bg-sky-500/5 border border-sky-500/20 min-h-[52px]"
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-500/15 text-sky-700 dark:text-sky-300 border border-sky-500/30"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    className="hover:text-rose-500 text-muted-foreground transition-colors cursor-pointer rounded"
                    aria-label={`Remove ${skill}`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div>
            <span className="text-[11px] text-muted-foreground block mb-2 font-medium">
              Quick suggestions:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => handleAddSkill(s)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium border border-border bg-card hover:bg-sky-500/10 hover:border-sky-400 text-muted-foreground hover:text-sky-600 dark:hover:text-sky-400 transition-all cursor-pointer"
                >
                  <Plus className="w-3 h-3" /> {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
