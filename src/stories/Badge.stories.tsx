import type { Meta, StoryObj } from "@storybook/react";
import { Sparkles, CheckCircle2, AlertCircle } from "lucide-react";
import { Badge } from "../design-system";

const meta: Meta<typeof Badge> = {
  title: "Design System/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "destructive",
        "cyan",
        "glass",
        "glow",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    dot: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Featured Job",
    variant: "default",
    size: "md",
  },
};

export const SuccessWithDot: Story = {
  args: {
    children: "94% ATS Match",
    variant: "success",
    dot: true,
  },
};

export const GlowAI: Story = {
  args: {
    children: "AI Recommended",
    variant: "glow",
    icon: <Sparkles className="h-3.5 w-3.5" />,
  },
};

export const Warning: Story = {
  args: {
    children: "Missing 2 Keywords",
    variant: "warning",
    icon: <AlertCircle className="h-3.5 w-3.5" />,
  },
};

export const AllBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center p-4">
      <Badge variant="primary" dot>Primary</Badge>
      <Badge variant="success" dot>High Match</Badge>
      <Badge variant="warning" dot>Skill Gap</Badge>
      <Badge variant="destructive" dot>Action Required</Badge>
      <Badge variant="cyan">Remote Role</Badge>
      <Badge variant="glass">Glass Surface</Badge>
      <Badge variant="glow" icon={<Sparkles className="h-3 w-3" />}>AI Powered</Badge>
    </div>
  ),
};
