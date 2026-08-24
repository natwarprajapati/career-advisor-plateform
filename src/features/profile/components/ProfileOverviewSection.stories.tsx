import type { Meta, StoryObj } from "@storybook/react";
import { ProfileOverviewSection } from "./ProfileOverviewSection";
import { UserProfile } from "@/core/types";

const meta: Meta<typeof ProfileOverviewSection> = {
  title: "Features/Profile/ProfileOverviewSection",
  component: ProfileOverviewSection,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProfileOverviewSection>;

const mockFullProfile: Partial<UserProfile> = {
  name: "Natwar Prajapati",
  phone: "+919876543210",
  email: "natwar@example.com",
  experience_level: "lead",
  current_role: "Lead Software Architect",
  domain: "Frontend Architecture",
  preferred_job_types: ["Staff Frontend Engineer", "Tech Lead"],
  skills: ["React", "TypeScript", "Next.js", "GraphQL", "Tailwind CSS", "Architecture"],
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "National Institute of Technology",
    gradYear: "2022",
  },
  github_url: "https://github.com/natwarprajapati",
  linkedin_url: "https://linkedin.com/in/natwarprajapati",
  resume_url: "https://example.com/resume.pdf",
};

export const CompleteProfile: Story = {
  args: {
    formData: mockFullProfile,
    onEditStep: (step) => console.log("Edit step clicked:", step),
  },
  render: (args) => (
    <div className="w-full max-w-4xl">
      <ProfileOverviewSection {...args} />
    </div>
  ),
};
