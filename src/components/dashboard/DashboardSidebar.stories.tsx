import type { Meta, StoryObj } from "@storybook/react";
import DashboardSidebar from "./DashboardSidebar";

const meta: Meta<typeof DashboardSidebar> = {
  title: "Dashboard/DashboardSidebar",
  component: DashboardSidebar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DashboardSidebar>;

export const Default: Story = {
  render: () => (
    <div className="h-[600px] flex bg-background border border-border/60 rounded-2xl overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 p-6 text-muted-foreground text-sm">
        <h2 className="text-lg font-bold text-foreground mb-2">Dashboard Main Content Area</h2>
        <p>Interactive sidebar with collapsible tree view and animated navigation indicators.</p>
      </div>
    </div>
  ),
};
