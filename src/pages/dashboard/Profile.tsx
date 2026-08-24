import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Edit3,
  MapPin,
  Mail,
  Phone,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { calculateProfileCompletion } from "@/lib/profile-utils";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { ProfileSkeleton } from "@/components/dashboard";
import { Card, Button, Badge } from "@/ui";
import { useToast } from "@/hooks/use-toast";
import { UserProfile } from "@/core/types";
import {
  ProfileWizardStep1Personal,
  ProfileWizardStep2Career,
  ProfileWizardStep3Skills,
  ProfileWizardStep4Education,
  ProfileWizardStep5Resume,
  ProfileOverviewSection,
  ProfileStepProgress,
} from "@/features/profile";

export const Profile: React.FC = () => {
  const { userProfile, updateUserProfile, isLoading } = useUser();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [activeTab, setActiveTab] = useState<"wizard" | "overview">("overview");
  const [currentStep, setCurrentStep] = useState(1);
  const [isSaving, setIsSaving] = useState(false);
  const [stepValid, setStepValid] = useState(false);

  useEffect(() => {
    if (!isLoading && !userProfile) {
      navigate('/?getStarted=true', { replace: true, state: { fromDashboard: true } });
    }
  }, [userProfile, isLoading, navigate]);

  // Form State
  const [formData, setFormData] = useState<Partial<UserProfile>>({
    name: "",
    phone: "",
    email: "",
    location: "",
    headline: "",
    experience_level: undefined,
    current_company: "",
    current_role: "",
    years_of_experience: 0,
    notice_period: "",
    skills: [],
    domain: "",
    preferred_job_types: ["Remote", "Hybrid"],
    education: {
      degree: "",
      institution: "",
      field: "",
      gradYear: "",
    },
    resume_name: "",
    resume_url: "",
    has_uploaded_resume: false,
    linkedin_url: "",
    github_url: "",
    portfolio_url: "",
  });

  useEffect(() => {
    if (userProfile) {
      setFormData((prev) => ({
        ...prev,
        ...userProfile,
        education: {
          ...prev.education,
          ...(userProfile.education || {}),
        },
      }));

      // If user profile is very new / empty, start in wizard mode
      const completion = calculateProfileCompletion(userProfile);
      if (completion <= 20) {
        setActiveTab("wizard");
      }
    }
  }, [userProfile]);

  const handleFieldChange = (field: keyof UserProfile, value: unknown) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleEducationChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      education: {
        ...(prev.education || {}),
        [field]: value,
      },
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.match(/\.(pdf|doc|docx)$/i)) {
      toast({
        title: "Invalid File",
        description: "Please upload a PDF or DOCX file.",
        variant: "destructive",
      });
      return;
    }

    const fakeUrl = URL.createObjectURL(file);
    setFormData((prev) => ({
      ...prev,
      resume_name: file.name,
      resume_url: fakeUrl,
      has_uploaded_resume: true,
    }));

    toast({
      title: "Resume Attached!",
      description: `Attached "${file.name}" to your profile.`,
    });
  };

  const handleRemoveResume = () => {
    setFormData((prev) => ({
      ...prev,
      resume_name: "",
      resume_url: "",
      has_uploaded_resume: false,
    }));
  };

  const saveCurrentProgress = async () => {
    setIsSaving(true);
    try {
      const updated = await updateUserProfile(formData);
      toast({
        title: "Profile Saved!",
        description: `Your profile details have been saved (${calculateProfileCompletion(
          updated
        )}% complete).`,
      });
    } catch {
      toast({
        title: "Save Failed",
        description: "Unable to sync profile. Local changes preserved.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleStepValidate = useCallback((isValid: boolean) => {
    setStepValid(isValid);
  }, []);

  const handleNextStep = async () => {
    if (!stepValid) {
      toast({
        title: "Please fix the errors",
        description: "Complete all required fields before moving to the next step.",
        variant: "destructive",
      });
      return;
    }
    await saveCurrentProgress();
    if (currentStep < 5) {
      setStepValid(false); // reset for new step
      setCurrentStep((prev) => prev + 1);
    } else {
      setActiveTab("overview");
      const currentScore = calculateProfileCompletion(formData);
      if (currentScore === 100) {
        toast({
          title: "All-Star Profile Completed! 🎉",
          description: "Your candidate profile is 100% complete and fully optimized.",
        });
      } else {
        toast({
          title: `Profile Saved (${currentScore}% Setup)`,
          description: "Your candidate profile is updated. Complete remaining optional sections anytime to reach 100%.",
        });
      }
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  if (isLoading) {
    return <ProfileSkeleton />;
  }

  const liveCompletion = calculateProfileCompletion(formData);

  return (
    <>
      <Helmet>
        <title>My Profile & Career Details - Dashboard</title>
        <meta
          name="description"
          content="Manage your full professional candidate profile, skills, work experience, and verified resume."
        />
      </Helmet>

      <DashboardLayout>
        <div className="max-w-5xl mx-auto space-y-6 pb-12">
          {/* Header Card */}
          <div className="relative p-6 sm:p-8 rounded-3xl border border-border/60 bg-gradient-to-br from-card via-card/90 to-sky-500/5 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary text-white flex items-center justify-center font-extrabold text-2xl sm:text-3xl shadow-lg shadow-sky-500/25 shrink-0">
                  {formData.name ? formData.name.charAt(0).toUpperCase() : "U"}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
                      {formData.name || "Candidate Profile"}
                    </h1>
                    <Badge variant="primary" size="sm" className="capitalize">
                      {formData.experience_level || "Fresher"}
                    </Badge>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 max-w-lg">
                    {formData.headline || "Complete your profile to unlock tailored AI job recommendations."}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
                    {formData.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-sky-500" />
                        {formData.location}
                      </span>
                    )}
                    {formData.phone && (
                      <span className="flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-emerald-500" />
                        {formData.phone}
                      </span>
                    )}
                    {formData.email && (
                      <span className="flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-indigo-500" />
                        {formData.email}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Button
                  onClick={() => {
                    setActiveTab(activeTab === "wizard" ? "overview" : "wizard");
                    if (activeTab === "overview") setCurrentStep(1);
                  }}
                  variant={activeTab === "wizard" ? "outline" : "primary"}
                  size="sm"
                  className="text-xs font-semibold gap-1.5"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  {activeTab === "wizard" ? "View Overview" : "Edit Steps"}
                </Button>
              </div>
            </div>

            {/* Profile Completion Progress Bar */}
            <div className="mt-6 pt-4 border-t border-border/50">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-semibold text-foreground flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-sky-500" /> Profile Strength: {liveCompletion}%
                </span>
                <span className="text-xs font-medium text-sky-600 dark:text-sky-400">
                  {liveCompletion === 100
                    ? "All-Star Profile (100%)"
                    : `${5 - Math.floor(liveCompletion / 20)} steps left to reach 100%`}
                </span>
              </div>
              <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full transition-all duration-500"
                  style={{ width: `${liveCompletion}%` }}
                />
              </div>
            </div>
          </div>

          {/* STEP WIZARD MODE */}
          {activeTab === "wizard" ? (
            <Card
              variant="glass"
              className="p-6 md:p-8 border border-border/80 bg-card shadow-lg"
            >
              <ProfileStepProgress
                currentStep={currentStep}
                onSelectStep={(step) => setCurrentStep(step)}
                formData={formData}
              />

              <div className="min-h-[300px]">
                {currentStep === 1 && (
                  <ProfileWizardStep1Personal
                    formData={formData}
                    onChange={handleFieldChange}
                    onValidate={handleStepValidate}
                  />
                )}

                {currentStep === 2 && (
                  <ProfileWizardStep2Career
                    formData={formData}
                    onChange={handleFieldChange}
                    onValidate={handleStepValidate}
                  />
                )}

                {currentStep === 3 && (
                  <ProfileWizardStep3Skills
                    formData={formData}
                    onChange={handleFieldChange}
                    onValidate={handleStepValidate}
                  />
                )}

                {currentStep === 4 && (
                  <ProfileWizardStep4Education
                    formData={formData}
                    onChange={handleEducationChange}
                    onValidate={handleStepValidate}
                  />
                )}

                {currentStep === 5 && (
                  <ProfileWizardStep5Resume
                    formData={formData}
                    onChange={handleFieldChange}
                    onFileUpload={handleFileUpload}
                    onRemoveResume={handleRemoveResume}
                    onValidate={handleStepValidate}
                  />
                )}
              </div>

              {/* Wizard Bottom Actions */}
              <div className="flex items-center justify-between pt-8 mt-8 border-t border-border/60">
                <Button
                  type="button"
                  onClick={handlePrevStep}
                  disabled={currentStep === 1 || isSaving}
                  variant="secondary"
                  size="md"
                  className="gap-1.5 text-xs"
                >
                  <ArrowLeft className="w-4 h-4" /> Previous
                </Button>

                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    onClick={handleNextStep}
                    disabled={isSaving || !stepValid}
                    variant={stepValid ? "primary" : "outline"}
                    size="md"
                    className="gap-1.5 text-xs px-5 transition-all"
                    title={!stepValid ? "Complete required fields to continue" : undefined}
                  >
                    {isSaving
                      ? "Saving..."
                      : currentStep === 5
                        ? liveCompletion === 100
                          ? "Finish & View Overview"
                          : `Save Profile (${liveCompletion}%)`
                        : "Save & Next"}
                    {currentStep === 5 ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          ) : (
            <ProfileOverviewSection
              formData={formData}
              onEditStep={(step) => {
                setActiveTab("wizard");
                setCurrentStep(step);
              }}
            />
          )}
        </div>
      </DashboardLayout>
    </>
  );
};

export default Profile;
