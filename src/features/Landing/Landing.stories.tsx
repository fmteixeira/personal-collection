import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
// Component

import { Landing } from "./Landing";

export default {
  title: "Landing",
  component: Landing,
  decorators: [],
  argTypes: {},
} as Meta;

// Component Story
const Template: Story = () => <Landing />;

// Component Story Node
export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: "figma",
    url: "missing_figma_url", // Figma Url
  },
};
