import type { Meta, StoryObj } from "@storybook/react";
import { Plus, Sparkles, FileSearch } from "lucide-react";
import { EmptyState } from "../design-system";

const meta: Meta<typeof EmptyState> = {
  title: "Design System/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const NoResumes: Story = {
  args: {
    icon: <FileSearch className="h-8 w-8" />,
    title: "No Resumes Created Yet",
    description:
      "Build your first ATS-friendly resume using our step-by-step AI wizard or scan an existing PDF to diagnose match scores.",
    actionLabel: "Create First Resume",
    actionIcon: <Plus className="h-4 w-4" />,
    onAction: () => alert("Create Resume clicked!"),
  },
};

export const NoJobMatches: Story = {
  args: {
    icon: <Sparkles className="h-8 w-8 text-cyan-400" />,
    title: "No Job Recommendations Yet",
    description:
      "Complete your target role preferences and skills analysis to receive personalized daily job openings.",
    actionLabel: "Complete Profile Analysis",
    actionIcon: <Sparkles className="h-4 w-4" />,
    onAction: () => alert("Analyze profile clicked!"),
  },
};
