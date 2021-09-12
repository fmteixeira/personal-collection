import { Meta, Story } from "@storybook/react";
import React from "react";
import { MemoryRouter, Route } from "react-router-dom";

import { NewsArticle, NewsArticleProps } from "./NewsArticle";

import { routes } from "@/routes/paths";

const meta: Meta = {
  title: "Features/NewsArticle",
  component: NewsArticle,
  parameters: {
    controls: { expanded: true },
  },
};

// eslint-disable-next-line import/no-default-export
export default meta;

const Template: Story<NewsArticleProps> = ({
  exampleProp,
}: NewsArticleProps) => (
  <MemoryRouter initialEntries={[routes.news.getRoute("primeiro-projeto")]}>
    <Route
      component={() => <NewsArticle exampleProp={exampleProp} />}
      path={routes.news.route}
    />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {};
