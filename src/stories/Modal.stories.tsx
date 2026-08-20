import type { Meta, StoryObj } from "@storybook/react";
import { expect, within, userEvent } from "@storybook/test";
import { Sparkles } from "lucide-react";
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
  ModalClose,
  Button,
  Input,
} from "../design-system";

const meta: Meta = {
  title: "Design System/Modal",
  tags: ["autodocs"],
};

export default meta;

export const InteractiveModal: StoryObj = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button variant="glow" leftIcon={<Sparkles className="h-4 w-4" />}>
          Optimize Resume for Target Role
        </Button>
      </ModalTrigger>
      <ModalContent size="md">
        <ModalHeader>
          <ModalTitle>AI Resume Optimization</ModalTitle>
          <ModalDescription>
            Enter the job title and company description to analyze keyword coverage and match rates.
          </ModalDescription>
        </ModalHeader>
        <div className="space-y-4 py-2">
          <Input
            label="Target Job Title"
            placeholder="e.g. Senior Frontend Architect"
            defaultValue="Staff Software Engineer"
          />
          <Input
            label="Target Company"
            placeholder="e.g. Stripe, Google, Linear"
            defaultValue="OpenAI"
          />
        </div>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="ghost">Cancel</Button>
          </ModalClose>
          <Button variant="glow">Start Deep Analysis</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /Optimize Resume/i });
    await expect(trigger).toBeInTheDocument();
    await userEvent.click(trigger);
  },
};
