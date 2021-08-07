import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from "@storybook/react/types-6-0";
// Component
import Button, { Props } from "./Button";

export default {
  title: "Button",
  component: Button,
  decorators: [],
  argTypes: {},
} as Meta;

// Component Story
const Template: Story<Props> = ({ exampleProp }: Props) => (
  <Button exampleProp={exampleProp} />
);

// Component Props
const props: Props = {
  exampleProp: "Button",
};

// Component Story Node
export const Default = Template.bind({});
Default.args = props;
Default.parameters = {
  design: {
    type: "figma",
    url: "missing_figma_url", // Figma Url
  },
};
