import type { Meta, StoryObj } from "@storybook/react";
import HeroSection from "./HeroSection";
import { UserProvider } from "@/contexts/UserContext";

const meta: Meta<typeof HeroSection> = {
  title: "Landing/HeroSection",
  component: HeroSection,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <UserProvider>
        <div className="w-full min-w-[768px]">
          <Story />
        </div>
      </UserProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {};
