import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar, CircularGauge } from "../design-system";

const meta: Meta<typeof ProgressBar> = {
  title: "Design System/Progress",
  component: ProgressBar,
  tags: ["autodocs"],
};

export default meta;

export const LinearProgress: StoryObj<typeof ProgressBar> = {
  args: {
    value: 78,
    max: 100,
    showValue: true,
    label: "Full Stack Roadmap Completion",
    variant: "gradient",
    size: "md",
  },
};

export const ScoreGauges: StoryObj<typeof CircularGauge> = {
  render: () => (
    <div className="flex flex-wrap gap-8 items-center justify-center p-6">
      <CircularGauge score={92} size="lg" label="Resume ATS Match" showGrade />
      <CircularGauge score={68} size="md" label="Skill Alignment" showGrade />
      <CircularGauge score={42} size="sm" label="Format Quality" showGrade />
    </div>
  ),
};
