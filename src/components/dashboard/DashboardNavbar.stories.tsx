import type { Meta, StoryObj } from "@storybook/react";
import DashboardNavbar from "./DashboardNavbar";
import { UserProvider } from "@/contexts/UserContext";

const meta: Meta<typeof DashboardNavbar> = {
  title: "Dashboard/DashboardNavbar",
  component: DashboardNavbar,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      // Mock localStorage user
      localStorage.setItem(
        "user_profile",
        JSON.stringify({
          id: "mock-user-1",
          name: "Natwar Prajapati",
          phone: "+919876543210",
          primary_domain: "Full Stack",
          profile_completion_percentage: 85,
        })
      );
      return (
        <UserProvider>
          <div className="min-h-[200px] w-full min-w-[768px]">
            <Story />
          </div>
        </UserProvider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof DashboardNavbar>;

export const Default: Story = {};
