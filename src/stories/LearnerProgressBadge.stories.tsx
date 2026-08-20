import type { Meta, StoryObj } from "@storybook/react";
import { expect, within, userEvent } from "@storybook/test";
import React, { useState } from "react";
import { LearnerProgressBadge, type LearnerStatus } from "../design-system";

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
    progress: {
      control: { type: "range", min: 0, max: 100, step: 5 },
    },
    skillName: { control: "text" },
    category: { control: "text" },
    duration: { control: "text" },
    interactive: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof LearnerProgressBadge>;

// State 1: Default (Upcoming / Ready to Learn)
export const Default: Story = {
  args: {
    status: "default",
    size: "card",
    skillName: "TypeScript Generics & Utility Types",
    category: "Frontend Mastery",
    duration: "4 hours",
    interactive: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Ready to Learn")).toBeInTheDocument();
    await expect(canvas.getByText("TypeScript Generics & Utility Types")).toBeInTheDocument();
  },
};

// State 2: In-Progress (Active learning with progress bar & animated glow)
export const InProgress: Story = {
  args: {
    status: "in-progress",
    size: "card",
    skillName: "Next.js App Router & Server Components",
    category: "Full Stack Architecture",
    progress: 65,
    duration: "6 hours remaining",
    interactive: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("65% In Progress")).toBeInTheDocument();
  },
};

// State 3: Completed (Verified & Mastered badge with checkmark)
export const Completed: Story = {
  args: {
    status: "completed",
    size: "card",
    skillName: "REST & GraphQL API Architecture",
    category: "Backend Services",
    progress: 100,
    duration: "Completed on Aug 18",
    interactive: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Mastered & Verified")).toBeInTheDocument();
  },
};

// State 4: Disabled (Prerequisites locked)
export const Disabled: Story = {
  args: {
    status: "disabled",
    size: "card",
    skillName: "Kubernetes Microservices Deployment",
    category: "DevOps & Cloud",
    duration: "Requires Docker Mastery",
    interactive: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Prerequisites Locked")).toBeInTheDocument();
  },
};

// Compact Badge All States Matrix
export const AllBadgeStatesMatrix: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center p-4 max-w-2xl">
      <LearnerProgressBadge
        status="default"
        size="md"
        skillName="React Hooks"
      />
      <LearnerProgressBadge
        status="in-progress"
        size="md"
        skillName="TypeScript"
        progress={45}
      />
      <LearnerProgressBadge
        status="completed"
        size="md"
        skillName="Tailwind CSS"
      />
      <LearnerProgressBadge
        status="disabled"
        size="md"
        skillName="AWS Lambda"
      />
    </div>
  ),
};

// Interactive Learner Skill Roadmap Track (Simulating User Progress State Hook)
export const InteractiveLearnerRoadmap: Story = {
  render: () => {
    const RoadmapComponent = () => {
      const [skills, setSkills] = useState<
        Array<{
          id: string;
          name: string;
          cat: string;
          status: LearnerStatus;
          progress: number;
          dur: string;
        }>
      >([
        {
          id: "1",
          name: "React 18 & Concurrent Features",
          cat: "Core Frontend",
          status: "completed",
          progress: 100,
          dur: "Verified",
        },
        {
          id: "2",
          name: "Tailwind CSS & Design Tokens Studio",
          cat: "UI Engineering",
          status: "in-progress",
          progress: 80,
          dur: "1 module left",
        },
        {
          id: "3",
          name: "State Management with Zustand & React Query",
          cat: "State Architecture",
          status: "default",
          progress: 0,
          dur: "3 hours",
        },
        {
          id: "4",
          name: "Micro-Frontend Orchestration",
          cat: "Advanced System Design",
          status: "disabled",
          progress: 0,
          dur: "Prerequisites locked",
        },
      ]);

      const advanceSkill = (id: string) => {
        setSkills((prev) =>
          prev.map((s) => {
            if (s.id !== id) return s;
            if (s.status === "default") {
              return { ...s, status: "in-progress", progress: 25 };
            }
            if (s.status === "in-progress") {
              if (s.progress < 75) return { ...s, progress: s.progress + 25 };
              return { ...s, status: "completed", progress: 100, dur: "Verified" };
            }
            return s;
          })
        );
      };

      return (
        <div className="space-y-4 max-w-xl w-full p-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-extrabold text-foreground text-lg">
                Frontend Architect Learning Track
              </h3>
              <p className="text-xs text-muted-foreground">
                Click an active card below to simulate interactive learner progress updates.
              </p>
            </div>
          </div>

          {skills.map((skill) => (
            <LearnerProgressBadge
              key={skill.id}
              status={skill.status}
              size="card"
              skillName={skill.name}
              category={skill.cat}
              progress={skill.progress}
              duration={skill.dur}
              interactive={skill.status !== "disabled"}
              onStartLearning={() => advanceSkill(skill.id)}
            />
          ))}
        </div>
      );
    };

    return <RoadmapComponent />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inProgressBadge = canvas.getByText("Tailwind CSS & Design Tokens Studio");
    await userEvent.click(inProgressBadge);
  },
};
