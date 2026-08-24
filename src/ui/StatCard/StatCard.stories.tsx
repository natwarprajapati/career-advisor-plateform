import type { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "./StatCard";
import { Briefcase, Target, Award, Sparkles, TrendingUp } from "lucide-react";

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

export const Default: Story = {
  args: {
    title: "ATS Resume Score",
    value: "92/100",
    gradient: "emerald",
    icon: <Award className="w-5 h-5" />,
    trend: {
      value: "+14% vs last week",
      isPositive: true,
    },
    subtitle: "Top 5% of applicants",
  },
  render: (args) => (
    <div className="w-[320px]">
      <StatCard {...args} />
    </div>
  ),
};

export const GridShowcase: Story = {
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
      <StatCard
        title="Jobs Applied"
        value="24"
        gradient="sky"
        icon={<Briefcase className="w-5 h-5" />}
        trend={{ value: "+4 this week", isPositive: true }}
      />
      <StatCard
        title="Skill Match Rate"
        value="88%"
        gradient="cyan"
        icon={<Target className="w-5 h-5" />}
        trend={{ value: "+6% optimized", isPositive: true }}
      />
      <StatCard
        title="Profile Strength"
        value="Level 4"
        gradient="purple"
        icon={<Sparkles className="w-5 h-5" />}
        subtitle="1 step to Master tier"
      />
    </div>
  ),
};
