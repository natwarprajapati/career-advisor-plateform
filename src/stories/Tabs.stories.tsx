import type { Meta, StoryObj } from "@storybook/react";
import { expect, within, userEvent } from "@storybook/test";
import { Tabs, TabsList, TabsTrigger, TabsContent, Card, CardContent } from "../design-system";

const meta: Meta = {
  title: "Design System/Tabs",
  tags: ["autodocs"],
};

export default meta;

export const PillsTabs: StoryObj = {
  render: () => (
    <div className="max-w-md w-full">
      <Tabs defaultValue="created">
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="created">Created Resumes (3)</TabsTrigger>
          <TabsTrigger value="uploaded">Uploaded PDFs (5)</TabsTrigger>
        </TabsList>
        <TabsContent value="created">
          <Card variant="glass" className="p-4 mt-3">
            <p className="text-xs font-semibold text-foreground">Interactive Builder Drafts</p>
            <p className="text-xs text-muted-foreground mt-1">
              3 active ATS resume versions saved in local database.
            </p>
          </Card>
        </TabsContent>
        <TabsContent value="uploaded">
          <Card variant="glass" className="p-4 mt-3">
            <p className="text-xs font-semibold text-foreground">Scanned PDF Files</p>
            <p className="text-xs text-muted-foreground mt-1">
              5 scanned PDFs with detailed keyword diagnostics.
            </p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const uploadedTab = canvas.getByRole("tab", { name: /Uploaded PDFs/i });
    await userEvent.click(uploadedTab);
    await expect(canvas.getByText(/Scanned PDF Files/i)).toBeInTheDocument();
  },
};
