import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Design System/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    status: {
      control: "select",
      options: ["online", "offline", "busy", "away"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Fallback: Story = {
  args: {
    fallback: "Natwar Prajapati",
    size: "lg",
    status: "online",
  },
};

export const Image: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    alt: "User Photo",
    size: "xl",
    status: "online",
  },
};

export const Group: Story = {
  render: () => (
    <AvatarGroup max={3}>
      <Avatar fallback="Alex Dev" status="online" />
      <Avatar fallback="Sara Lee" status="busy" />
      <Avatar fallback="John Doe" status="offline" />
      <Avatar fallback="Emma Stone" />
      <Avatar fallback="Rahul Sharma" />
    </AvatarGroup>
  ),
};
