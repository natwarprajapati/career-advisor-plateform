import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { Sparkles, CheckCircle2, AlertTriangle, Flame } from "lucide-react";

const meta: Meta<typeof Badge> = {
  title: "Design System/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "primary",
        "success",
        "warning",
        "destructive",
        "cyan",
        "outline",
        "glass",
        "glow",
        "accent",
        "pill",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "md", "lg"],
    },
    dot: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: "primary",
    children: "Featured Skill",
    dot: true,
  },
};

export const WithIcon: Story = {
  args: {
    variant: "glow",
    icon: <Sparkles className="w-3.5 h-3.5" />,
    children: "AI Powered",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Badge variant="primary" dot>Primary</Badge>
      <Badge variant="success" icon={<CheckCircle2 className="w-3 h-3" />}>Verified</Badge>
      <Badge variant="warning" icon={<AlertTriangle className="w-3 h-3" />}>Pending Review</Badge>
      <Badge variant="destructive">Needs Work</Badge>
      <Badge variant="cyan" dot>Fast Track</Badge>
      <Badge variant="glass" icon={<Flame className="w-3 h-3 text-amber-400" />}>Trending Role</Badge>
      <Badge variant="glow">AI Match 95%</Badge>
      <Badge variant="outline">Remote Only</Badge>
      <Badge variant="secondary">Full Time</Badge>
    </div>
  ),
};
