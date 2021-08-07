import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
// Component
import [FTName], { Props } from "./[FTName]";

export default {
  title: "[FTName]",
  component: [FTName],
  decorators: [],
  argTypes: {
  },
} as Meta;

// Component Story
const Template: Story<Props> = ({ exampleProp }: Props) => <[FTName] exampleProp={exampleProp} />;

// Component Props
const props: Props = {
  exampleProp: "[FTName]"
};

// Component Story Node
export const Default = Template.bind({});
Default.args = props;
Default.parameters = {
  design: {
    type: "figma",
    url:
      "missing_figma_url", // Figma Url
  },
};