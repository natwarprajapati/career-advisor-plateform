import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";
import { Card } from "../Card";

const meta: Meta<typeof Tabs> = {
  title: "Design System/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const DefaultPills: Story = {
  render: () => (
    <div className="w-[420px]">
      <Tabs defaultValue="overview">
        <TabsList variant="pills">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="skills">Skills & Tools</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card variant="glass" className="p-4 mt-2">
            <p className="text-xs text-muted-foreground">
              Candidate overview with primary metrics and summary bio.
            </p>
          </Card>
        </TabsContent>
        <TabsContent value="skills">
          <Card variant="glass" className="p-4 mt-2">
            <p className="text-xs text-muted-foreground">
              Verified skills: React, TypeScript, Node.js, Next.js, TailwindCSS.
            </p>
          </Card>
        </TabsContent>
        <TabsContent value="experience">
          <Card variant="glass" className="p-4 mt-2">
            <p className="text-xs text-muted-foreground">
              3+ years fullstack engineering experience at SaaS startups.
            </p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  ),
};

export const UnderlineVariant: Story = {
  render: () => (
    <div className="w-[420px]">
      <Tabs defaultValue="all">
        <TabsList variant="underline">
          <TabsTrigger value="all" variant="underline">All Jobs (18)</TabsTrigger>
          <TabsTrigger value="saved" variant="underline">Saved (4)</TabsTrigger>
          <TabsTrigger value="applied" variant="underline">Applied (7)</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <p className="text-xs text-muted-foreground pt-2">Listing all matched positions.</p>
        </TabsContent>
        <TabsContent value="saved">
          <p className="text-xs text-muted-foreground pt-2">4 bookmarked positions ready for application.</p>
        </TabsContent>
        <TabsContent value="applied">
          <p className="text-xs text-muted-foreground pt-2">7 applications submitted.</p>
        </TabsContent>
      </Tabs>
    </div>
  ),
};
