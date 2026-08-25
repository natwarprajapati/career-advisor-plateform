import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Sparkles, ArrowRight, Download, Trash2 } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Design System/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "outline",
        "ghost",
        "glass",
        "glow",
        "subtle",
        "destructive",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "md", "lg", "xl", "icon"],
    },
    isLoading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Get Started Now",
    size: "md",
    rightIcon: <ArrowRight className="w-4 h-4" />,
  },
};

export const Glass: Story = {
  args: {
    variant: "glass",
    children: "Interactive Glass",
    leftIcon: <Sparkles className="w-4 h-4 text-sky-400" />,
  },
};

export const Glow: Story = {
  args: {
    variant: "glow",
    children: "AI Analyze Resume",
    leftIcon: <Sparkles className="w-4 h-4" />,
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Download Report",
    leftIcon: <Download className="w-4 h-4" />,
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete Item",
    leftIcon: <Trash2 className="w-4 h-4" />,
  },
};

export const Loading: Story = {
  args: {
    variant: "primary",
    isLoading: true,
    children: "Saving Profile...",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="glass">Glass</Button>
      <Button variant="glow">Glow</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};
