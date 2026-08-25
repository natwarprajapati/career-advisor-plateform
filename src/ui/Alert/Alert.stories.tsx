import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Design System/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "info", "success", "warning", "destructive"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: "info",
    title: "ATS Tip",
    children: "Including quantifiable metrics in your experience bullets boosts ATS score by 25%.",
    onClose: () => {},
  },
  render: (args) => (
    <div className="max-w-md w-full">
      <Alert {...args} />
    </div>
  ),
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Profile Synced",
    children: "Your career details and skills were successfully updated to Supabase cloud.",
  },
  render: (args) => (
    <div className="max-w-md w-full">
      <Alert {...args} />
    </div>
  ),
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Missing Key Requirements",
    children: "You haven't uploaded a resume yet. Some recommendations will use default estimates.",
  },
  render: (args) => (
    <div className="max-w-md w-full">
      <Alert {...args} />
    </div>
  ),
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    title: "Upload Failed",
    children: "The file exceeds 10MB limit or is corrupted. Please choose a valid PDF file.",
  },
  render: (args) => (
    <div className="max-w-md w-full">
      <Alert {...args} />
    </div>
  ),
};
