import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./Card";
import { Button } from "../Button";
import { Sparkles, ArrowRight } from "lucide-react";

const meta: Meta<typeof Card> = {
  title: "Design System/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "glass", "elevated", "glow", "interactive"],
    },
    hover: {
      control: "select",
      options: ["none", "lift", "glow", "subtle"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Card {...args} className="w-[380px]">
      <CardHeader>
        <CardTitle>AI Career Analysis</CardTitle>
        <CardDescription>Get personalized recommendations based on your skillset</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          Your profile matches 87% with Senior Frontend Engineer roles in top tech companies.
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="ghost" size="sm">Dismiss</Button>
        <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const Glass: Story = {
  args: {
    variant: "glass",
    hover: "lift",
  },
  render: (args) => (
    <Card {...args} className="w-[380px]">
      <CardHeader>
        <div className="flex items-center gap-2 text-sky-400 mb-1">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs font-semibold uppercase tracking-wider">Premium Feature</span>
        </div>
        <CardTitle>ATS Resume Optimization</CardTitle>
        <CardDescription>Score 90+ on automated recruiter parsing algorithms</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground/80">
          Unlock instant keyword suggestions, layout fixes, and real-time score boosting.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="glow" fullWidth>Optimize Now</Button>
      </CardFooter>
    </Card>
  ),
};
