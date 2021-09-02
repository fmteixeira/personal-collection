import { Meta, Story } from "@storybook/react";
import React from "react";

import { InputText, InputTextProps } from "./InputText";

const meta: Meta = {
  title: "Components/InputText",
  component: InputText,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<InputTextProps> = ({ exampleProp }: InputTextProps) => (
  <InputText exampleProp={exampleProp} />
);

export const Default = Template.bind({});
Default.args = {};
