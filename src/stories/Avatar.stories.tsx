import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup } from "../design-system";

const meta: Meta<typeof Avatar> = {
  title: "Design System/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
    },
    status: {
      control: "select",
      options: ["online", "offline", "busy", "away"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    fallback: "Alex Morgan",
    size: "lg",
    status: "online",
  },
};

export const AvatarStack: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-4">
      <AvatarGroup max={4}>
        <Avatar fallback="Sarah Connor" status="online" />
        <Avatar fallback="John Doe" status="online" />
        <Avatar fallback="Emily Watson" status="busy" />
        <Avatar fallback="David Miller" status="offline" />
        <Avatar fallback="Alex Vance" />
        <Avatar fallback="Bruce Wayne" />
      </AvatarGroup>
    </div>
  ),
};
