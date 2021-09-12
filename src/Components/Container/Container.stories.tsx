import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
// Component

import { Container, Props } from "./Container";

const meta: Meta = {
  title: "Components/Container",
  component: Container,
  decorators: [],
  argTypes: {},
};

// eslint-disable-next-line import/no-default-export
export default meta;

// Component Story
const Template: Story<Props> = ({ name }: Props) => <Container name={name} />;

// Component Props
const props: Props = {
  name: "Container",
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
