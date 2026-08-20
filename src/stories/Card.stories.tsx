import type { Meta, StoryObj } from "@storybook/react";
import { Sparkles, ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Badge,
} from "../design-system";

const meta: Meta<typeof Card> = {
  title: "Design System/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "glass", "glow", "flat"],
    },
    hover: {
      control: "select",
      options: ["none", "lift", "glow", "scale"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const GlassCard: Story = {
  render: (args) => (
    <Card {...args} className="max-w-md w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="glow" icon={<Sparkles className="h-3 w-3" />}>
            AI Recommended
          </Badge>
          <span className="text-xs text-muted-foreground">Updated 2h ago</span>
        </div>
        <CardTitle className="mt-2">Senior Full Stack Engineer</CardTitle>
        <CardDescription>
          Acme Corp • San Francisco, CA (Remote Friendly)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground line-clamp-2">
          Seeking an experienced React & Node.js architect with experience building scalable, high-throughput cloud single-page applications.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="secondary" size="sm">React</Badge>
          <Badge variant="secondary" size="sm">TypeScript</Badge>
          <Badge variant="secondary" size="sm">Node.js</Badge>
          <Badge variant="secondary" size="sm">Supabase</Badge>
        </div>
      </CardContent>
      <CardFooter className="justify-between pt-4">
        <span className="text-sm font-extrabold text-foreground">$140k - $180k/yr</span>
        <Button variant="glow" size="sm" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  ),
  args: {
    variant: "glow",
    hover: "lift",
  },
};
