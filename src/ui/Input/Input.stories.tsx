import type { Meta, StoryObj } from "@storybook/react";
import { Input, SearchInput } from "./Input";
import { Mail, Lock } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "Design System/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Email Address",
    placeholder: "you@example.com",
    helperText: "We will send your career updates here",
    startIcon: <Mail className="w-4 h-4" />,
  },
  render: (args) => (
    <div className="w-[340px]">
      <Input {...args} />
    </div>
  ),
};

export const WithError: Story = {
  args: {
    label: "Phone Number",
    value: "12345",
    error: "Please enter a valid 10-digit phone number",
    startIcon: <Lock className="w-4 h-4" />,
  },
  render: (args) => (
    <div className="w-[340px]">
      <Input {...args} />
    </div>
  ),
};

export const Search: StoryObj<typeof SearchInput> = {
  render: () => (
    <div className="w-[340px]">
      <SearchInput placeholder="Search skills, jobs, resources..." />
    </div>
  ),
};
