import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar, CircularGauge } from "./Progress";

const meta: Meta<typeof ProgressBar> = {
  title: "Design System/Progress",
  component: ProgressBar,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "gradient", "success", "warning", "destructive", "cyan"],
    },
    value: {
      control: { type: "range", min: 0, max: 100 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const LinearGradient: Story = {
  args: {
    value: 75,
    label: "Profile Completion",
    showValue: true,
    variant: "gradient",
  },
  render: (args) => (
    <div className="w-[340px]">
      <ProgressBar {...args} />
    </div>
  ),
};

export const CircularGaugeShowcase: StoryObj<typeof CircularGauge> = {
  render: () => (
    <div className="flex flex-wrap gap-8 items-center justify-center p-4">
      <CircularGauge score={92} size="md" label="ATS Compatibility" />
      <CircularGauge score={68} size="md" label="Keyword Density" />
      <CircularGauge score={35} size="md" label="Formatting Score" />
    </div>
  ),
};
