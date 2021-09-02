import { Meta, Story } from "@storybook/react";
import React from "react";

import { InputFile, InputFileProps } from "./InputFile";

const meta: Meta = {
  title: "Components/InputFile",
  component: InputFile,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<InputFileProps> = ({ exampleProp }: InputFileProps) => (
  <InputFile exampleProp={exampleProp} />
);

export const Default = Template.bind({});
Default.args = {};
