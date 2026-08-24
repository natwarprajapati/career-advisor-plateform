import type { Meta, StoryObj } from "@storybook/react";
import LandingNavbar from "./LandingNavbar";
import { UserProvider } from "@/contexts/UserContext";

const meta: Meta<typeof LandingNavbar> = {
  title: "Landing/LandingNavbar",
  component: LandingNavbar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <UserProvider>
        <div className="w-full min-w-[768px] min-h-[140px]">
          <Story />
        </div>
      </UserProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LandingNavbar>;

export const Default: Story = {};
