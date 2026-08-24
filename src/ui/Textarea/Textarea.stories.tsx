import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Design System/Textarea",
  component: Textarea,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: "Professional Summary",
    placeholder: "Briefly describe your career experience, core competencies, and career goals...",
    helperText: "Keep it under 300 words for optimal recruiter readability.",
  },
  render: (args) => (
    <div className="w-[380px]">
      <Textarea {...args} />
    </div>
  ),
};

export const WithError: Story = {
  args: {
    label: "Cover Letter Notes",
    value: "Too short",
    error: "Please provide at least 20 characters of input.",
  },
  render: (args) => (
    <div className="w-[380px]">
      <Textarea {...args} />
    </div>
  ),
};
