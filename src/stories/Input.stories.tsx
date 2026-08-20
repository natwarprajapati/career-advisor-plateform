import type { Meta, StoryObj } from "@storybook/react";
import { expect, within, userEvent } from "@storybook/test";
import { Mail, Lock } from "lucide-react";
import { Input, SearchInput } from "../design-system";

const meta: Meta<typeof Input> = {
  title: "Design System/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Target Job Title",
    placeholder: "e.g. Senior Frontend Engineer",
    helperText: "Enter the role you are targeting for ATS optimization",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("e.g. Senior Frontend Engineer");
    await userEvent.type(input, "Full Stack Developer", { delay: 50 });
    await expect(input).toHaveValue("Full Stack Developer");
  },
};

export const WithIcon: Story = {
  args: {
    label: "Email Address",
    placeholder: "you@example.com",
    startIcon: <Mail className="h-4 w-4" />,
  },
};

export const WithError: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "••••••••",
    startIcon: <Lock className="h-4 w-4" />,
    error: "Password must be at least 8 characters long",
  },
};

export const SearchField: Story = {
  render: () => (
    <div className="max-w-md w-full">
      <SearchInput
        placeholder="Search jobs, skills, or mentors..."
        onSearchChange={(val) => console.log("Searching for:", val)}
      />
    </div>
  ),
};
