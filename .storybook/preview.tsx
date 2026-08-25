import type { Preview } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import "../src/styles/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#080d1a",
        },
        {
          name: "light",
          value: "#f8fafc",
        },
        {
          name: "obsidian",
          value: "#0f172a",
        },
      ],
    },
    layout: "centered",
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals.backgrounds?.value !== "#f8fafc";

      return (
        <MemoryRouter>
          <div className={isDark ? "dark" : ""}>
            <div className="bg-background text-foreground rounded-2xl min-w-[320px] transition-colors font-sans p-4">
              <Story />
            </div>
          </div>
        </MemoryRouter>
      );
    },
  ],
};

export default preview;
