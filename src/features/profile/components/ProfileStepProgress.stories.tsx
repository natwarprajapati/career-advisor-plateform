import type { Meta, StoryObj } from "@storybook/react";
import { ProfileStepProgress } from "./ProfileStepProgress";
import { UserProfile } from "@/core/types";

const meta: Meta<typeof ProfileStepProgress> = {
  title: "Features/Profile/ProfileStepProgress",
  component: ProfileStepProgress,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProfileStepProgress>;

const mockPartialProfile: Partial<UserProfile> = {
  name: "Natwar Prajapati",
  phone: "+919876543210",
  email: "natwar@example.com",
  experience_level: "senior",
  current_role: "Senior Full Stack Engineer",
  domain: "Full Stack Development",
  skills: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
};

export const Step1Active: Story = {
  args: {
    currentStep: 1,
    formData: mockPartialProfile,
    onSelectStep: (step) => console.log("Selected step:", step),
  },
  render: (args) => (
    <div className="w-full max-w-3xl">
      <ProfileStepProgress {...args} />
    </div>
  ),
};

export const Step3Active: Story = {
  args: {
    currentStep: 3,
    formData: mockPartialProfile,
    onSelectStep: (step) => console.log("Selected step:", step),
  },
  render: (args) => (
    <div className="w-full max-w-3xl">
      <ProfileStepProgress {...args} />
    </div>
  ),
};

export const Step5Completed: Story = {
  args: {
    currentStep: 5,
    formData: {
      ...mockPartialProfile,
      education: {
        degree: "B.Tech in Computer Science",
        institution: "Tech University",
        field: "Computer Science",
        gradYear: "2023",
      },
      has_uploaded_resume: true,
      resume_name: "Resume.pdf",
      resume_url: "https://example.com/resume.pdf",
      linkedin_url: "https://linkedin.com/in/example",
      github_url: "https://github.com/example",
    },
    onSelectStep: (step) => console.log("Selected step:", step),
  },
  render: (args) => (
    <div className="w-full max-w-3xl">
      <ProfileStepProgress {...args} />
    </div>
  ),
};
