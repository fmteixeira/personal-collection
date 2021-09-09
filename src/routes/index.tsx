import React from "react";
import { Route, Switch } from "react-router";

import { NewsArticle } from "@/features/NewsArticle";

export const AppRoutes = (): JSX.Element => {
  const test = 123;

  return (
    <Switch>
      <Route path="/about">
        <NewsArticle exampleProp="News Article" />
      </Route>
    </Switch>
  );
};
