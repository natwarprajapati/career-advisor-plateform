import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./Modal";
import { Button } from "../Button";
import { Sparkles } from "lucide-react";

const meta: Meta<typeof Dialog> = {
  title: "Design System/Modal",
  component: Dialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary" leftIcon={<Sparkles className="w-4 h-4" />}>
          Open AI Modal
        </Button>
      </DialogTrigger>
      <DialogContent size="md">
        <DialogHeader>
          <DialogTitle>AI Skill Gap Recommendation</DialogTitle>
          <DialogDescription>
            Based on current market trends, here is your customized 3-week study roadmap.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-3">
          <div className="p-3 bg-muted/40 rounded-xl text-xs space-y-1">
            <span className="font-semibold text-foreground">Week 1: System Design</span>
            <p className="text-muted-foreground">Caching strategies, microservices architecture, and load balancers.</p>
          </div>
          <div className="p-3 bg-muted/40 rounded-xl text-xs space-y-1">
            <span className="font-semibold text-foreground">Week 2: Advanced TypeScript</span>
            <p className="text-muted-foreground">Conditional types, infer keyword, and AST transformers.</p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" size="sm">Cancel</Button>
          <Button variant="primary" size="sm">Save Roadmap</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
