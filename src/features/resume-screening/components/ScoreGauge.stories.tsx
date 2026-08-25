import type { Meta, StoryObj } from "@storybook/react";
import { ScoreGauge } from "./ScoreGauge";

const meta: Meta<typeof ScoreGauge> = {
  title: "Features/Resume Screening/ScoreGauge",
  component: ScoreGauge,
  tags: ["autodocs"],
  argTypes: {
    score: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    size: {
      control: { type: "number" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScoreGauge>;

export const HighScore: Story = {
  args: {
    score: 88,
    label: "ATS Match Score",
    size: 140,
  },
};

export const AverageScore: Story = {
  args: {
    score: 68,
    label: "ATS Match Score",
    size: 140,
  },
};

export const LowScore: Story = {
  args: {
    score: 42,
    label: "ATS Match Score",
    size: 140,
  },
};

export const TierComparison: Story = {
  render: () => (
    <div className="flex flex-wrap gap-8 items-center justify-center p-4">
      <ScoreGauge score={94} label="Top Match (Emerald)" size={130} />
      <ScoreGauge score={72} label="Average Match (Amber)" size={130} />
      <ScoreGauge score={45} label="Low Match (Red)" size={130} />
    </div>
  ),
};
