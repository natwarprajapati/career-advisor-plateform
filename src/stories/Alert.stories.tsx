import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../design-system";

const meta: Meta<typeof Alert> = {
  title: "Design System/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "info", "success", "warning", "destructive"],
    },
    title: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    variant: "success",
    title: "ATS Optimization Complete",
    children: "Your resume scored 94/100 and passes ATS format screening with 18 high-impact keywords.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Missing Skill Requirements",
    children: "3 critical skills (Docker, Kubernetes, GraphQL) were found in the job description but not in your resume.",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    title: "Unrecognized File Format",
    children: "Please upload a valid PDF document. Scanned images without embedded text cannot be audited.",
  },
};
