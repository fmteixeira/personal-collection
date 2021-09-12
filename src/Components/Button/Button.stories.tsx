import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";

import { Button, Props } from "@/components/Button";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  decorators: [],
  argTypes: {},
};

// eslint-disable-next-line import/no-default-export
export default meta;

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
