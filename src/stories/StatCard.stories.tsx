import type { Meta, StoryObj } from "@storybook/react";
import { FileText, Briefcase, Award, TrendingUp } from "lucide-react";
import { StatCard } from "../design-system";

const meta: Meta<typeof StatCard> = {
  title: "Design System/StatCard",
  component: StatCard,
  tags: ["autodocs"],
  argTypes: {
    gradient: {
      control: "select",
      options: ["sky", "cyan", "emerald", "amber", "rose", "purple"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatCard>;

export const ATSScore: Story = {
  args: {
    title: "Average ATS Score",
    value: "88%",
    icon: <Award className="h-5 w-5" />,
    trend: { value: "+14%", isPositive: true },
    subtitle: "vs previous resume draft",
    gradient: "emerald",
  },
};

export const ResumesCreated: Story = {
  args: {
    title: "Resumes Tailored",
    value: "12",
    icon: <FileText className="h-5 w-5" />,
    trend: { value: "+3 this week", isPositive: true },
    gradient: "sky",
  },
};

export const JobMatches: Story = {
  args: {
    title: "Active Applications",
    value: "24",
    icon: <Briefcase className="h-5 w-5" />,
    trend: { value: "+8 new", isPositive: true },
    gradient: "cyan",
  },
};

export const DashboardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
      <StatCard
        title="ATS Score"
        value="92/100"
        icon={<Award className="h-5 w-5" />}
        trend={{ value: "+8%", isPositive: true }}
        subtitle="Optimized"
        gradient="emerald"
      />
      <StatCard
        title="Jobs Matched"
        value="48"
        icon={<Briefcase className="h-5 w-5" />}
        trend={{ value: "+12", isPositive: true }}
        subtitle="Ready to apply"
        gradient="sky"
      />
      <StatCard
        title="Skills Verified"
        value="18/20"
        icon={<TrendingUp className="h-5 w-5" />}
        trend={{ value: "90% ready", isPositive: true }}
        gradient="cyan"
      />
    </div>
  ),
};
