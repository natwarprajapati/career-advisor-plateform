import type { Meta, StoryObj } from "@storybook/react";
import { expect, within, userEvent } from "@storybook/test";
import { Sparkles, ArrowRight, Trash2 } from "lucide-react";
import { Button } from "../design-system";

const meta: Meta<typeof Button> = {
  title: "Design System/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "glow",
        "glass",
        "outline",
        "ghost",
        "destructive",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon", "icon-sm"],
    },
    isLoading: { control: "boolean" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
    size: "md",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeInTheDocument();
    await userEvent.hover(button);
  },
};

export const GlowCTA: Story = {
  args: {
    variant: "glow",
    children: "Generate AI Resume",
    leftIcon: <Sparkles className="h-4 w-4" />,
    size: "lg",
  },
};

export const SecondaryWithIcon: Story = {
  args: {
    variant: "secondary",
    children: "View Career Roadmap",
    rightIcon: <ArrowRight className="h-4 w-4" />,
  },
};

export const Glass: Story = {
  args: {
    variant: "glass",
    children: "Glassmorphic Action",
  },
};

export const LoadingState: Story = {
  args: {
    variant: "primary",
    isLoading: true,
    children: "Analyzing ATS Score...",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete Resume Draft",
    leftIcon: <Trash2 className="h-4 w-4" />,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center p-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="glow" leftIcon={<Sparkles className="h-4 w-4" />}>
        Glow AI
      </Button>
      <Button variant="glass">Glass</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};
