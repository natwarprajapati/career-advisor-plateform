import type { Meta, StoryObj } from "@storybook/react";
import { LearnerProgressBadge } from "./LearnerProgressBadge";

const meta: Meta<typeof LearnerProgressBadge> = {
  title: "Design System/LearnerProgressBadge",
  component: LearnerProgressBadge,
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["default", "in-progress", "completed", "disabled"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "card"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof LearnerProgressBadge>;

export const Default: Story = {
  args: {
    status: "default",
    size: "md",
    skillName: "TypeScript Generics & Patterns",
  },
};

export const InProgressCard: Story = {
  args: {
    status: "in-progress",
    size: "card",
    category: "Frontend Architecture",
    skillName: "React 18 Concurrent Features & Server Components",
    progress: 65,
    duration: "2.5 hours",
    interactive: true,
    onStartLearning: () => alert("Start learning clicked"),
  },
  render: (args) => (
    <div className="max-w-xl w-full">
      <LearnerProgressBadge {...args} />
    </div>
  ),
};

export const CompletedCard: Story = {
  args: {
    status: "completed",
    size: "card",
    category: "Backend & Database",
    skillName: "PostgreSQL Indexing & Query Optimization",
    progress: 100,
    duration: "4 hours",
    interactive: true,
  },
  render: (args) => (
    <div className="max-w-xl w-full">
      <LearnerProgressBadge {...args} />
    </div>
  ),
};
