import { Meta, Story } from "@storybook/react";
import React from "react";

import { NewsArticle, NewsArticleProps } from "./NewsArticle";

const meta: Meta = {
  title: "Components/NewsArticle",
  component: NewsArticle,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<NewsArticleProps> = ({ exampleProp }: NewsArticleProps) => (
  <NewsArticle exampleProp={exampleProp} />
);

export const Default = Template.bind({});
Default.args = {};
