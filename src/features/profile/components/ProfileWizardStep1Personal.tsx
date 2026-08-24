import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { User, Phone, Mail, MapPin, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/ui";
import { UserProfile } from "@/core/types";
import { step1Schema, Step1Data } from "../schemas";

interface Step1Props {
  formData: Partial<UserProfile>;
  onChange: (field: keyof UserProfile, value: unknown) => void;
  onValidate?: (isValid: boolean) => void;
}

export const ProfileWizardStep1Personal: React.FC<Step1Props> = ({
  formData,
  onChange,
  onValidate,
}) => {
  const {
    register,
    formState: { errors, isValid },
    watch,
    setValue,
    trigger,
  } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    mode: "onChange",
    defaultValues: {
      name: formData.name === "Candidate" || formData.name === "User" ? "" : formData.name || "",
      phone: formData.phone || "",
      email: formData.email || "",
      location: formData.location || "",
      headline: formData.headline || "",
    },
  });

  // Sync validity up to parent
  useEffect(() => {
    onValidate?.(isValid);
  }, [isValid, onValidate]);

  // Initial trigger to validate default state
  useEffect(() => {
    trigger();
  }, [trigger]);

  const headlineValue = watch("headline") || "";
  const HEADLINE_MAX = 150;

  const handleChange =
    (field: keyof UserProfile) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(field, e.target.value);
      trigger(field as keyof Step1Data);
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
          <User className="w-5 h-5 text-sky-500" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-foreground">
            Step 1: Personal Information
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Basic contact details for employers and AI career mentor
          </p>
        </div>
      </div>

      {/* Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="profile-name"
            className="block text-xs font-semibold text-foreground mb-1.5"
          >
            Full Name <span className="text-rose-500">*</span>
          </label>
          <Input
            id="profile-name"
            placeholder="e.g. Natwar Prajapati"
            startIcon={<User className="w-4 h-4 text-sky-500/70" />}
            error={errors.name?.message}
            {...register("name", {
              onChange: handleChange("name"),
            })}
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label
            htmlFor="profile-phone"
            className="block text-xs font-semibold text-foreground mb-1.5"
          >
            Mobile Number
          </label>
          <Input
            id="profile-phone"
            placeholder="e.g. +91 9876543210"
            startIcon={<Phone className="w-4 h-4 text-sky-500/70" />}
            error={errors.phone?.message}
            {...register("phone", {
              onChange: handleChange("phone"),
            })}
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="profile-email"
            className="block text-xs font-semibold text-foreground mb-1.5"
          >
            Email Address
          </label>
          <Input
            id="profile-email"
            type="email"
            placeholder="e.g. natwar@example.com"
            startIcon={<Mail className="w-4 h-4 text-sky-500/70" />}
            error={errors.email?.message}
            {...register("email", {
              onChange: handleChange("email"),
            })}
          />
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="profile-location"
            className="block text-xs font-semibold text-foreground mb-1.5"
          >
            City / State
          </label>
          <Input
            id="profile-location"
            placeholder="e.g. Bengaluru, Karnataka"
            startIcon={<MapPin className="w-4 h-4 text-sky-500/70" />}
            error={errors.location?.message}
            {...register("location", {
              onChange: handleChange("location"),
            })}
          />
        </div>

        {/* Professional Headline */}
        <div className="sm:col-span-2">
          <div className="flex items-center justify-between mb-1.5">
            <label
              htmlFor="profile-headline"
              className="block text-xs font-semibold text-foreground"
            >
              Professional Headline
            </label>
            <span
              className={`text-[10px] font-medium tabular-nums ${
                headlineValue.length > HEADLINE_MAX
                  ? "text-rose-500"
                  : headlineValue.length > 120
                  ? "text-amber-500"
                  : "text-muted-foreground"
              }`}
            >
              {headlineValue.length}/{HEADLINE_MAX}
            </span>
          </div>
          <Input
            id="profile-headline"
            placeholder="e.g. Full Stack Developer | React, Node.js & Cloud enthusiast"
            startIcon={<Sparkles className="w-4 h-4 text-sky-500/70" />}
            error={errors.headline?.message}
            {...register("headline", {
              onChange: handleChange("headline"),
            })}
          />
          {!errors.headline && (
            <p className="text-[10px] text-muted-foreground mt-1">
              Appears on your profile card and helps recruiters find you
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};


