import { UserProfile } from "@/core/types";

export interface StepCompletionInfo {
  stepId: number;
  points: number; // Earned points (0 - 20)
  maxPoints: number; // 20
  percent: number; // Percentage of this step (0 - 100)
  isComplete: boolean; // true if all fields are filled (points === 20)
  filledCount: number;
  totalFields: number;
}

export const calculateStepCompletion = (
  stepId: number,
  profile: Partial<UserProfile> | null
): StepCompletionInfo => {
  if (!profile) {
    return { stepId, points: 0, maxPoints: 20, percent: 0, isComplete: false, filledCount: 0, totalFields: 5 };
  }

  let points = 0;
  let filledCount = 0;
  let totalFields = 5;

  switch (stepId) {
    case 1: {
      // Step 1: Personal Info (5 fields) -> Max 20 points
      totalFields = 5;
      if (profile.name && profile.name.trim() !== "" && profile.name !== "Candidate") {
        points += 5;
        filledCount++;
      }
      if (profile.phone && profile.phone.trim().length >= 6) {
        points += 4;
        filledCount++;
      }
      if (profile.email && profile.email.trim().includes("@")) {
        points += 4;
        filledCount++;
      }
      if (profile.location && profile.location.trim().length > 1) {
        points += 3.5;
        filledCount++;
      }
      if (profile.headline && profile.headline.trim().length > 3) {
        points += 3.5;
        filledCount++;
      }
      break;
    }

    case 2: {
      // Step 2: Career & Work Info -> Max 20 points
      const isFresher = profile.experience_level === "fresher";
      if (isFresher) {
        totalFields = 1;
        points = 20;
        filledCount = 1;
      } else {
        totalFields = 5;
        if (profile.experience_level) {
          points += 4;
          filledCount++;
        }
        if (profile.current_company && profile.current_company.trim().length > 0) {
          points += 5;
          filledCount++;
        }
        if (profile.current_role && profile.current_role.trim().length > 0) {
          points += 5;
          filledCount++;
        }
        if (profile.years_of_experience !== undefined && profile.years_of_experience > 0) {
          points += 3;
          filledCount++;
        }
        if (profile.notice_period && profile.notice_period.trim().length > 0) {
          points += 3;
          filledCount++;
        }
      }
      break;
    }

    case 3: {
      // Step 3: Skills & Domain -> Max 20 points
      totalFields = 2;
      if (profile.domain && profile.domain.trim().length > 0) {
        points += 5;
        filledCount++;
      }
      const skillsCount = profile.skills?.length || 0;
      if (skillsCount >= 4) {
        points += 15;
        filledCount++;
      } else if (skillsCount === 3) {
        points += 12;
        filledCount++;
      } else if (skillsCount === 2) {
        points += 9;
        filledCount++;
      } else if (skillsCount === 1) {
        points += 6;
        filledCount++;
      }
      break;
    }

    case 4: {
      // Step 4: Education -> Max 20 points
      totalFields = 4;
      const edu = profile.education;
      if (edu?.degree && edu.degree.trim().length > 0) {
        points += 8;
        filledCount++;
      }
      if (edu?.institution && edu.institution.trim().length > 0) {
        points += 6;
        filledCount++;
      }
      if (edu?.field && edu.field.trim().length > 0) {
        points += 3;
        filledCount++;
      }
      if (edu?.gradYear && edu.gradYear.trim().length > 0) {
        points += 3;
        filledCount++;
      }
      break;
    }

    case 5: {
      // Step 5: Resume & Links -> Max 20 points
      totalFields = 4;
      if (profile.has_uploaded_resume || profile.resume_url || profile.resume_name) {
        points += 10;
        filledCount++;
      }
      if (profile.linkedin_url && profile.linkedin_url.trim().length > 5) {
        points += 4;
        filledCount++;
      }
      if (profile.github_url && profile.github_url.trim().length > 5) {
        points += 3;
        filledCount++;
      }
      if (profile.portfolio_url && profile.portfolio_url.trim().length > 5) {
        points += 3;
        filledCount++;
      }
      break;
    }

    default:
      break;
  }

  const clampedPoints = Math.min(20, Math.max(0, points));
  const percent = Math.round((clampedPoints / 20) * 100);
  const isComplete = clampedPoints >= 20;

  return {
    stepId,
    points: clampedPoints,
    maxPoints: 20,
    percent,
    isComplete,
    filledCount,
    totalFields,
  };
};

export const getProfileStepBreakdown = (
  profile: Partial<UserProfile> | null
): StepCompletionInfo[] => {
  return [1, 2, 3, 4, 5].map((stepId) => calculateStepCompletion(stepId, profile));
};

export const calculateProfileCompletion = (profile: Partial<UserProfile> | null): number => {
  if (!profile) return 0;
  const breakdown = getProfileStepBreakdown(profile);
  const total = breakdown.reduce((acc, curr) => acc + curr.points, 0);
  return Math.min(100, Math.max(0, Math.round(total)));
};

