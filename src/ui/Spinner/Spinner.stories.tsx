import type { Meta, StoryObj } from "@storybook/react";
import { Spinner, Skeleton } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Design System/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["default", "xs", "sm", "md", "lg", "xl"],
    },
    variant: {
      control: "select",
      options: ["default", "primary", "secondary", "cyan", "emerald", "muted", "white"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: "md",
    variant: "primary",
    label: "Analyzing your resume...",
  },
};

export const Skeletons: Story = {
  render: () => (
    <div className="space-y-3 w-[320px]">
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-1.5 flex-1">
          <Skeleton className="h-4 w-3/4 rounded-md" />
          <Skeleton className="h-3 w-1/2 rounded-md" />
        </div>
      </div>
      <Skeleton className="h-24 w-full rounded-xl" />
      <Skeleton className="h-10 w-full rounded-xl" />
    </div>
  ),
};
