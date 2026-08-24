import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "./EmptyState";
import { FileSearch, Plus, Briefcase, Sparkles } from "lucide-react";

const meta: Meta<typeof EmptyState> = {
  title: "Design System/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const NoResumes: Story = {
  args: {
    icon: <FileSearch className="w-8 h-8" />,
    title: "No Resumes Uploaded Yet",
    description: "Upload your resume in PDF format to receive instant ATS evaluation and AI suggestions.",
    actionLabel: "Upload Resume",
    actionIcon: <Plus className="w-4 h-4" />,
    onAction: () => alert("Upload clicked"),
  },
  render: (args) => (
    <div className="max-w-md w-full">
      <EmptyState {...args} />
    </div>
  ),
};

export const NoSavedJobs: Story = {
  args: {
    icon: <Briefcase className="w-8 h-8 text-cyan-400" />,
    title: "No Saved Jobs Found",
    description: "Explore AI matched opportunities tailored specifically for your target domain.",
    actionLabel: "Discover Jobs",
    actionIcon: <Sparkles className="w-4 h-4" />,
    onAction: () => alert("Discover clicked"),
  },
  render: (args) => (
    <div className="max-w-md w-full">
      <EmptyState {...args} />
    </div>
  ),
};
