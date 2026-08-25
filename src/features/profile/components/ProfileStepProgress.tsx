import React from "react";
import { Check } from "lucide-react";
import { STEPS } from "../constants";
import { UserProfile } from "@/core/types";
import { calculateStepCompletion } from "@/lib/profile-utils";
import { cn } from "@/lib/utils";

interface ProfileStepProgressProps {
  currentStep: number;
  onSelectStep: (stepId: number) => void;
  formData: Partial<UserProfile>;
}

export const ProfileStepProgress: React.FC<ProfileStepProgressProps> = ({
  currentStep,
  onSelectStep,
  formData,
}) => {
  return (
    <div className="mb-8 pb-6 border-b border-border/60">
      {/* Desktop: Clean Minimal Step Bar with Primary Color */}
      <div className="hidden sm:flex items-start justify-between relative">
        {/* Background Track Connector Line (Starts at center of Step 1 and ends at center of Step 5) */}
        <div className="absolute top-5 left-[10%] right-[10%] h-[2px] bg-border z-0">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{
              width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%`,
            }}
          />
        </div>

        {STEPS.map((step) => {
          const Icon = step.icon;
          const isActive = currentStep === step.id;
          const stepInfo = calculateStepCompletion(step.id, formData);
          const isFullyDone = stepInfo.isComplete;

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => onSelectStep(step.id)}
              className="relative flex flex-col items-center group flex-1 cursor-pointer focus:outline-none"
            >
              {/* Step Circle */}
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 border-2 z-10",
                  isActive
                    ? "bg-primary text-primary-foreground border-primary ring-4 ring-primary/10 shadow-sm"
                    : isFullyDone
                    ? "bg-emerald-600 border-emerald-600 text-white"
                    : "bg-card border-border text-muted-foreground group-hover:border-primary/40 group-hover:text-foreground"
                )}
              >
                {isFullyDone ? (
                  <Check className="w-4 h-4 stroke-[2.5]" />
                ) : isActive ? (
                  <span className="text-[11px] font-extrabold">
                    {Math.round(stepInfo.points)}%
                  </span>
                ) : (
                  <Icon className="w-4 h-4" />
                )}
              </div>

              {/* Step Title (Only title, no out of 20% subtitle) */}
              <div className="flex flex-col items-center text-center mt-2">
                <span
                  className={cn(
                    "text-xs transition-colors max-w-[90px]",
                    isActive
                      ? "text-primary font-bold"
                      : isFullyDone
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground group-hover:text-foreground font-medium"
                  )}
                >
                  {step.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile: Clean Horizontal Stepper */}
      <div className="flex sm:hidden items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {STEPS.map((step) => {
          const Icon = step.icon;
          const isActive = currentStep === step.id;
          const stepInfo = calculateStepCompletion(step.id, formData);
          const isFullyDone = stepInfo.isComplete;

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => onSelectStep(step.id)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all shrink-0 cursor-pointer",
                isActive
                  ? "border-primary bg-primary/10 text-primary font-semibold"
                  : isFullyDone
                  ? "border-emerald-600/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  : "border-border/60 bg-card text-muted-foreground"
              )}
            >
              <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0">
                {isFullyDone ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                ) : isActive ? (
                  <span className="text-[10px] font-bold text-primary">
                    {Math.round(stepInfo.points)}%
                  </span>
                ) : (
                  <Icon className="w-3.5 h-3.5" />
                )}
              </div>
              <span>{step.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};




